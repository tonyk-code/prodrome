PROJECT NAME
Prodrome

PROJECT TAGLINE
Predict burnout before it happens.
PROJECT OVERVIEW
Prodrome is an AI-powered burnout prediction web application designed to predict a user's likelihood of burnout before symptoms become severe.
Instead of identifying burnout after exhaustion occurs, the system analyzes behavioral patterns and provides early warnings.
Instead of:

"You are burned out"
The application says:

"You are likely to burn out within the next 5–7 days based on recent patterns."
The goal is early intervention through predictive analysis.
The system evaluates:


Sleep trends

Screen-time changes

Activity patterns

Stress levels

Mood check-ins

Productivity trends

Fitbit wearable data
The application begins as a hackathon MVP while using scalable architecture for future AI model integration.
TECH STACK
Frontend

React

TypeScript

Vite

TailwindCSS v4

React Router

TanStack Query

Context API

Recharts
Backend
Supabase
Services:


Supabase Authentication

PostgreSQL Database

Supabase Storage

Supabase Realtime (optional)

Row Level Security (RLS)
External APIs

Fitbit API (OAuth)
Future AI / ML
Backend service:


Python FastAPI
Models:


Logistic Regression

Random Forest
MAIN USER TYPES
1. Demo User
2. Registered User
DEMO USER FLOW
Purpose:
Allow judges and visitors to experience the application without creating an account.
Flow:
Landing Page
→ Try Demo
→ Load realistic health dataset
→ Dashboard
→ Prediction Results
Demo uses realistic generated data.
Example:

Sleep
Monday: 8h
Tuesday: 7.5h
Wednesday: 6h
Thursday: 5h
Friday: 4.5h

Screen Time
Monday: 3h
Tuesday: 4h
Wednesday: 5h
Thursday: 7h
Friday: 9h

Activity
Monday: 7000
Tuesday: 6000
Wednesday: 5000
Thursday: 4000
Friday: 2000

Stress
Increasing trend
Prediction:
Risk Score:
82%
Warning:


Sleep dropped for five consecutive days

Screen time increased by 65%

Activity decreased by 40%
Predicted burnout window:
5–7 days
REGISTERED USER FLOW
Landing Page
→ Sign Up/Login
→ Onboarding
→ Select data source
→ Connect Fitbit OR Manual Input
→ Dashboard
→ Prediction Engine
→ Insights & Alerts
LANDING PAGE
Hero Section
Title:
Predict burnout before it happens
Subtitle:
Understand your behavioral patterns and receive early burnout warnings.
Buttons:
Primary:
Get Started
Secondary:
Try Demo
Features Section
Cards:


Sleep Analysis

Screen-Time Trends

Burnout Prediction

Fitbit Integration

Mood Check-ins

AI Insights
How It Works
Step 1:
Collect patterns
Step 2:
Analyze behavior
Step 3:
Predict burnout risk
Footer
Minimal informational footer
AUTHENTICATION
Using Supabase Auth
Features:


Email signup

Email login

Google login (optional)

Logout

Session persistence

Protected routes
ONBOARDING FLOW
Step 1
Welcome

Step 2
Choose Data Source
Options:


Connect Fitbit

Manual Input
Step 3
Permissions

Step 4
Finish Setup
FITBIT INTEGRATION
Fitbit is optional.
Data retrieved:
Sleep:


Sleep duration

Sleep consistency
Activity:


Step count

Active minutes
Heart:


Resting heart rate
Rules:


Fitbit should never be mandatory

Manual mode must always work
MANUAL INPUT SYSTEM
Users can manually provide:


Sleep hours

Stress level

Mood

Screen time

Productivity level

Activity level
DAILY CHECK-IN FEATURE
Fields:
Mood:
1–5
Stress:
1–5
Energy:
1–5
Optional:
Notes
Features:


Daily streak

