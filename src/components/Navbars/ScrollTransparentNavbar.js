import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuOptions = [
    { label: "Experiencia", path: "/about-us" },
    { label: "Blog", path: "/projects" },
    { label: "Trabajo Social", path: "/solutions" }
  ];

  return (
    <Navbar
      light
      expand="lg"
      className={`fixed-top ${scrolled ? "scrolled-navbar" : ""}`}
    >
      <Container>
        <NavbarBrand to="/" tag={Link}>
          <img
            src={require("assets/img/RCNegro.png")}
            alt="Logo Principal"
            style={{ width: "100px", height: "auto", display: "block" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto d-flex align-items-center" navbar>
            {menuOptions.map((item) => (
              <NavItem key={item.path}>
                <NavLink tag={Link} to={item.path} className="nav-text">
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <div className="social-icons d-flex gap-3">
            <a href="https://www.linkedin.com/in/renatocabreraf" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedinIn className="social-icon" />
            </a>
            <a href="https://www.facebook.com/renatocabrera98" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://www.instagram.com/renatocabreraf/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@renatocabreraf" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
              <FaTiktok className="social-icon" />
            </a>
            <a href="https://x.com/renatocabreraf?lang=ar-x-fm" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </Collapse>
      </Container>
      <style jsx>{`
        .scrolled-navbar {
          background-color: white !important;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }
        .navbar-toggler {
          border: none;
          outline: none;
          font-size: 24px;
          cursor: pointer;
        }
        .navbar-toggler:focus {
          outline: none;
          box-shadow: none;
        }
        @media (max-width: 992px) {
          .mobile-menu {
            background: white;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 15px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
          }
          .nav-text {
            font-size: 18px;
            padding: 10px;
            text-align: left;
            display: block;
            color: black;
          }
        }
        .social-icons {
          display: flex;
          gap: 15px;
        }
        .social-link {
          color: black;
          font-size: 20px;
          transition: color 0.3s ease-in-out;
        }
        .social-link.linkedin:hover { color: #0077B5; } 
        .social-link.facebook:hover { color: #1877F2; } 
        .social-link.instagram:hover { color: #E1306C; } 
        .social-link.tiktok:hover { color: #000000; } 
        .social-link.twitter:hover { color: #1DA1F2; } 
      `}</style>
    </Navbar>
  );
}

export default ResponsiveNavbar;
