// Renato Cabrera Navbar inspirado en Gates Notes
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Conóceme", path: "/about-us" },
    { label: "Blog", path: "/blog-posts" },
    { label: "Labor Social", path: "/social" }
  ];

  return (
    <>
      <header className="navbar-container">
        <div className="navbar">
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/" className="brand">
            <img src={require("assets/img/rcblanco2.png")} alt="RC Logo" className="logo" />
          </Link>

          <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <Link to={item.path} key={item.path} className="nav-item" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="search-icon">
            <FaSearch />
          </button>
        </div>
      </header>

      <style jsx>{`
        .navbar-container {
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 1000;
          background: linear-gradient(to right, #222, #111);
          padding: 0.5rem 1rem;
        }

        .navbar {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
        }

        .logo {
          height: 60px;
          width: 60px;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .menu-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: white;
          display: none;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-item {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
        }

        .nav-item:hover {
          text-decoration: underline;
        }

        .search-icon {
          background: none;
          border: none;
          font-size: 1.3rem;
          color: white;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-menu {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            align-items: start;
            padding: 1rem;
            gap: 1rem;
            display: none;
          }

          .nav-menu.open {
            display: flex;
          }

          .nav-item {
            color: black;
            font-size: 1.2rem;
            font-weight: bold;
          }

          .logo {
            height: 40px;
            width: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
