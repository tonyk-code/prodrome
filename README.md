Burnout Radar is a premium, predictive mental wellness dashboard designed for high-performance software engineering teams. By running passive background telemetry across biometric signals, screen time exposure, and code output velocity, it calculates an active structural burnout risk index.

Instead of tracking burnout after exhaustion manifests, it acts as a proactive early warning system—notifying professionals and teams a full week before an impending cognitive crash so they can adjust workloads sustainably.

burnout-radar/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.svg
│   │
│   ├── components/                 # Reusable atomic UI primitives
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── ProgressRing.tsx
│   │   │   └── Skeleton.tsx
│   │   ├── layout/                 # Global dashboard shell wrappers
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── TopBar.tsx
│   │   └── charts/                 # Custom visualization layers
│   │       ├── BurnoutGauge.tsx
│   │       ├── TrendLine.tsx
│   │       └── SignalCard.tsx
│   │
│   ├── features/                   # Feature modules (isolated logic + UI)
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── OnboardingSteps.tsx
│   │   │   └── hooks/
│   │   │       └── useAuthMutation.ts
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── RiskSummary.tsx
│   │   │   │   ├── SignalsGrid.tsx
│   │   │   │   └── WeeklyTrend.tsx
│   │   │   └── hooks/
│   │   │       └── useDashboardData.ts
│   │   ├── checkin/
│   │   │   ├── components/
│   │   │   │   ├── CheckInForm.tsx
│   │   │   │   └── CheckInStreak.tsx
│   │   │   └── hooks/
│   │   │       └── useCheckinMutation.ts
│   │   ├── insights/
│   │   │   ├── components/
│   │   │   │   ├── InsightCard.tsx
│   │   │   │   └── InsightFeed.tsx
│   │   │   └── hooks/
│   │   │       └── useInsightQueries.ts
│   │   └── settings/
│   │       ├── components/
│   │       │   ├── GoogleFitConnect.tsx
│   │       │   └── NotificationPrefs.tsx
│   │       └── hooks/
│   │           └── useSettingsMutation.ts
│   │
│   ├── hooks/                      # Global cross-cutting lifecycle hooks
│   │   ├── useAuth.ts
│   │   ├── useBurnoutScore.ts
│   │   ├── useCheckins.ts
│   │   ├── useGoogleFit.ts
│   │   └── useInsights.ts
│   │
│   ├── lib/                        # Singletons, network clients & pure algorithms
│   │   ├── supabase.ts
│   │   ├── googleFit.ts
│   │   ├── anthropic.ts
│   │   └── burnoutEngine.ts
│   │
│   ├── pages/                      # Root route screen layout compositions
│   │   ├── LandingPage.tsx
│   │   ├── OnboardingPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── CheckInPage.tsx
│   │   ├── InsightsPage.tsx
│   │   └── SettingsPage.tsx
│   │
│   ├── context/                    # Shared context providers
│   │   └── AuthContext.tsx
│   │
│   ├── types/                      # Shared global TypeScript interfaces
│   │   └── index.ts
│   │
│   ├── App.tsx                     # Entry router / application configuration wrapper
│   └── main.tsx                    # React DOM canvas target mount initialization
│
├── .env
├── index.html
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts