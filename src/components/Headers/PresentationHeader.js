// Renato Cabrera Navbar inspirado en Gates Notes
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Conóceme", path: "/about-us" },
    { label: "Blog", path: "/blog-posts" },
    { label: "Labor Social", path: "/trabajo-social" }
  ];

  return (
    <>
      <header className="navbar-container">
        <div className="navbar">
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/" className="brand">
            <img src={require("assets/img/rcblanco2.png")} alt="RC Logo" className="logo" width="100%" />
          </Link>

          <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <Link to={item.path} key={item.path} className="nav-item" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          
        </div>
      </header>

      <div className="presentation-container">
        <div className="presentation-inner">
          <img
            src={require("assets/img/b4.png")}
            alt="Imagen de presentación"
            className="presentation-image fade-in-blur"
          />
          <div className="presentation-overlay fade-in-text">
            <Link to="/destacado" className="presentation-box">
              <h6 className="presentation-subtitle">DESTACADO</h6>
              <h2 className="presentation-title">Las 5 Lecturas que han ayudado a formarme como profesional</h2>
              <p className="presentation-description">Una pequeña reflexión y la importancia de leer todos los días.</p>
            </Link>
          </div>
        </div>
      </div>

      <section className="text-highlight">
        <p>
          <strong>Mi trabajo</strong>
          <img
            src={require("assets/img/cross-2536818_1280.jpg")}
            alt="Foto mini"
            className="inline-photo"
          />
          nace del firme ideal de que cada persona debe tener acceso a una vida plena y con propósito, independientemente del lugar en el que haya nacido.
        </p>
      </section>

      <section className="featured-section">
        <div className="featured-left">
          <div className="featured-image-wrapper">
            <a href="/about-us"><img src={require("assets/img/conoceme.png")} alt="Destacado" className="featured-image" /></a>
            
          </div>
        </div>
        <div className="featured-left">
          <div className="featured-image-wrapper">
            <img src={require("assets/img/oratorio.png")} alt="Destacado" className="featured-image" />
            <div className="featured-overlay">
              <h6 className="featured-subtitle">MI MIRADA HACIA ADELANTE</h6>
              <h2 className="featured-title">La juventud es la clave del desarrollo de las sociedades</h2>
              <p className="featured-description">Acompañame a conocer cómo puedes ayudar a forjar una mejor sociedad, tomando a la niñez como punto de partida.</p>
            </div>
          </div>
          <br/>
          <h6 className="featured-subtitle">Libros</h6>
          <h3 className="featured-title">Mi pasión es contar historias</h3>
          <p className="featured-description">Conoce mis libros, los cuales hablan de mis aficiones, mis fantasías e historias que valen la pena ser contadas. Estaré publicando cada noticia sobre esto por acá.</p>
          <img src={require("assets/img/burbuja.jpg")} alt="Ilustración" className="mini-featured-image" />
        </div>
        
      </section>

<section className="text-highlight">
        <p>
          <strong>El futuro </strong>
          
           depende enteramente del desarrollo correcto de la sociedad, no podemos ignorar los sueños de los jóvenes,
          las oportunidades de empleo emergentes y la educación de la humanidad.
        </p>
      </section>
     
<footer className="site-footer">
        <div className="footer-links">
          <Link to="/about-us">Conóceme</Link>
          <Link to="/blog-post">Blog</Link>
          <Link to="/social">Labor Social</Link>
    
        </div>
        
        <div className="footer-bottom">
          <Link to="/privacy">Política de Privacidad</Link>
          <Link to="/terms">Términos de uso</Link>
          <Link to="/contacto">Contáctame</Link>
          <span>© 2025 Renato Cabrera</span>
        </div>
      </footer>

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
          height: 100px;
          width: 190px;
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

        .presentation-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .presentation-inner {
          position: relative;
          width: 100%;
          max-width: 1920px;
        }

        .presentation-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .presentation-overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 10px;
        }

        .presentation-box {
          color: black;
          text-decoration: none;
        }

        .presentation-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #444;
        }

        .presentation-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 10px 0;
        }

        .presentation-description {
          font-size: 1rem;
          color: #666;
        }

        .fade-in-text {
          opacity: 0;
          animation: fadeInText 1.2s ease-out forwards;
          animation-delay: 0.4s;
        }

        @keyframes fadeInText {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-highlight {
          padding: 60px 20px;
          text-align: center;
        }

        .text-highlight p {
          font-size: 1.6rem;
          color: #555;
          max-width: 800px;
          margin: auto;
          line-height: 1.6;
        }

        .inline-photo {
          height: 40px;
          width: auto;
          margin: 0 8px;
          vertical-align: middle;
          border-radius: 6px;
        }

        .featured-section {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding: 60px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .featured-left {
          flex: 1;
          min-width: 300px;
        }

        .featured-image-wrapper {
          position: relative;
        }

        .featured-image {
          width: 100%;
          border-radius: 12px;
        }

        .featured-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 8px;
        }

        .featured-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          color: #444;
        }

        .featured-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 10px 0;
        }

        .featured-description {
          font-size: 1rem;
          color: #666;
        }

        .featured-right {
          flex: 1;
          min-width: 300px;
        }

        .mini-featured-image {
          width: 100%;
          border-radius: 8px;
          margin-top: 20px;
        }
          .site-footer {
  background-color: #f5f5f5;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #555;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.footer-links,
.footer-bottom {
  margin-bottom: 20px;
}

.footer-links a,
.footer-bottom a {
  color: #333;
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-bottom a:hover {
  color: #0078d4; /* azul sobrio como en Gates Notes */
  text-decoration: underline;
}

.footer-bottom span {
  display: block;
  margin-top: 10px;
  color: #999;
}

      `
      }</style>
    </>
  );
};

export default Navbar;
