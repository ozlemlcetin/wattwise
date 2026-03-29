"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Zap, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Mock auth — any credentials work for demo
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf9] to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-[#147a5e] rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#0f172a]">WattWise</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8">
          <h1 className="text-2xl font-bold text-[#0f172a] mb-1">Operator login</h1>
          <p className="text-sm text-[#64748b] mb-8">
            Access your operator dashboard and portfolio data.
          </p>

          {/* Demo notice */}
          <div className="bg-[#e8f5f1] rounded-lg p-3 mb-6 border border-[#d1fae5]">
            <p className="text-xs text-[#0f172a] font-medium mb-0.5">Demo mode</p>
            <p className="text-xs text-[#475569]">
              Enter any email and password to access the demo dashboard. No real authentication is required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-1.5">
                Email address
              </label>
              <Input
                type="email"
                placeholder="operator@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="block text-sm font-medium text-[#0f172a]">
                  Password
                </label>
                <button type="button" className="text-xs text-[#147a5e] hover:underline">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Input
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#475569]"
                  onClick={() => setShowPw(!showPw)}
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Signing in..." : "Sign in to dashboard"}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-[#64748b] mt-6">
          Don't have access yet?{" "}
          <Link href="/contact" className="text-[#147a5e] hover:underline font-medium">
            Book a demo
          </Link>
        </p>

        <p className="text-center mt-4">
          <Link href="/" className="text-xs text-[#94a3b8] hover:text-[#475569]">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
