# WattWise — Operator-Facing Web Platform

AI Coach for Utility Savings · Operator dashboard and public website · MVP stage

**Live demo:** [https://wattwise-tau.vercel.app](https://wattwise-tau.vercel.app)

---

## Overview

WattWise is a B2B2C behaviour-change platform for dormitories, campus housing, hostels, and short-stay accommodation operators. This repository contains the **operator-facing web platform** — a combined public marketing website and authenticated operator dashboard prototype.

The end-user (resident/guest) mobile experience is a separate product and is not part of this codebase.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To access the dashboard demo: visit [http://localhost:3000/login](http://localhost:3000/login) and enter any email and password (demo mode — no real authentication).

---

## Project structure

```
wattwise/
├── app/
│   ├── (public)/              # Public website pages (shared layout)
│   │   ├── layout.tsx         # PublicNav + Footer wrapper
│   │   ├── product/           # Product / modules page
│   │   ├── how-it-works/      # Step-by-step walkthrough
│   │   ├── use-cases/         # Operator persona use cases
│   │   ├── pricing/           # Pricing cards + ROI calculator
│   │   ├── about/             # Mission, team, values
│   │   └── contact/           # Demo request form
│   ├── dashboard/             # Authenticated operator dashboard
│   │   ├── layout.tsx         # Sidebar + header wrapper
│   │   ├── page.tsx           # Dashboard home
│   │   ├── buildings/         # Portfolio buildings list + detail
│   │   ├── upload/            # CSV/Excel data upload workflow
│   │   ├── baseline/          # FairScore baseline & targets
│   │   ├── savings/           # Savings analytics charts + tables
│   │   ├── incentives/        # Incentive tiers + CoachAI campaigns
│   │   ├── alerts/            # Anomaly feed + detail panel
│   │   ├── reports/           # ESG report cards + preview
│   │   └── settings/          # Org, account, notification settings
│   ├── login/                 # Mock login page
│   ├── page.tsx               # Root → homepage
│   ├── layout.tsx             # Root layout (fonts, metadata)
│   └── globals.css            # Global styles + CSS variables
├── components/
│   ├── layout/
│   │   ├── PublicNav.tsx       # Sticky public navigation
│   │   ├── Footer.tsx          # Public footer
│   │   ├── DashboardSidebar.tsx # Collapsible dashboard sidebar
│   │   └── DashboardHeader.tsx  # Dashboard breadcrumb + status bar
│   ├── pages/
│   │   └── HomePage.tsx        # Full landing page component
│   └── ui/
│       ├── button.tsx          # Button variants
│       ├── card.tsx            # Card + CardContent etc.
│       ├── badge.tsx           # Status badges
│       ├── input.tsx           # Form input
│       ├── textarea.tsx        # Form textarea
│       ├── select.tsx          # Native select wrapper
│       └── separator.tsx       # Divider
├── data/
│   └── mock.ts                # All mock data (buildings, metrics, alerts, etc.)
├── types/
│   └── index.ts               # TypeScript interfaces
└── lib/
    └── utils.ts               # cn(), formatNumber(), formatCurrency(), etc.
```

---

## Pages

### Public website
| Route | Description |
|---|---|
| `/` | Landing page (hero, modules, how it works, use cases, ESG, FAQ, CTA) |
| `/product` | Module-by-module product breakdown |
| `/how-it-works` | 5-step operator walkthrough |
| `/use-cases` | Campus dorms, PBSA, hostels, short-stay |
| `/pricing` | Plan cards + interactive ROI calculator |
| `/about` | Mission, team, values |
| `/contact` | Demo request form with next-steps panel |
| `/login` | Mock login → dashboard |

### Operator dashboard
| Route | Description |
|---|---|
| `/dashboard` | Portfolio KPIs, savings chart, buildings overview, alert preview |
| `/dashboard/buildings` | Building list with detail panel |
| `/dashboard/upload` | Drag-and-drop upload with validation states, history |
| `/dashboard/baseline` | FairScore baseline charts, target table, methodology explainer |
| `/dashboard/savings` | Electricity/water analytics with charts and monthly table |
| `/dashboard/incentives` | Tier cards, eligibility chart, CoachAI campaign management |
| `/dashboard/alerts` | Anomaly feed with severity, detail panel, resolution workflow |
| `/dashboard/reports` | Report cards, ESG summary, preview panel, export buttons |
| `/dashboard/settings` | Org, account, notifications, data preferences, pilot settings |

---

## What is mock / demo

Everything in this repository uses local mock data. There is no backend, no real authentication, and no live data connections.

- `data/mock.ts` — all building records, monthly metrics, alerts, upload history, reports, incentive tiers, and coaching campaigns
- Login accepts any email/password combination and redirects to the dashboard
- Upload drag-and-drop simulates a successful import after a short delay
- Report export buttons do not download real files
- All savings and ESG figures are illustrative

---

## Tech stack

| Technology | Role |
|---|---|
| Next.js 16 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Recharts | Data visualisation |
| Lucide React | Icons |
| clsx + tailwind-merge | Class name composition |

---

## Suggested next steps for backend integration

1. **Authentication** — Replace mock login with NextAuth.js or a Supabase/Auth0 session
2. **Database** — Store buildings, uploads, metrics, alerts in Postgres or Supabase
3. **FairScore engine** — Connect to a Python/FastAPI service that runs the baseline calculation
4. **Upload processing** — Parse uploaded CSV/Excel in a server action or API route, store to DB
5. **Report generation** — Generate PDFs with a service like Puppeteer or a PDF API
6. **CoachAI messaging** — Connect to an email/push notification provider for resident-facing campaigns
7. **Real-time alerts** — WebSocket or polling for live anomaly detection results

---

## Deployment

The app is deployed on **Vercel** and accessible at:

**[https://wattwise-tau.vercel.app](https://wattwise-tau.vercel.app)**

To run a production build locally:

```bash
npm run build
npm start
```

---

## Notes

- This is an MVP-stage demo. All savings figures are illustrative.
- The resident/guest mobile app is out of scope and not included here.
- Hardware installation is not part of the product — WattWise is explicitly hardware-free.