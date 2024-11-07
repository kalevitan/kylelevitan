import Header from "./components/header";
import Section from "./components/section"
import Credentials from "./components/credentials";
import Presentations from "./components/presentations";
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
        <div className="layout flex justify-between">
          <Menu/>
          <ThemeToggle/>
        </div>
      </header>

      <main>
        <Section title="header">
          <Header/>
        </Section>

        <Section title="portfolio">
          <Portfolio/>
        </Section>

        <Section title="credentials">
          <Credentials/>
        </Section>

        <Section title="presentations">
          <Presentations/>
        </Section>
      </main>

      <footer className="grid grid-cols-core py-4">
        <div className="layout flex justify-end">
          <Menu/>
        </div>
      </footer>
    </>
  );
}
