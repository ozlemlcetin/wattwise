"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Upload,
  AlertTriangle,
  CheckCircle,
  FileText,
  TrendingDown,
  TrendingUp,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildings } from "@/data/mock";

const typeLabels: Record<string, string> = {
  dormitory: "Dormitory",
  campus_housing: "Campus Housing",
  student_residence: "Student Residence",
  hostel: "Hostel",
};

export default function BuildingsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedBuilding = buildings.find((b) => b.id === selected);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Buildings</h1>
          <p className="text-sm text-[#64748b] mt-1">
            {buildings.length} buildings in your portfolio
          </p>
        </div>
        <Link href="/dashboard/upload">
          <Button size="sm">
            <Upload className="w-4 h-4" />
            Upload data
          </Button>
        </Link>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total buildings", value: "5" },
          { label: "Total units", value: "560" },
          { label: "Upload issues", value: "2", warning: true },
          { label: "Open alerts", value: "3", warning: true },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-4">
              <div className={`text-2xl font-bold mb-1 ${s.warning ? "text-amber-600" : "text-[#0f172a]"}`}>
                {s.value}
              </div>
              <div className="text-sm text-[#64748b]">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Building list */}
        <div className="lg:col-span-2 space-y-3">
          {buildings.map((building) => (
            <Card
              key={building.id}
              className={`cursor-pointer hover:shadow-md transition-all ${
                selected === building.id ? "ring-2 ring-[#028090]" : ""
              }`}
              onClick={() => setSelected(building.id === selected ? null : building.id)}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-[#e0f4f6] rounded-xl flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-[#028090]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#0f172a]">{building.name}</h3>
                        <Badge variant="secondary" className="text-xs">{typeLabels[building.type]}</Badge>
                      </div>
                      <p className="text-sm text-[#64748b] mb-3">{building.location}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div>
                          <p className="text-xs text-[#94a3b8]">Occupancy</p>
                          <p className="text-sm font-medium text-[#0f172a]">
                            {building.occupancy}/{building.maxOccupancy}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#94a3b8]">Savings trend</p>
                          <p className={`text-sm font-medium flex items-center gap-1 ${
                            building.savingsTrend < 0 ? "text-emerald-600" : "text-red-500"
                          }`}>
                            {building.savingsTrend < 0 ? (
                              <TrendingDown className="w-3.5 h-3.5" />
                            ) : (
                              <TrendingUp className="w-3.5 h-3.5" />
                            )}
                            {building.savingsTrend}%
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#94a3b8]">Upload status</p>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                building.uploadStatus === "healthy"
                                  ? "bg-emerald-500"
                                  : building.uploadStatus === "warning"
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                              }`}
                            />
                            <span className="text-sm font-medium text-[#0f172a] capitalize">
                              {building.uploadStatus}
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-[#94a3b8]">Alerts</p>
                          <p className={`text-sm font-medium ${
                            building.anomalyCount > 0 ? "text-amber-600" : "text-emerald-600"
                          }`}>
                            {building.anomalyCount === 0 ? "None" : `${building.anomalyCount} open`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <Badge
                      variant={
                        building.reportStatus === "ready"
                          ? "success"
                          : building.reportStatus === "pending"
                          ? "warning"
                          : "destructive"
                      }
                      className="text-xs"
                    >
                      Report {building.reportStatus}
                    </Badge>
                    <ChevronRight className={`w-4 h-4 text-[#94a3b8] transition-transform ${selected === building.id ? "rotate-90" : ""}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detail panel */}
        <div>
          {selectedBuilding ? (
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-base">{selectedBuilding.name}</CardTitle>
                <CardDescription>{typeLabels[selectedBuilding.type]} · {selectedBuilding.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Floors", value: selectedBuilding.floors },
                    { label: "Units", value: selectedBuilding.units },
                    { label: "Occupants", value: selectedBuilding.occupancy },
                    { label: "Max capacity", value: selectedBuilding.maxOccupancy },
                  ].map((d) => (
                    <div key={d.label} className="bg-[#f8fafc] rounded-lg p-3">
                      <p className="text-xs text-[#64748b] mb-1">{d.label}</p>
                      <p className="font-bold text-[#0f172a]">{d.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-medium text-[#64748b] mb-3 uppercase tracking-wide">Baseline (monthly)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#475569] flex items-center gap-1.5">
                        ⚡ Electricity
                      </span>
                      <span className="font-medium text-[#0f172a]">
                        {selectedBuilding.electricityBaseline.toLocaleString()} kWh
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#475569] flex items-center gap-1.5">
                        💧 Water
                      </span>
                      <span className="font-medium text-[#0f172a]">
                        {selectedBuilding.waterBaseline.toLocaleString()} m³
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-[#64748b] uppercase tracking-wide">Status</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#475569]">Last upload</span>
                    <span className="font-medium text-[#0f172a]">{selectedBuilding.lastUpload}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#475569]">Upload health</span>
                    <Badge
                      variant={selectedBuilding.uploadStatus === "healthy" ? "success" : "warning"}
                      className="text-xs"
                    >
                      {selectedBuilding.uploadStatus}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#475569]">Open alerts</span>
                    <span className={`font-medium ${selectedBuilding.anomalyCount > 0 ? "text-amber-600" : "text-emerald-600"}`}>
                      {selectedBuilding.anomalyCount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#475569]">Report status</span>
                    <Badge
                      variant={selectedBuilding.reportStatus === "ready" ? "success" : selectedBuilding.reportStatus === "pending" ? "warning" : "destructive"}
                      className="text-xs"
                    >
                      {selectedBuilding.reportStatus}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href="/dashboard/savings" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">View savings</Button>
                  </Link>
                  <Link href="/dashboard/upload" className="flex-1">
                    <Button size="sm" className="w-full">Upload data</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-[#f8fafc] rounded-xl border border-dashed border-[#e2e8f0] p-8 text-center">
              <Building2 className="w-8 h-8 text-[#94a3b8] mx-auto mb-3" />
              <p className="text-sm text-[#64748b]">
                Select a building to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
