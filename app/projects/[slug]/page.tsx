import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/app/components/portfolio/case-studies";
import { SEO_CONFIG } from "@/app/lib/seo";
import { notFound } from "next/navigation";
import Menu from "@/app/components/menu";
import ThemeToggle from "@/app/components/themetoggle";
import Footer from "@/app/components/footer";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};

  return {
    title: `${cs.name} - Case Study | ${SEO_CONFIG.siteName}`,
    description: cs.tagline,
    openGraph: {
      title: `${cs.name} - Case Study | ${SEO_CONFIG.siteName}`,
      description: cs.tagline,
      url: `${SEO_CONFIG.siteUrl}/projects/${cs.slug}`,
      images: [
        {
          url: `${SEO_CONFIG.siteUrl}${cs.image}`,
          width: 1200,
          height: 630,
          alt: cs.name,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) {
    notFound();
  }

  return (
    <>
      <header className="grid grid-cols-core" role="banner">
        <div className="layout flex justify-between my-4">
          <Menu />
          <ThemeToggle />
        </div>
      </header>

      <main id="main-content" role="main">
        <div className="grid grid-cols-core">
          <div className="layout py-8 md:py-16">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-[var(--gray)] no-underline hover:text-[var(--brand)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <span className="text-xs font-medium tracking-widest text-[var(--gray)]">
            {cs.type} &middot; {cs.year}
          </span>
          <h1 className="!text-3xl md:!text-5xl !mt-1 !mb-4">{cs.name}</h1>
          <p className="text-xl md:text-2xl text-[var(--gray)] leading-relaxed max-w-2xl">
            {cs.tagline}
          </p>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden bg-[var(--background-gray)]">
          <Image
            src={cs.image}
            alt={`${cs.name} screenshot`}
            width={1240}
            height={690}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Overview */}
        <section className="mb-12 max-w-3xl">
          <h2 className="!text-2xl">Overview</h2>
          <p className="text-lg leading-relaxed">{cs.overview}</p>
        </section>

        {/* Problem */}
        <section className="mb-12 max-w-3xl">
          <h2 className="!text-2xl">The Problem</h2>
          <p className="text-lg leading-relaxed">{cs.problem}</p>
        </section>

        {/* Key Decisions */}
        <section className="mb-12 max-w-3xl">
          <h2 className="!text-2xl">Key Decisions</h2>
          <ul className="space-y-4">
            {cs.approach.map((item, i) => (
              <li
                key={i}
                className="text-lg leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:rounded-full before:bg-[var(--brand)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Highlights */}
        <section className="mb-12">
          <h2 className="!text-2xl">Technical Highlights</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-12">
            {cs.highlights.map((h, i) => {
              const isLarge = i % 2 === 0 ? (i % 4 < 2) : (i % 4 >= 2);
              return (
                <div
                  key={h.title}
                  className={`p-12 rounded shadow-sm ${
                    isLarge
                      ? "col-span-full md:col-span-7 gradient-left"
                      : "col-span-full md:col-span-5 gradient-right"
                  }`}
                >
                  <h3 className="!text-lg !mt-0 !mb-4">{h.title}</h3>
                  <p className="text-[var(--gray)] leading-relaxed m-0">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="!text-2xl">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-2xl bg-[var(--background-gray)] text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12 max-w-3xl">
          <h2 className="!text-2xl">Tradeoffs &amp; Next Steps</h2>
          <ul className="space-y-4">
            {cs.tradeoffs.map((item, i) => (
              <li
                key={i}
                className="text-lg leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:rounded-full before:bg-[var(--brand)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Outcome */}
        <section className="mb-12 max-w-3xl">
          <h2 className="!text-2xl">Outcome</h2>
          <p className="text-lg leading-relaxed">{cs.outcome}</p>
        </section>

        {/* CTA */}
        <div className="flex gap-4 items-center pt-4 border-t border-[var(--background-gray)]">
          <a
            href={cs.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--brand)] text-white no-underline hover:brightness-110 transition-all text-sm font-medium"
          >
            Visit {cs.name}
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/#portfolio"
            className="text-sm text-[var(--gray)] no-underline hover:text-[var(--brand)] transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  );
}
