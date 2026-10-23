// Plain TS logic for the free Physical Presence / FEIE vs FTC mini calculator.
// Simplified, informational only. Figures must be re-checked against IRS
// sources every year (Rev. Proc. / Form 2555 instructions).

// FEIE maximum exclusion by tax year. Verify against IRS before adding years.
// Source (2025 and 2026):
// https://www.irs.gov/individuals/international-taxpayers/figuring-the-foreign-earned-income-exclusion
// (checked 2026-10-23: 2026 = $132,900, 2025 = $130,000)
export const FEIE_LIMITS: Record<number, number> = {
  2024: 126500,
  2025: 130000,
  2026: 132900,
};

export const PHYSICAL_PRESENCE_MIN_DAYS = 330;
export const DAYS_IN_PERIOD = 365;

export interface PresenceResult {
  foreignDays: number;
  qualifies: boolean;
  daysShort: number;
  maxDaysOutsideForeign: number;
}

/** daysNotInForeignCountry = days in the US or international waters etc. within a 12-month period. */
export function physicalPresence(daysNotInForeignCountry: number): PresenceResult {
  const out = clampInt(daysNotInForeignCountry, 0, DAYS_IN_PERIOD);
  const foreignDays = DAYS_IN_PERIOD - out;
  return {
    foreignDays,
    qualifies: foreignDays >= PHYSICAL_PRESENCE_MIN_DAYS,
    daysShort: Math.max(0, PHYSICAL_PRESENCE_MIN_DAYS - foreignDays),
    maxDaysOutsideForeign: DAYS_IN_PERIOD - PHYSICAL_PRESENCE_MIN_DAYS,
  };
}

export interface CompareInput {
  year: number;
  foreignEarnedIncome: number; // USD
  foreignTaxPaid: number; // USD
  usEffectiveRatePct: number; // rough US rate on this income, 0-60
  qualifiesForFeie: boolean;
}

export interface CompareResult {
  feieAvailable: boolean;
  excluded: number;
  usTaxWithFeie: number;
  usTaxWithFtc: number;
  better: 'FEIE' | 'FTC' | 'EQUAL';
  difference: number;
}

export function compareFeieFtc(i: CompareInput): CompareResult {
  const income = Math.max(0, i.foreignEarnedIncome || 0);
  const foreignTax = Math.max(0, i.foreignTaxPaid || 0);
  const rate = Math.min(60, Math.max(0, i.usEffectiveRatePct || 0)) / 100;
  const limit = FEIE_LIMITS[i.year] ?? 0;

  const usTaxBefore = income * rate;
  const usTaxWithFtc = round2(Math.max(0, usTaxBefore - Math.min(foreignTax, usTaxBefore)));

  if (!i.qualifiesForFeie || limit === 0) {
    return { feieAvailable: false, excluded: 0, usTaxWithFeie: usTaxBefore, usTaxWithFtc, better: 'FTC', difference: 0 };
  }
  const excluded = Math.min(income, limit);
  // Simplification: no stacking of remaining income on top of excluded amount.
  const usTaxWithFeie = round2((income - excluded) * rate);
  const diff = round2(Math.abs(usTaxWithFeie - usTaxWithFtc));
  const better = diff < 0.5 ? 'EQUAL' : usTaxWithFeie < usTaxWithFtc ? 'FEIE' : 'FTC';
  return { feieAvailable: true, excluded, usTaxWithFeie, usTaxWithFtc, better, difference: diff };
}

function clampInt(n: number, lo: number, hi: number) {
  const v = Math.floor(Number.isFinite(n) ? n : 0);
  return Math.min(hi, Math.max(lo, v));
}
function round2(n: number) {
  return Math.round(n * 100) / 100;
}
