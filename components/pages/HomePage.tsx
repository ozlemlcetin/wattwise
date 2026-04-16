"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Upload,
  BarChart2,
  Target,
  Bell,
  FileText,
  Gift,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Zap,
  Droplets,
  TrendingDown,
  Shield,
  Building2,
  Users,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Does WattWise require hardware installation?",
    a: "No. WattWise is explicitly hardware-free. Operators upload their existing utility bills (electronic bills received from your billing or metering provider) and the platform handles the rest. There is no sensor installation, no IoT procurement, and no infrastructure requirement.",
  },
  {
    q: "What data do I need to get started?",
    a: "Ideally, 12–24 months of building-level electricity and/or water utility bills. This allows WattWise to build a fair seasonal baseline. Operators with less history can still get started — the baseline refines over time.",
  },
  {
    q: "What is FairScore and why does it matter?",
    a: "FairScore is WattWise's baseline engine. It adjusts targets for seasonal variation, occupancy levels, and historical year-over-year patterns. This means targets are defensible and explainable — residents and operators understand why a target was set, reducing fairness disputes.",
  },
  {
    q: "How does WattWise avoid incentive gaming?",
    a: "The FairScore engine includes anomaly detection logic that flags unusual dips during incentive evaluation windows followed by rebounds. Operators are alerted to these patterns for review before incentives are validated.",
  },
  {
    q: "Is WattWise suitable for a single building or a multi-building portfolio?",
    a: "Both. WattWise supports single-building pilots as well as portfolio-level dashboards across multiple buildings. Baseline, savings, alerts, and reports are available at both the building and portfolio level.",
  },
  {
    q: "Can WattWise integrate with our existing billing or ERP systems?",
    a: "In the current MVP, data is uploaded via electronic bills (e-bill / e-invoice formats). Direct integrations with billing or ERP systems are on the product roadmap and can be scoped as part of a custom pilot agreement.",
  },
];

const trustItems = [
  "Hardware-free deployment",
  "Bill upload onboarding",
  "Explainable FairScore baselines",
  "Monthly operator reports",
  "Anomaly monitoring built-in",
  "ESG-ready output formats",
];

const modules = [
  {
    icon: Upload,
    title: "Bill Upload",
    desc: "Upload electronic utility bills received from your metering or billing provider. No new hardware needed.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Target,
    title: "FairScore Baselines",
    desc: "Statistically adjusted monthly targets that account for season, occupancy, and prior-year patterns.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: BarChart2,
    title: "Savings Analytics",
    desc: "Track electricity and water savings versus baseline at building and portfolio level, month over month.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Gift,
    title: "Incentive & Perks",
    desc: "Configure savings tiers and reward milestones. Low-operational effort — no manual tracking required.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Bell,
    title: "Alerts & Anomalies",
    desc: "Spot unusual spikes, missing data, and potential incentive gaming before they become problems.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: FileText,
    title: "ESG Reports",
    desc: "Export monthly, quarterly, and annual sustainability-style summaries ready for operator reporting.",
    color: "bg-teal-50 text-teal-600",
  },
];

const steps = [
  {
    num: "01",
    title: "Upload your utility bills",
    desc: "Upload the electronic utility bills you receive from your billing provider. WattWise reads, validates, and ingests the consumption data automatically.",
  },
  {
    num: "02",
    title: "WattWise builds your FairScore baseline",
    desc: "The system calculates seasonally adjusted, occupancy-normalised baselines using historical year-over-year data. Each baseline is explainable and auditable.",
  },
  {
    num: "03",
    title: "Set targets and configure incentive logic",
    desc: "Define savings thresholds and link them to your chosen perks or milestone rewards. WattWise handles eligibility checking each cycle.",
  },
  {
    num: "04",
    title: "Monitor savings, anomalies, and reporting",
    desc: "Your dashboard shows progress against baseline, flags unusual patterns, and tracks alert status across all your buildings in one view.",
  },
  {
    num: "05",
    title: "Export reports and validate outcomes",
    desc: "Generate monthly, quarterly, and ESG-style reports for operator records, stakeholder updates, or sustainability documentation.",
  },
];

