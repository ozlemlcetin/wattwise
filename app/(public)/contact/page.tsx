"use client";
import React, { useState } from "react";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const nextSteps = [
  {
    num: "1",
    title: "Discovery call",
    desc: "A 30-minute call to understand your portfolio, current data availability, and utility challenge.",
  },
  {
    num: "2",
    title: "Pilot fit check",
    desc: "We review a sample data export to assess whether your data structure is compatible with WattWise.",
  },
  {
    num: "3",
    title: "Sample baseline review",
    desc: "We run a preliminary FairScore baseline on your data and walk you through the outputs.",
  },
  {
    num: "4",
    title: "Pilot discussion",
    desc: "If there's a fit, we discuss pilot scope, timeline, and commercial structure.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    org: "",
    role: "",
    email: "",
    buildings: "",
    challenge: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf9] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="success" className="mb-6">Contact & Demo</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            Book a discovery call
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Tell us about your portfolio and current challenge. We'll follow up
            within 48 hours to schedule a discovery conversation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#e8f5f1] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#147a5e]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                  Thanks — we'll be in touch
                </h2>
                <p className="text-[#475569] max-w-md mx-auto">
                  We've received your message and will follow up within 48 hours.
                  In the meantime, feel free to explore the dashboard demo.
                </p>
                <div className="mt-8">
                  <a href="/dashboard">
                    <Button>
                      Explore Dashboard Demo <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">
                      Organisation <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      placeholder="University / Company name"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">
                      Your role <span className="text-red-500">*</span>
                    </label>
                    <Select
                      required
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                    >
                      <option value="">Select role...</option>
                      <option>Campus Housing Manager</option>
                      <option>Dormitory Director</option>
                      <option>Facilities / Estates Manager</option>
                      <option>Private Student Housing Operator</option>
                      <option>Hostel Manager</option>
                      <option>Property Director</option>
                      <option>Other</option>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1.5">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="you@organisation.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1.5">
                    Number of buildings you manage
                  </label>
                  <Select
                    value={form.buildings}
                    onChange={(e) => setForm({ ...form, buildings: e.target.value })}
                  >
                    <option value="">Select range...</option>
                    <option>1 building</option>
                    <option>2–5 buildings</option>
                    <option>6–10 buildings</option>
                    <option>11–25 buildings</option>
                    <option>25+ buildings</option>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1.5">
                    Describe your current utility challenge
                  </label>
                  <Textarea
                    placeholder="e.g. We manage 3 dormitory blocks at a university campus. Electricity and water costs are bundled into term fees and we have no way to track usage at building level or set meaningful targets for residents..."
                    rows={5}
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Request <ArrowRight className="w-4 h-4" />
                </Button>

                <p className="text-xs text-[#94a3b8] text-center">
                  We will not share your information with third parties. This is
                  used solely to prepare for your discovery conversation.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-bold text-[#0f172a] text-lg mb-6">What happens next?</h3>
              <div className="space-y-5">
                {nextSteps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#147a5e] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-medium text-[#0f172a] text-sm mb-1">{step.title}</p>
                      <p className="text-xs text-[#475569] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <h4 className="font-semibold text-[#0f172a] mb-4">Alternative contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <Mail className="w-4 h-4 text-[#147a5e]" />
                  hello@wattwise.app
                </div>
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <Phone className="w-4 h-4 text-[#147a5e]" />
                  Available on request after initial contact
                </div>
              </div>
            </div>

            <div className="bg-[#e8f5f1] rounded-xl p-6">
              <p className="text-sm font-medium text-[#0f172a] mb-2">
                Not ready to talk yet?
              </p>
              <p className="text-sm text-[#475569] mb-4">
                Explore the interactive dashboard demo to see how WattWise works
                with sample building data.
              </p>
              <a href="/dashboard">
                <Button variant="outline" size="sm" className="w-full">
                  View Dashboard Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
