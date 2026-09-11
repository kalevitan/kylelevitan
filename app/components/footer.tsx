import Menu from "@/app/components/menu";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-core py-6" role="contentinfo">
      <div className="layout flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-md font-serif text-[var(--brand)] text-center sm:text-left" aria-label="Copyright">
          © {new Date().getFullYear()}, Kyle Levitan · <a href="https://levitandigital.com" target="_blank" rel="noopener noreferrer" style={{display: 'inline', textDecoration: 'none'}}>Levitan Digital LLC</a>
        </div>
        <Menu/>
      </div>
    </footer>
  )
}

export default Footer;
