import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import "./Navbar.scss";

import logo from "../../../assets/logos/logo.webp";

const navLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Menu",
    href: "#menu",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--active" : ""}`}>
        <div className="container navbar__container">
          <a href="#home" className="navbar__logo">
            <img src={logo} alt="Koala Caff" />
          </a>

          <nav className="navbar__links">
            {navLinks.map((item) => (
              <a key={item.title} href={item.href}>
                {item.title}
              </a>
            ))}
          </nav>

          <a href="#contact" className="navbar__button">
            Book a Table
          </a>

          <button className="navbar__menu" onClick={() => setMenuOpen(true)}>
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </header>

      {/* Overlay */}

      <div
        className={`overlay ${menuOpen ? "overlay--show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}

      <aside className={`mobile-menu ${menuOpen ? "mobile-menu--show" : ""}`}>
        <div className="mobile-menu__top">
          <img src={logo} alt="Koala Caff" />

          <button onClick={() => setMenuOpen(false)}>
            <HiOutlineX />
          </button>
        </div>

        <nav>
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__button">
          Book a Table
        </a>
      </aside>
    </>
  );
}
