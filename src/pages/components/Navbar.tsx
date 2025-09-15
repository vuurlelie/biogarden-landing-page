import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bakonykincse from "../../assets/images/bakonykincse.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.round((scrolled / max) * 100)) : 0);
      setIsScrolled(scrolled > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const goContact = () => {
    closeMobile();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobile();
  };

  const linkBase =
    "px-1 py-2 text-[0.98rem] md:text-base uppercase transition-colors text-[#6F8625]";
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      linkBase,
      isActive
        ? "font-semibold underline underline-offset-8 decoration-2 decoration-[#5a6f1a]/70 tracking-wide"
        : "hover:font-semibold",
    ].join(" ");

  return (
    <>
      {/* progress bar */}
      <div
        id="processbar"
        className="fixed top-0 left-0 z-50 h-[3px] bg-[#6F8625]/50"
        style={{ width: `${progress}%` }}
      />

      {/* FIXED NAV */}
      <nav
        id="navbar"
        className={[
          "fixed inset-x-0 top-0 z-40 w-full backdrop-blur transition-all duration-300",
          isScrolled
            ? "bg-gradient-to-b from-[#FFF3EA]/95 to-[#FFE8B2]/95 shadow-md"
            : "bg-[#FBFBFB]/95 shadow-sm",
        ].join(" ")}
        style={{ height: isScrolled ? "5rem" : "6rem" }}
      >
        <div className="w-full h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-4" onClick={goTop} aria-label="Kezdőlap">
            <img src={logo} alt="Logó" className="h-14 w-auto" />
            <img src={bakonykincse} alt="Bakony Kincse Biokertészet" className="hidden xl:block h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass} onClick={closeMobile}>Kezdőlap</NavLink>
            <NavLink to="/bemutatkozas" className={linkClass} onClick={closeMobile}>Bemutatkozás</NavLink>
            <NavLink to="/termekeink" className={linkClass} onClick={closeMobile}>Termékeink</NavLink>
            <button
              type="button"
              onClick={goContact}
              className={`${linkBase} hover:font-semibold bg-transparent border-0 outline-none ring-0 shadow-none appearance-none [-webkit-appearance:none] p-0 m-0`}
              style={{ fontVariant: "small-caps" }}
            >
              Kapcsolat
            </button>
          </div>

          {/* Mobile toggle – teljesen átlátszó, semmi default háttér */}
          <button
            type="button"
            aria-label="Menü megnyitása"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center gap-2 px-3 py-2 text-gray-800
                       bg-transparent border-0 shadow-none outline-none ring-0 focus:outline-none focus:ring-0"
            onClick={() => setMobileOpen(v => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z" />
            </svg>
            Menü
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t ${mobileOpen ? "block" : "hidden"} ${isScrolled ? "bg-[#FFF3EA]/95" : "bg-white"}`}
        >
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink to="/" className={linkClass} onClick={closeMobile}>Kezdőlap</NavLink>
            <NavLink to="/bemutatkozas" className={linkClass} onClick={closeMobile}>Bemutatkozás</NavLink>
            <NavLink to="/termekeink" className={linkClass} onClick={closeMobile}>Termékeink</NavLink>
            <button
              type="button"
              onClick={goContact}
              className={`${linkBase} text-left hover:font-semibold bg-transparent border-0 outline-none ring-0 shadow-none appearance-none [-webkit-appearance:none] p-0 m-0`}
              style={{ fontVariant: "small-caps" }}
            >
              Kapcsolat
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer – hogy a tartalom ne csússzon a fix nav alá */}
      <div aria-hidden style={{ height: isScrolled ? "5rem" : "6rem" }} />
    </>
  );
}