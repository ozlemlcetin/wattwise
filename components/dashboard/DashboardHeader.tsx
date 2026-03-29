"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Bell, Search, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const breadcrumbs: Record<string, { label: string; parent?: string }> = {
  "/dashboard": { label: "Dashboard" },
  "/dashboard/buildings": { label: "Buildings" },
  "/dashboard/upload": { label: "Data Upload" },
  "/dashboard/baseline": { label: "Baseline & Targets" },
  "/dashboard/savings": { label: "Savings Analytics" },
  "/dashboard/incentives": { label: "Incentives & Perks" },
  "/dashboard/alerts": { label: "Alerts & Anomalies" },
  "/dashboard/reports": { label: "Reports / ESG" },
  "/dashboard/settings": { label: "Settings" },
};

export default function DashboardHeader() {
  const pathname = usePathname();
  const current = breadcrumbs[pathname];

  return (
    <header className="h-16 bg-white border-b border-[#e2e8f0] flex items-center px-6 gap-4 sticky top-0 z-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-[#64748b] flex-1">
        <Link href="/dashboard" className="hover:text-[#0f172a] transition-colors">
          Dashboard
        </Link>
        {current && pathname !== "/dashboard" && (
          <>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0f172a] font-medium">{current.label}</span>
          </>
        )}
      </div>

      {/* Demo badge */}
      <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        <span className="text-xs text-amber-700 font-medium">Demo mode</span>
      </div>

      {/* Alerts */}
      <button className="relative p-2 rounded-lg hover:bg-[#f8fafc] transition-colors">
        <Bell className="w-5 h-5 text-[#64748b]" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
      </button>

      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-[#147a5e] flex items-center justify-center text-white text-xs font-bold">
        OC
      </div>
    </header>
  );
}
