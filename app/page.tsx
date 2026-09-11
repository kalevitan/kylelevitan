import Header from "@/app/components/header";
import Section from "@/app/components/section"
import Skills from "@/app/components/skills";
import Menu from "@/app/components/menu";
import ThemeToggle from "@/app/components/themetoggle";
import Writing from "@/app/components/writing";
import { getMediumPosts } from '@/app/lib/medium';
import { generatePortfolioStructuredData, generateBreadcrumbStructuredData, generateBlogStructuredData } from '@/app/lib/seo';
import dynamic from 'next/dynamic';

const Portfolio = dynamic(() => import('@/app/components/portfolio'), {
  loading: () => <p className="text-center p-4">Loading portfolio items...</p>,
});

// Import projects data for structured data
import projects from '@/app/components/portfolio/projects.json';
import Footer from "@/app/components/footer";

export default async function Home() {
  const posts = await getMediumPosts();
  const portfolioStructuredData = generatePortfolioStructuredData(projects);
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/#portfolio' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Writing', url: '/#writing' },
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
      {posts.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBlogStructuredData(posts)),
          }}
        />
      )}

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

        {posts.length > 0 && (
          <Section title="writing" classes="bg-[var(--background-gray)]">
            <Writing posts={posts}/>
          </Section>
        )}

      </main>

      <Footer/>
    </>
  );
}
