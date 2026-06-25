import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "OEM Partners", link: "#oem" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-[var(--brand-brown)] text-white relative overflow-hidden">
      
      {/* Top Gradient Border */}
      <div className="h-1 brand-rule"></div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Tip Top Food Tech"
              className="h-20 bg-white p-2 rounded-xl mb-6"
            />

            <p className="text-[#f6e7bd] leading-relaxed">
              TIP TOP Food Tech (India) Pvt. Ltd. has been delivering
              premium-quality food products since 1991 with a commitment
              to taste, innovation, and customer satisfaction.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 bg-[var(--brand-red)] rounded-full flex items-center justify-center hover:bg-[var(--brand-gold-deep)] hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-[var(--brand-red)] rounded-full flex items-center justify-center hover:bg-[var(--brand-gold-deep)] hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-[var(--brand-red)] rounded-full flex items-center justify-center hover:bg-[var(--brand-gold-deep)] hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-[var(--brand-red)] rounded-full flex items-center justify-center hover:bg-[var(--brand-gold-deep)] hover:scale-110 transition-all duration-300"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-12 h-1 brand-rule rounded-full"></span>
            </h3>

            <ul className="space-y-4 mt-8">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-[#f6e7bd] hover:text-[var(--brand-gold)] transition-all duration-300"
                  >
                    <ArrowRight size={16} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Categories
              <span className="absolute left-0 -bottom-2 w-12 h-1 brand-rule rounded-full"></span>
            </h3>

            <ul className="space-y-4 mt-8 text-[#f6e7bd]">
              <li>Namkeen Snacks</li>
              <li>Potato Chips</li>
              <li>Rings Masala</li>
              <li>Jeera Papad</li>
              <li>Crispy Pasta</li>
              <li>Kurrey Masala</li>
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-12 h-1 brand-rule rounded-full"></span>
            </h3>

            <div className="space-y-5 mt-8">

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-[var(--brand-gold)] flex-shrink-0 mt-1"
                />
                <p className="text-[#f6e7bd]">
                  D-311, Tagore Garden Extension,
                  New Delhi - 110027
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={20}
                  className="text-[var(--brand-gold)] flex-shrink-0"
                />
                <p className="text-[#f6e7bd]">
                  +91 1800 309 8301
                </p>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="text-[var(--brand-gold)] flex-shrink-0"
                />
                <p className="text-[#f6e7bd]">
                  info@tiptopfoodtech.com
                </p>
              </div>

              <div className="flex gap-3">
                <Globe
                  size={20}
                  className="text-[var(--brand-gold)] flex-shrink-0"
                />
                <p className="text-[#f6e7bd]">
                  www.tiptopfoodtech.com
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#d9c28f] text-sm text-center md:text-left">
            © {new Date().getFullYear()} TIP TOP Food Tech (India) Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-5 text-sm text-[#d9c28f]">
            <a href="#" className="hover:text-[var(--brand-gold)] transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[var(--brand-gold)] transition">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
