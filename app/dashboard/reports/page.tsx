"use client";
import React, { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  Zap,
  Droplets,
  Leaf,
  Clock,
  Building2,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { reports } from "@/data/mock";

const typeColors: Record<string, string> = {
  monthly: "bg-blue-100 text-blue-700",
  quarterly: "bg-violet-100 text-violet-700",
  annual: "bg-amber-100 text-amber-700",
  esg: "bg-emerald-100 text-emerald-700",
};

export default function ReportsPage() {
  const [preview, setPreview] = useState<string | null>("r4");

  const previewReport = reports.find((r) => r.id === preview);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Reports & ESG Outputs</h1>
          <p className="text-sm text-[#64748b] mt-1">
            Operator-ready summaries · {reports.filter((r) => r.status === "ready").length} reports available
          </p>
        </div>
        <Button size="sm">
          <FileText className="w-4 h-4" />
          Generate report
        </Button>
      </div>

      {/* ESG summary banner */}
      <div className="bg-[#0f172a] rounded-2xl p-6">
        <p className="text-xs text-[#64748b] uppercase tracking-wide mb-4">
          Portfolio ESG summary · Full Year 2025 (illustrative)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Electricity saved", value: "142,600 kWh", icon: Zap, color: "text-blue-400" },
            { label: "Water saved", value: "3,940 m³", icon: Droplets, color: "text-cyan-400" },
            { label: "CO₂ equivalent", value: "59.2 tCO₂e", icon: Leaf, color: "text-emerald-400" },
            { label: "Avg savings vs baseline", value: "−9.3%", icon: CheckCircle, color: "text-[#6ee7b7]" },
          ].map((s) => (
            <div key={s.label} className="bg-[#1e293b] rounded-xl p-4">
              <s.icon className={`w-4 h-4 ${s.color} mb-2`} />
              <div className={`text-xl font-bold ${s.color} mb-0.5`}>{s.value}</div>
              <div className="text-xs text-[#64748b]">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#475569] mt-4">
          * All figures are illustrative estimates for demo purposes. Actual outcomes depend on operator data and baseline analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report cards */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-semibold text-[#0f172a]">Available reports</h2>
          {reports.map((report) => (
            <Card
              key={report.id}
              className={`cursor-pointer hover:shadow-md transition-all ${
                preview === report.id ? "ring-2 ring-[#028090]" : ""
              } ${report.status !== "ready" ? "opacity-70" : ""}`}
              onClick={() => report.status === "ready" && setPreview(report.id)}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-[#64748b]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[report.type]}`}>
                          {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                        </span>
                        <h3 className="text-sm font-semibold text-[#0f172a]">{report.buildingName}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#64748b]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {report.period}
                        </span>
                        {report.generatedAt && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Generated {new Date(report.generatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                          </span>
                        )}
                      </div>
                      {report.savingsKwh && (
                        <div className="flex gap-4 mt-2">
                          <span className="text-xs text-emerald-600 font-medium">
                            ⚡ {report.savingsKwh.toLocaleString()} kWh saved
                          </span>
                          {report.savingsM3 && (
                            <span className="text-xs text-cyan-600 font-medium">
                              💧 {report.savingsM3.toLocaleString()} m³ saved
                            </span>
                          )}
                          {report.savingsCO2 && (
                            <span className="text-xs text-[#028090] font-medium">
                              🌱 {report.savingsCO2} tCO₂e
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <Badge
                      variant={
                        report.status === "ready"
                          ? "success"
                          : report.status === "generating"
                          ? "warning"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {report.status === "generating" && <RefreshCw className="w-2.5 h-2.5 animate-spin" />}
                      {report.status}
                    </Badge>
                    {report.status === "ready" && (
                      <Button variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                        <Download className="w-3.5 h-3.5" />
                        Export
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview panel */}
        <div>
          {previewReport ? (
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[previewReport.type]}`}>
                    {previewReport.type.charAt(0).toUpperCase() + previewReport.type.slice(1)}
                  </span>
                </div>
                <CardTitle className="text-sm">{previewReport.buildingName}</CardTitle>
                <CardDescription>{previewReport.period}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Mini report preview */}
                <div className="bg-[#f8fafc] rounded-xl p-4 border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-[#028090] rounded flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-bold text-[#0f172a]">WattWise Report</span>
                    <span className="text-xs text-[#64748b] ml-auto">{previewReport.period}</span>
                  </div>

                  {previewReport.savingsKwh && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#64748b]">Electricity saved</span>
                        <span className="font-semibold text-emerald-600">{previewReport.savingsKwh.toLocaleString()} kWh</span>
                      </div>
                      {previewReport.savingsM3 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-[#64748b]">Water saved</span>
                          <span className="font-semibold text-cyan-600">{previewReport.savingsM3.toLocaleString()} m³</span>
                        </div>
                      )}
                      {previewReport.savingsCO2 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-[#64748b]">CO₂e reduction (est.)</span>
                          <span className="font-semibold text-[#028090]">{previewReport.savingsCO2} tCO₂e</span>
                        </div>
                      )}
                      <div className="border-t border-[#e2e8f0] pt-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-[#64748b]">Methodology</span>
                          <span className="font-medium text-[#0f172a]">FairScore v1.0</span>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-[#64748b]">Occupancy adjustment</span>
                          <span className="font-medium text-[#0f172a]">Applied</span>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-[#64748b]">Anomaly flags</span>
                          <span className="font-medium text-emerald-600">None</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-[#94a3b8] mt-4">
                    Savings figures are validated against the FairScore occupancy-adjusted baseline. CO₂e uses the UK grid average emission factor. All figures are illustrative for demo purposes.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button className="w-full" size="sm">
                    <Download className="w-4 h-4" /> Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-[#f8fafc] rounded-xl border border-dashed border-[#e2e8f0] p-8 text-center">
              <FileText className="w-8 h-8 text-[#94a3b8] mx-auto mb-3" />
              <p className="text-sm text-[#64748b]">Select a report to preview</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
