import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the WattWise operator platform, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform. These terms apply to the MVP pilot phase and will be updated prior to commercial launch.",
  },
  {
    title: "Platform Description",
    body: "WattWise is a hardware-free utility analytics platform for dormitory, campus housing, and short-stay accommodation operators. The platform provides savings baselines, anomaly alerts, incentive management, and ESG reporting based on operator-uploaded data.",
  },
  {
    title: "Permitted Use",
    body: "You may use the platform solely for your organisation's internal utility management purposes. You may not resell, sublicense, or redistribute access to the platform. You are responsible for maintaining the confidentiality of your login credentials.",
  },
  {
    title: "Data Ownership",
    body: "You retain full ownership of all data you upload to the platform. WattWise does not claim any rights over your operational data. We process your data only as described in our Privacy Policy.",
  },
  {
    title: "Demo and MVP Disclaimer",
    body: "During the MVP pilot phase, all savings figures, baselines, and reports are illustrative. They are based on comparable pilot data and should not be used as the sole basis for financial or compliance decisions. The platform is provided as-is during this phase.",
  },
  {
    title: "Limitation of Liability",
    body: "WattWise is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability for any claim is limited to the fees paid by you in the three months preceding the claim.",
  },
  {
    title: "Modifications",
    body: "We reserve the right to modify these terms at any time. Registered operators will be notified of material changes by email. Continued use of the platform after changes take effect constitutes acceptance.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the Republic of Türkiye. Any disputes shall be subject to the exclusive jurisdiction of the courts of Istanbul.",
  },
];

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-10">
        <p className="text-sm text-[#028090] font-medium mb-2">Legal</p>
        <h1 className="text-3xl font-bold text-[#0f172a] mb-4">Terms of Service</h1>
        <p className="text-[#64748b] text-sm">Last updated: March 2026 · MVP stage — these terms will be updated prior to commercial launch.</p>
      </div>

      <p className="text-[#334155] mb-10">
        Please read these Terms of Service carefully before using the WattWise operator platform. These terms govern your access to and use of the platform during the MVP pilot phase.
      </p>

      <div className="space-y-8">
        {sections.map((s, i) => (
          <div key={s.title}>
            <h2 className="text-base font-semibold text-[#0f172a] mb-2">
              {i + 1}. {s.title}
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-[#e2e8f0] text-sm text-[#64748b]">
        Questions about these terms? Contact us at{" "}
        <a href="mailto:hello@wattwise.app" className="text-[#028090] hover:underline">
          hello@wattwise.app
        </a>{" "}
        or visit our{" "}
        <Link href="/contact" className="text-[#028090] hover:underline">
          contact page
        </Link>
        .
      </div>
    </main>
  );
}
