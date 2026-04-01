import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/product" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing & ROI", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Demo", href: "/contact" },
  ],
  Resources: [
    { label: "Operator Dashboard", href: "/dashboard" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#028090] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">WattWise</span>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              A hardware-free platform helping dormitory and accommodation
              operators track utility savings, set fair baselines, and generate
              operator-ready sustainability reports.
            </p>
            <p className="text-[#64748b] text-xs">
              © {new Date().getFullYear()} WattWise. All rights reserved.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-white mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748b]">
            MVP stage. Savings figures shown are illustrative estimates based on
            comparable pilot data.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#028090] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#028090] inline-block"></span>
              Hardware-free deployment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
