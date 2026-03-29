"use client";
import React from "react";
import Link from "next/link";
import {
  Zap,
  Droplets,
  TrendingDown,
  Bell,
  FileText,
  Building2,
  Upload,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildings, monthlyMetrics, alerts, portfolioSummary } from "@/data/mock";

const kpis = [
  {
    label: "Avg Savings vs Baseline",
    value: "−9.3%",
    sub: "Portfolio-wide YTD",
    icon: TrendingDown,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Electricity Saved YTD",
    value: "38,200 kWh",
    sub: "Jan–Mar 2026",
    icon: Zap,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Water Saved YTD",
    value: "1,060 m³",
    sub: "Jan–Mar 2026",
    icon: Droplets,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    label: "Open Alerts",
    value: "3",
    sub: "2 buildings affected",
    icon: Bell,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const recentActivity = [
  { type: "upload", msg: "Data uploaded: Bosphorus Student House (Mar 2026)", time: "2 days ago", icon: Upload },
  { type: "alert", msg: "New alert: electricity spike in Bosphorus Student House", time: "8 days ago", icon: AlertTriangle },
  { type: "report", msg: "Monthly report generated: ITU North Dorm A (Feb 2026)", time: "24 days ago", icon: FileText },
  { type: "upload", msg: "Data uploaded: Campus Residence Block C (Feb 2026)", time: "25 days ago", icon: Upload },
  { type: "ok", msg: "Baseline updated: Campus Residence Block C — Mar 2026", time: "25 days ago", icon: CheckCircle },
];

export default function DashboardPage() {
  const chartData = monthlyMetrics.slice(-6);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Dashboard</h1>
          <p className="text-sm text-[#64748b] mt-1">
            Portfolio overview — 5 buildings · Last updated 2 days ago
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/upload">
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4" />
              Upload data
            </Button>
          </Link>
          <Link href="/dashboard/reports">
            <Button size="sm">
              <FileText className="w-4 h-4" />
              Generate report
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${kpi.bg}`}>
                  <kpi.icon className={`w-4.5 h-4.5 ${kpi.color}`} style={{ width: 18, height: 18 }} />
                </div>
              </div>
              <div className={`text-2xl font-bold ${kpi.color} mb-0.5`}>{kpi.value}</div>
              <div className="text-sm font-medium text-[#0f172a]">{kpi.label}</div>
              <div className="text-xs text-[#94a3b8] mt-0.5">{kpi.sub}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Portfolio Electricity — vs. Baseline</CardTitle>
            <CardDescription>Last 6 months · kWh · ITU North Dorm A (representative)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#147a5e" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#147a5e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                <Tooltip
                  contentStyle={{ fontSize: 12, border: "1px solid #e2e8f0", borderRadius: 8 }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area
                  type="monotone"
                  dataKey="baseline_electricity"
                  name="Baseline"
                  stroke="#94a3b8"
                  strokeDasharray="4 4"
                  fill="url(#baseGrad)"
                  strokeWidth={1.5}
                />
                <Area
                  type="monotone"
                  dataKey="electricity"
                  name="Actual"
                  stroke="#147a5e"
                  fill="url(#actualGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity feed */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#f1f5f9]">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex gap-3 px-5 py-3.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    item.type === "alert"
                      ? "bg-amber-100"
                      : item.type === "upload"
                      ? "bg-blue-100"
                      : item.type === "report"
                      ? "bg-violet-100"
                      : "bg-emerald-100"
                  }`}>
                    <item.icon className={`w-3.5 h-3.5 ${
                      item.type === "alert"
                        ? "text-amber-600"
                        : item.type === "upload"
                        ? "text-blue-600"
                        : item.type === "report"
                        ? "text-violet-600"
                        : "text-emerald-600"
                    }`} />
                  </div>
                  <div>
                    <p className="text-xs text-[#0f172a] leading-snug">{item.msg}</p>
                    <p className="text-xs text-[#94a3b8] mt-0.5 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Buildings status + Alerts preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Buildings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Buildings</CardTitle>
              <CardDescription>5 buildings · Upload and savings status</CardDescription>
            </div>
            <Link href="/dashboard/buildings">
              <Button variant="ghost" size="sm" className="text-xs">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#f1f5f9]">
              {buildings.map((b) => (
                <div key={b.id} className="flex items-center gap-4 px-5 py-3">
                  <div className="w-8 h-8 bg-[#f8fafc] rounded-lg flex items-center justify-center border border-[#e2e8f0]">
                    <Building2 className="w-4 h-4 text-[#64748b]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0f172a] truncate">{b.name}</p>
                    <p className="text-xs text-[#94a3b8]">{b.occupancy}/{b.maxOccupancy} occupants</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        b.savingsTrend < -10
                          ? "success"
                          : b.savingsTrend < 0
                          ? "secondary"
                          : "warning"
                      }
                      className="text-xs"
                    >
                      {b.savingsTrend}%
                    </Badge>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        b.uploadStatus === "healthy"
                          ? "bg-emerald-500"
                          : b.uploadStatus === "warning"
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts preview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Alerts & Anomalies</CardTitle>
              <CardDescription>3 open · 1 resolved</CardDescription>
            </div>
            <Link href="/dashboard/alerts">
              <Button variant="ghost" size="sm" className="text-xs">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#f1f5f9]">
              {alerts.slice(0, 4).map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 px-5 py-3.5">
                  <span
                    className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      alert.severity === "critical"
                        ? "bg-red-500"
                        : alert.severity === "warning"
                        ? "bg-amber-500"
                        : "bg-blue-400"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0f172a] leading-snug">{alert.title}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{alert.buildingName}</p>
                  </div>
                  <Badge
                    variant={alert.status === "resolved" ? "success" : "warning"}
                    className="text-xs shrink-0"
                  >
                    {alert.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
