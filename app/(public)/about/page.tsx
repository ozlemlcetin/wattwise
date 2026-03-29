import React from "react";
import Link from "next/link";
import { ArrowRight, Target, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    initials: "OC",
    name: "Özlem Çetin",
    role: "Product Strategy & Business Development",
    focus: "Operator research, product definition, go-to-market",
    icon: Briefcase,
    bio: "Leads operator research and product strategy. Background in sustainable urban systems and stakeholder engagement across campus housing contexts. Responsible for pilot partnerships and commercial development.",
  },
  {
    initials: "AR",
    name: "AI / Data Lead",
    role: "Baseline Engine & Data Science",
    focus: "FairScore methodology, Python analytics, anomaly detection",
    icon: Code,
    bio: "Owns the FairScore baseline engine and data pipeline. Builds the statistical methodology for seasonal adjustment, occupancy normalisation, and anomaly detection. Ensures the platform outputs are explainable and auditable.",
  },
  {
    initials: "UX",
    name: "Engineering & UX",
    role: "Frontend Architecture & UX Design",
    focus: "Operator dashboard, data visualisation, onboarding experience",
    icon: Target,
    bio: "Responsible for the operator-facing web platform, dashboard UX, chart design, and onboarding experience. Focused on making complex data accessible to non-technical accommodation managers.",
  },
];

const values = [
  {
    title: "Hardware-free by principle",
    desc: "We believe utility reduction should not require capital expenditure. WattWise is built around data operators already have, not hardware they need to buy.",
  },
  {
    title: "Explainability over magic",
    desc: "Every baseline, target, and anomaly flag in WattWise can be explained to an operator in plain language. We do not present black-box AI outputs.",
  },
  {
    title: "Operator-first design",
    desc: "The platform is built for accommodation managers, not data scientists. Every feature is designed around real operator workflows and operational constraints.",
  },
  {
    title: "Pilot-stage honesty",
    desc: "We are at MVP stage. We present illustrative figures clearly labelled as such. We do not overclaim on savings, integrations, or autonomous AI capabilities.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf9] to-white">
        <div className="max-w-7xl mx-auto">
          <Badge variant="success" className="mb-6">About WattWise</Badge>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
                Why we're building WattWise
              </h1>
              <p className="text-lg text-[#475569] leading-relaxed mb-4">
                Bundled utility settings — dormitories, student housing, hostels —
                create a structural incentive problem. The operator pays the bill.
                The residents use the electricity and water. Neither party has a
                clear mechanism for setting fair expectations or measuring progress.
              </p>
              <p className="text-lg text-[#475569] leading-relaxed mb-4">
                Existing energy management tools assume hardware installation,
                enterprise-scale IT resources, or per-unit sub-metering — all of
                which are impractical for most shared accommodation operators.
              </p>
              <p className="text-lg text-[#475569] leading-relaxed">
                WattWise starts from what operators already have: utility bills
                and meter exports. We turn that into fair baselines, savings
                tracking, anomaly monitoring, and operator-ready reporting —
                without a single sensor installed.
              </p>
            </div>
            <div className="bg-[#0f172a] rounded-2xl p-8 text-white">
              <p className="text-[#94a3b8] text-sm mb-6">Our mission</p>
              <blockquote className="text-2xl font-semibold leading-relaxed text-white mb-6">
                "Make utility savings achievable and measurable for every
                shared accommodation operator — without hardware, without
                complexity, without overclaiming."
              </blockquote>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5", label: "Buildings in pilot scope" },
                  { value: "1,000+", label: "Occupants in scope" },
                  { value: "0", label: "Hardware installed" },
                  { value: "MVP", label: "Stage — honest and growing" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#1e293b] rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#6ee7b7] mb-1">{s.value}</div>
                    <div className="text-xs text-[#94a3b8]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The problem we solve */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-10 text-center">
            The gap we're addressing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bundled utilities are underserved",
                desc: "Most energy management tools are designed for commercial buildings with direct utility metering. Shared accommodation operators — who pay bundled bills without resident-level visibility — have very few options designed for their context.",
              },
              {
                title: "Hardware is impractical for most operators",
                desc: "Per-room sub-metering requires significant capital investment, installation overhead, and ongoing maintenance. For dormitories, student housing, and hostels, this cost is rarely justifiable — particularly for operators managing older building stock.",
              },
              {
                title: "Existing data is underutilised",
                desc: "Most operators already have 12–24 months of building-level utility consumption data sitting in billing exports or meter reads. WattWise turns that existing data into actionable baselines, savings tracking, and structured outputs.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <h3 className="font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4 text-center">The team</h2>
          <p className="text-[#475569] text-center mb-12 max-w-2xl mx-auto">
            WattWise is an early-stage project combining product strategy, data
            science, and engineering capabilities focused on the shared accommodation
            sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.role} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <div className="w-14 h-14 rounded-xl bg-[#147a5e] text-white flex items-center justify-center font-bold text-lg mb-5">
                  {member.initials}
                </div>
                <div className="mb-1">
                  <Badge variant="secondary" className="text-xs">{member.role}</Badge>
                </div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-1">{member.name}</h3>
                <p className="text-xs text-[#64748b] mb-3">{member.focus}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-12 text-center">How we approach the work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <h3 className="font-semibold text-[#0f172a] mb-2">{v.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#147a5e] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get in touch
          </h2>
          <p className="text-[#a7f3d0] mb-8">
            Whether you're an accommodation operator curious about a pilot,
            an investor, or a potential team member — we'd like to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#147a5e] hover:bg-[#f0fdf9]">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
