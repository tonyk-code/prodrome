import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Sleep Analysis",
      desc: "Track duration trends and target debt indicators before cognitive decline sets in.",
      icon: "🌙",
    },
    {
      title: "Screen-Time Trends",
      desc: "Monitor rapid digital exposure acceleration and unexpected spikes.",
      icon: "📱",
    },
    {
      title: "Burnout Prediction",
      desc: "Receive structural warnings detailing predicted failure timelines within 5–7 days.",
      icon: "⚡",
    },
    {
      title: "Fitbit Integration",
      desc: "Effortlessly integrate continuous active biometrics and resting heart rates.",
      icon: "⌚",
    },
    {
      title: "Mood Check-ins",
      desc: "Micro-journal mental elasticity benchmarks through light programmatic check-ins.",
      icon: "📊",
    },
    {
      title: "AI Insights",
      desc: "Transform noisy physiological telemetry tables into actionable diagnostic streams.",
      icon: "🧠",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1d1d1f] font-sans selection:bg-[#0066cc]/10 selection:text-[#0066cc]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#ffffff]/80 backdrop-blur-md border-b border-[#e8e8ed] px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-[22px] font-semibold tracking-tight text-[#1d1d1f]">
            prodrome<span className="text-[#0066cc]">.</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/demo")}>
            Try Demo
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-[44px] md:text-[68px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.08] mb-6 max-w-3xl mx-auto">
          Predict burnout before it happens.
        </h1>
        <p className="text-[19px] md:text-[22px] text-[#86868b] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Understand hidden behavioral deviations and catch physiological
          exhaustion windows up to a week before they hit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => navigate("/demo")}
          >
            Explore Live Demo
          </Button>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="bg-[#f5f5f7] py-24 border-y border-[#e8e8ed]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-4">
              Designed around behavioral indicators.
            </h2>
            <p className="text-[17px] text-[#86868b] max-w-lg mx-auto">
              We sync passive background telemetries alongside manual metrics to
              visualize hidden risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, index) => (
              <Card
                key={index}
                hoverEffect={true}
                className="flex flex-col justify-between h-52"
              >
                <div>
                  <div className="text-2xl mb-4">{feat.icon}</div>
                  <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-[15px] text-[#86868b] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-4">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#f5f5f7] rounded-full flex items-center justify-center mx-auto text-lg font-semibold text-[#0066cc] mb-4">
              1
            </div>
            <h4 className="text-[17px] font-semibold mb-2">Collect patterns</h4>
            <p className="text-[15px] text-[#86868b] leading-relaxed">
              Securely gather background wearable logs or manually input your
              baseline habits.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#f5f5f7] rounded-full flex items-center justify-center mx-auto text-lg font-semibold text-[#0066cc] mb-4">
              2
            </div>
            <h4 className="text-[17px] font-semibold mb-2">Analyze behavior</h4>
            <p className="text-[15px] text-[#86868b] leading-relaxed">
              Our telemetry engine benchmarks sudden tracking swings against
              historic baselines.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#f5f5f7] rounded-full flex items-center justify-center mx-auto text-lg font-semibold text-[#0066cc] mb-4">
              3
            </div>
            <h4 className="text-[17px] font-semibold mb-2">
              Predict risk windows
            </h4>
            <p className="text-[15px] text-[#86868b] leading-relaxed">
              Get accurate warning projections alerting you 5–7 days before
              system fatigue occurs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e8ed] py-8 text-center text-xs text-[#86868b]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Prodrome Corp. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-[#1d1d1f] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#1d1d1f] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
