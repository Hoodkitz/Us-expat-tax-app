// Minimal in-memory guard against processing the same Stripe event twice.
// LIMITS: state lives only in this server process. It is lost on restart/
// redeploy and is NOT shared across serverless instances, so duplicates can
// still occur. Before granting real access, persist processed event IDs in a
// database with a unique constraint (and rely on Stripe's retry semantics).
const MAX = 1000;
const seen = new Set<string>();

/** Returns true if the id was already seen; otherwise records it and returns false. */
export function alreadyProcessed(eventId: string): boolean {
  if (seen.has(eventId)) return true;
  seen.add(eventId);
  if (seen.size > MAX) {
    const oldest = seen.values().next().value;
    if (oldest !== undefined) seen.delete(oldest);
  }
  return false;
}

export function _resetForTests() {
  seen.clear();
}
