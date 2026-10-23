import { describe, expect, it } from 'vitest';
import { compareFeieFtc, FEIE_LIMITS, physicalPresence } from './expat';
import { _resetForTests, alreadyProcessed } from './idempotency';

describe('physicalPresence', () => {
  it('qualifies at exactly 330 foreign days (35 days outside)', () => {
    const r = physicalPresence(35);
    expect(r.foreignDays).toBe(330);
    expect(r.qualifies).toBe(true);
    expect(r.daysShort).toBe(0);
  });
  it('fails at 329 foreign days', () => {
    const r = physicalPresence(36);
    expect(r.qualifies).toBe(false);
    expect(r.daysShort).toBe(1);
  });
  it('clamps and sanitizes input', () => {
    expect(physicalPresence(-5).foreignDays).toBe(365);
    expect(physicalPresence(999).foreignDays).toBe(0);
    expect(physicalPresence(NaN).foreignDays).toBe(365);
    expect(physicalPresence(10.9).foreignDays).toBe(355);
  });
});

describe('FEIE limits', () => {
  it('has IRS amounts for 2025 and 2026', () => {
    expect(FEIE_LIMITS[2025]).toBe(130000);
    expect(FEIE_LIMITS[2026]).toBe(132900);
  });
});

describe('compareFeieFtc', () => {
  const base = { year: 2026, foreignTaxPaid: 0, usEffectiveRatePct: 20, qualifiesForFeie: true };

  it('FEIE wins when foreign tax is low', () => {
    const r = compareFeieFtc({ ...base, foreignEarnedIncome: 100000 });
    expect(r.feieAvailable).toBe(true);
    expect(r.excluded).toBe(100000);
    expect(r.usTaxWithFeie).toBe(0);
    expect(r.usTaxWithFtc).toBe(20000);
    expect(r.better).toBe('FEIE');
  });
  it('income above the limit leaves taxable remainder', () => {
    const r = compareFeieFtc({ ...base, foreignEarnedIncome: 200000 });
    expect(r.excluded).toBe(132900);
    expect(r.usTaxWithFeie).toBeCloseTo((200000 - 132900) * 0.2, 2);
  });
  it('FTC wins/ties when foreign tax exceeds US tax', () => {
    const r = compareFeieFtc({ ...base, foreignEarnedIncome: 100000, foreignTaxPaid: 40000 });
    expect(r.usTaxWithFtc).toBe(0);
    expect(r.better).toBe('EQUAL');
  });
  it('FTC wins for high earner with high foreign tax', () => {
    const r = compareFeieFtc({ ...base, foreignEarnedIncome: 300000, foreignTaxPaid: 100000, usEffectiveRatePct: 35 });
    expect(r.usTaxWithFtc).toBe(5000);
    expect(r.usTaxWithFeie).toBeCloseTo((300000 - 132900) * 0.35, 2);
    expect(r.better).toBe('FTC');
  });
  it('FEIE unavailable when test not met', () => {
    const r = compareFeieFtc({ ...base, foreignEarnedIncome: 100000, qualifiesForFeie: false });
    expect(r.feieAvailable).toBe(false);
    expect(r.better).toBe('FTC');
  });
  it('FEIE unavailable for unknown year', () => {
    const r = compareFeieFtc({ ...base, year: 1999, foreignEarnedIncome: 100000 });
    expect(r.feieAvailable).toBe(false);
  });
  it('handles zero, negative, NaN and out-of-range rate', () => {
    expect(compareFeieFtc({ ...base, foreignEarnedIncome: 0 }).usTaxWithFtc).toBe(0);
    expect(compareFeieFtc({ ...base, foreignEarnedIncome: -5 }).usTaxWithFtc).toBe(0);
    expect(compareFeieFtc({ ...base, foreignEarnedIncome: NaN }).usTaxWithFtc).toBe(0);
    expect(compareFeieFtc({ ...base, foreignEarnedIncome: 1000, usEffectiveRatePct: 500 }).usTaxWithFtc).toBe(600);
  });
});

describe('alreadyProcessed', () => {
  it('flags duplicates only on second sight', () => {
    _resetForTests();
    expect(alreadyProcessed('evt_1')).toBe(false);
    expect(alreadyProcessed('evt_1')).toBe(true);
    expect(alreadyProcessed('evt_2')).toBe(false);
  });
});