History tracking
DASHBOARD FEATURES
Dashboard Cards
Burnout Risk Score
Example:
Risk:
78%
Status:
High
Weekly Trends
Charts:


Sleep chart

Screen time chart

Activity chart
Signals Grid
Signals:


Sleep trend

Stress trend

Activity trend

Mood trend
Prediction Summary
Example:


Sleep dropped 20%

Screen time increased 35%

Stress increased
Predicted burnout window:
5–7 days
PREDICTION ENGINE
Weighted MVP formula:


sleepDebt =
recommendedSleep - actualSleep

screenSpike =
currentScreenTime / previousAverage

burnoutScore =
0.40 * sleepDebt
+0.30 * screenSpike
+0.20 * stress
+0.10 * activityDrop

Normalize:


0–100


Risk Levels:
Low:
0–30
Moderate:
31–70
High:
71–100
INSIGHTS SYSTEM
Examples:

"Your sleep has decreased for four consecutive days."
"Screen time increased by 40% this week."
"Physical activity dropped significantly."
"Consider taking recovery breaks."
NOTIFICATIONS (Future)
Examples:

"Warning: Your burnout risk has increased."
"Your sleep pattern suggests elevated fatigue risk."
SETTINGS PAGE
Features:


Profile Settings

Connected Devices

Notification Preferences

Logout
DATABASE TABLES
profiles

id: uuid
full_name: string
email: string
avatar_url: string
created_at: timestamp

health_metrics

id: uuid
user_id: uuid
sleep_hours: number
screen_time: number
activity_level: number
stress_level: number
mood_level: number
productivity_level: number
heart_rate: number
created_at: timestamp

checkins

id: uuid
user_id: uuid
mood: number
stress: number
energy: number
notes: string
created_at: timestamp

predictions

id: uuid
user_id: uuid
risk_score: number
risk_level: string
predicted_window: string
signals: json
created_at: timestamp

connected_devices

id: uuid
user_id: uuid
provider: string
access_token: string
refresh_token: string
connected_at: timestamp

SECURITY
Enable Row Level Security:


auth.uid() = user_id


Apply to:


health_metrics

checkins

predictions

connected_devices


DESIGN SYSTEM
Style Direction:
Apple-inspired health-tech design
Principles:


Minimal

Modern

Photography-first

Spacious layouts

Very low visual noise

Single accent color

Card-based UI

Large whitespace

Strong typography hierarchy
Colors:
Primary:


#0066cc


Background:


#ffffff
#f5f5f7
#272729

Text:


#1d1d1f
#ffffff

Border radius:


8px
18px
9999px

Typography:
Headlines:


SF Pro Display
font-weight:600

Body:


SF Pro Text
17px

Buttons:
Primary:


Blue pill buttons
Cards:


Minimal borders

No heavy shadows
Spacing:
8px system
IMPLEMENTATION RULES

Demo mode must always work without login

Fitbit integration must remain optional

Missing Fitbit data should never break the application

Use loading states

Use skeleton placeholders

Use reusable components

Use feature-based architecture

Separate business logic from UI

Strong TypeScript typing

Fully responsive

Use Supabase only

Never use Firebase
FINAL GOAL
Build a predictive health-tech platform that warns users before burnout occurs through behavioral patterns and early AI-driven analysis rather than post-event reporting.

