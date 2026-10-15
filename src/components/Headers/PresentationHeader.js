import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PresentationHeader() {
  return (
    <>
      <main className="rc-home">

        {/* HERO */}
        <section className="home-hero">
          <div className="home-shell">

            <motion.div
              className="home-hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="home-eyebrow">
                RENATO CABRERA
              </p>

              <h1>
                Tecnología para
                <br />
                <span>construir futuro.</span>
              </h1>

              <p className="home-lead">
                Ingeniería, liderazgo, emprendimiento y propósito.
                Construyo tecnología pensando primero en las personas.
              </p>

              <div className="home-actions">
                <Link to="/about-us" className="home-primary">
                  Conóceme <span>→</span>
                </Link>

                <Link to="/blog-posts" className="home-secondary">
                  Explorar el blog <span>↗</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

        {/* FEATURED PHOTO */}
        <section className="home-feature">
          <div className="home-wide">

            <Link to="/5lecturas" className="home-feature-link">

              <motion.div
                className="home-feature-image-wrap"
                initial={{ opacity: 0, scale: 0.985 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={require("assets/img/b4.png")}
                  alt="Las cinco lecturas que han influido en mi formación"
                  className="home-feature-image"
                />

                <div className="home-feature-gradient"></div>

                <div className="home-feature-copy">
                  <p className="home-kicker">
                    DESTACADO
                  </p>

                  <h2>
                    Cinco lecturas que
                    <br />
                    han marcado mi camino.
                  </h2>

                  <p>
                    Ideas, historias y reflexiones que han influido
                    en mi manera de pensar y crecer profesionalmente.
                  </p>

                  <span className="home-text-link">
                    Leer más →
                  </span>
                </div>

              </motion.div>

            </Link>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="home-manifesto">
          <div className="home-shell home-narrow">

            <p className="home-section-label">
              Una idea sencilla
            </p>

            <h2>
              La tecnología no debería
              <br />
              sentirse complicada.
            </h2>

            <p className="home-large-copy">
              Mi trabajo nace de una convicción:
              las mejores soluciones no son las que parecen más sofisticadas,
              sino las que resuelven problemas reales de manera simple.
            </p>

          </div>
        </section>

        {/* ABOUT IMAGE */}
        <section className="home-story">
          <div className="home-shell">

            <div className="home-story-grid">

              <motion.div
                className="home-story-photo"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/about-us">
                  <img
                    src={require("assets/img/conoceme.png")}
                    alt="Conoce más sobre Renato Cabrera"
                  />
                </Link>
              </motion.div>

              <motion.div
                className="home-story-content"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="home-section-label">
                  Mi historia
                </p>

                <h2>
                  Ingeniería,
                  <br />
                  liderazgo
                  <br />
                  y propósito.
                </h2>

                <p>
                  Mi carrera ha evolucionado desde el desarrollo y
                  administración de sistemas hasta la dirección de
                  tecnología, transformación digital y construcción
                  de productos.
                </p>

                <Link to="/about-us" className="home-inline-link">
                  Conoce mi trayectoria →
                </Link>
              </motion.div>

            </div>

          </div>
        </section>

        {/* SOCIAL / YOUTH */}
        <section className="home-youth">
          <div className="home-wide">

            <Link to="/juventud" className="home-youth-link">
              <div className="home-youth-image-wrap">

                <img
                  src={require("assets/img/oratorio.png")}
                  alt="Juventud y desarrollo social"
                  className="home-youth-image"
                />

                <div className="home-youth-overlay"></div>

                <div className="home-youth-copy">
                  <p className="home-kicker light">
                    MI MIRADA HACIA ADELANTE
                  </p>

                  <h2>
                    El futuro también
                    <br />
                    se construye acompañando.
                  </h2>

                  <p>
                    Creo profundamente en la educación,
                    la juventud y las oportunidades como motores
                    del desarrollo de nuestras sociedades.
                  </p>

                  <span>
                    Conocer más →
                  </span>
                </div>

              </div>
            </Link>

          </div>
        </section>

        {/* BOOKS */}
        <section className="home-books">
          <div className="home-shell">

            <div className="home-books-grid">

              <div className="home-books-content">

                <p className="home-section-label">
                  Historias
                </p>

                <h2>
                  También escribo.
                </h2>

                <p className="home-large-copy small">
                  Escribir es otra forma de construir:
                  ordenar ideas, imaginar posibilidades y
                  preservar historias que merecen ser contadas.
                </p>

                <Link to="/libros" className="home-inline-link">
                  Descubre mis libros →
                </Link>

              </div>

              <motion.div
                className="home-books-photo"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
              >
                <Link to="/libros">
                  <img
                    src={require("assets/img/burbuja.jpg")}
                    alt="Libros e historias de Renato Cabrera"
                  />
                </Link>
              </motion.div>

            </div>

          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="home-philosophy">
          <div className="home-shell home-narrow">

            <p className="home-section-label light">
              El futuro
            </p>

            <h2>
              No se espera.
              <br />
              <span>Se diseña.</span>
            </h2>

            <p>
              Las oportunidades de empleo, la educación,
              la innovación y los sueños de los jóvenes
              forman parte de una misma conversación:
              qué sociedad queremos construir.
            </p>

          </div>
        </section>

        {/* CLOSING */}
        <section className="home-closing">
          <div className="home-shell home-narrow">

            <h2>
              Hay mucho por
              <br />
              <span>construir todavía.</span>
            </h2>

            <div className="home-closing-actions">

              <Link to="/about-us">
                Sobre mí →
              </Link>

              <Link to="/contact-us">
                Hablemos →
              </Link>

            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="home-footer">

          <div className="home-shell home-footer-inner">

            <span>
              © 2026 Renato Cabrera
            </span>

            <div>
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

              <a
                href="https://www.linkedin.com/in/renatocabreraf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

          </div>

        </footer>

      </main>

      <style>{`

        .rc-home {
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

        .home-shell {
          width: calc(100% - 80px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .home-wide {
          width: calc(100% - 48px);
          max-width: 1480px;
          margin: 0 auto;
        }

        .home-narrow {
          max-width: 930px;
        }

        /* HERO */

        .home-hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 170px 0 110px;
          background:
            radial-gradient(
              circle at 72% 18%,
              rgba(0, 113, 227, 0.09),
              transparent 30%
            ),
            #fff;
        }

        .home-eyebrow,
        .home-section-label {
          margin: 0 0 28px;
          color: #6e6e73;
          font-size: 13px;
          line-height: 1;
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .home-hero h1 {
          max-width: 1050px;
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(68px, 9.2vw, 132px);
          line-height: 0.92;
          letter-spacing: -0.07em;
          font-weight: 650;
        }

        .home-hero h1 span {
          color: #86868b;
        }

        .home-lead {
          max-width: 690px;
          margin: 50px 0 0;
          color: #6e6e73;
          font-size: clamp(22px, 2.2vw, 30px);
          line-height: 1.35;
          letter-spacing: -0.03em;
        }

        .home-actions {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-top: 42px;
        }

        .home-primary {
          display: inline-flex;
          gap: 9px;
          padding: 13px 24px;
          background: #0071e3;
          border-radius: 999px;
          color: white !important;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none !important;
          transition: 0.25s ease;
        }

        .home-primary:hover {
          background: #0077ed;
          transform: translateY(-1px);
        }

        .home-secondary,
        .home-inline-link {
          color: #0066cc !important;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none !important;
        }

        .home-secondary:hover,
        .home-inline-link:hover {
          opacity: 0.7;
        }

        /* FEATURE */

        .home-feature {
          padding: 0 0 150px;
          background: #fff;
        }

        .home-feature-link {
          color: inherit;
          text-decoration: none !important;
        }

        .home-feature-image-wrap {
          position: relative;
          min-height: 720px;
          overflow: hidden;
          border-radius: 28px;
          background: #000;
        }

        .home-feature-image {
          width: 100%;
          height: 720px;
          object-fit: cover;
          display: block;
        }

        .home-feature-gradient {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,0.68) 0%,
              rgba(0,0,0,0.28) 42%,
              rgba(0,0,0,0.02) 72%
            );
        }

        .home-feature-copy {
          position: absolute;
          left: 70px;
          bottom: 70px;
          max-width: 560px;
          color: white;
        }

        .home-kicker {
          margin: 0 0 20px;
          font-size: 13px;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: rgba(255,255,255,0.72);
        }

        .home-feature-copy h2 {
          margin: 0;
          font-size: clamp(42px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .home-feature-copy p {
          margin: 25px 0;
          max-width: 500px;
          color: rgba(255,255,255,0.82);
          font-size: 18px;
          line-height: 1.5;
        }

        .home-text-link {
          color: white;
          font-size: 17px;
          font-weight: 500;
        }

        /* MANIFESTO */

        .home-manifesto {
          padding: 170px 0;
          background: #f5f5f7;
        }

        .home-manifesto h2,
        .home-story-content h2,
        .home-books-content h2,
        .home-philosophy h2,
        .home-closing h2 {
          margin: 0;
          font-size: clamp(46px, 6vw, 78px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .home-large-copy {
          margin: 55px 0 0;
          color: #6e6e73;
          font-size: clamp(24px, 3vw, 34px);
          line-height: 1.28;
          letter-spacing: -0.035em;
          font-weight: 500;
        }

        .home-large-copy.small {
          max-width: 570px;
          font-size: 27px;
        }

        /* STORY */

        .home-story {
          padding: 170px 0;
          background: #fff;
        }

        .home-story-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 100px;
          align-items: center;
        }

        .home-story-photo img {
          width: 100%;
          display: block;
          border-radius: 28px;
        }

        .home-story-content p:not(.home-section-label) {
          max-width: 500px;
          margin: 36px 0 28px;
          color: #6e6e73;
          font-size: 19px;
          line-height: 1.55;
        }

        /* YOUTH */

        .home-youth {
          padding: 0 0 160px;
          background: #fff;
        }

        .home-youth-link {
          text-decoration: none !important;
        }

        .home-youth-image-wrap {
          position: relative;
          min-height: 750px;
          overflow: hidden;
          border-radius: 28px;
          background: black;
        }

        .home-youth-image {
          width: 100%;
          height: 750px;
          display: block;
          object-fit: cover;
        }

        .home-youth-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              0deg,
              rgba(0,0,0,0.72) 0%,
              rgba(0,0,0,0.14) 70%
            );
        }

        .home-youth-copy {
          position: absolute;
          left: 70px;
          bottom: 70px;
          max-width: 670px;
          color: white;
        }

        .home-kicker.light {
          color: rgba(255,255,255,0.65);
        }

        .home-youth-copy h2 {
          margin: 0;
          color: white;
          font-size: clamp(42px, 5.5vw, 74px);
          line-height: 1;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .home-youth-copy p {
          max-width: 560px;
          margin: 25px 0;
          color: rgba(255,255,255,0.8);
          font-size: 18px;
          line-height: 1.5;
        }

        .home-youth-copy span {
          color: white;
          font-size: 17px;
          font-weight: 500;
        }

        /* BOOKS */

        .home-books {
          padding: 170px 0;
          background: #f5f5f7;
        }

        .home-books-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .home-books-photo img {
          width: 100%;
          display: block;
          border-radius: 28px;
        }

        .home-books-content .home-inline-link {
          display: inline-block;
          margin-top: 35px;
        }

        /* PHILOSOPHY */

        .home-philosophy {
          padding: 180px 0;
          background: #000;
          color: #f5f5f7;
        }

        .home-section-label.light {
          color: #86868b;
        }

        .home-philosophy h2 {
          color: #f5f5f7;
        }

        .home-philosophy h2 span {
          color: #86868b;
        }

        .home-philosophy > .home-shell > p:last-child {
          max-width: 730px;
          margin: 50px 0 0;
          color: #a1a1a6;
          font-size: 22px;
          line-height: 1.55;
        }

        /* CLOSING */

        .home-closing {
          padding: 180px 0;
          background: white;
        }

        .home-closing h2 span {
          color: #86868b;
        }

        .home-closing-actions {
          display: flex;
          gap: 35px;
          margin-top: 55px;
        }

        .home-closing-actions a {
          color: #0066cc;
          font-size: 21px;
          font-weight: 500;
          text-decoration: none;
        }

        /* FOOTER */

        .home-footer {
          padding: 35px 0 45px;
          background: #f5f5f7;
          border-top: 1px solid #d2d2d7;
        }

        .home-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #6e6e73;
          font-size: 13px;
        }

        .home-footer-inner div {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .home-footer a {
          color: #424245;
          text-decoration: none;
        }

        .home-footer a:hover {
          text-decoration: underline;
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .home-shell {
            width: calc(100% - 42px);
          }

          .home-wide {
            width: calc(100% - 24px);
          }

          .home-hero {
            min-height: auto;
            padding: 150px 0 100px;
          }

          .home-hero h1 {
            font-size: clamp(58px, 17vw, 82px);
          }

          .home-lead {
            margin-top: 38px;
          }

          .home-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .home-feature {
            padding-bottom: 100px;
          }

          .home-feature-image-wrap,
          .home-feature-image {
            height: 650px;
            min-height: 650px;
          }

          .home-feature-copy {
            left: 28px;
            right: 28px;
            bottom: 35px;
          }

          .home-feature-gradient {
            background:
              linear-gradient(
                0deg,
                rgba(0,0,0,0.8) 0%,
                rgba(0,0,0,0.18) 72%
              );
          }

          .home-manifesto,
          .home-story,
          .home-books,
          .home-philosophy,
          .home-closing {
            padding: 110px 0;
          }

          .home-story-grid,
          .home-books-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .home-story-content {
            order: -1;
          }

          .home-youth {
            padding-bottom: 100px;
          }

          .home-youth-image-wrap,
          .home-youth-image {
            height: 680px;
            min-height: 680px;
          }

          .home-youth-copy {
            left: 28px;
            right: 28px;
            bottom: 35px;
          }

          .home-closing-actions {
            flex-direction: column;
            gap: 18px;
          }

          .home-footer-inner {
            flex-direction: column;
          }

        }

      `}</style>
    </>
  );
}

export default PresentationHeader;
