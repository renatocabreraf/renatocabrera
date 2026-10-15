import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

function ContactUs() {
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("contact-page");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />

      <main className="rc-contact">

        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-shell">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <p className="contact-eyebrow">
                CONTACTO
              </p>

              <h1>
                Hablemos.
                <br />
                <span>Las buenas ideas empiezan así.</span>
              </h1>

              <p className="contact-lead">
                Si quieres conversar sobre tecnología, proyectos,
                consultoría, colaboración o simplemente intercambiar ideas,
                estaré encantado de escucharte.
              </p>

              <div className="contact-actions">

                <a
                  href="mailto:renatocabrerafigueroa@gmail.com"
                  className="contact-primary"
                >
                  Escríbeme <span>→</span>
                </a>

                <a
                  href="https://calendar.app.google/KMwKDykx7d7SRrYq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-secondary"
                >
                  Agenda una cita ↗
                </a>

              </div>

            </motion.div>

          </div>
        </section>

        {/* PROFILE / CONTACT */}
        <section className="contact-profile">
          <div className="contact-shell">

            <div className="contact-grid">

              <motion.div
                className="contact-photo"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={require("assets/img/IMG_5446.JPG")}
                  alt="Renato Cabrera"
                />
              </motion.div>

              <motion.div
                className="contact-info"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >

                <p className="contact-section-label">
                  Contacto directo
                </p>

                <h2>
                  Una conversación
                  <br />
                  puede abrir muchas
                  <br />
                  posibilidades.
                </h2>

                <div className="contact-list">

                  <div className="contact-item">
                    <span className="contact-number">01</span>

                    <div>
                      <h3>Correo</h3>

                      <a href="mailto:renatocabrerafigueroa@gmail.com">
                        renatocabrerafigueroa@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-number">02</span>

                    <div>
                      <h3>Agenda</h3>

                      <p>
                        Si quieres una conversación más estructurada,
                        puedes reservar un espacio directamente en mi calendario.
                      </p>

                      <a
                        href="https://calendar.app.google/KMwKDykx7d7SRrYq9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una cita ↗
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-number">03</span>

                    <div>
                      <h3>LinkedIn</h3>

                      <p>
                        También puedes encontrarme y escribirme directamente
                        a través de LinkedIn.
                      </p>

                      <a
                        href="https://www.linkedin.com/in/renatocabreraf/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver perfil ↗
                      </a>
                    </div>
                  </div>

                </div>

              </motion.div>

            </div>

          </div>
        </section>

        {/* KIND MIND */}
        <section className="contact-kindmind">
          <div className="contact-shell">

            <div className="contact-kindmind-grid">

              <div className="contact-kindmind-copy">

                <p className="contact-section-label light">
                  Tecnología para empresas
                </p>

                <h2>
                  ¿Buscas una solución
                  <br />
                  tecnológica?
                </h2>

                <p>
                  Si tu conversación está relacionada con desarrollo,
                  consultoría, cloud, experiencia digital o transformación
                  tecnológica, también puedes hacerlo a través de
                  Kind Mind Technologies.
                </p>

                <div className="contact-kindmind-links">

                  <a
                    href="mailto:info@kindmindgt.com"
                  >
                    info@kindmindgt.com →
                  </a>

                  <a
                    href="https://www.kindmindgt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kindmindgt.com ↗
                  </a>

                </div>

              </div>

              <div className="contact-kindmind-logo">
                <img
                  src={require("assets/img/Imagotipo Horizontal_Vivid Blue.png")}
                  alt="Kind Mind Technologies"
                />
              </div>

            </div>

          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="contact-philosophy">
          <div className="contact-shell contact-narrow">

            <p className="contact-section-label light">
              Antes de empezar
            </p>

            <h2>
              Primero entendamos
              <br />
              el problema.
              <br />
              <span>Luego construimos.</span>
            </h2>

            <p>
              Las mejores soluciones suelen comenzar con una buena conversación,
              no con una herramienta específica.
            </p>

          </div>
        </section>

        {/* CLOSING */}
        <section className="contact-closing">
          <div className="contact-shell contact-narrow">

            <h2>
              ¿Tienes algo en mente?
              <br />
              <span>Conversemos.</span>
            </h2>

            <div className="contact-closing-links">

              <a href="mailto:renatocabrerafigueroa@gmail.com">
                Escríbeme →
              </a>

              <a
                href="https://calendar.app.google/KMwKDykx7d7SRrYq9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda una cita ↗
              </a>

            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="contact-footer">

          <div className="contact-shell contact-footer-inner">

            <span>
              © 2026 Renato Cabrera
            </span>

            <div>

              <Link to="/presentation">
                Inicio
              </Link>

              <Link to="/about-us">
                Conóceme
              </Link>

              <Link to="/blog-posts">
                Blog
              </Link>

              <Link to="/social">
                Labor Social
              </Link>

              <Link to="/politicas">
                Privacidad
              </Link>

            </div>

          </div>

        </footer>

      </main>

      <style>{`

        .rc-contact {
          background: #fff;
          color: #1d1d1f;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "SF Pro Display",
            "SF Pro Text",
            "Helvetica Neue",
            Helvetica,
            Arial,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow: hidden;
        }

        .contact-shell {
          width: calc(100% - 80px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .contact-narrow {
          max-width: 920px;
        }

        /* HERO */

        .contact-hero {
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 170px 0 110px;
          background:
            radial-gradient(
              circle at 78% 16%,
              rgba(0, 113, 227, 0.08),
              transparent 31%
            ),
            #fff;
        }

        .contact-eyebrow,
        .contact-section-label {
          margin: 0 0 28px;
          color: #6e6e73;
          font-size: 13px;
          line-height: 1;
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-hero h1 {
          max-width: 1060px;
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(68px, 9vw, 126px);
          line-height: 0.92;
          letter-spacing: -0.07em;
          font-weight: 650;
        }

        .contact-hero h1 span {
          color: #86868b;
        }

        .contact-lead {
          max-width: 720px;
          margin: 50px 0 0;
          color: #6e6e73;
          font-size: clamp(22px, 2.2vw, 30px);
          line-height: 1.38;
          letter-spacing: -0.03em;
        }

        .contact-actions {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 44px;
        }

        .contact-primary {
          display: inline-flex;
          gap: 9px;
          padding: 13px 24px;
          border-radius: 999px;
          background: #0071e3;
          color: #fff !important;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none !important;
          transition: 0.25s ease;
        }

        .contact-primary:hover {
          background: #0077ed;
          transform: translateY(-1px);
        }

        .contact-secondary {
          color: #0066cc !important;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none !important;
        }

        /* PROFILE */

        .contact-profile {
          padding: 170px 0;
          background: #f5f5f7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 100px;
          align-items: center;
        }

        .contact-photo img {
          width: 100%;
          display: block;
          border-radius: 28px;
        }

        .contact-info h2,
        .contact-kindmind h2,
        .contact-philosophy h2,
        .contact-closing h2 {
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .contact-list {
          margin-top: 60px;
          border-top: 1px solid #d2d2d7;
        }

        .contact-item {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 20px;
          padding: 30px 0;
          border-bottom: 1px solid #d2d2d7;
        }

        .contact-number {
          color: #86868b;
          font-size: 13px;
          font-weight: 600;
        }

        .contact-item h3 {
          margin: 0 0 10px;
          font-size: 24px;
          letter-spacing: -0.03em;
          font-weight: 600;
        }

        .contact-item p {
          max-width: 520px;
          margin: 0 0 12px;
          color: #6e6e73;
          font-size: 16px;
          line-height: 1.55;
        }

        .contact-item a {
          color: #0066cc;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
        }

        /* KIND MIND */

        .contact-kindmind {
          padding: 170px 0;
          background: #111;
          color: #fff;
        }

        .contact-section-label.light {
          color: #86868b;
        }

        .contact-kindmind-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 90px;
          align-items: center;
        }

        .contact-kindmind h2 {
          color: #f5f5f7;
        }

        .contact-kindmind-copy > p:not(.contact-section-label) {
          max-width: 660px;
          margin: 38px 0 0;
          color: #a1a1a6;
          font-size: 20px;
          line-height: 1.6;
        }

        .contact-kindmind-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 35px;
        }

        .contact-kindmind-links a {
          color: #2997ff;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
        }

        .contact-kindmind-logo {
          display: flex;
          justify-content: center;
          padding: 60px;
          border-radius: 28px;
          background: #fff;
        }

        .contact-kindmind-logo img {
          width: 100%;
          max-width: 360px;
          height: auto;
          display: block;
        }

        /* PHILOSOPHY */

        .contact-philosophy {
          padding: 180px 0;
          background: #000;
          color: #f5f5f7;
        }

        .contact-philosophy h2 {
          color: #f5f5f7;
        }

        .contact-philosophy h2 span {
          color: #86868b;
        }

        .contact-philosophy > .contact-shell > p:last-child {
          max-width: 720px;
          margin: 50px 0 0;
          color: #a1a1a6;
          font-size: 22px;
          line-height: 1.55;
        }

        /* CLOSING */

        .contact-closing {
          padding: 180px 0;
          background: #fff;
        }

        .contact-closing h2 span {
          color: #86868b;
        }

        .contact-closing-links {
          display: flex;
          gap: 36px;
          margin-top: 50px;
        }

        .contact-closing-links a {
          color: #0066cc;
          font-size: 20px;
          font-weight: 500;
          text-decoration: none;
        }

        /* FOOTER */

        .contact-footer {
          padding: 35px 0 45px;
          background: #f5f5f7;
          border-top: 1px solid #d2d2d7;
        }

        .contact-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #6e6e73;
          font-size: 13px;
        }

        .contact-footer-inner div {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .contact-footer a {
          color: #424245;
          text-decoration: none;
        }

        .contact-footer a:hover {
          text-decoration: underline;
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .contact-shell {
            width: calc(100% - 42px);
          }

          .contact-hero {
            min-height: auto;
            padding: 150px 0 100px;
          }

          .contact-hero h1 {
            font-size: clamp(56px, 17vw, 82px);
          }

          .contact-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .contact-profile,
          .contact-kindmind,
          .contact-philosophy,
          .contact-closing {
            padding: 110px 0;
          }

          .contact-grid,
          .contact-kindmind-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .contact-kindmind-logo {
            padding: 40px;
          }

          .contact-closing-links {
            flex-direction: column;
            gap: 18px;
          }

          .contact-footer-inner {
            flex-direction: column;
          }

        }

      `}</style>
    </>
  );
}

export default ContactUs;
