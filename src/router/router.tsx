import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
//import { AppLayout } from "./components/layout/AppLayout";
//import { ProtectedRoute } from "./components/layout/ProtectedRoute";

// Pages
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { DemoPage } from "../pages/DemoPage";
//import { OnboardingPage } from "./pages/OnboardingPage";
//import { DashboardPage } from "./pages/DashboardPage";
//import { PredictionPage } from "./pages/PredictionPage";
//import { InsightsPage } from "./pages/InsightsPage";
//import { SettingsPage } from "./pages/SettingsPage";

export const router = createBrowserRouter([
  // --- Public Marketing Routes ---
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },

  // --- Hackathon Judge / Visitor Demo Route ---
  // Operates without authentication, bypassing session checks
  {
    path: "/demo",
    element: <DemoPage />,
  },

  // --- Registered User Protected Application Routes ---
  /*{
    element: <ProtectedRoute />, // Validates Supabase session persistence
    children: [
      {
        path: "/onboarding",
        element: <OnboardingPage />,
      },
      {
        element: <AppLayout />, // Embeds Sidebar, TopBar, and workspace viewports
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/predictions",
            element: <PredictionPage />,
          },
          {
            path: "/insights",
            element: <InsightsPage />,
          },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
        ],
      },
    ],
  }, */

  // --- Fallback Catch-All Redirect ---
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
