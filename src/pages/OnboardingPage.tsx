import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [dataSource, setDataSource] = useState<"fitbit" | "manual" | null>(
    null,
  );
  const [permissionsGranted, setPermissionsGranted] = useState({
    biometrics: false,
    usageLogs: false,
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // On step 4, completing onboarding pushes user into the workspace
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans flex flex-col justify-between py-12 px-6">
      {/* Top Header & Progress bar context */}
      <header className="max-w-md w-full mx-auto space-y-4">
        <div className="flex justify-between items-center text-xs text-[#86868b] font-semibold uppercase tracking-wider">
          <span>Prodrome Setup</span>
          <span>
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="w-full h-1 bg-[#e8e8ed] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0066cc] transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </header>

      {/* Main Multi-Step Node Viewport */}
      <main className="max-w-md w-full mx-auto my-auto py-8">
        <Card className="bg-white p-8">
          {/* STEP 1: WELCOME SCREEN */}
          {currentStep === 1 && (
            <div className="space-y-4 text-center">
              <div className="text-4xl">🧠</div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Welcome to Prodrome
              </h2>
              <p className="text-[15px] text-[#86868b] leading-relaxed">
                Our AI-driven backend scans behavioral shifts to issue health
                alerts before exhaustion strikes. Let's configure your
                diagnostic tracking foundation.
              </p>
            </div>
          )}

          {/* STEP 2: CHOOSE DATA SOURCE */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Select your tracking baseline
                </h2>
                <p className="text-xs text-[#86868b] mt-1">
                  Choose how your metric engine should read background patterns.
                </p>
              </div>

              <div className="space-y-3">
                <div
                  onClick={() => setDataSource("fitbit")}
                  className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center justify-between ${
                    dataSource === "fitbit"
                      ? "border-[#0066cc] bg-[#0066cc]/5"
                      : "border-[#e8e8ed] hover:border-[#d2d2d7]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⌚</span>
                    <div className="text-left">
                      <p className="text-sm font-semibold">
                        Connect Fitbit Ecosystem
                      </p>
                      <p className="text-xs text-[#86868b]">
                        Sync sleep periods and resting heart rate passively.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${dataSource === "fitbit" ? "border-[#0066cc]" : "border-[#d2d2d7]"}`}
                  >
                    {dataSource === "fitbit" && (
                      <div className="w-2 h-2 bg-[#0066cc] rounded-full"></div>
                    )}
                  </div>
                </div>

                <div
                  onClick={() => setDataSource("manual")}
                  className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center justify-between ${
                    dataSource === "manual"
                      ? "border-[#0066cc] bg-[#0066cc]/5"
                      : "border-[#e8e8ed] hover:border-[#d2d2d7]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📝</span>
                    <div className="text-left">
                      <p className="text-sm font-semibold">
                        Manual Workspace Inputs
                      </p>
                      <p className="text-xs text-[#86868b]">
                        Log habits directly through our daily quick-check
                        framework.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${dataSource === "manual" ? "border-[#0066cc]" : "border-[#d2d2d7]"}`}
                  >
                    {dataSource === "manual" && (
                      <div className="w-2 h-2 bg-[#0066cc] rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SYSTEM PERMISSIONS */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Data Access Approvals
                </h2>
                <p className="text-xs text-[#86868b] mt-1">
                  We respect zero-noise data security. Review access parameters.
                </p>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f5f7] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[#0066cc]"
                    checked={permissionsGranted.biometrics}
                    onChange={(e) =>
                      setPermissionsGranted((prev) => ({
                        ...prev,
                        biometrics: e.target.checked,
                      }))
                    }
                  />
                  <div className="text-xs text-[#1d1d1f] leading-normal">
                    <strong className="block font-semibold mb-0.5">
                      Biometric Telemetry Analysis
                    </strong>
                    Allow processing of sleep debt margins, active steps drop
                    counts, and fatigue indices.
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f5f7] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[#0066cc]"
                    checked={permissionsGranted.usageLogs}
                    onChange={(e) =>
                      setPermissionsGranted((prev) => ({
                        ...prev,
                        usageLogs: e.target.checked,
                      }))
                    }
                  />
                  <div className="text-xs text-[#1d1d1f] leading-normal">
                    <strong className="block font-semibold mb-0.5">
                      Screen-Time Accumulation Data
                    </strong>
                    Allow monitoring digital usage spikes to flag high-velocity
                    attention fatigue.
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* STEP 4: SETUP FINISHED */}
          {currentStep === 4 && (
            <div className="space-y-4 text-center">
              <div className="text-4xl animate-bounce">🚀</div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Your Matrix is Synchronized
              </h2>
              <p className="text-[15px] text-[#86868b] leading-relaxed">
                {dataSource === "fitbit"
                  ? "Your passive OAuth Fitbit device link has authorized successfully. Initial telemetry logs are parsing background patterns."
                  : "Manual logger is active. Your dashboard charts are primed to map your daily behavioral inputs."}
              </p>
            </div>
          )}
        </Card>
      </main>

      {/* Control Action Footer Bar */}
      <footer className="max-w-md w-full mx-auto flex items-center justify-between">
        <button
          onClick={handleBack}
          className={`text-sm font-semibold transition-all ${
            currentStep === 1
              ? "text-transparent pointer-events-none"
              : "text-[#86868b] hover:text-[#1d1d1f]"
          }`}
        >
          Back
        </button>

        <Button
          variant="primary"
          onClick={handleNext}
          disabled={
            (currentStep === 2 && !dataSource) ||
            (currentStep === 3 &&
              (!permissionsGranted.biometrics || !permissionsGranted.usageLogs))
          }
        >
          {currentStep === totalSteps ? "Enter Dashboard" : "Continue"}
        </Button>
      </footer>
    </div>
  );
};
