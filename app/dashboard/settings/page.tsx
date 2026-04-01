"use client";
import React, { useState } from "react";
import { Building2, Bell, User, Database, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-5.5 rounded-full relative transition-colors ${
        enabled ? "bg-[#028090]" : "bg-[#e2e8f0]"
      }`}
      style={{ height: 22 }}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
          enabled ? "left-5.5" : "left-0.5"
        }`}
        style={{ left: enabled ? "22px" : "2px" }}
      />
    </button>
  );
}

const tabs = [
  { id: "org", label: "Organisation", icon: Building2 },
  { id: "account", label: "Account", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "data", label: "Data & Uploads", icon: Database },
  { id: "pilot", label: "Pilot Settings", icon: Shield },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("org");
  const [notifs, setNotifs] = useState({
    alertCritical: true,
    alertWarning: true,
    uploadMissing: true,
    reportReady: true,
    weeklyDigest: false,
    incentiveCycle: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#0f172a]">Settings</h1>
        <p className="text-sm text-[#64748b] mt-1">Organisation, account, and platform preferences</p>
      </div>

      <div className="flex gap-6">
        {/* Tab sidebar */}
        <div className="w-48 shrink-0 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                activeTab === tab.id
                  ? "bg-[#e0f4f6] text-[#028090] font-medium"
                  : "text-[#475569] hover:bg-[#f8fafc]"
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 max-w-2xl">
          {activeTab === "org" && (
            <Card>
              <CardHeader>
                <CardTitle>Organisation details</CardTitle>
                <CardDescription>Your operator profile and portfolio information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Organisation name</label>
                    <Input defaultValue="ITU Campus Housing" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Operator type</label>
                    <Select defaultValue="university">
                      <option value="university">University / Campus</option>
                      <option value="pbsa">Private Student Housing</option>
                      <option value="hostel">Hostel / Short-stay</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Country</label>
                    <Select defaultValue="tr">
                      <option value="tr">Turkey</option>
                      <option value="gb">United Kingdom</option>
                      <option value="de">Germany</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Time zone</label>
                    <Select defaultValue="ist">
                      <option value="ist">Europe/Istanbul (UTC+3)</option>
                      <option value="gmt">Europe/London (GMT)</option>
                      <option value="cet">Europe/Berlin (CET)</option>
                    </Select>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-[#0f172a]">Portfolio scope</p>
                    <p className="text-xs text-[#64748b]">5 buildings · 560 units · Demo mode</p>
                  </div>
                  <Badge variant="success">Active pilot</Badge>
                </div>
                <div className="flex justify-end">
                  <Button>Save changes</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "account" && (
            <Card>
              <CardHeader>
                <CardTitle>Account information</CardTitle>
                <CardDescription>Your login and profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#028090] flex items-center justify-center text-white text-xl font-bold">
                    OC
                  </div>
                  <div>
                    <p className="font-medium text-[#0f172a]">Özlem Çetin</p>
                    <p className="text-sm text-[#64748b]">Campus Housing Director</p>
                    <Badge variant="secondary" className="mt-1 text-xs">Admin</Badge>
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Full name</label>
                    <Input defaultValue="Özlem Çetin" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Email address</label>
                    <Input type="email" defaultValue="ozlem@itu-housing.edu.tr" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Role</label>
                    <Input defaultValue="Campus Housing Director" />
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Change password</Button>
                  <Button>Save changes</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification preferences</CardTitle>
                <CardDescription>Control which events trigger operator notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  { key: "alertCritical" as const, label: "Critical alerts", desc: "Consumption spikes ≥25% above baseline" },
                  { key: "alertWarning" as const, label: "Warning alerts", desc: "Anomalies and off-peak usage patterns" },
                  { key: "uploadMissing" as const, label: "Missing upload reminders", desc: "Notified when a building upload is overdue" },
                  { key: "reportReady" as const, label: "Report ready", desc: "When a monthly or quarterly report is generated" },
                  { key: "incentiveCycle" as const, label: "Incentive cycle updates", desc: "Eligibility changes and milestone completions" },
                  { key: "weeklyDigest" as const, label: "Weekly digest email", desc: "Summary of savings, alerts, and activity" },
                ].map((n) => (
                  <div key={n.key} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#0f172a]">{n.label}</p>
                      <p className="text-xs text-[#64748b]">{n.desc}</p>
                    </div>
                    <Toggle
                      enabled={notifs[n.key]}
                      onChange={() => setNotifs({ ...notifs, [n.key]: !notifs[n.key] })}
                    />
                  </div>
                ))}
                <div className="flex justify-end">
                  <Button>Save preferences</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "data" && (
            <Card>
              <CardHeader>
                <CardTitle>Data & upload preferences</CardTitle>
                <CardDescription>Default settings for data ingestion and processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Default electricity unit</label>
                  <Select defaultValue="kwh">
                    <option value="kwh">kWh (kilowatt-hour)</option>
                    <option value="mwh">MWh (megawatt-hour)</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Default water unit</label>
                  <Select defaultValue="m3">
                    <option value="m3">m³ (cubic metres)</option>
                    <option value="litres">Litres</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1.5">Default date format</label>
                  <Select defaultValue="iso">
                    <option value="iso">YYYY-MM-DD (ISO 8601)</option>
                    <option value="uk">DD/MM/YYYY</option>
                    <option value="us">MM/DD/YYYY</option>
                  </Select>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium text-[#0f172a] mb-1">CO₂ emission factor</p>
                  <p className="text-xs text-[#64748b] mb-2">Used for CO₂e estimates in reports. Update if your grid factor differs.</p>
                  <div className="flex items-center gap-3">
                    <Input defaultValue="0.233" className="w-32" />
                    <span className="text-sm text-[#64748b]">kgCO₂e / kWh (UK grid average, 2024)</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Save preferences</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "pilot" && (
            <Card>
              <CardHeader>
                <CardTitle>Pilot & demo settings</CardTitle>
                <CardDescription>Configuration for pilot-stage deployment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm font-medium text-amber-900 mb-1">Demo mode is active</p>
                  <p className="text-sm text-amber-700">
                    All data shown in this dashboard is mock/illustrative data. No real building data is stored. This mode is for demonstration and pilot evaluation purposes only.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Pilot start date", value: "1 January 2026" },
                    { label: "Pilot building count", value: "5 buildings (demo scope)" },
                    { label: "FairScore version", value: "v1.0 — rule-based baseline" },
                    { label: "CoachAI mode", value: "Rule-based campaigns active" },
                    { label: "Data freshness", value: "Mock data · Mar 2026" },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between text-sm py-2 border-b border-[#f1f5f9] last:border-0">
                      <span className="text-[#64748b]">{d.label}</span>
                      <span className="font-medium text-[#0f172a]">{d.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Reset demo data</Button>
                  <Button>Contact WattWise team</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
