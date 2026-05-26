import { type MockDayMetric } from "../types";

export function calculateLiveDemoScore(metrics: MockDayMetric[]): number {
  if (metrics.length < 2) return 0;

  const current = metrics[metrics.length - 1];
  const firstDay = metrics[0];

  // 1. Sleep Debt (Recommended 8h - Actual)
  const sleepDebt = Math.max(0, 8 - current.sleepHours); // range approx 0 to 4

  // 2. Screen Spike (Current / Initial baseline)
  const screenSpike = current.screenTime / (firstDay.screenTime || 1); // scale factor around 1 to 3

  // 3. Stress normalization (1-5 scaled up)
  const stressFactor = current.stressLevel; // 1 to 5

  // 4. Activity Drop percentage
  const activityDrop = Math.max(
    0,
    (firstDay.activitySteps - current.activitySteps) / firstDay.activitySteps,
  ); // 0 to 1

  // Weighted calculation elements scaled out to standard index variables
  const rawScore =
    0.4 * (sleepDebt * 20) +
    0.3 * (screenSpike * 25) +
    0.2 * (stressFactor * 20) +
    0.1 * (activityDrop * 100);

  return Math.min(100, Math.round(rawScore));
}
