import React from "react";
import { Card } from "../components/ui/Card";

export const PredictionPage: React.FC = () => {
  // Mock data representing structural predictive parameters and weighting coefficients
  const predictionMetrics = {
    currentRisk: 78,
    targetTimeline: "June 1–3, 2026",
    confidenceInterval: "94%",
    contributors: [
      {
        name: "Sleep Debt Accumulation",
        impact: "+32%",
        trend: "Critical Acceleration",
        desc: "Rolling 7-day sleep deficit reached 14.5 hours. REM cycles down 18%.",
        metric: "5.4h avg",
        status: "critical",
      },
      {
        name: "Autonomic Strain (HRV)",
        impact: "+24%",
        trend: "Downregulated Baseline",
        desc: "Sustained depression in standard deviation of NN intervals (SDNN) during rest states.",
        metric: "32 ms",
        status: "warning",
      },
      {
        name: "Sustained Screen Velocity",
        impact: "+15%",
        trend: "Unchanged Overhead",
        desc: "Continuous focus blocks exceeding 180 minutes without micro-breaks.",
        metric: "8.2h/day",
        status: "warning",
      },
      {
        name: "Subjective Strain Feedback",
        impact: "+7%",
        trend: "Escalating",
        desc: "Daily micro-journal values indicate rolling energy depletion scores.",
        metric: "4.1/5 strain",
        status: "nominal",
      },
    ],
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
          Predictive Analysis
        </h1>
        <p className="text-sm text-[#86868b] mt-0.5">
          Algorithmic risk breakdown modeled against systemic strain limits.
        </p>
      </section>

      {/* High-Impact Executive Projection Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white p-6 border border-[#e8e8ed]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] block mb-1">
            Target Exhaustion Window
          </span>
          <p className="text-2xl font-semibold text-red-600 tracking-tight">
            {predictionMetrics.targetTimeline}
          </p>
          <p className="text-xs text-[#86868b] mt-2 leading-relaxed">
            Projected onset threshold if current behavioral velocity vector
            remains unmitigated.
          </p>
        </Card>

        <Card className="bg-white p-6 border border-[#e8e8ed]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] block mb-1">
            Model Accuracy Confidence
          </span>
          <p className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
            {predictionMetrics.confidenceInterval}
          </p>
          <p className="text-xs text-[#86868b] mt-2 leading-relaxed">
            Calculated across historical signal matching patterns and variance
            distributions.
          </p>
        </Card>

        <Card className="bg-white p-6 border border-[#e8e8ed]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] block mb-1">
            Primary Systemic Driver
          </span>
          <p className="text-2xl font-semibold text-[#0066cc] tracking-tight">
            Sleep Deprivation
          </p>
          <p className="text-xs text-[#86868b] mt-2 leading-relaxed">
            Accounts for the heavy loading weight within the primary calculation
            engine matrix.
          </p>
        </Card>
      </div>

      {/* Detailed Mathematical Contribution Stack */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] px-1">
          Risk Weight Contribution Matrix
        </h3>

        <div className="space-y-4">
          {predictionMetrics.contributors.map((item, index) => (
            <Card
              key={index}
              className="bg-white p-6 hover:border-[#d2d2d7] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Metric Identity Meta Block */}
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h4 className="text-base font-semibold text-[#1d1d1f] tracking-tight">
                      {item.name}
                    </h4>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        item.status === "critical"
                          ? "bg-red-50 text-red-600 border border-red-100"
                          : item.status === "warning"
                            ? "bg-amber-50 text-amber-600 border border-amber-100"
                            : "bg-green-50 text-green-600 border border-green-100"
                      }`}
                    >
                      {item.trend}
                    </span>
                  </div>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Algorithmic Weight Signifiers */}
                <div className="flex items-center sm:text-right gap-6 sm:gap-8 min-w-45 justify-between sm:justify-end">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#86868b] block">
                      Captured value
                    </span>
                    <span className="text-sm font-semibold text-[#1d1d1f] font-mono">
                      {item.metric}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#86868b] block">
                      Risk Impact Weight
                    </span>
                    <span
                      className={`text-base font-bold font-mono ${
                        item.status === "critical"
                          ? "text-red-500"
                          : "text-amber-500"
                      }`}
                    >
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Predictive Simulation Context Note */}
      <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-[#e8e8ed] flex items-start gap-4">
        <span className="text-xl pt-0.5">🛡️</span>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-[#1d1d1f]">
            How to depressurize this vector window
          </h4>
          <p className="text-xs text-[#86868b] leading-relaxed max-w-3xl">
            The predictive timeline responds dynamically to recovery blocks.
            Reducing screen acceleration patterns past 9:00 PM and restoring
            deep sleep architecture margins by a constant 1.2 hours over three
            consecutive nights drops the target trajectory projection back down
            into the nominal zone.
          </p>
        </div>
      </div>
    </div>
  );
};
