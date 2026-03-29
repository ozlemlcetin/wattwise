export type UtilityType = "electricity" | "water";

export type BuildingStatus = "active" | "warning" | "alert" | "inactive";

export interface Building {
  id: string;
  name: string;
  type: "dormitory" | "student_residence" | "hostel" | "campus_housing";
  occupancy: number;
  maxOccupancy: number;
  floors: number;
  units: number;
  uploadStatus: "healthy" | "warning" | "missing";
  lastUpload: string;
  savingsTrend: number; // percent vs baseline
  anomalyCount: number;
  reportStatus: "ready" | "pending" | "overdue";
  location: string;
  electricityBaseline: number; // kWh/month
  waterBaseline: number; // m³/month
}

export interface MonthlyMetric {
  month: string;
  electricity: number;
  water: number;
  baseline_electricity: number;
  baseline_water: number;
  occupancy: number;
}

export interface Alert {
  id: string;
  buildingId: string;
  buildingName: string;
  type: "spike" | "anomaly" | "missing_data" | "gaming_risk";
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
  timestamp: string;
  status: "open" | "investigating" | "resolved";
  magnitude?: number; // % above baseline
}

export interface UploadRecord {
  id: string;
  buildingId: string;
  buildingName: string;
  filename: string;
  uploadedAt: string;
  rowsImported: number;
  status: "success" | "partial" | "failed";
  issues: string[];
  period: string;
}

export interface Report {
  id: string;
  buildingId: string | null;
  buildingName: string;
  type: "monthly" | "quarterly" | "annual" | "esg";
  period: string;
  generatedAt: string | null;
  status: "ready" | "generating" | "scheduled";
  savingsKwh?: number;
  savingsM3?: number;
  savingsCO2?: number;
}

export interface IncentiveTier {
  id: string;
  name: string;
  threshold: number; // % below baseline
  reward: string;
  description: string;
  activeCount: number;
  totalEligible: number;
}

export interface CoachCampaign {
  id: string;
  name: string;
  type: "standby" | "thermostat" | "shifting" | "general";
  status: "active" | "paused" | "draft";
  buildingIds: string[];
  messageSent: number;
  openRate: number;
  targetedSegment: string;
  lastRun: string;
}

export interface KpiCard {
  title: string;
  value: string;
  change: number;
  unit: string;
  icon: string;
  trend: "up" | "down" | "neutral";
  positiveIsUp: boolean;
}
