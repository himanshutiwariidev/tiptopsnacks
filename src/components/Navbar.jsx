"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const logo = "/assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "OEM Partners", link: "#oem" },
    { name: "Products", link: "#products" },
    { name: "About Us", link: "#about" },
    { name: "Partners", link: "#partners" },
    { name: "Why Us", link: "#why-us" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <>
      {/* Topbar */}
      <div className="bg-[var(--brand-gold)] text-[var(--brand-red-dark)] border-b border-[var(--brand-gold-deep)]">
        <div className="container mx-auto px-2 md:px-4 ">
          <div className="flex items-center justify-between h-11">
            <div className="flex items-center gap-2 md:gap-6 text-xs font-medium ">
              <a
                href="tel:+919810637185"
                className="flex items-center gap-2 hover:text-[var(--brand-brown)] transition-all duration-300"
              >
                <Phone size={15} />
                +91 98106 37185
              </a>

              <a
                href="mailto:info@tiptopfoodtech.com"
                className="flex items-center gap-2 hover:text-[var(--brand-brown)] transition-all duration-300"
              >
                <Mail size={15} />
                info@tiptopfoodtech.com
              </a>
            </div>

            <div className="hidden md:block text-sm font-semibold tracking-wide">
              India's Trusted Snack Manufacturer Since 1991
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 shadow-md backdrop-blur border-b border-[rgba(197,139,8,0.2)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-17">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <img
                src={logo}
                alt="Tip Top"
                className="h-15 md:h-20 md:p-1 w-auto object-contain"
              />

             
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="relative text-[var(--brand-brown)] font-semibold hover:text-[var(--brand-red)] transition-all duration-300 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--brand-gold)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a href="#contact" className="brand-button inline-flex px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Become Distributor
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[var(--brand-red)]"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-[rgba(197,139,8,0.2)]">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 border-b border-[rgba(197,139,8,0.16)] text-[var(--brand-brown)] font-medium hover:bg-[var(--brand-cream)]"
              >
                {item.name}
              </a>
            ))}

            <div className="p-5">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="brand-button flex w-full justify-center py-3 rounded-lg font-semibold"
              >
                Become Distributor
              </a>
            </div>

            <div className="px-5 pb-5">
              <div className="bg-[var(--brand-cream)] rounded-lg p-4">
                <a
                  href="tel:+919810637185"
                  className="flex items-center gap-2 text-[var(--brand-red)] font-medium mb-2"
                >
                  <Phone size={16} />
                  +91 98106 37185
                </a>

                <a
                  href="mailto:info@tiptopfoodtech.com"
                  className="flex items-center gap-2 text-[var(--brand-red)] font-medium"
                >
                  <Mail size={16} />
                  info@tiptopfoodtech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
