import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import rcLogo from "../../assets/img/rcblanco2.png"; // Asegúrate de que esta ruta sea correcta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [

    { label: "Blog", path: "/blog-posts" },
    { label: "Labor Social", path: "/social" },
  ];

  return (
    <>
      <header style={styles.header}>
        <div style={styles.navbar}>
          <Link to="/" style={styles.brand}>
            <img src={rcLogo} alt="Logo RC" style={styles.logo} />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} style={styles.menuButton}>
            {isOpen ? <FaTimes color="white" size={24} /> : <FaBars color="white" size={24} />}
          </button>

          <nav style={{ ...styles.navMenu, ...(isOpen ? styles.navMenuOpen : {}) }}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.navItem,
                  ...(isOpen ? styles.navItemMobile : {}),
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <br/>    </>
  );
};

const styles = {
  header: {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    background: "linear-gradient(to right, #222, #111)",
    padding: "0.5rem 1rem",
  },
  navbar: {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logo: {
    height: "60px",
    width: "60px",
    objectFit: "contain",
  },
  menuButton: {
    background: "none",
    border: "none",
    display: "none",
    cursor: "pointer",
  },
  navMenu: {
    display: "flex",
    gap: "2rem",
  },
  navMenuOpen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "fixed",
    top: "70px",
    left: 0,
    width: "100%",
    background: "white",
    padding: "1.5rem 1rem",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    borderRadius: "0 0 12px 12px",
    zIndex: 1000,
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
  },
  navItemMobile: {
    color: "#333",
    fontSize: "1.2rem",
    fontWeight: 600,
    padding: "0.5rem 0",
  },
  // Responsive styles (override via media query in CSS if needed)
  '@media only screen and (max-width: 768px)': {
    menuButton: {
      display: "block",
    },
    navMenu: {
      display: "none",
    },
  },
};

export default Navbar;
