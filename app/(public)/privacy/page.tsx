import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    body: "WattWise collects operator-provided data including organisation name, contact details, and utility consumption data uploaded to the platform. No personally identifiable information about end-users (residents or guests) is collected through this platform.",
  },
  {
    title: "How We Use Your Data",
    body: "Data you upload is used solely to generate savings baselines, anomaly alerts, and ESG reports within your operator account. We do not sell, share, or transfer your data to third parties. Aggregated and anonymised benchmarking data may be used to improve platform accuracy.",
  },
  {
    title: "Data Storage and Security",
    body: "All data is stored on secure cloud infrastructure. Access is restricted to authenticated operator accounts. We apply encryption in transit (TLS) and at rest. Regular security reviews are conducted.",
  },
  {
    title: "Data Retention",
    body: "Operator data is retained for the duration of the pilot or subscription period. Upon account closure, data is deleted within 30 days unless a longer retention period is required by law.",
  },
  {
    title: "Cookies",
    body: "This platform uses only essential session cookies required for authentication. No advertising or tracking cookies are used.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your data at any time. To submit a data request, contact us at hello@wattwise.app.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy as the platform evolves. Material changes will be communicated via email to registered operators. Continued use of the platform constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-10">
        <p className="text-sm text-[#028090] font-medium mb-2">Legal</p>
        <h1 className="text-3xl font-bold text-[#0f172a] mb-4">Privacy Policy</h1>
        <p className="text-[#64748b] text-sm">Last updated: March 2026 · MVP stage — this policy will be updated prior to commercial launch.</p>
      </div>

      <p className="text-[#334155] mb-10">
        WattWise is committed to protecting the privacy of operator data. This policy explains what information we collect, how we use it, and your rights as an operator using the platform.
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
        Questions? Contact us at{" "}
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
