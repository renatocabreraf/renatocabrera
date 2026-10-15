import React from "react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="re-footer">
      <div className="re-shell re-footer-inner">
        <span>© 2026 Renato Cabrera</span>
        <div>
          <Link to="/presentation">Inicio</Link>
          <Link to="/about-us">Conóceme</Link>
          <Link to="/blog-posts">Blog</Link>
          <Link to="/libros">Libros</Link>
          <Link to="/social">Labor Social</Link>
          <Link to="/contact-us">Contacto</Link>
          <Link to="/politicas">Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
