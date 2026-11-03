export type IssueCategory =
  | 'road_damage'
  | 'waste_management'
  | 'water_supply'
  | 'drainage_sewage'
  | 'streetlight'
  | 'public_infrastructure';

export type CivicReportDraft = {
  description: string;
  category?: IssueCategory;
  imageFiles?: File[];
  location?: { latitude: number; longitude: number };
};
