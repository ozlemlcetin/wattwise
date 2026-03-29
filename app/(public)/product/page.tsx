import React from "react";
import Link from "next/link";
import {
  Upload,
  BarChart2,
  Target,
  Bell,
  FileText,
  Gift,
  ArrowRight,
  CheckCircle,
  Zap,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    id: "data-ingestion",
    icon: Upload,
    title: "Data Ingestion Module",
    tagline: "Start from what you already have",
    color: "bg-blue-50 text-blue-600",
    badge: "Step 1",
    description:
      "Upload your existing electricity and water data as CSV or Excel exports. WattWise accepts standard billing exports and meter data formats, validates your records on upload, and maps them to a structured timeline for baseline and savings analysis.",
    operatorValue:
      "No new software integrations. No hardware. If you can export a spreadsheet, you can onboard to WattWise.",
    features: [
      "CSV and Excel (.xlsx) upload",
      "Auto-validation and error flagging",
      "Downloadable sample template",
      "Upload history and status tracking",
      "Partial import handling with issue log",
      "Data period and building mapping",
    ],
    preview: [
      { label: "File format", value: "CSV / Excel" },
      { label: "Typical import time", value: "< 2 minutes" },
      { label: "Validation", value: "Automatic" },
      { label: "Template available", value: "Yes, downloadable" },
    ],
  },
  {
    id: "fairscore",
    icon: Target,
    title: "FairScore Baseline Engine",
    tagline: "Targets that are explainable and defensible",
    color: "bg-emerald-50 text-emerald-600",
    badge: "Core Engine",
    description:
      "FairScore is WattWise's statistical baseline engine. It calculates monthly savings targets by combining historical year-over-year consumption data, seasonal adjustment curves, and occupancy-proxy normalisation. The result is a fair monthly target that can be explained clearly to residents and stakeholders — reducing dispute risk.",
    operatorValue:
      "Fair targets reduce resident complaints. Explainable logic supports institutional trust. Anomaly detection flags unusual patterns before they distort results.",
    features: [
      "Seasonal year-over-year averaging",
      "Occupancy-proxy normalisation",
      "Monthly target setting per building",
      "Baseline history and trend view",
      "Anomaly detection for spikes and gaming",
      "Explainability panel for operator review",
    ],
    preview: [
      { label: "Methodology", value: "Statistical (Python)" },
      { label: "Adjustments", value: "Seasonal + Occupancy" },
      { label: "Anomaly check", value: "Built-in" },
      { label: "Explainability", value: "Full audit trail" },
    ],
  },
  {
    id: "savings",
    icon: BarChart2,
    title: "Savings Dashboard",
    tagline: "Track progress against baseline, month by month",
    color: "bg-violet-50 text-violet-600",
    badge: "Analytics",
    description:
      "The savings dashboard shows electricity and water consumption versus the FairScore baseline at building and portfolio level. Operators can view monthly, year-over-year, and cumulative savings, filter by building, and identify which buildings are on track and which need attention.",
    operatorValue:
      "Single dashboard view across your portfolio. No manual aggregation. Clear visualisation of whether you are above or below your baseline target each month.",
    features: [
      "Building and portfolio-level views",
      "Electricity and water tabs",
      "Monthly and cumulative savings charts",
      "Savings vs. baseline overlay",
      "Date range and building filters",
      "KPI summary cards",
    ],
    preview: [
      { label: "Utility types", value: "Electricity + Water" },
      { label: "View modes", value: "Monthly / YTD / YoY" },
      { label: "Building filter", value: "Yes" },
      { label: "Export", value: "CSV" },
    ],
  },
  {
    id: "incentives",
    icon: Gift,
    title: "Incentive & Perk Workflow",
    tagline: "Reward savings without manual administration",
    color: "bg-amber-50 text-amber-600",
    badge: "Behaviour Change",
    description:
      "Configure savings milestones and link them to rewards — café vouchers, campus store credits, sustainability certificates, or priority room selection. WattWise checks eligibility each cycle against the FairScore baseline and surfaces the results in your dashboard. No manual tracking required.",
    operatorValue:
      "Lightweight incentive management with minimal operator overhead. Residents receive structured feedback. Gaming protection built into the baseline engine.",
    features: [
      "Tier-based incentive configuration",
      "Milestone and threshold setup",
      "Eligibility checked automatically",
      "Social impact certificate output",
      "Partner perk catalogue preview",
      "Gaming anomaly flagging",
    ],
    preview: [
      { label: "Tiers", value: "Configurable (1–5)" },
      { label: "Eligibility check", value: "Automated" },
      { label: "Certificate output", value: "Yes" },
      { label: "Admin effort", value: "Low" },
    ],
  },
  {
    id: "alerts",
    icon: Bell,
    title: "Alerts & Anomaly Monitoring",
    tagline: "Catch unusual patterns before they become problems",
    color: "bg-red-50 text-red-600",
    badge: "Monitoring",
    description:
      "WattWise continuously monitors uploaded consumption data against the FairScore baseline. Unusual spikes, off-peak anomalies, missing uploads, and potential gaming patterns are flagged with severity levels and building links. Operators can annotate alerts with notes and mark them as resolved.",
    operatorValue:
      "Early visibility into equipment issues, data gaps, or unusual consumption patterns. Anomaly review is built into the incentive cycle to prevent unfair reward outcomes.",
    features: [
      "Real-time anomaly feed",
      "Severity classification (critical / warning / info)",
      "Spike detection vs. FairScore baseline",
      "Missing data alerts",
      "Gaming-risk flagging",
      "Resolution notes and status tracking",
    ],
    preview: [
      { label: "Alert types", value: "Spike, Anomaly, Missing, Gaming" },
      { label: "Severity levels", value: "3 (Critical / Warning / Info)" },
      { label: "Resolution workflow", value: "Note + status update" },
      { label: "Building link", value: "Direct" },
    ],
  },
  {
    id: "reports",
    icon: FileText,
    title: "Reports & ESG Outputs",
    tagline: "Operator-ready reporting without manual work",
    color: "bg-teal-50 text-teal-600",
    badge: "Reporting",
    description:
      "WattWise generates monthly, quarterly, and annual summaries for building and portfolio level. ESG-style outputs include kWh savings, m³ water savings, estimated CO₂-equivalent reduction, and anomaly/alert summaries. Reports are exportable as PDF or CSV for operator records and stakeholder updates.",
    operatorValue:
      "Structured reporting without spreadsheet assembly. Suitable for internal stakeholder communication, university sustainability tracking, and ESG documentation.",
    features: [
      "Monthly, quarterly, and annual reports",
      "Building and portfolio-level summaries",
      "kWh, m³, and CO₂e savings figures",
      "Anomaly and alert summary included",
      "PDF and CSV export",
      "Report history and regeneration",
    ],
    preview: [
      { label: "Report types", value: "Monthly / Quarterly / Annual / ESG" },
      { label: "CO₂ estimation", value: "Grid factor applied" },
      { label: "Export formats", value: "PDF, CSV" },
      { label: "Generation", value: "On-demand + scheduled" },
    ],
  },
];

