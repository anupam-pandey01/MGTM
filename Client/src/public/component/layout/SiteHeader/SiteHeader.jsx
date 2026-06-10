import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

import "./SiteHeader.css";
import logo from "../../../../assets/icons/mgmt-logo.png";

const navLinks = [
  { path: "/about", label: "About Us" },
  { path: "/real-metrics", label: "Real Metrics" },
  { path: "/services", label: "Services" },
  { path: "/partnerships", label: "Partnerships" },
  { path: "/faq", label: "FAQ's" },
  { path: "/blog", label: "Blogs" },
  { path: "/founder", label: "Our Founder" },
  { path: "/contact", label: "Contact Us" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">

        {/* Logo */}
        <Link to="/" className="header-logo">
          <img src={logo} alt="MGTM Consultancy LLP" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile">
        <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;