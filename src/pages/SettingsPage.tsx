import React, { useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const SettingsPage: React.FC = () => {
  // --- STATE MATRIX ---
  const [fullName, setFullName] = useState("Yesehak Kebere");
  const [email, setEmail] = useState("yesehak@example.com");
  const [isFitbitConnected, setIsFitbitConnected] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const [notifications, setNotifications] = useState({
    criticalAlerts: true,
    weeklyReports: false,
    breakReminders: true,
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect Supabase profile updating mutation here
    alert("Profile configurations updated successfully.");
  };

  const handleFitbitToggle = () => {
    if (!isFitbitConnected) {
      setIsSyncing(true);
      // Simulating OAuth authentication protocol redirect behavior
      setTimeout(() => {
        setIsSyncing(false);
        setIsFitbitConnected(true);
      }, 1500);
    } else {
      setIsFitbitConnected(false);
    }
  };

  return (
    <div className="space-y-10 animate-fade-in max-w-4xl">
      {/* Page Header */}
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
          System Settings
        </h1>
        <p className="text-sm text-[#86868b] mt-0.5">
          Manage data access vectors, synchronization states, and communication
          parameters.
        </p>
      </section>

      {/* Grid Layout Container */}
      <div className="space-y-8">
        {/* SECTION 1: WEARABLE ECOSYSTEM ACCESS */}
        <section className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] px-1">
            Connected Devices
          </h3>
          <Card className="bg-white p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl p-2 bg-[#f5f5f7] rounded-xl block">
                  ⌚
                </span>
                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-[#1d1d1f] tracking-tight">
                    Fitbit API Integration
                  </h4>
                  <p className="text-xs text-[#86868b] max-w-md leading-relaxed">
                    Synchronize resting heart rates, sleep intervals, and
                    physical energy telemetry points automatically over secure
                    OAuth tunnels.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFitbitToggle}
                disabled={isSyncing}
                className={`px-5 py-2 text-xs font-semibold rounded-full border transition-all self-start sm:self-auto min-w-30 ${
                  isSyncing
                    ? "bg-[#f5f5f7] text-[#86868b] border-transparent cursor-not-allowed"
                    : isFitbitConnected
                      ? "bg-transparent text-red-500 border-red-200 hover:bg-red-50"
                      : "bg-[#0066cc] text-white border-transparent hover:bg-[#0055b3]"
                }`}
              >
                {isSyncing
                  ? "Connecting..."
                  : isFitbitConnected
                    ? "Disconnect"
                    : "Connect Device"}
              </button>
            </div>

            {/* Condition badge layout for tracking states */}
            {isFitbitConnected && (
              <div className="mt-4 pt-4 border-t border-[#e8e8ed] flex items-center gap-2 text-xs font-mono text-green-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse"></span>
                Ecosystem synchronized successfully. Passive logging background
                loops initialized.
              </div>
            )}
          </Card>
        </section>

        {/* SECTION 2: IDENTITY MATRICES */}
        <section className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] px-1">
            Profile Details
          </h3>
          <Card className="bg-white p-6">
            <form onSubmit={handleProfileUpdate} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="settings-name"
                  label="Display Full Name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <Input
                  id="settings-email"
                  label="Registered Account Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled // Preserved lock state; requires specialized Supabase credential workflows to unlock
                />
              </div>
              <div className="flex justify-end pt-2">
                <Button type="submit" size="sm" className="text-xs">
                  Save Changes
                </Button>
              </div>
            </form>
          </Card>
        </section>

        {/* SECTION 3: CALCULATION & ALERT RULES */}
        <section className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-[#86868b] px-1">
            Notification Preferences
          </h3>
          <Card className="bg-white p-6 divide-y divide-[#e8e8ed]">
            {/* Toggle row 1 */}
            <div className="flex items-center justify-between py-3.5 first:pt-0">
              <div className="space-y-0.5 max-w-xl">
                <h4 className="text-sm font-semibold text-[#1d1d1f]">
                  High-Velocity Risk Alerts
                </h4>
                <p className="text-xs text-[#86868b]">
                  Receive instant workspace push alerts the moment behavioral
                  vectors point toward an approaching 5–7 day burnout window.
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications.criticalAlerts}
                onChange={(e) =>
                  setNotifications((prev) => ({
                    ...prev,
                    criticalAlerts: e.target.checked,
                  }))
                }
                className="w-4 h-4 accent-[#0066cc] cursor-pointer"
              />
            </div>

            {/* Toggle row 2 */}
            <div className="flex items-center justify-between py-3.5">
              <div className="space-y-0.5 max-w-xl">
                <h4 className="text-sm font-semibold text-[#1d1d1f]">
                  Weekly Baseline Trend Summary
                </h4>
                <p className="text-xs text-[#86868b]">
                  Receive a structural matrix email analyzing sleep debts
                  against screen spike parameters every Monday morning.
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications.weeklyReports}
                onChange={(e) =>
                  setNotifications((prev) => ({
                    ...prev,
                    weeklyReports: e.target.checked,
                  }))
                }
                className="w-4 h-4 accent-[#0066cc] cursor-pointer"
              />
            </div>

            {/* Toggle row 3 */}
            <div className="flex items-center justify-between py-3.5 last:pb-0">
              <div className="space-y-0.5 max-w-xl">
                <h4 className="text-sm font-semibold text-[#1d1d1f]">
                  Micro-Recovery Suggestions
                </h4>
                <p className="text-xs text-[#86868b]">
                  Receive proactive tactical reminders if focus metrics flag
                  uninterrupted screen execution past 90 consecutive minutes.
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications.breakReminders}
                onChange={(e) =>
                  setNotifications((prev) => ({
                    ...prev,
                    breakReminders: e.target.checked,
                  }))
                }
                className="w-4 h-4 accent-[#0066cc] cursor-pointer"
              />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};
