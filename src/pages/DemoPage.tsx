import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { judgeDemoScenario } from "../data/predictionMock";
import { type MockDayMetric } from "../types";
import { calculateLiveDemoScore } from "../lib/burnoutEngine";

export const DemoPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeMetrics, setActiveMetrics] = useState<MockDayMetric[]>(
    judgeDemoScenario.metrics,
  );

  const currentRiskScore = calculateLiveDemoScore(activeMetrics);
  const latestMetric = activeMetrics[activeMetrics.length - 1];

  // Helper colors mirroring Apple-health indicators
  const getRiskColor = (score: number) => {
    if (score <= 30) return "text-green-500 bg-green-50 border-green-100";
    if (score <= 70) return "text-amber-500 bg-amber-50 border-amber-100";
    return "text-red-500 bg-red-50 border-red-100";
  };

  // Simulates a manual modification to prove functionality reactively
  const simulateRecovery = () => {
    const recoveredWeek: MockDayMetric[] = [
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
        sleepHours: 8.2,
        screenTime: 2.5,
        activitySteps: 8500,
        stressLevel: 1,
        moodLevel: 5,
      },
      {
        day: "Wed",
        sleepHours: 7.8,
        screenTime: 3.2,
        activitySteps: 9000,
        stressLevel: 2,
        moodLevel: 4,
      },
    ];
    setActiveMetrics(recoveredWeek);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans pb-16">
      {/* Sandbox Judge Notification Banner */}
      <div className="bg-[#1d1d1f] text-white px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between text-sm gap-3">
        <div className="flex items-center gap-2">
          <span className="bg-[#0066cc] text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
            Demo Mode
          </span>
          <p className="text-[#86868b]">
            Reviewing preloaded behavior telemetry tracking. No account
            registration required.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={simulateRecovery}
            className="text-xs bg-[#272729] hover:bg-[#3a3a3c] transition text-white px-3 py-1.5 rounded-lg border border-[#3a3a3c]"
          >
            Simulate Interventions (Drop Risk)
          </button>
          <button
            onClick={() => setActiveMetrics(judgeDemoScenario.metrics)}
            className="text-xs bg-transparent hover:underline text-[#0066cc]"
          >
            Reset Set
          </button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/signup")}
            className="text-xs"
          >
            Exit Demo & Sign Up
          </Button>
        </div>
      </div>

      {/* Workspace Header */}
      <header className="max-w-6xl mx-auto px-6 pt-10 pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Diagnostic Workspace
          </h1>
          <p className="text-sm text-[#86868b] mt-1">
            Telemetry Profile: Evaluation Judge Baseline
          </p>
        </div>
        <span className="text-xs font-mono bg-white px-3 py-1.5 rounded-full border border-[#e8e8ed]">
          Status: Offline Matrix
        </span>
      </header>

      {/* Dashboard Core Grid */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Left: Primary Predictive Engine Outcome */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="text-center py-10 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] mb-4">
              Burnout Risk Score
            </h3>

            {/* Minimal Circular Ring Simulation Layout */}
            <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-[6px] border-[#f5f5f7] mb-4">
              <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-[#0066cc] animate-spin-slow opacity-10"></div>
              <span className="text-5xl font-semibold tracking-tighter text-[#1d1d1f]">
                {currentRiskScore}%
              </span>
            </div>

            <div
              className={`px-4 py-1.5 rounded-full border text-xs font-semibold ${getRiskColor(currentRiskScore)}`}
            >
              {currentRiskScore > 70
                ? "High Risk Status"
                : currentRiskScore > 30
                  ? "Moderate Alert"
                  : "Healthy Baseline"}
            </div>
          </Card>

          <Card className="space-y-4">
            <h4 className="text-sm font-semibold text-[#1d1d1f]">
              Predicted Burnout Window
            </h4>
            <div className="text-2xl font-semibold text-[#0066cc] tracking-tight">
              {currentRiskScore > 70
                ? judgeDemoScenario.predictedWindow
                : "No impending window"}
            </div>
            <p className="text-xs text-[#86868b] leading-relaxed">
              Based on the accelerated deterioration of sleep metrics relative
              to digital device spikes. Early warnings trigger up to 7 days
              before physical exhaustion limits occur.
            </p>
          </Card>
        </div>

        {/* Right Columns: Signal Logs & Detailed Metric Breakdowns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Diagnostic Rules Triggered */}
          <Card className="bg-white">
            <h3 className="text-[17px] font-semibold mb-4 tracking-tight">
              Engine Warnings Logged
            </h3>
            <div className="space-y-3">
              {currentRiskScore > 70 ? (
                judgeDemoScenario.warnings.map((warn, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f5f7] text-sm text-[#1d1d1f]"
                  >
                    <span className="text-red-500 font-semibold">⚠️</span>
                    <p className="font-normal">{warn}</p>
                  </div>
                ))
              ) : (
                <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50 text-sm text-green-700 border border-green-100">
                  <span>✅</span>
                  <p>
                    Behavioral trends are normalizing. Sleep levels recovery
                    bounds within optimal thresholds.
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Tabular Behavioral Pattern Array over the last 5 days */}
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[17px] font-semibold tracking-tight">
                Behavioral Log History
              </h3>
              <p className="text-xs text-[#86868b]">
                Dynamic tracking parameters
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#e8e8ed] text-[#86868b] font-medium">
                    <th className="pb-3 font-medium">Day</th>
                    <th className="pb-3 font-medium">Sleep</th>
                    <th className="pb-3 font-medium">Screen-Time</th>
                    <th className="pb-3 font-medium">Steps</th>
                    <th className="pb-3 font-medium">Stress/Mood</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e8ed]">
                  {activeMetrics.map((dayData, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#f5f5f7]/50 transition-colors"
                    >
                      <td className="py-3.5 font-semibold text-[#1d1d1f]">
                        {dayData.day}
                      </td>
                      <td className="py-3.5 text-[#1d1d1f]">
                        {dayData.sleepHours} hrs
                      </td>
                      <td className="py-3.5 text-[#1d1d1f]">
                        {dayData.screenTime} hrs
                      </td>
                      <td className="py-3.5 text-[#1d1d1f]">
                        {dayData.activitySteps.toLocaleString()}
                      </td>
                      <td className="py-3.5">
                        <span className="text-xs font-mono bg-[#f5f5f7] px-2 py-1 rounded">
                          S:{dayData.stressLevel} / M:{dayData.moodLevel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
