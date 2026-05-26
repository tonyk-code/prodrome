export interface MockDayMetric {
  day: string;
  sleepHours: number;
  screenTime: number;
  activitySteps: number;
  stressLevel: number; // 1-5
  moodLevel: number; // 1-5
}

export interface DemoScenario {
  id: string;
  name: string;
  description: string;
  riskScore: number;
  riskLevel: "Low" | "Moderate" | "High";
  predictedWindow: string;
  warnings: string[];
  metrics: MockDayMetric[];
}