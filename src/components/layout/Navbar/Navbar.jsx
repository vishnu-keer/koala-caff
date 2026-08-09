import { useEffect, useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import {
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

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

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ===========================
              NAVBAR
      =========================== */}

      <header
        className={`navbar ${
          scrolled ? "navbar--active" : ""
        }`}
      >
        <div className="container navbar__container">

          <a
            href="#home"
            className="navbar__logo"
          >
            <img
              src={logo}
              alt="Koala Caff"
            />
          </a>

          <nav className="navbar__links">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="navbar__button"
          >
            Book a Table
          </a>

          <button
            className="navbar__menu"
            onClick={() =>
              setMenuOpen(true)
            }
            aria-label="Open Menu"
          >
            <HiOutlineMenuAlt3 />
          </button>

        </div>
      </header>

      {/* ===========================
              OVERLAY
      =========================== */}

      <div
        className={`overlay ${
          menuOpen
            ? "overlay--show"
            : ""
        }`}
        onClick={() =>
          setMenuOpen(false)
        }
      />

      {/* ===========================
            MOBILE MENU
      =========================== */}

      <aside
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu--show"
            : ""
        }`}
      >

        {/* Top */}

        <div className="mobile-menu__top">

          <button
            onClick={() =>
              setMenuOpen(false)
            }
            aria-label="Close Menu"
          >
            <HiOutlineX />
          </button>

        </div>

        {/* Navigation */}

        <nav className="mobile-menu__nav">

          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {item.title}
            </a>
          ))}

        </nav>

        {/* Footer */}

        <div className="mobile-menu__footer">

          <a
            href="#contact"
            className="mobile-menu__book"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Book a Table
          </a>

          <div className="mobile-menu__socials">

            <a
              href="https://www.instagram.com/koalacaff/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.google.com/maps/place/KOALA+CAFF/@27.459817,73.2890615,7z/data=!4m10!1m2!2m1!1skoala+cafe!3m6!1s0x396dc970f6b25dcf:0x5b62344db75de96!8m2!3d26.8043098!4d75.8103023!15sCgprb2FsYSBjYWZlWgwiCmtvYWxhIGNhZmWSAQRjYWZl4AEA!16s%2Fg%2F11zcnxwdb0?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt />
              <span>Google Maps</span>
            </a>

          </div>

        </div>

      </aside>
    </>
  );
}