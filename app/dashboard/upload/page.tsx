"use client";
import React, { useState } from "react";
import {
  Upload,
  CheckCircle,
  AlertTriangle,
  XCircle,
  FileSpreadsheet,
  Download,
  Clock,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { uploadHistory } from "@/data/mock";

type UploadState = "idle" | "dragging" | "uploading" | "success" | "error";

const commonIssues = [
  {
    icon: AlertTriangle,
    issue: "Bill period not detected",
    fix: "Ensure the bill period (month/year) is visible on the document. WattWise uses this to assign data to the correct baseline window.",
  },
  {
    icon: AlertTriangle,
    issue: "Consumption values missing",
    fix: "The bill must include electricity (kWh) and/or water (m³) consumption totals. Check that the bill is a full billing statement, not a summary.",
  },
  {
    icon: AlertTriangle,
    issue: "Unrecognised bill format",
    fix: "Use the bill format guide to confirm your provider's format is supported. Contact support to add a new provider format.",
  },
  {
    icon: Info,
    issue: "Partial data extracted",
    fix: "WattWise imports all detected fields and reports unrecognised sections. You can review and re-upload if needed.",
  },
];

export default function UploadPage() {
  const [state, setState] = useState<UploadState>("idle");
  const [building, setBuilding] = useState("");

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setState("uploading");
    setTimeout(() => setState("success"), 1800);
  }

  function handleFileChange() {
    setState("uploading");
    setTimeout(() => setState("success"), 1800);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#0f172a]">Bill Upload</h1>
        <p className="text-sm text-[#64748b] mt-1">
          Upload electronic utility bills for processing and baseline analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload zone */}
        <div className="lg:col-span-2 space-y-5">
          {/* Instructions banner */}
          <div className="bg-[#e0f4f6] border border-[#d1fae5] rounded-xl p-4 flex gap-3">
            <Info className="w-5 h-5 text-[#028090] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-[#0f172a] mb-1">No hardware required</p>
              <p className="text-sm text-[#475569]">
                Upload the electronic utility bills (e-bill / e-invoice) you receive from your billing provider. WattWise reads the consumption data, validates, and maps records automatically.
              </p>
            </div>
          </div>

          {/* Building select */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Upload settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Building</label>
                <Select value={building} onChange={(e) => setBuilding(e.target.value)}>
                  <option value="">Select building...</option>
                  <option>ITU North Dorm A</option>
                  <option>ITU North Dorm B</option>
                  <option>Campus Residence Block C</option>
                  <option>Bosphorus Student House</option>
                  <option>Pilot Hostel One</option>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Utility type</label>
                  <Select>
                    <option>Electricity + Water</option>
                    <option>Electricity only</option>
                    <option>Water only</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Data period</label>
                  <Select>
                    <option>March 2026</option>
                    <option>February 2026</option>
                    <option>January 2026</option>
                    <option>December 2025</option>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Drop zone */}
          <Card>
            <CardContent className="p-0">
              {state === "idle" || state === "dragging" ? (
                <div
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                    state === "dragging"
                      ? "border-[#028090] bg-[#e0f4f6]"
                      : "border-[#e2e8f0] hover:border-[#028090] hover:bg-[#f0fdf9]"
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setState("dragging"); }}
                  onDragLeave={() => setState("idle")}
                  onDrop={handleDrop}
                >
                  <Upload className="w-10 h-10 text-[#94a3b8] mx-auto mb-4" />
                  <p className="text-[#0f172a] font-medium mb-1">
                    Drop your utility bill here
                  </p>
                  <p className="text-sm text-[#64748b] mb-6">
                    Supported: .pdf, .xml, .xlsx — max 25 MB
                  </p>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.xml,.xlsx"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button variant="outline" type="button" onClick={() => {}}>
                      Browse files
                    </Button>
                  </label>
                </div>
              ) : state === "uploading" ? (
                <div className="p-12 text-center">
                  <div className="w-14 h-14 bg-[#e0f4f6] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Upload className="w-6 h-6 text-[#028090]" />
                  </div>
                  <p className="font-medium text-[#0f172a] mb-2">Processing upload...</p>
                  <p className="text-sm text-[#64748b]">Validating rows and mapping columns</p>
                  <div className="w-48 h-1.5 bg-[#e2e8f0] rounded-full mx-auto mt-6 overflow-hidden">
                    <div className="h-full bg-[#028090] rounded-full animate-pulse" style={{ width: "60%" }} />
                  </div>
                </div>
              ) : state === "success" ? (
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f172a]">Upload successful</p>
                      <p className="text-sm text-[#64748b]">280 rows imported · 0 errors</p>
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-4 space-y-2 mb-5">
                    {[
                      { label: "Bill", value: "fatura_mart2026_00481.pdf" },
                      { label: "Building", value: building || "Bosphorus Student House" },
                      { label: "Period", value: "March 2026" },
                      { label: "Records imported", value: "280" },
                      { label: "Records skipped", value: "0" },
                    ].map((r) => (
                      <div key={r.label} className="flex justify-between text-sm">
                        <span className="text-[#64748b]">{r.label}</span>
                        <span className="font-medium text-[#0f172a]">{r.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={() => setState("idle")} variant="outline">
                      Upload another file
                    </Button>
                    <Button>View updated baseline</Button>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>

          {/* Template download */}
          <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-lg border border-[#e2e8f0] flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5 text-[#028090]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#0f172a]">WattWise bill format guide</p>
              <p className="text-xs text-[#64748b]">Supported bill formats and field mapping reference</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4" />
              Download template
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Common issues */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Common data issues</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5 pt-0">
              {commonIssues.map((ci) => (
                <div key={ci.issue}>
                  <div className="flex items-center gap-2 mb-1">
                    <ci.icon className="w-3.5 h-3.5 text-amber-500" />
                    <p className="text-xs font-medium text-[#0f172a]">{ci.issue}</p>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed pl-5">{ci.fix}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upload history */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Upload history</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-[#f1f5f9]">
                {uploadHistory.map((u) => (
                  <div key={u.id} className="px-5 py-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-medium text-[#0f172a] truncate max-w-[140px]">
                        {u.filename}
                      </p>
                      <Badge
                        variant={u.status === "success" ? "success" : u.status === "partial" ? "warning" : "destructive"}
                        className="text-xs"
                      >
                        {u.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-[#64748b]">{u.buildingName}</p>
                    <div className="flex items-center gap-1 text-xs text-[#94a3b8] mt-0.5">
                      <Clock className="w-2.5 h-2.5" />
                      {u.period}
                    </div>
                    {u.issues.length > 0 && (
                      <div className="mt-1.5 bg-amber-50 rounded px-2 py-1">
                        <p className="text-xs text-amber-700 leading-snug">{u.issues[0]}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
