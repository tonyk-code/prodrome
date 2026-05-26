import { type DemoScenario } from "../types";

export const judgeDemoScenario: DemoScenario = {
  id: "judge-burnout-track",
  name: "Standard Burnout Projection",
  description:
    "Simulates a typical tech-worker profile undergoing high-velocity behavioral decline over 5 days.",
  riskScore: 82,
  riskLevel: "High",
  predictedWindow: "5-7 days",
  warnings: [
    "Sleep duration dropped for five consecutive days.",
    "Screen time increased by 65% over baseline.",
    "Physical activity dropped by 40%.",
  ],
  metrics: [
    {
      day: "Mon",
      sleepHours: 8.0,
      screenTime: 3.0,
      activitySteps: 7000,
      stressLevel: 2,
      moodLevel: 4,
    },
    {
      day: "Tue",
      sleepHours: 7.5,
      screenTime: 4.0,
      activitySteps: 6000,
      stressLevel: 3,
      moodLevel: 4,
    },
    {
      day: "Wed",
      sleepHours: 6.0,
      screenTime: 5.0,
      activitySteps: 5000,
      stressLevel: 4,
      moodLevel: 3,
    },
    {
      day: "Thu",
      sleepHours: 5.0,
      screenTime: 7.0,
      activitySteps: 4000,
      stressLevel: 5,
      moodLevel: 2,
    },
    {
      day: "Fri",
      sleepHours: 4.5,
      screenTime: 9.0,
      activitySteps: 2000,
      stressLevel: 5,
      moodLevel: 1,
    },
  ],
};
