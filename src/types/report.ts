export type ReportCategory = 'road_damage' | 'waste_management' | 'water_supply' | 'drainage_sewage' | 'streetlight' | 'public_infrastructure';
export type ReportStatus = 'pending' | 'in_progress' | 'resolved';
export type ReportLocation = { label: string; latitude: number; longitude: number };
export type ReportActivity = { id: string; label: string; detail: string; at: string };
export type CivicUser = { id: string; displayName: string; email: string; createdAt: string };
export type CivicReport = {
  id: string; title: string; description: string; category: ReportCategory; status: ReportStatus;
  location: ReportLocation; createdAt: string; updatedAt: string; imageDataUrl?: string;
  activities: ReportActivity[]; demo: boolean;
};
export type ReportDraft = Pick<CivicReport, 'title' | 'description' | 'category' | 'location'> & { imageDataUrl?: string };
export const CATEGORY_LABELS: Record<ReportCategory, string> = {
  road_damage: 'Road damage and potholes', waste_management: 'Garbage and waste management', water_supply: 'Water supply',
  drainage_sewage: 'Drainage and sewage', streetlight: 'Streetlights', public_infrastructure: 'Public infrastructure',
};
export const STATUS_LABELS: Record<ReportStatus, string> = { pending: 'Pending', in_progress: 'In progress', resolved: 'Resolved' };
