import type { CivicReport, CivicUser, ReportDraft } from '../types/report';
import { CATEGORY_LABELS } from '../types/report';

const REPORTS_KEY = 'civiclens.demo.reports.v1';
const PREFS_KEY = 'civiclens.demo.preferences.v1';
export type DemoPreferences = { theme: 'light' | 'dark'; notifications: boolean };
const now = new Date();
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000).toISOString();
const sample = (id: string, category: CivicReport['category'], title: string, description: string, label: string, latitude: number, longitude: number, status: CivicReport['status'], days: number): CivicReport => ({
  id, category, title, description, location: { label, latitude, longitude }, status, createdAt: daysAgo(days), updatedAt: daysAgo(Math.max(0, days - 1)), demo: true,
  activities: [{ id: `${id}-created`, label: 'Report added to local demo', detail: 'Sample data only. No authority has been notified.', at: daysAgo(days) }],
});
export const DEMO_USER: CivicUser = { id: 'demo-resident', displayName: 'Demo resident', email: 'Profile placeholder', createdAt: daysAgo(90) };
const seedReports: CivicReport[] = [
  sample('CL-2048', 'road_damage', 'Pothole near the bus stop', 'A large pothole has formed beside the bus stop and may be difficult to see after dark.', 'Banjara Hills, Hyderabad', 17.4156, 78.4347, 'in_progress', 2),
  sample('CL-2047', 'waste_management', 'Waste collection needed', 'Several bags have been left beside the community park entrance.', 'Jubilee Hills, Hyderabad', 17.4312, 78.4078, 'pending', 4),
  sample('CL-2046', 'streetlight', 'Streetlight is not working', 'The lamp on this corner has been out for a few evenings.', 'Masab Tank, Hyderabad', 17.3984, 78.4573, 'resolved', 8),
  sample('CL-2045', 'water_supply', 'Water pooling on the footpath', 'Water is pooling near the crossing. Cause has not been verified.', 'Lakdikapul, Hyderabad', 17.4023, 78.4636, 'pending', 1),
  sample('CL-2044', 'drainage_sewage', 'Drain cover appears damaged', 'A drain cover is loose near the market lane. Please use caution.', 'Himayatnagar, Hyderabad', 17.4065, 78.4772, 'in_progress', 6),
  sample('CL-2043', 'public_infrastructure', 'Damaged public bench', 'One of the park benches appears damaged and may need repair.', 'KBR Park, Hyderabad', 17.4239, 78.4167, 'pending', 3),
];
export function getReports(): CivicReport[] {
  try {
    const stored = localStorage.getItem(REPORTS_KEY);
    if (!stored) return seedReports;
    const parsed: unknown = JSON.parse(stored);
    return Array.isArray(parsed) ? [...parsed as CivicReport[], ...seedReports] : seedReports;
  } catch { return seedReports; }
}
export async function createReport(draft: ReportDraft): Promise<CivicReport> {
  await new Promise((resolve) => window.setTimeout(resolve, 550));
  const report: CivicReport = {
    ...draft, id: `CL-${Math.floor(1000 + Math.random() * 9000)}`, status: 'pending', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), demo: false,
    activities: [{ id: `activity-${Date.now()}`, label: 'Saved to this browser', detail: 'This is a local demo receipt, not a government submission.', at: new Date().toISOString() }],
  };
  const previous = readLocalReports();
  localStorage.setItem(REPORTS_KEY, JSON.stringify([report, ...previous]));
  return report;
}
export function getPreferences(): DemoPreferences {
  try { const value = JSON.parse(localStorage.getItem(PREFS_KEY) ?? '{}') as Partial<DemoPreferences>; return { theme: value.theme === 'dark' ? 'dark' : 'light', notifications: value.notifications ?? true }; } catch { return { theme: 'light', notifications: true }; }
}
export function savePreferences(prefs: DemoPreferences): void { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); }
function readLocalReports(): CivicReport[] {
  try { const value: unknown = JSON.parse(localStorage.getItem(REPORTS_KEY) ?? '[]'); return Array.isArray(value) ? value as CivicReport[] : []; } catch { return []; }
}
export function categoryLabel(category: CivicReport['category']): string { return CATEGORY_LABELS[category]; }
