"use client";
import React, { useState } from "react";
import { Gift, Users, Trophy, MessageSquare, Zap, Thermometer, Clock, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { incentiveTiers, coachCampaigns } from "@/data/mock";

const campaignIcons: Record<string, React.ElementType> = {
  standby: Zap,
  thermostat: Thermometer,
  shifting: Clock,
  general: MessageSquare,
};

const eligibilityData = [
  { tier: "Green Starter (5%)", eligible: 124 },
  { tier: "Eco Achiever (10%)", eligible: 67 },
  { tier: "Champion (15%)", eligible: 18 },
];

export default function IncentivesPage() {
  const [activeTab, setActiveTab] = useState<"tiers" | "coach">("tiers");

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Incentives & Perks</h1>
          <p className="text-sm text-[#64748b] mt-1">
            Savings-linked reward tiers and CoachAI messaging campaigns
          </p>
        </div>
        <Button size="sm">Configure tiers</Button>
      </div>

      {/* Tab toggle */}
      <div className="flex gap-2 border-b border-[#e2e8f0]">
        {(["tiers", "coach"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab
                ? "border-[#147a5e] text-[#147a5e]"
                : "border-transparent text-[#64748b] hover:text-[#0f172a]"
            }`}
          >
            {tab === "tiers" ? "Savings Tiers" : "CoachAI Campaigns"}
          </button>
        ))}
      </div>

      {activeTab === "tiers" && (
        <div className="space-y-6">
          {/* KPI row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total eligible units", value: "420", icon: Users },
              { label: "Currently qualifying (any tier)", value: "209", icon: Trophy },
              { label: "Champion tier (≥15%)", value: "18", icon: Gift },
              { label: "Certificates issued (YTD)", value: "12", icon: CheckCircle },
            ].map((s) => (
              <Card key={s.label}>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#e8f5f1] rounded-lg flex items-center justify-center shrink-0">
                    <s.icon className="w-4 h-4 text-[#147a5e]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#0f172a]">{s.value}</p>
                    <p className="text-xs text-[#64748b]">{s.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {incentiveTiers.map((tier, i) => (
              <Card key={tier.id} className={i === 2 ? "ring-1 ring-[#147a5e]" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-[#e8f5f1] rounded-xl flex items-center justify-center">
                      <Gift className="w-5 h-5 text-[#147a5e]" />
                    </div>
                    {i === 2 && <Badge variant="success" className="text-xs">Top tier</Badge>}
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-1">{tier.name}</h3>
                  <p className="text-[#147a5e] font-semibold text-sm mb-3">
                    ≥{tier.threshold}% below monthly baseline
                  </p>
                  <div className="bg-[#f8fafc] rounded-lg p-3 mb-4">
                    <p className="text-xs text-[#64748b] mb-0.5">Reward</p>
                    <p className="text-sm font-medium text-[#0f172a]">{tier.reward}</p>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">{tier.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#64748b]">Currently qualifying</span>
                    <span className="font-bold text-[#0f172a]">
                      {tier.activeCount} / {tier.totalEligible}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-[#147a5e] rounded-full"
                      style={{ width: `${(tier.activeCount / tier.totalEligible) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Eligibility chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Current eligibility by tier</CardTitle>
                <CardDescription>Units meeting threshold · March 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={eligibilityData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                    <YAxis dataKey="tier" type="category" tick={{ fontSize: 11, fill: "#64748b" }} width={140} />
                    <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                    <Bar dataKey="eligible" name="Units qualifying" fill="#147a5e" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Social Impact Certificate</CardTitle>
                <CardDescription>Issued to Sustainability Champion tier residents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-[#147a5e] rounded-xl p-5 text-center bg-[#f0fdf9]">
                  <div className="w-12 h-12 bg-[#147a5e] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-[#64748b] mb-1">WattWise Sustainability Certificate</p>
                  <p className="text-lg font-bold text-[#0f172a] mb-1">Sustainability Champion</p>
                  <p className="text-sm text-[#147a5e] font-medium mb-3">
                    Sustained ≥15% savings · Academic Year 2025–26
                  </p>
                  <p className="text-xs text-[#64748b]">
                    Awarded by: ITU Campus Housing · Verified by WattWise FairScore engine
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">Preview certificate template</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "coach" && (
        <div className="space-y-6">
          <div className="bg-[#e8f5f1] border border-[#d1fae5] rounded-xl p-4 flex gap-3">
            <MessageSquare className="w-5 h-5 text-[#147a5e] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-[#0f172a] mb-1">CoachAI — operator configuration view</p>
              <p className="text-sm text-[#475569]">
                CoachAI sends behaviour-change recommendations to residents based on savings-gap analysis. Campaigns are currently rule-based and targeted by building and segment. Resident-facing messaging is delivered through a separate channel — this view shows operator-side monitoring and configuration status.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coachCampaigns.map((c) => {
              const Icon = campaignIcons[c.type] || MessageSquare;
              return (
                <Card key={c.id}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          c.status === "active" ? "bg-emerald-100" :
                          c.status === "paused" ? "bg-amber-100" : "bg-[#f1f5f9]"
                        }`}>
                          <Icon className={`w-4 h-4 ${
                            c.status === "active" ? "text-emerald-600" :
                            c.status === "paused" ? "text-amber-600" : "text-[#64748b]"
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[#0f172a]">{c.name}</h3>
                          <p className="text-xs text-[#64748b] capitalize">{c.type.replace("_", " ")} · {c.targetedSegment}</p>
                        </div>
                      </div>
                      <Badge
                        variant={c.status === "active" ? "success" : c.status === "paused" ? "warning" : "secondary"}
                        className="text-xs"
                      >
                        {c.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[
                        { label: "Messages sent", value: c.messageSent.toLocaleString() },
                        { label: "Open rate", value: c.openRate > 0 ? `${c.openRate}%` : "—" },
                        { label: "Buildings", value: c.buildingIds.length > 0 ? c.buildingIds.length : "—" },
                        { label: "Last run", value: c.lastRun },
                      ].map((s) => (
                        <div key={s.label} className="bg-[#f8fafc] rounded-lg p-2.5">
                          <p className="text-xs text-[#64748b]">{s.label}</p>
                          <p className="text-sm font-medium text-[#0f172a]">{s.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {c.status === "active" ? (
                        <Button variant="outline" size="sm" className="flex-1">Pause</Button>
                      ) : c.status === "paused" ? (
                        <Button size="sm" className="flex-1">Resume</Button>
                      ) : (
                        <Button size="sm" className="flex-1">Launch campaign</Button>
                      )}
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recommendation themes</CardTitle>
              <CardDescription>Current CoachAI message library — rule-based · ML segmentation planned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Zap,
                    title: "Standby load reduction",
                    desc: "Messages prompting residents to switch off devices at the wall, particularly overnight or during absence periods.",
                    example: '"Reminder: unplugging phone chargers and unused electronics when you leave saves energy — and helps your building hit its monthly target."',
                  },
                  {
                    icon: Thermometer,
                    title: "Thermostat setpoint guidance",
                    desc: "Recommendations around heating setpoints and use patterns, adjusted for seasonal context.",
                    example: '"Keeping heating at 18°C rather than 22°C can reduce energy use by up to 12% — and you still qualify for the Eco Achiever reward this month."',
                  },
                  {
                    icon: Clock,
                    title: "Usage shifting",
                    desc: "Guidance on shifting high-use activities (laundry, dishwashers) to off-peak periods to reduce demand peaks.",
                    example: '"Laundry during 10am–4pm uses off-peak electricity rates and reduces building demand peaks. Your floor is currently in the top 20% — keep it up!"',
                  },
                ].map((theme) => (
                  <div key={theme.title} className="bg-[#f8fafc] rounded-xl p-4">
                    <div className="w-8 h-8 bg-[#e8f5f1] rounded-lg flex items-center justify-center mb-3">
                      <theme.icon className="w-4 h-4 text-[#147a5e]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#0f172a] mb-2">{theme.title}</h4>
                    <p className="text-xs text-[#64748b] leading-relaxed mb-3">{theme.desc}</p>
                    <div className="bg-white rounded-lg p-3 border border-[#e2e8f0]">
                      <p className="text-xs text-[#475569] italic leading-relaxed">{theme.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
