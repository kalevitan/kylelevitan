import Header from "./components/header";
import Section from "./components/section"
import Credentials from "./components/credentials";
import Menu from "./components/menu";
import ThemeToggle from "./components/themetoggle";
import dynamic from 'next/dynamic';

const Portfolio = dynamic(() => import('./components/portfolio'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <header className="grid grid-cols-core">
        <div className="layout flex justify-between my-4">
          <Menu/>
          <ThemeToggle/>
        </div>
      </header>

      <main>
        <Section title="header" classes="animated-gradient">
          <Header/>
        </Section>

        <Section title="portfolio">
          <Portfolio/>
        </Section>

        <Section title="credentials">
          <Credentials/>
        </Section>
      </main>

      <footer className="grid grid-cols-core py-4">
        <div className="layout flex items-center justify-between">
          <div className="text-md font-serif text-[var(--brand)]">© {new Date().getFullYear()}, Kyle Levitan</div>
          <Menu/>
        </div>
      </footer>
    </>
  );
}
