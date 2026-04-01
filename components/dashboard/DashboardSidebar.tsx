"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Zap,
  LayoutDashboard,
  Building2,
  Upload,
  Target,
  BarChart2,
  Gift,
  Bell,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Buildings", href: "/dashboard/buildings", icon: Building2 },
  { label: "Data Upload", href: "/dashboard/upload", icon: Upload },
  { label: "Baseline & Targets", href: "/dashboard/baseline", icon: Target },
  { label: "Savings Analytics", href: "/dashboard/savings", icon: BarChart2 },
  { label: "Incentives & Perks", href: "/dashboard/incentives", icon: Gift },
  { label: "Alerts & Anomalies", href: "/dashboard/alerts", icon: Bell, badge: 3 },
  { label: "Reports / ESG", href: "/dashboard/reports", icon: FileText },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col bg-[#0f172a] text-white transition-all duration-300 h-screen sticky top-0 shrink-0",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className={cn("flex items-center gap-2.5 px-4 h-16 border-b border-[#1e293b]", collapsed && "justify-center px-0")}>
        <div className="w-8 h-8 bg-[#028090] rounded-lg flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <span className="text-sm font-bold">WattWise</span>
        )}
      </div>

      {/* Org badge */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-[#1e293b]">
          <p className="text-xs text-[#64748b] mb-0.5">Organisation</p>
          <p className="text-sm font-medium text-white">ITU Campus Housing</p>
          <span className="inline-flex items-center gap-1 text-xs text-[#6ee7b7] mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7]"></span>
            Demo mode active
          </span>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors relative",
                collapsed ? "justify-center px-0" : "",
                isActive
                  ? "bg-[#028090]/20 text-white border-r-2 border-[#028090]"
                  : "text-[#94a3b8] hover:bg-[#1e293b] hover:text-white"
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {!collapsed && (
                <>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {collapsed && item.badge && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-[#1e293b] p-4 space-y-2">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 text-xs text-[#64748b] hover:text-white transition-colors",
            collapsed && "justify-center"
          )}
          title={collapsed ? "Back to website" : undefined}
        >
          <LogOut className="w-3.5 h-3.5" />
          {!collapsed && "Back to website"}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "flex items-center gap-3 text-xs text-[#64748b] hover:text-white transition-colors w-full",
            collapsed && "justify-center"
          )}
        >
          {collapsed ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <>
              <ChevronLeft className="w-3.5 h-3.5" />
              Collapse sidebar
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
