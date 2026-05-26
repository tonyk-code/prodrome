import React, { useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export const DashboardPage: React.FC = () => {
  // --- STATE MATRIX ---
  // Local states to handle reactive check-in sliders before hooking up Supabase mutations
  const [mood, setMood] = useState(3);
  const [stress, setStress] = useState(2);
  const [energy, setEnergy] = useState(4);
  const [checkInNotes, setCheckInNotes] = useState("");
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);
  const [streakCount, setStreakCount] = useState(4);

  // Default baseline data for a standard user profile tracking toward a warning window
  const dashboardMetrics = {
    riskScore: 78,
    riskLevel: "High Risk",
    predictedWindow: "5-7 days",
    signals: [
      {
        label: "Sleep Trend",
        status: "Deteriorating",
        detail: "Sleep dropped 20% over 4 days",
        icon: "🌙",
        isNegative: true,
      },
      {
        label: "Screen Exposure",
        status: "Spike Alert",
        detail: "Screen time increased 35%",
        icon: "📱",
        isNegative: true,
      },
      {
        label: "Stress Index",
        status: "Elevated Strain",
        detail: "Consistent macro score escalation",
        icon: "⚡",
        isNegative: true,
      },
      {
        label: "Physical Activity",
        status: "Steady Baseline",
        detail: "Holding at 6,500 daily steps",
        icon: "🏃‍♂️",
        isNegative: false,
      },
    ],
  };

  const handleCheckInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCheckedInToday(true);
    setStreakCount((prev) => prev + 1);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Dashboard Section Greeting Row */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Workspace Overview
          </h1>
          <p className="text-sm text-[#86868b] mt-0.5">
            Diagnostic insight tracking for the active telemetry window.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white border border-[#e8e8ed] px-4 py-2 rounded-full text-xs font-medium">
          <span className="text-base">🔥</span>
          <span>
            Daily Check-in Streak:{" "}
            <strong className="font-semibold text-[#0066cc]">
              {streakCount} Days
            </strong>
          </span>
        </div>
      </section>

      {/* Main Core Viewport: Split Grid Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- LEFT HAND PANELS: BIOMETRIC GAUGES --- */}
        <div className="lg:col-span-1 space-y-8">
          {/* Main Primary Prediction Gauge Card */}
          <Card className="flex flex-col items-center justify-center text-center p-8 bg-white">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-6">
              Aggregated Burnout Risk
            </h3>

            <div className="relative w-44 h-44 flex items-center justify-center rounded-full border-8 border-[#f5f5f7]">
              {/* Colored perimeter background arc representation wrapper */}
              <div
                className="absolute -inset-2 rounded-full border-8 border-transparent border-t-red-500 border-r-red-500 rotate-45"
                style={{ opacity: dashboardMetrics.riskScore > 70 ? 1 : 0.2 }}
              ></div>
              <div className="text-center">
                <span className="text-5xl font-semibold tracking-tighter block text-[#1d1d1f]">
                  {dashboardMetrics.riskScore}%
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-red-500 font-bold block mt-1">
                  {dashboardMetrics.riskLevel}
                </span>
              </div>
            </div>

            <div className="mt-8 w-full border-t border-[#e8e8ed] pt-6 text-left space-y-2">
              <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wide block">
                Predicted Window
              </span>
              <p className="text-2xl font-semibold text-[#0066cc] tracking-tight">
                {dashboardMetrics.predictedWindow}
              </p>
              <p className="text-xs text-[#86868b] leading-relaxed pt-1">
                The behavioral calculation engine predicts system failure limits
                within this timeframe if pattern acceleration remains constant.
              </p>
            </div>
          </Card>

          {/* Daily Interactive Check-In Node Panel */}
          <Card className="bg-white">
            <h3 className="text-[17px] font-semibold tracking-tight mb-1">
              Daily Micro-Journal
            </h3>
            <p className="text-xs text-[#86868b] mb-6">
              Calibrate qualitative variables to adjust calculations.
            </p>

            {!hasCheckedInToday ? (
              <form onSubmit={handleCheckInSubmit} className="space-y-5">
                {/* Mood Parameter input slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#1d1d1f]">Current Mood Balance</span>
                    <span className="text-[#0066cc] font-mono font-bold">
                      {mood}/5
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={mood}
                    onChange={(e) => setMood(Number(e.target.value))}
                    className="w-full accent-[#0066cc] h-1.5 bg-[#f5f5f7] rounded-lg cursor-pointer"
                  />
                </div>

                {/* Stress Parameter input slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#1d1d1f]">
                      Perceived Strain Level
                    </span>
                    <span className="text-[#0066cc] font-mono font-bold">
                      {stress}/5
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={stress}
                    onChange={(e) => setStress(Number(e.target.value))}
                    className="w-full accent-[#0066cc] h-1.5 bg-[#f5f5f7] rounded-lg cursor-pointer"
                  />
                </div>

                {/* Energy Parameter input slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#1d1d1f]">Core Vital Energy</span>
                    <span className="text-[#0066cc] font-mono font-bold">
                      {energy}/5
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={energy}
                    onChange={(e) => setEnergy(Number(e.target.value))}
                    className="w-full accent-[#0066cc] h-1.5 bg-[#f5f5f7] rounded-lg cursor-pointer"
                  />
                </div>

                {/* Text Notes contextual container */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#1d1d1f]">
                    Qualitative Context (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe any exceptional overhead context..."
                    value={checkInNotes}
                    onChange={(e) => setCheckInNotes(e.target.value)}
                    className="w-full p-3 text-sm bg-[#f5f5f7] border border-transparent rounded-xl focus:bg-white focus:border-[#0066cc] focus:outline-none transition resize-none placeholder-[#86868b]/50"
                  />
                </div>

                <Button type="submit" className="w-full text-xs py-2">
                  Commit Check-In Parameters
                </Button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-2 bg-[#f5f5f7]/50 rounded-xl border border-dashed border-[#e8e8ed]">
                <span className="text-xl">🌟</span>
                <h4 className="text-sm font-semibold">
                  Metrics Logged for Today
                </h4>
                <p className="text-xs text-[#86868b] max-w-50 mx-auto leading-relaxed">
                  Data points captured successfully. Calculations will shift
                  overnight.
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* --- RIGHT HAND PANELS: DETAILED ANALYSIS TRACKS --- */}
        <div className="lg:col-span-2 space-y-8">
          {/* Signal Indicator Matrix Grid */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] mb-4 px-1">
              Behavioral Deviations Signal Grid
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dashboardMetrics.signals.map((sig, idx) => (
                <Card
                  key={idx}
                  className="bg-white p-5 flex flex-col justify-between h-36"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{sig.icon}</span>
                      <h4 className="text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
                        {sig.label}
                      </h4>
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                        sig.isNegative
                          ? "text-amber-600 bg-amber-50 border-amber-100"
                          : "text-green-600 bg-green-50 border-green-100"
                      }`}
                    >
                      {sig.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#86868b] leading-relaxed font-normal">
                    {sig.detail}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Analytics Mock Trend Viewports */}
          <Card className="bg-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-[17px] font-semibold tracking-tight">
                  Weekly Tracking Baseline
                </h3>
                <p className="text-xs text-[#86868b] mt-0.5">
                  Consolidated metric distribution over standard working days.
                </p>
              </div>
              <div className="flex gap-1.5 bg-[#f5f5f7] p-1 rounded-lg text-xs font-medium">
                <span className="bg-white px-2.5 py-1 rounded-md shadow-sm cursor-pointer">
                  7D
                </span>
                <span className="px-2.5 py-1 text-[#86868b] cursor-pointer">
                  30D
                </span>
              </div>
            </div>

            {/* Simulated Graphical Bar Representation Rows */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#86868b]">
                  <span>Average Rest Period (Target: 8.0 hrs)</span>
                  <span className="font-semibold text-[#1d1d1f]">
                    5.9 hrs/day
                  </span>
                </div>
                <div className="w-full h-3 bg-[#f5f5f7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#86868b]">
                  <span>Daily Screen Time Ceiling (Target: Under 4.0 hrs)</span>
                  <span className="font-semibold text-red-500">
                    7.6 hrs/day
                  </span>
                </div>
                <div className="w-full h-3 bg-[#f5f5f7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#86868b]">
                  <span>Physical Energy Burn (Target: 8,000 steps)</span>
                  <span className="font-semibold text-[#1d1d1f]">
                    6,500 steps/day
                  </span>
                </div>
                <div className="w-full h-3 bg-[#f5f5f7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