prodrome/
├── public/
│   ├── favicon.ico
│   ├── demo/
│   │   ├── judge-user.json
│   │   └── sample-patterns.json
│   └── images/
│       └── hero-illustration.svg
│
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   ├── burnout-icon.svg
│   │   └── empty-state.svg
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── ProgressRing.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── Input.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TopBar.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   │
│   │   └── charts/
│   │       ├── BurnoutGauge.tsx
│   │       ├── TrendLine.tsx
│   │       ├── SleepChart.tsx
│   │       ├── ScreenTimeChart.tsx
│   │       ├── ActivityChart.tsx
│   │       └── SignalCard.tsx
│   │
│   ├── features/
│   │
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── SignupForm.tsx
│   │   │   │   └── SocialAuthButtons.tsx
│   │   │   └── hooks/
│   │   │       └── useAuthMutation.ts
│   │   │
│   │   ├── onboarding/
│   │   │   ├── components/
│   │   │   │   ├── WelcomeSteps.tsx
│   │   │   │   ├── DataSourceSelect.tsx
│   │   │   │   └── HealthPermissions.tsx
│   │   │   └── hooks/
│   │   │       └── useOnboarding.ts
│   │   │
│   │   ├── demo/
│   │   │   ├── components/
│   │   │   │   ├── DemoBanner.tsx
│   │   │   │   ├── DemoSelector.tsx
│   │   │   │   └── DemoMetrics.tsx
│   │   │   └── hooks/
│   │   │       └── useDemoData.ts
│   │   │
│   │   ├── wearable/
│   │   │   ├── components/
│   │   │   │   ├── FitbitConnect.tsx
│   │   │   │   ├── DeviceCard.tsx
│   │   │   │   └── SyncStatus.tsx
│   │   │   └── hooks/
│   │   │       └── useFitbit.ts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── RiskSummary.tsx
│   │   │   │   ├── SignalsGrid.tsx
│   │   │   │   ├── WeeklyTrend.tsx
│   │   │   │   ├── BurnoutPrediction.tsx
│   │   │   │   └── HealthOverview.tsx
│   │   │   └── hooks/
│   │   │       └── useDashboardData.ts
│   │   │
│   │   ├── checkin/
│   │   │   ├── components/
│   │   │   │   ├── MoodCheckIn.tsx
│   │   │   │   ├── StressInput.tsx
│   │   │   │   └── CheckInStreak.tsx
│   │   │   └── hooks/
│   │   │       └── useCheckinMutation.ts
│   │   │
│   │   ├── predictions/
│   │   │   ├── components/
│   │   │   │   ├── RiskBreakdown.tsx
│   │   │   │   ├── PredictionTimeline.tsx
│   │   │   │   └── TriggerSignals.tsx
│   │   │   └── hooks/
│   │   │       └── usePrediction.ts
│   │   │
│   │   ├── insights/
│   │   │   ├── components/
│   │   │   │   ├── InsightCard.tsx
│   │   │   │   └── InsightFeed.tsx
│   │   │   └── hooks/
│   │   │       └── useInsightQueries.ts
│   │   │
│   │   └── settings/
│   │       ├── components/
│   │       │   ├── ConnectedDevices.tsx
│   │       │   ├── NotificationPrefs.tsx
│   │       │   └── ProfileSettings.tsx
│   │       └── hooks/
│   │           └── useSettingsMutation.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useBurnoutScore.ts
│   │   ├── usePredictions.ts
│   │   ├── useWearableData.ts
│   │   ├── useCheckins.ts
│   │   └── useInsights.ts
│   │
│   ├── lib/
│   │   ├── firebase.ts
│   │   ├── fitbit.ts
│   │   ├── burnoutEngine.ts
│   │   ├── predictionModel.ts
│   │   ├── demoData.ts
│   │   └── analytics.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── fitbit.service.ts
│   │   ├── prediction.service.ts
│   │   └── dashboard.service.ts
│   │
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── DemoPage.tsx
│   │   ├── OnboardingPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── PredictionPage.tsx
│   │   ├── InsightsPage.tsx
│   │   └── SettingsPage.tsx
│   │
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── DemoContext.tsx
│   │   └── PredictionContext.tsx
│   │
│   ├── data/
│   │   ├── demoUsers.ts
│   │   ├── predictionMock.ts
│   │   └── sampleSignals.ts
│   │
│   ├── types/
│   │   ├── auth.ts
│   │   ├── prediction.ts
│   │   ├── health.ts
│   │   └── index.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .env
├── .env.example
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md