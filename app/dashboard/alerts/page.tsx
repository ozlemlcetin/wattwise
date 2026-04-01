"use client";
import React, { useState } from "react";
import {
  AlertTriangle,
  Zap,
  Droplets,
  FileWarning,
  ShieldAlert,
  CheckCircle,
  Filter,
  Building2,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { alerts } from "@/data/mock";

const typeIcons: Record<string, React.ElementType> = {
  spike: Zap,
  anomaly: Droplets,
  missing_data: FileWarning,
  gaming_risk: ShieldAlert,
};

const typeLabels: Record<string, string> = {
  spike: "Consumption spike",
  anomaly: "Usage anomaly",
  missing_data: "Missing data",
  gaming_risk: "Gaming risk",
};

export default function AlertsPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);

  const filtered = alerts.filter((a) => {
    const statusMatch = statusFilter === "all" || a.status === statusFilter;
    const severityMatch = severityFilter === "all" || a.severity === severityFilter;
    return statusMatch && severityMatch;
  });

  const selected = alerts.find((a) => a.id === selectedAlert);

  const openCount = alerts.filter((a) => a.status !== "resolved").length;
  const criticalCount = alerts.filter((a) => a.severity === "critical").length;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Alerts & Anomalies</h1>
          <p className="text-sm text-[#64748b] mt-1">
            {openCount} open · {criticalCount} critical · FairScore anomaly detection active
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Open alerts", value: openCount, color: "text-amber-600" },
          { label: "Critical", value: criticalCount, color: "text-red-600" },
          { label: "Investigating", value: alerts.filter((a) => a.status === "investigating").length, color: "text-blue-600" },
          { label: "Resolved (30d)", value: alerts.filter((a) => a.status === "resolved").length, color: "text-emerald-600" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-4">
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-sm text-[#64748b]">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="w-36">
          <option value="all">All status</option>
          <option value="open">Open</option>
          <option value="investigating">Investigating</option>
          <option value="resolved">Resolved</option>
        </Select>
        <Select value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)} className="w-36">
          <option value="all">All severity</option>
          <option value="critical">Critical</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alert list */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.length === 0 ? (
            <div className="bg-[#f8fafc] rounded-xl border border-dashed border-[#e2e8f0] p-12 text-center">
              <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-[#64748b] text-sm">No alerts match the current filters</p>
            </div>
          ) : (
            filtered.map((alert) => {
              const Icon = typeIcons[alert.type] || AlertTriangle;
              return (
                <Card
                  key={alert.id}
                  className={`cursor-pointer hover:shadow-md transition-all ${
                    selectedAlert === alert.id ? "ring-2 ring-[#028090]" : ""
                  } ${alert.status === "resolved" ? "opacity-70" : ""}`}
                  onClick={() => setSelectedAlert(alert.id === selectedAlert ? null : alert.id)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          alert.severity === "critical"
                            ? "bg-red-100"
                            : alert.severity === "warning"
                            ? "bg-amber-100"
                            : "bg-blue-100"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            alert.severity === "critical"
                              ? "text-red-600"
                              : alert.severity === "warning"
                              ? "text-amber-600"
                              : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 className="text-sm font-semibold text-[#0f172a] leading-snug">{alert.title}</h3>
                          <div className="flex gap-2 shrink-0">
                            <Badge
                              variant={
                                alert.severity === "critical"
                                  ? "destructive"
                                  : alert.severity === "warning"
                                  ? "warning"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {alert.severity}
                            </Badge>
                            <Badge
                              variant={
                                alert.status === "resolved"
                                  ? "success"
                                  : alert.status === "investigating"
                                  ? "secondary"
                                  : "warning"
                              }
                              className="text-xs"
                            >
                              {alert.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-[#64748b]">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {alert.buildingName}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(alert.timestamp).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <Badge variant="outline" className="text-xs">{typeLabels[alert.type]}</Badge>
                        </div>
                        {alert.magnitude && (
                          <p className="text-xs text-[#475569] mt-1">
                            Magnitude: <span className="font-medium text-red-500">+{alert.magnitude}%</span> above adjusted baseline
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Detail panel */}
        <div>
          {selected ? (
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant={selected.severity === "critical" ? "destructive" : selected.severity === "warning" ? "warning" : "secondary"}
                    className="text-xs"
                  >
                    {selected.severity}
                  </Badge>
                  <Badge variant="outline" className="text-xs">{typeLabels[selected.type]}</Badge>
                </div>
                <CardTitle className="text-sm leading-snug">{selected.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <Building2 className="w-3 h-3" /> {selected.buildingName}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[#475569] leading-relaxed">{selected.description}</p>

                <div className="space-y-2">
                  {[
                    { label: "Status", value: selected.status },
                    { label: "Detected", value: new Date(selected.timestamp).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) },
                    { label: "Building", value: selected.buildingName },
                    ...(selected.magnitude ? [{ label: "Magnitude", value: `+${selected.magnitude}% above baseline` }] : []),
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between text-sm">
                      <span className="text-[#64748b]">{d.label}</span>
                      <span className="font-medium text-[#0f172a]">{d.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium text-[#64748b]">Investigation note</label>
                  <textarea
                    className="w-full text-sm border border-[#e2e8f0] rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-[#028090] resize-none"
                    rows={3}
                    placeholder="Add a note about this alert..."
                  />
                </div>

                <div className="flex gap-2">
                  {selected.status !== "resolved" && (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">Investigating</Button>
                      <Button size="sm" className="flex-1">Mark resolved</Button>
                    </>
                  )}
                  {selected.status === "resolved" && (
                    <p className="text-xs text-emerald-600 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Resolved
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-[#f8fafc] rounded-xl border border-dashed border-[#e2e8f0] p-8 text-center">
              <AlertTriangle className="w-8 h-8 text-[#94a3b8] mx-auto mb-3" />
              <p className="text-sm text-[#64748b]">Select an alert to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
