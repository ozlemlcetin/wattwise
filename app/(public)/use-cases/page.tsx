import React from "react";
import Link from "next/link";
import { Building2, GraduationCap, Home, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    icon: GraduationCap,
    title: "Campus Dormitories",
    subtitle: "University-managed housing",
    badge: "Primary Use Case",
    problem:
      "University-managed dormitories pay centralised utility bills where students have no financial incentive to reduce consumption. Costs are bundled into term fees, usage is invisible, and there is no scalable mechanism for setting fair individual targets or rewarding improvement.",
    why: "WattWise requires no new infrastructure — just an export from your existing billing system. FairScore baselines are built from historical building-level data and adjusted for term-time occupancy patterns. Operators get per-building savings visibility and anomaly monitoring without adding operational complexity.",
    benefits: [
      "No hardware procurement or installation required",
      "Term-time and holiday occupancy adjustments built in",
      "Per-building baseline and savings tracking",
      "ESG reporting aligned with sustainability commitments",
      "Incentive tiers manageable without manual administration",
      "Anomaly detection supports audit-ready reporting",
    ],
    hwFreeReason:
      "University estates teams cannot justify per-room sensor installation across large dormitory blocks. WattWise works at the building-level aggregation that estates teams already work with.",
    color: "bg-blue-50",
    accent: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Home,
    title: "Private Student Residences",
    subtitle: "Purpose-built student accommodation (PBSA)",
    badge: "High Fit",
    problem:
      "PBSA operators manage multiple buildings across different cities and campuses. Utility costs are bundled into weekly rent. Operators bear the cost of consumption they cannot easily attribute or control, and have no systematic tool for cross-portfolio savings monitoring.",
    why: "WattWise supports multi-building portfolio management from a single dashboard. Baseline targets are set per building and adjusted for occupancy and seasonal variation. Portfolio-level summaries allow operators to compare buildings, identify outliers, and focus attention where it is needed.",
    benefits: [
      "Portfolio dashboard across multiple buildings",
      "Building-level comparison and outlier identification",
      "Occupancy-adjusted baselines per property",
      "Incentive tiers configurable per building or portfolio-wide",
      "Low per-building operational overhead",
      "Monthly reporting suitable for investor or institutional reporting",
    ],
    hwFreeReason:
      "PBSA operators cannot retrofit sub-metering across existing buildings without major capital investment. WattWise works from the building-level data already captured by billing providers.",
    color: "bg-emerald-50",
    accent: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: Building2,
    title: "Hostels & Budget Accommodation",
    subtitle: "Shared accommodation with high occupancy turnover",
    badge: "Good Fit",
    problem:
      "Hostels have high occupancy turnover, making per-person attribution difficult. Utility costs are bundled into nightly fees. Seasonal variation in occupancy makes month-to-month comparison unreliable without normalisation. Operators pay bills without meaningful insight into where consumption is occurring or which patterns are anomalous.",
    why: "FairScore's occupancy-proxy normalisation is particularly useful for high-turnover environments where simple month-to-month comparisons are misleading. Anomaly detection flags unusual spikes against normalised baselines rather than raw figures, reducing false alerts. The lightweight upload workflow suits operators with limited operational bandwidth.",
    benefits: [
      "Occupancy-normalised baselines account for seasonal swings",
      "Anomaly alerts based on adjusted baseline, not raw figures",
      "Simple bill upload fits existing admin workflows",
      "No IT resources or technical staff required",
      "Monthly reporting without manual assembly",
      "Pilot-ready — start with a single property",
    ],
    hwFreeReason:
      "Hostel operators cannot install per-room or per-bed sub-metering cost-effectively. Building-level data from existing metering or billing providers is sufficient for WattWise.",
    color: "bg-amber-50",
    accent: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    icon: Briefcase,
    title: "Short-Stay Accommodation Portfolios",
    subtitle: "Serviced residences and short-let operators",
    badge: "Emerging Fit",
    problem:
      "Operators of serviced residences and managed short-let portfolios face utility cost exposure across multiple properties, with high variation in occupancy and no systematic way to benchmark or track consumption performance. Sustainability reporting expectations are increasing from institutional clients and corporate tenants.",
    why: "WattWise provides a structured baseline and reporting framework that can be deployed without hardware or facility changes. Portfolio-level ESG summaries and per-building trend data support the structured sustainability documentation that institutional clients and corporate tenants are increasingly requesting.",
    benefits: [
      "Portfolio ESG output for institutional client reporting",
      "Per-property trend visibility without sensor installation",
      "Occupancy-adjusted benchmarking across properties",
      "Anomaly detection supports maintenance investigation",
      "Monthly summaries suitable for property manager review",
      "Pilot structure allows low-risk validation before portfolio rollout",
    ],
    hwFreeReason:
      "Short-let operators often manage properties in existing buildings where sub-metering installation is impractical or lease-restricted. WattWise requires only building-level export data.",
    color: "bg-violet-50",
    accent: "text-violet-600",
    borderColor: "border-violet-200",
  },
];

export default function UseCasesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf9] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="success" className="mb-6">Use Cases</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            Built for shared accommodation operators
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            WattWise is designed for the specific operational constraints of
            dormitories, student housing, hostels, and short-stay accommodation
            — where utility costs are bundled, hardware is impractical, and
            operational bandwidth is limited.
          </p>
        </div>
      </div>

      {/* Use case cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 rounded-2xl border ${uc.borderColor} ${uc.color}`}
          >
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <uc.icon className={`w-5 h-5 ${uc.accent}`} />
                </div>
                <div>
                  <Badge variant="secondary" className="text-xs mb-1">{uc.badge}</Badge>
                  <p className="text-xs text-[#64748b]">{uc.subtitle}</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">{uc.title}</h2>

              <div className="mb-4">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">The problem</p>
                <p className="text-sm text-[#475569] leading-relaxed">{uc.problem}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Why WattWise fits</p>
                <p className="text-sm text-[#475569] leading-relaxed">{uc.why}</p>
              </div>

              <div className="bg-white/60 rounded-xl p-4 border border-white">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Why hardware-free matters here</p>
                <p className="text-sm text-[#475569] leading-relaxed">{uc.hwFreeReason}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                <p className="text-sm font-semibold text-[#0f172a] mb-4">Operational benefits</p>
                <ul className="space-y-3">
                  {uc.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <CheckCircle className={`w-4 h-4 ${uc.accent} shrink-0 mt-0.5`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#028090] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Which type of operator are you?
          </h2>
          <p className="text-[#a7f3d0] mb-8">
            Book a 30-minute discovery call to discuss your specific portfolio,
            review a data sample, and explore what a WattWise pilot could look like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#028090] hover:bg-[#f0fdf9]">
                Book a Discovery Call <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
