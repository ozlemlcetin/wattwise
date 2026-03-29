"use client";
import React, { useState } from "react";
import {
  Info,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { buildings, monthlyMetrics } from "@/data/mock";

const methodologySteps = [
  { step: "1", title: "Historical averaging", desc: "Two years of same-month consumption data are averaged to establish a pre-WattWise normal for each calendar month." },
  { step: "2", title: "Seasonal adjustment", desc: "The monthly average is scaled using seasonal variation curves derived from the historical dataset — accounting for heating, cooling, and daylight patterns." },
  { step: "3", title: "Occupancy normalisation", desc: "The adjusted figure is normalised by occupancy proxy (e.g., enrolled students, booking nights) to account for variations in building use across months." },
  { step: "4", title: "Target setting", desc: "A monthly FairScore target is set as a percentage below the normalised baseline, agreed with the operator before each cycle begins." },
  { step: "5", title: "Anomaly detection", desc: "Actual consumption is monitored against the target. Unusual spikes and patterns inconsistent with historical behaviour trigger alerts for operator review." },
];

export default function BaselinePage() {
  const [selectedBuilding, setSelectedBuilding] = useState("b1");
  const [view, setView] = useState<"electricity" | "water">("electricity");

  const building = buildings.find((b) => b.id === selectedBuilding)!;

  const chartData = monthlyMetrics.map((m) => ({
    ...m,
    target_electricity: Math.round(m.baseline_electricity * 0.9),
    target_water: Math.round(m.baseline_water * 0.9),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Baseline & Targets</h1>
          <p className="text-sm text-[#64748b] mt-1">
            FairScore methodology — seasonally adjusted, occupancy-normalised targets
          </p>
        </div>
        <div className="flex gap-3">
          <Select value={selectedBuilding} onChange={(e) => setSelectedBuilding(e.target.value)} className="w-48">
            {buildings.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </Select>
        </div>
      </div>

      {/* Building overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Monthly electricity baseline", value: `${building.electricityBaseline.toLocaleString()} kWh`, color: "text-blue-600" },
          { label: "Monthly water baseline", value: `${building.waterBaseline.toLocaleString()} m³`, color: "text-cyan-600" },
          { label: "Savings vs baseline", value: `${building.savingsTrend}%`, color: "text-emerald-600" },
          { label: "Anomaly flags", value: building.anomalyCount === 0 ? "None" : `${building.anomalyCount} open`, color: building.anomalyCount > 0 ? "text-amber-600" : "text-emerald-600" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-4">
              <p className="text-xs text-[#64748b] mb-1">{s.label}</p>
              <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-base">Baseline vs actual vs target — {building.name}</CardTitle>
              <CardDescription>12 months · Occupancy-adjusted FairScore baseline</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={view === "electricity" ? "default" : "outline"}
                onClick={() => setView("electricity")}
              >
                Electricity
              </Button>
              <Button
                size="sm"
                variant={view === "water" ? "default" : "outline"}
                onClick={() => setView("water")}
              >
                Water
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey={view === "electricity" ? "baseline_electricity" : "baseline_water"}
                name="FairScore baseline"
                stroke="#94a3b8"
                strokeDasharray="5 5"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey={view === "electricity" ? "target_electricity" : "target_water"}
                name="Target (−10%)"
                stroke="#f59e0b"
                strokeDasharray="3 3"
                strokeWidth={1.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey={view === "electricity" ? "electricity" : "water"}
                name="Actual"
                stroke="#147a5e"
                strokeWidth={2.5}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Assumptions and methodology */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assumptions */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#147a5e]" />
              <CardTitle className="text-base">Baseline assumptions</CardTitle>
            </div>
            <CardDescription>How the FairScore target was calculated for {building.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Baseline period", value: "Apr 2023 – Mar 2025 (24 months)" },
              { label: "Seasonal method", value: "12-month rolling average with seasonal curve" },
              { label: "Occupancy proxy", value: "Enrolled occupant count (monthly)" },
              { label: "Target adjustment", value: "−10% below normalised baseline" },
              { label: "Anomaly threshold", value: ">25% spike triggers review flag" },
              { label: "Last recalculation", value: "March 2026" },
            ].map((a) => (
              <div key={a.label} className="flex justify-between text-sm py-1 border-b border-[#f1f5f9] last:border-0">
                <span className="text-[#64748b]">{a.label}</span>
                <span className="font-medium text-[#0f172a] text-right max-w-[55%]">{a.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Monthly targets */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly target table — 2026</CardTitle>
            <CardDescription>FairScore baseline and 10% target per month</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#f1f5f9]">
              {monthlyMetrics.slice(9).map((m) => {
                const target = Math.round(m.baseline_electricity * 0.9);
                const saved = m.electricity <= target;
                return (
                  <div key={m.month} className="flex items-center gap-4 px-5 py-3">
                    <span className="text-sm font-medium text-[#0f172a] w-16">{m.month}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-[#64748b] mb-1">
                        <span>Target: {target.toLocaleString()} kWh</span>
                        <span>Actual: {m.electricity.toLocaleString()} kWh</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${saved ? "bg-emerald-500" : "bg-amber-400"}`}
                          style={{ width: `${Math.min(100, (m.electricity / m.baseline_electricity) * 100)}%` }}
                        />
                      </div>
                    </div>
                    {saved ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Methodology explainer */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">FairScore methodology</CardTitle>
          <CardDescription>
            WattWise uses a transparent, step-based calculation. Each step is auditable and can be reviewed by operators and residents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {methodologySteps.map((s) => (
              <div key={s.step} className="bg-[#f8fafc] rounded-xl p-4">
                <div className="w-7 h-7 rounded-full bg-[#147a5e] text-white flex items-center justify-center text-xs font-bold mb-3">
                  {s.step}
                </div>
                <p className="text-sm font-semibold text-[#0f172a] mb-1">{s.title}</p>
                <p className="text-xs text-[#64748b] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#e8f5f1] rounded-xl p-4 flex gap-3">
            <Info className="w-4 h-4 text-[#147a5e] shrink-0 mt-0.5" />
            <p className="text-sm text-[#0f172a]">
              <strong>Fairness and dispute reduction:</strong> Because every target is derived from the building's own historical data with explicit adjustments, residents and operators can understand why a target was set — reducing the risk of fairness disputes and improving engagement with savings programmes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
