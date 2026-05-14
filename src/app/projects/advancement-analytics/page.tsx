import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Advancement Analytics — Chethana Manjunath",
  description:
    "End-to-end donor retention, pledge conversion and alumni engagement analysis using Python and Power BI.",
};

const charts = [
  {
    src: "/charts/chart_retention.png",
    title: "Donor Retention Trends",
    description:
      "Year-on-year analysis of donor retention and lapse rates from FY2018 to FY2023. The line chart tracks retention percentage while the stacked bar shows the split between retained and lapsed donors each fiscal year.",
    insight: "Retention rates fluctuated between 17–33%, highlighting consistent re-engagement opportunities in the lapsed donor pool.",
    color: "#00d4ff",
  },
  {
    src: "/charts/chart_conversion.png",
    title: "Pledge-to-Cash Conversion",
    description:
      "Comparison of total pledged amounts versus actual cash received each year, alongside the conversion rate trend from 2018 to 2024.",
    insight: "Conversion rates dipped to ~60% mid-period before recovering to 70%+ in 2024, suggesting improved follow-up processes.",
    color: "#f59e0b",
  },
  {
    src: "/charts/chart_channel_conversion.png",
    title: "Conversion Rate by Channel",
    description:
      "Pledge conversion rates broken down by outreach channel — Email, Direct Mail, Major Gift Officer, Phone, Online, and Event.",
    insight: "Email and Direct Mail led with 67%+ conversion rates, while Event-based pledges showed the most room for improvement.",
    color: "#00d4ff",
  },
  {
    src: "/charts/chart_campaigns.png",
    title: "Campaign Performance Overview",
    description:
      "Side-by-side comparison of total cash received and conversion rate across all 10 campaigns, from Annual Fund series to Capital Campaign and Research Fund.",
    insight: "Annual Fund 2022 generated the highest cash received ($50K+), while Annual Fund 2021 achieved the best conversion rate.",
    color: "#10b981",
  },
  {
    src: "/charts/chart_engagement.png",
    title: "Alumni Engagement vs Giving",
    description:
      "Scatter plot and bar chart showing the relationship between number of events attended and total giving amount per donor.",
    insight: "Donors who attended 2+ events gave on average $1,000 — nearly double those with no engagement, validating event-led cultivation strategy.",
    color: "#10b981",
  },
  {
    src: "/charts/chart_segments.png",
    title: "Donor Segmentation Distribution",
    description:
      "RFM-style segmentation of the full donor base into Champion, Loyal, Recent, At Risk, Lapsed, and Non-Donor cohorts.",
    insight: "26.8% non-donors and 16.6% lapsed donors represent the highest-potential re-engagement pool for targeted campaigns.",
    color: "#7c3aed",
  },
];

const stats = [
  { value: "500", label: "Donors Analysed" },
  { value: "1,248", label: "Gift Records" },
  { value: "6", label: "Fiscal Years" },
  { value: "67%", label: "Avg Conversion Rate" },
];

const tools = ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Power BI"];

export default function AdvancementAnalyticsPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Back nav */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 border-b border-border overflow-hidden grid-bg">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-2/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Personal Project · Python + Power BI
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text-primary leading-tight mb-6 max-w-4xl">
            University Advancement Analytics
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-10">
            An end-to-end data analytics project simulating a real university
            Advancement Services environment — covering donor retention, pledge
            conversion, campaign ROI, alumni engagement, and donor segmentation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-5">
                <div className="font-display text-3xl text-accent mb-1">{s.value}</div>
                <div className="text-xs font-mono text-text-muted tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1.5 rounded bg-surface border border-border text-text-secondary"
              >
                {t}
              </span>
            ))}
            <a
              href="https://github.com/vmchethana30-cloud/advancement-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border border-accent/40 text-accent hover:bg-accent hover:text-bg transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View Code on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Analysis</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary">
              Six charts. One complete picture.
            </h2>
          </div>

          <div className="space-y-16">
            {charts.map((chart, i) => (
              <div
                key={chart.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Chart image */}
                <div
                  className={`rounded-2xl overflow-hidden border border-border hover:border-opacity-60 transition-all duration-300 ${
                    i % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                  style={{ borderColor: `${chart.color}33` }}
                >
                  <Image
                    src={chart.src}
                    alt={chart.title}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <span
                    className="font-mono text-xs tracking-widest uppercase mb-3 block"
                    style={{ color: chart.color }}
                  >
                    {String(i + 1).padStart(2, "0")} / {String(charts.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
                    {chart.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {chart.description}
                  </p>
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ borderColor: `${chart.color}30`, backgroundColor: `${chart.color}08` }}
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: chart.color }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="font-mono text-xs uppercase tracking-wider mr-2" style={{ color: chart.color }}>
                        Key Insight:
                      </span>
                      {chart.insight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Recommendations</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10">
            What the data recommends
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Re-engage lapsed donors",
                body: "16.6% lapsed and 13% at-risk donors represent the highest-ROI re-engagement opportunity. A targeted 2-touch campaign within 90 days of lapse should be prioritised.",
                color: "#ef4444",
              },
              {
                title: "Double down on Email & Direct Mail",
                body: "Both channels achieve 67%+ conversion rates consistently. Shifting budget from lower-converting Event-based solicitation to these proven channels could lift overall conversion by 3–5%.",
                color: "#00d4ff",
              },
              {
                title: "Invest in alumni events",
                body: "Donors attending 2+ events gave on average $1,000 — nearly double non-engaged alumni. Increasing event capacity and alumni outreach would directly lift long-term giving.",
                color: "#10b981",
              },
              {
                title: "Cultivate B-rated prospects",
                body: "B-rated prospects with high engagement scores are prime candidates for major gift cultivation. A targeted briefing programme could move 10–15% of this cohort up the prospect pipeline.",
                color: "#7c3aed",
              },
            ].map((rec) => (
              <div
                key={rec.title}
                className="bg-surface border border-border rounded-xl p-6 hover:border-opacity-60 transition-all duration-300 card-lift"
                style={{ borderColor: `${rec.color}22` }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ backgroundColor: rec.color }}
                />
                <h3 className="font-display text-xl text-text-primary mb-3">{rec.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{rec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-border text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-text-secondary mb-6">Want to discuss this project or see the full code?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:chethana.vm@outlook.in"
              className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-sm px-6 py-3 rounded hover:bg-accent/90 transition-all"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/vmchethana30-cloud/advancement-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text-secondary font-mono text-sm px-6 py-3 rounded hover:border-accent/40 hover:text-text-primary transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