export default function ProductPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf9] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="success" className="mb-6">Platform Overview</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            Every module. One platform.
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            WattWise is structured around six focused modules that cover the
            complete operator workflow — from data ingestion to sustainability
            reporting — without hardware installation or enterprise complexity.
          </p>
        </div>
      </div>

      {/* Module breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {modules.map((mod, i) => (
          <div
            key={mod.id}
            id={mod.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${mod.color}`}>
                  <mod.icon className="w-5 h-5" />
                </div>
                <Badge variant="secondary">{mod.badge}</Badge>
              </div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-2">{mod.title}</h2>
              <p className="text-[#147a5e] font-medium mb-4">{mod.tagline}</p>
              <p className="text-[#475569] leading-relaxed mb-6">{mod.description}</p>

              <div className="bg-[#f0fdf9] rounded-xl p-4 mb-6 border border-[#d1fae5]">
                <p className="text-sm text-[#0f172a] font-medium mb-1">Operator value</p>
                <p className="text-sm text-[#475569]">{mod.operatorValue}</p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#475569]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#147a5e] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-xs text-[#64748b] uppercase tracking-wide font-medium mb-4">
                Module details
              </p>
              <div className="space-y-3 mb-6">
                {mod.preview.map((p) => (
                  <div key={p.label} className="flex justify-between items-center py-2 border-b border-[#e2e8f0] last:border-0">
                    <span className="text-sm text-[#64748b]">{p.label}</span>
                    <span className="text-sm font-medium text-[#0f172a]">{p.value}</span>
                  </div>
                ))}
              </div>
              {/* Module visual mock */}
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-6 h-6 rounded flex items-center justify-center ${mod.color}`}>
                    <mod.icon className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-medium text-[#0f172a]">{mod.title}</span>
                </div>
                <div className="space-y-2">
                  {[80, 65, 90, 45].map((w, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-[#e2e8f0]">
                        <div
                          className="h-1.5 rounded-full bg-[#147a5e]"
                          style={{ width: `${w}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#94a3b8]">{w}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Ready to see it with your data?
          </h2>
          <p className="text-[#475569] mb-8">
            Book a discovery call to walk through the platform with real building
            scenarios and discuss what a pilot would look like for your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg">
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
