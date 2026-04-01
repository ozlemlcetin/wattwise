"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Pilot",
    price: "From 3,000 TL",
    period: "/ year",
    description: "Ideal for validating WattWise with 1–2 buildings before wider rollout.",
    badge: null,
    features: [
      "Up to 2 buildings",
      "12 months of baseline history",
      "FairScore baseline engine",
      "Savings analytics dashboard",
      "Monthly data uploads",
      "Anomaly monitoring",
      "Monthly operator reports",
      "Onboarding support included",
    ],
    note: "Pilot pricing is indicative. Final pricing depends on building capacity and data availability.",
    cta: "Start a Pilot",
    ctaStyle: "outline" as const,
  },
  {
    name: "Portfolio",
    price: "From 6,000 TL",
    period: "/ year",
    description: "For operators managing 3–10 buildings who need portfolio-level visibility and reporting.",
    badge: "Most Popular",
    features: [
      "3–10 buildings",
      "FairScore baseline engine",
      "Full savings analytics",
      "Incentive & perk workflow",
      "Anomaly and alert monitoring",
      "Monthly, quarterly, and annual reports",
      "ESG-style output formats",
      "Priority onboarding support",
    ],
    note: "Pricing scales with number of buildings and total occupancy. Custom pricing available.",
    cta: "Book a Demo",
    ctaStyle: "default" as const,
  },
  {
    name: "Enterprise / Custom",
    price: "Custom",
    period: "",
    description: "For larger portfolios, institutional operators, or operators requiring custom integrations or reporting.",
    badge: null,
    features: [
      "10+ buildings",
      "Custom baseline configuration",
      "Bespoke reporting templates",
      "API data ingestion (roadmap)",
      "Dedicated onboarding manager",
      "SLA support",
      "Custom ESG output formats",
      "Pilot-to-scale contract structure",
    ],
    note: "Reach out to discuss your specific portfolio and requirements.",
    cta: "Contact Us",
    ctaStyle: "outline" as const,
  },
];

const roiInputs = [
  { label: "Number of buildings", key: "buildings", default: 3, min: 1, max: 20 },
  { label: "Total units / rooms", key: "units", default: 200, min: 10, max: 2000 },
  { label: "Annual utility spend (TL)", key: "spend", default: 120000, min: 10000, max: 2000000 },
];

export default function PricingPage() {
  const [buildings, setBuildings] = useState(3);
  const [units, setUnits] = useState(200);
  const [spend, setSpend] = useState(120000);

  const conservativeSavings = spend * 0.06;
  const targetSavings = spend * 0.11;
  const estimatedFee = buildings <= 2 ? 3000 : buildings <= 10 ? 6000 : 15000;
  const conservativeNet = conservativeSavings - estimatedFee;
  const targetNet = targetSavings - estimatedFee;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf9] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="success" className="mb-6">Pricing & ROI</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            Start with a pilot. Scale with confidence.
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            WattWise is structured for pilot validation first. Pricing is based on
            portfolio size and building capacity. The goal is to validate real
            savings with your data before expanding the deployment.
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.badge
                  ? "border-[#028090] shadow-lg ring-1 ring-[#028090]/20"
                  : "border-[#e2e8f0]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="success" className="shadow-sm">{plan.badge}</Badge>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-bold text-[#0f172a]">{plan.price}</span>
                  <span className="text-[#64748b] text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-[#475569]">{plan.description}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <CheckCircle className="w-4 h-4 text-[#028090] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="bg-[#f8fafc] rounded-lg p-3 mb-6">
                <p className="text-xs text-[#64748b]">{plan.note}</p>
              </div>

              <Link href="/contact">
                <Button variant={plan.ctaStyle} className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-4 flex gap-3">
          <Info className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
          <p className="text-sm text-[#92400e]">
            All prices shown are indicative and subject to final scoping. Pricing depends on the number of buildings, total occupancy, data availability, and pilot structure. Performance-based or gain-sharing arrangements may be considered after pilot validation.
          </p>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Illustrative ROI calculator
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Adjust the inputs below to see an illustrative savings scenario. All figures are illustrative estimates based on comparable pilot-stage assumptions. Actual outcomes depend on your building data and baseline analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Number of buildings: <span className="text-[#028090] font-bold">{buildings}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={buildings}
                  onChange={(e) => setBuildings(Number(e.target.value))}
                  className="w-full accent-[#028090]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Total units / rooms: <span className="text-[#028090] font-bold">{units.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={10}
                  max={2000}
                  step={10}
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-[#028090]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Annual utility spend: <span className="text-[#028090] font-bold">{spend.toLocaleString()} TL</span>
                </label>
                <input
                  type="range"
                  min={10000}
                  max={1000000}
                  step={5000}
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full accent-[#028090]"
                />
              </div>

              <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-4">
                <p className="text-xs text-[#92400e]">
                  <strong>Illustrative only.</strong> Savings assumptions (6–11%) are based on comparable shared-accommodation pilot-stage observations. Your actual savings will depend on building data, baseline analysis, and resident engagement. Savings are not guaranteed.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-[#64748b]">Conservative scenario (6% savings)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#64748b]">Estimated annual savings</span>
                      <span className="font-semibold text-emerald-600">{conservativeSavings.toLocaleString(undefined, {maximumFractionDigits: 0})} TL</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#64748b]">Illustrative platform fee</span>
                      <span className="font-semibold text-[#0f172a]">{estimatedFee.toLocaleString()} TL</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-[#e2e8f0] pt-2 mt-2">
                      <span className="font-medium text-[#0f172a]">Illustrative net value</span>
                      <span className={`font-bold ${conservativeNet >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                        {conservativeNet.toLocaleString(undefined, {maximumFractionDigits: 0})} TL
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-[#64748b]">Target scenario (11% savings)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#64748b]">Estimated annual savings</span>
                      <span className="font-semibold text-emerald-600">{targetSavings.toLocaleString(undefined, {maximumFractionDigits: 0})} TL</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#64748b]">Illustrative platform fee</span>
                      <span className="font-semibold text-[#0f172a]">{estimatedFee.toLocaleString()} TL</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-[#e2e8f0] pt-2 mt-2">
                      <span className="font-medium text-[#0f172a]">Illustrative net value</span>
                      <span className={`font-bold ${targetNet >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                        {targetNet.toLocaleString(undefined, {maximumFractionDigits: 0})} TL
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Link href="/contact">
                <Button className="w-full" size="lg">
                  Discuss Your Specific Scenario <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
