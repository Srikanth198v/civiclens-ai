import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createReport, getPreferences, getReports, savePreferences } from './reportService';

const reportKey = 'civiclens.demo.reports.v1';
const prefKey = 'civiclens.demo.preferences.v1';

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

describe('local demo data service', () => {
  it('provides clearly labelled seeded sample records', () => {
    const reports = getReports();
    expect(reports.length).toBeGreaterThan(0);
    expect(reports.every((report) => report.demo)).toBe(true);
    expect(reports[0].location.latitude).toBeTypeOf('number');
  });

  it('saves a new report only in local demo storage', async () => {
    vi.spyOn(window, 'setTimeout').mockImplementation((fn) => { if (typeof fn === 'function') fn(); return 0; });
    const report = await createReport({
      title: 'Test footpath damage', description: 'A broken footpath near the corner needs attention.',
      category: 'public_infrastructure', location: { label: 'Selected location', latitude: 17.4, longitude: 78.4 },
    });
    expect(report.demo).toBe(false);
    expect(report.activities[0].detail).toContain('not a government submission');
    expect(JSON.parse(localStorage.getItem(reportKey) ?? '[]')).toHaveLength(1);
    expect(getReports().some((item) => item.id === report.id)).toBe(true);
  });

  it('persists display and notification preferences separately', () => {
    savePreferences({ theme: 'dark', notifications: false });
    expect(getPreferences()).toEqual({ theme: 'dark', notifications: false });
    expect(localStorage.getItem(prefKey)).not.toBeNull();
    expect(localStorage.getItem(reportKey)).toBeNull();
  });

  it('falls back safely on malformed stored data', () => {
    localStorage.setItem(reportKey, '{bad json');
    localStorage.setItem(prefKey, '{bad json');
    expect(getReports().every((report) => report.demo)).toBe(true);
    expect(getPreferences()).toEqual({ theme: 'light', notifications: true });
  });
});
