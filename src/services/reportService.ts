import type { CivicReportDraft } from '../types/report';

/**
 * Integration boundary reserved for a future trusted API.
 * No report submission or persistence is implemented in this foundation.
 */
export async function submitReport(_draft: CivicReportDraft): Promise<never> {
  throw new Error('Report submission is not available in this project foundation.');
}
