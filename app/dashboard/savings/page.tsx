"use client";
import React, { useState } from "react";
import { Zap, Droplets, TrendingDown, Calendar } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { monthlyMetrics, buildings } from "@/data/mock";

export default function SavingsPage() {
  const [view, setView] = useState<"electricity" | "water">("electricity");
  const [building, setBuilding] = useState("all");
  const [period, setPeriod] = useState("12m");

  const data = period === "6m" ? monthlyMetrics.slice(-6) : monthlyMetrics;

  const savingsData = data.map((m) => ({
    month: m.month,
    savings:
      view === "electricity"
        ? m.baseline_electricity - m.electricity
        : m.baseline_water - m.water,
    baseline: view === "electricity" ? m.baseline_electricity : m.baseline_water,
    actual: view === "electricity" ? m.electricity : m.water,
    pct: view === "electricity"
      ? Math.round(((m.baseline_electricity - m.electricity) / m.baseline_electricity) * 100)
      : Math.round(((m.baseline_water - m.water) / m.baseline_water) * 100),
  }));

  const totalSavings = savingsData.reduce((s, d) => s + d.savings, 0);
  const avgPct = Math.round(savingsData.reduce((s, d) => s + d.pct, 0) / savingsData.length);

  const kpis = [
    {
      label: view === "electricity" ? "Total electricity saved" : "Total water saved",
      value: view === "electricity" ? `${totalSavings.toLocaleString()} kWh` : `${totalSavings.toLocaleString()} m³`,
      sub: period === "6m" ? "Last 6 months" : "Last 12 months",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Avg savings vs baseline",
      value: `−${Math.abs(avgPct)}%`,
      sub: "Monthly average",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Best month",
      value: "−14.7%",
      sub: "Campus Residence Block C, Oct 25",
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      label: "Estimated cost saving",
      value: view === "electricity" ? "6,480 TL" : "520 TL",
      sub: "Illustrative @ avg tariff rate",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Savings Analytics</h1>
          <p className="text-sm text-[#64748b] mt-1">
            Consumption vs FairScore baseline · portfolio-level
          </p>
        </div>
        <div className="flex gap-3">
          <Select value={building} onChange={(e) => setBuilding(e.target.value)} className="w-48">
            <option value="all">All buildings</option>
            {buildings.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </Select>
          <div className="flex rounded-lg border border-[#e2e8f0] overflow-hidden">
            {(["6m", "12m"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  period === p ? "bg-[#0f172a] text-white" : "bg-white text-[#475569] hover:bg-[#f8fafc]"
                }`}
              >
                {p === "6m" ? "6 months" : "12 months"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Utility tabs */}
      <div className="flex gap-3">
        <button
          onClick={() => setView("electricity")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
            view === "electricity"
              ? "bg-[#028090] text-white border-[#028090]"
              : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#028090]"
          }`}
        >
          <Zap className="w-4 h-4" /> Electricity (kWh)
        </button>
        <button
          onClick={() => setView("water")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
            view === "water"
              ? "bg-[#0ea5e9] text-white border-[#0ea5e9]"
              : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#0ea5e9]"
          }`}
        >
          <Droplets className="w-4 h-4" /> Water (m³)
        </button>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="p-5">
              <div className={`text-2xl font-bold ${kpi.color} mb-0.5`}>{kpi.value}</div>
              <div className="text-sm font-medium text-[#0f172a]">{kpi.label}</div>
              <div className="text-xs text-[#94a3b8] mt-0.5">{kpi.sub}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actual vs Baseline area */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {view === "electricity" ? "Electricity" : "Water"} — actual vs baseline
            </CardTitle>
            <CardDescription>
              {view === "electricity" ? "kWh/month" : "m³/month"} · FairScore occupancy-adjusted
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={savingsData}>
                <defs>
                  <linearGradient id="aGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#028090" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#028090" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area
                  type="monotone"
                  dataKey="baseline"
                  name="FairScore baseline"
                  stroke="#94a3b8"
                  strokeDasharray="4 4"
                  fill="none"
                  strokeWidth={1.5}
                />
                <Area
                  type="monotone"
                  dataKey="actual"
                  name="Actual"
                  stroke="#028090"
                  fill="url(#aGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly savings bar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly savings vs baseline (%)</CardTitle>
            <CardDescription>Negative = below baseline (good)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={savingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                <Tooltip
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(val: any) => [`${val}%`, "Savings vs baseline"]}
                  contentStyle={{ fontSize: 12, borderRadius: 8 }}
                />
                <ReferenceLine y={0} stroke="#e2e8f0" />
                <Bar
                  dataKey="pct"
                  name="% savings"
                  fill="#028090"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Monthly savings detail</CardTitle>
          <CardDescription>All figures vs FairScore occupancy-adjusted baseline</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                  <th className="text-left px-5 py-3 text-xs font-medium text-[#64748b]">Month</th>
                  <th className="text-right px-5 py-3 text-xs font-medium text-[#64748b]">Baseline</th>
                  <th className="text-right px-5 py-3 text-xs font-medium text-[#64748b]">Actual</th>
                  <th className="text-right px-5 py-3 text-xs font-medium text-[#64748b]">Saved</th>
                  <th className="text-right px-5 py-3 text-xs font-medium text-[#64748b]">% vs baseline</th>
                  <th className="text-center px-5 py-3 text-xs font-medium text-[#64748b]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {savingsData.map((row) => (
                  <tr key={row.month} className="hover:bg-[#f8fafc]">
                    <td className="px-5 py-3 font-medium text-[#0f172a]">{row.month}</td>
                    <td className="px-5 py-3 text-right text-[#475569]">{row.baseline.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right text-[#475569]">{row.actual.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right font-medium text-emerald-600">
                      {row.savings > 0 ? `+${row.savings.toLocaleString()}` : row.savings.toLocaleString()}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className={`font-medium ${row.pct < 0 ? "text-emerald-600" : "text-red-500"}`}>
                        {row.pct}%
                      </span>
                    </td>
                    <td className="px-5 py-3 text-center">
                      <Badge variant={row.pct < -8 ? "success" : row.pct < 0 ? "secondary" : "warning"} className="text-xs">
                        {row.pct < -10 ? "On track" : row.pct < 0 ? "Marginal" : "Above baseline"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-[#e2e8f0] bg-[#f8fafc]">
            <p className="text-xs text-[#64748b]">
              Illustrative savings figures. Cost estimates use an average tariff proxy — actual savings depend on your specific tariff structure. All data is demo/mock.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
