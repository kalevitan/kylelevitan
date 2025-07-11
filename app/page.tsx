import Header from "./components/header";
import Section from "./components/section"
import Skills from "./components/skills";
import Certifications from "./components/certifications";
import Menu from "./components/menu";
import ThemeToggle from "./components/themetoggle";
import { generatePortfolioStructuredData, generateBreadcrumbStructuredData } from './lib/seo';
import dynamic from 'next/dynamic';

const Portfolio = dynamic(() => import('./components/portfolio'), {
  loading: () => <p className="text-center p-4">Loading portfolio items...</p>,
});

// Import projects data for structured data
import projects from './components/portfolio/projects.json';

export default function Home() {
  const portfolioStructuredData = generatePortfolioStructuredData(projects);
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/#portfolio' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Certifications', url: '/#certifications' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
        Skip to main content
      </a>

      <header className="grid grid-cols-core" role="banner">
        <div className="layout flex justify-between my-4">
          <Menu/>
          <ThemeToggle/>
        </div>
      </header>

      <main id="main-content" className="site-main" role="main">
        <Section title="header" classes="animated-gradient">
          <Header/>
        </Section>

        <Section title="portfolio" classes="bg-[var(--background-gray)]">
          <Portfolio/>
        </Section>

        <Section title="skills">
          <Skills/>
        </Section>

        <Section title="certifications" classes="bg-[var(--background-gray)]">
          <Certifications/>
        </Section>
      </main>

      <footer className="grid grid-cols-core py-6" role="contentinfo">
        <div className="layout flex items-center justify-between">
          <div className="text-md font-serif text-[var(--brand)]" aria-label="Copyright">
            © {new Date().getFullYear()}, Kyle Levitan
          </div>
          <Menu/>
        </div>
      </footer>
    </>
  );
}
