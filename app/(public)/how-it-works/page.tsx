import React from "react";
import Link from "next/link";
import {
  Upload,
  Target,
  Settings,
  BarChart2,
  Download,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Upload your utility bills",
    duration: "Day 1 — under 30 minutes",
    desc: "Upload the electronic utility bills (e-bill / e-invoice) you receive from your billing provider. WattWise accepts standard electronic bill formats — PDF, XML, and Excel. The system reads consumption data automatically, validates, and ingests the records — flagging any fields that need attention.",
    details: [
      "Accepted formats: PDF, XML, Excel (.xlsx)",
      "Minimum recommended history: 12 months",
      "Bill format guide available",
      "Validation report shown on upload",
      "Partial extractions handled with issue log",
    ],
    note: "No specialist IT skills needed. If you receive an electronic utility bill, you can upload to WattWise.",
  },
  {
    num: "02",
    icon: Target,
    title: "WattWise builds your FairScore baseline",
    duration: "Automated — runs immediately after upload",
    desc: "Once your data is ingested, the FairScore engine calculates seasonally adjusted, occupancy-normalised monthly baselines. It uses year-over-year historical averages to establish what 'normal' looks like for your buildings at different points in the year, then normalises for occupancy-level changes. You can review the baseline logic, assumptions, and anomaly flags in the Baseline & Targets page.",
    details: [
      "Seasonal adjustment using YoY averages",
      "Occupancy-proxy normalisation applied",
      "Monthly targets set per building",
      "Anomaly detection runs automatically",
      "Full baseline explainability view",
    ],
    note: "Every baseline can be explained. The logic is visible to operators — not a black box.",
  },
  {
    num: "03",
    icon: Settings,
    title: "Set targets and configure incentive logic",
    duration: "Day 2–5 — operator-configured",
    desc: "Review the suggested baseline targets and configure your incentive tiers. WattWise supports multiple savings thresholds — for example, 5% below baseline triggers a small reward, 10% triggers a more substantial one, and 15%+ earns a sustainability certificate. Link each tier to your chosen perks and the system handles eligibility checking automatically each cycle.",
    details: [
      "Configurable savings threshold tiers",
      "Perk / reward linking per tier",
      "Eligibility checked automatically",
      "Gaming anomaly detection active",
      "Preview eligibility before launch",
    ],
    note: "You retain full control of what rewards are offered. WattWise handles the eligibility logic.",
  },
  {
    num: "04",
    icon: BarChart2,
    title: "Monitor savings, anomalies, and reporting status",
    duration: "Ongoing — monthly upload cadence",
    desc: "As each month's data arrives, upload it and WattWise updates savings calculations, checks for anomalies, and refreshes your dashboard. The Savings Analytics page shows progress against baseline at building and portfolio level. The Alerts page flags unusual spikes, missing uploads, or patterns that need review before the incentive cycle closes.",
    details: [
      "Monthly consumption vs. FairScore baseline",
      "Building and portfolio views",
      "Electricity and water tracked separately",
      "Alert feed updated on each upload",
      "Missing data flagged proactively",
    ],
    note: "The upload cadence is monthly. Operators do not need to actively monitor the platform between uploads.",
  },
  {
    num: "05",
    icon: Download,
    title: "Export reports and validate outcomes",
    duration: "Monthly, quarterly, or on-demand",
    desc: "At the end of each reporting period, WattWise generates structured summaries covering electricity and water savings, estimated CO₂-equivalent reduction, and anomaly/alert status. These outputs are available as operator-ready PDFs. ESG-style annual summaries are generated at the end of each academic or financial year.",
    details: [
      "Monthly, quarterly, and annual summaries",
      "kWh, m³, and CO₂e savings figures",
      "Building and portfolio-level breakdowns",
      "Anomaly and alert summary included",
      "PDF export formats",
    ],
    note: "Reports are structured for internal records, institutional sustainability tracking, and stakeholder communication.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf9] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="success" className="mb-6">How It Works</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            From upload to insight in five steps
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            WattWise is designed to be deployed quickly from data you already
            have. No hardware installation. No lengthy onboarding. No specialist
            staff required.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {steps.map((step, i) => (
          <div key={step.num} className="relative">
            {i < steps.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-px bg-[#e2e8f0] -mb-16" />
            )}
            <div className="flex gap-8">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#028090] text-white flex items-center justify-center font-bold relative z-10">
                  {step.num}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-[#028090]" />
                  <span className="flex items-center gap-1.5 text-xs text-[#64748b]">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">{step.title}</h2>
                <p className="text-[#475569] leading-relaxed mb-5">{step.desc}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-[#475569]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#028090] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#f0fdf9] border border-[#d1fae5] rounded-xl px-4 py-3">
                  <p className="text-sm text-[#0f172a]">
                    <span className="font-medium">Note: </span>
                    {step.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#0f172a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start your pilot with one building
          </h2>
          <p className="text-[#94a3b8] mb-8 text-lg">
            WattWise is structured for pilot validation. Start with a single
            building, validate the baseline and savings approach, then expand
            across your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Book a Discovery Call <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="border-[#475569] text-white hover:bg-[#1e293b]">
                Explore Dashboard Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