const useCases = [
  {
    icon: Building2,
    label: "Campus Dormitories",
    desc: "University-managed housing where utility costs are bundled into term fees. Fair per-building baselines reduce cost overruns and support sustainability commitments.",
  },
  {
    icon: Users,
    label: "Private Student Residences",
    desc: "Purpose-built student accommodation operators managing multiple buildings. Portfolio-level visibility and low-effort incentive management.",
  },
  {
    icon: Leaf,
    label: "Hostels & Short-Stay",
    desc: "High-turnover accommodation where usage patterns shift frequently. Anomaly detection and occupancy-adjusted baselines keep comparisons fair.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf9] via-white to-[#f0f9ff] -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0f4f6]/40 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Badge variant="success" className="mb-6 text-xs">
              Hardware-Free · No CapEx · Pilot-Ready
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight tracking-tight mb-6">
              Reduce utility waste in shared housing —{" "}
              <span className="text-[#028090]">without installing hardware.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed mb-8 max-w-2xl">
              WattWise helps dormitory and accommodation operators upload utility
              bills, set fair savings baselines, monitor anomalies, and
              generate operator-ready sustainability reports — through a simple
              browser-based platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Dashboard Demo
                </Button>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-[#475569]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#028090] shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bill upload demo */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sample bill */}
            <div className="rounded-2xl border border-[#e2e8f0] bg-white shadow-xl overflow-hidden">
              <div className="bg-[#0f172a] px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="ml-4 text-xs text-[#64748b] font-mono">
                  Örnek Elektronik Fatura · Sample Bill
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1">Elektrik Faturası</p>
                    <p className="font-bold text-[#0f172a] text-lg">ITU North Dorm A</p>
                    <p className="text-xs text-[#64748b]">Fatura No: 2026-MAR-00481</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#64748b]">Dönem</p>
                    <p className="font-semibold text-[#0f172a]">Mart 2026</p>
                  </div>
                </div>
                <div className="border-t border-[#e2e8f0] pt-4 space-y-2 mb-4">
                  {[
                    { label: "Tüketim (Electricity)", value: "38,100 kWh" },
                    { label: "Su Tüketimi (Water)", value: "1,105 m³" },
                    { label: "Abone No", value: "TR-48201-A" },
                    { label: "Bina / Blok", value: "ITU North Dorm A" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span className="text-[#64748b]">{row.label}</span>
                      <span className="font-medium text-[#0f172a]">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#f0fdf9] rounded-xl px-4 py-3 flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#028090] shrink-0" />
                  <p className="text-xs text-[#028090] font-medium">
                    WattWise bu faturayı otomatik olarak okur ve baseline ile karşılaştırır.
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard result */}
            <div className="rounded-2xl border border-[#e2e8f0] bg-white shadow-xl overflow-hidden">
              <div className="bg-[#0f172a] px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="ml-4 text-xs text-[#64748b] font-mono">
                  wattwise.app/dashboard
                </span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Portfolio Savings YTD", value: "−9.3%", sub: "vs. FairScore baseline", icon: TrendingDown, color: "text-emerald-600" },
                  { label: "Electricity Saved", value: "38,200 kWh", sub: "Jan–Mar 2026", icon: Zap, color: "text-blue-600" },
                  { label: "Water Saved", value: "1,060 m³", sub: "Jan–Mar 2026", icon: Droplets, color: "text-cyan-600" },
                  { label: "Open Alerts", value: "3", sub: "2 buildings affected", icon: Bell, color: "text-amber-600" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#f8fafc] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-xs text-[#64748b] font-medium">{stat.label}</span>
                    </div>
                    <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-[#94a3b8] mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              The problem with bundled utilities
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
              When electricity and water costs are bundled into rent or accommodation
              fees, residents do not directly feel the financial cost — but the
              operator pays the bill.
            </p>
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
              This creates systematic waste: no signal, no accountability, no easy
              way to set fair targets or reward improvement. Hardware-based
              sub-metering exists — but it requires significant capital expenditure
              and installation overhead that most accommodation operators cannot
              justify.
            </p>
            <p className="text-[#028090] font-semibold text-lg">
              WattWise solves this from the data operators already have.
            </p>
          </div>
        </div>
      </section>

      {/* Why WattWise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Built for operators in bundled-utility settings
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              WattWise is designed for the specific constraints of dormitories,
              campus housing, and short-stay accommodation — not generic enterprise
              energy management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "No hardware. No CapEx.",
                desc: "Deploy in days from your existing billing exports. No sensor procurement, no installation, no on-site IT requirements.",
              },
              {
                icon: Target,
                title: "Fair and explainable targets",
                desc: "FairScore adjusts baselines for season and occupancy. Every target can be explained to residents, reducing dispute risk.",
              },
              {
                icon: FileText,
                title: "Operator-ready reporting",
                desc: "Monthly, quarterly, and ESG-style summaries your team can actually use — structured for operator records and stakeholder updates.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f8fafc] rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#e0f4f6] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#028090]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              WattWise covers the complete operator workflow from data ingestion to
              sustainability reporting in one lightweight platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <Card key={mod.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${mod.color}`}>
                    <mod.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[#0f172a] mb-2">{mod.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{mod.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              From upload to insight in five steps
            </h2>
            <p className="text-[#475569] text-lg max-w-xl mx-auto">
              No lengthy onboarding. No hardware installation. No specialist staff required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#e2e8f0] -translate-y-0.5 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#028090] text-white flex items-center justify-center font-bold text-sm mb-4">
                    {step.num}
                  </div>
                  <h4 className="font-semibold text-[#0f172a] text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/how-it-works">
              <Button variant="outline">
                See the full walkthrough
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Designed for shared accommodation operators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.label} className="bg-white rounded-2xl border border-[#e2e8f0] p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#e0f4f6] rounded-xl flex items-center justify-center mb-6">
                  <uc.icon className="w-6 h-6 text-[#028090]" />
                </div>
                <h3 className="font-semibold text-[#0f172a] text-lg mb-3">{uc.label}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/use-cases">
              <Button variant="outline">
                Explore all use cases
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ESG angle */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-[#1e3a30] text-[#6ee7b7] text-xs border-0">
                ESG & Sustainability Reporting
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">
                Turn savings data into structured sustainability outputs
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                WattWise generates monthly, quarterly, and annual summaries that
                operators can use for internal records, institutional reporting, and
                stakeholder updates.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "kWh and m³ savings vs. FairScore baseline",
                  "Estimated CO₂-equivalent reduction",
                  "Building and portfolio-level breakdowns",
                  "Anomaly and alert summary included",
                  "Export-ready PDF formats",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                    <CheckCircle className="w-4 h-4 text-[#028090] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/product">
                <Button className="bg-[#028090] hover:bg-[#016070]">
                  See Reports Module
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Electricity Saved (Full Year)", value: "142,600 kWh", sub: "Illustrative — 5 buildings, 2025" },
                { label: "Water Saved (Full Year)", value: "3,940 m³", sub: "Illustrative — 5 buildings, 2025" },
                { label: "CO₂ Equivalent Reduction", value: "59.2 tCO₂e", sub: "Using grid average factor" },
                { label: "Avg Savings vs Baseline", value: "−9.3%", sub: "Portfolio-level, occupancy-adjusted" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#1e293b] rounded-xl p-5">
                  <div className="text-2xl font-bold text-[#6ee7b7] mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-white mb-1">{stat.label}</div>
                  <div className="text-xs text-[#64748b]">{stat.sub}</div>
                </div>
              ))}
              <p className="col-span-2 text-xs text-[#475569] mt-2">
                * All figures are illustrative estimates based on simulated pilot scenarios. Actual outcomes depend on operator data and building characteristics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f8fafc] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Start with a pilot. Scale from there.
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto mb-8">
              WattWise is structured for pilot engagement first — validate savings
              with your real data before committing to a long-term subscription.
              Pricing is based on building size and portfolio scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing & ROI
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg">
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-[#0f172a] text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748b] shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#028090]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to reduce utility waste in your buildings?
          </h2>
          <p className="text-lg text-[#a7f3d0] mb-10 max-w-2xl mx-auto">
            Book a discovery call to discuss your buildings, review a data sample,
            and explore whether WattWise is a fit for your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#028090] hover:bg-[#f0fdf9] w-full sm:w-auto"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
