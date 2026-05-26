import React, { useState } from "react";
import { Card } from "../components/ui/Card";

interface InsightItem {
  id: string;
  category: "Critical Alert" | "Behavioral Pattern" | "Recovery Strategy";
  title: string;
  description: string;
  timestamp: string;
  impactScore: string;
  icon: string;
  colorClass: string;
}

export const InsightsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "critical" | "behavioral"
  >("all");

  const insights: InsightItem[] = [
    {
      id: "ins-01",
      category: "Critical Alert",
      title: "Sleep degradation trajectory detected",
      description:
        "Your continuous sleep duration has dropped for four consecutive days, establishing a rolling debt matrix. Computational models project an imminent drop in cognitive focus capacity over the next 48 hours.",
      timestamp: "2 hours ago",
      impactScore: "High Volatility",
      icon: "🚨",
      colorClass: "text-red-600 bg-red-50 border-red-100",
    },
    {
      id: "ins-02",
      category: "Behavioral Pattern",
      title: "Elevated post-work screen velocity",
      description:
        "Digital device exposure increased by 40% this week. Data vectors show peak utilization shifted between 9:30 PM and 11:45 PM, strongly correlating with your delayed deep-sleep latency periods.",
      timestamp: "5 hours ago",
      impactScore: "Structural Shift",
      icon: "📱",
      colorClass: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      id: "ins-03",
      category: "Recovery Strategy",
      title: "Physical decompression margin drop",
      description:
        "Physical activity dropped significantly beneath your rolling baseline. The database registers a 45% reduction in cardiovascular exertion minutes, compounding systemic rest-state heart rate elevations.",
      timestamp: "1 day ago",
      impactScore: "Mitigation Target",
      icon: "📉",
      colorClass: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      id: "ins-04",
      category: "Recovery Strategy",
      title: "Recommended focus containment window",
      description:
        "Consider configuring micro-recovery breaks. Implementing a structured 15-minute digital disconnect for every 90 minutes of continuous keyboard metrics is projected to flatten your afternoon stress-accumulation curve.",
      timestamp: "2 days ago",
      impactScore: "Optimization",
      icon: "🛡️",
      colorClass: "text-green-600 bg-green-50 border-green-100",
    },
  ];

  const filteredInsights = insights.filter((ins) => {
    if (activeFilter === "critical") return ins.category === "Critical Alert";
    if (activeFilter === "behavioral")
      return ins.category === "Behavioral Pattern";
    return true;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Layout Header */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            AI Insights Feed
          </h1>
          <p className="text-sm text-[#86868b] mt-0.5">
            Proactive recommendations parsed from background telemetry layers.
          </p>
        </div>

        {/* Filter Toggle Pill Buttons */}
        <div className="flex bg-[#ffffff] border border-[#e8e8ed] p-1 rounded-xl text-xs font-semibold self-start sm:self-auto shadow-sm">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeFilter === "all" ? "bg-[#0066cc] text-white shadow-xs" : "text-[#86868b] hover:text-[#1d1d1f]"}`}
          >
            All Tracks
          </button>
          <button
            onClick={() => setActiveFilter("critical")}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeFilter === "critical" ? "bg-[#0066cc] text-white shadow-xs" : "text-[#86868b] hover:text-[#1d1d1f]"}`}
          >
            Alerts
          </button>
          <button
            onClick={() => setActiveFilter("behavioral")}
            className={`px-3 py-1.5 rounded-lg transition-all ${activeFilter === "behavioral" ? "bg-[#0066cc] text-white shadow-xs" : "text-[#86868b] hover:text-[#1d1d1f]"}`}
          >
            Patterns
          </button>
        </div>
      </section>

      {/* Main Stream Container */}
      <main className="space-y-6 max-w-4xl">
        {filteredInsights.length > 0 ? (
          filteredInsights.map((insight) => (
            <Card
              key={insight.id}
              className="bg-white p-6 hover:border-[#d2d2d7] transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Structural Category Icon Box */}
                <div className="w-10 h-10 bg-[#f5f5f7] rounded-xl flex items-center justify-center text-lg shrink-0">
                  {insight.icon}
                </div>

                {/* Primary Content Container */}
                <div className="space-y-2 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    {/* Header Context Tags */}
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${insight.colorClass}`}
                      >
                        {insight.category}
                      </span>
                      <span className="text-[11px] font-medium text-[#86868b] font-mono">
                        Impact:{" "}
                        <strong className="text-[#1d1d1f]">
                          {insight.impactScore}
                        </strong>
                      </span>
                    </div>

                    <span className="text-xs font-medium text-[#86868b] font-mono">
                      {insight.timestamp}
                    </span>
                  </div>

                  {/* Core Diagnostic Text */}
                  <h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight">
                    {insight.title}
                  </h3>
                  <p className="text-[15px] text-[#86868b] leading-relaxed font-normal pt-0.5">
                    {insight.description}
                  </p>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-16 bg-white border border-[#e8e8ed] rounded-[18px]">
            <p className="text-sm text-[#86868b]">
              No logged trends match the selected filter query.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
