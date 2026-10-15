import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

function Social() {
  React.useEffect(() => {
    document.body.classList.add("social-page");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("social-page");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />

      <main className="rc-social">

        {/* HERO */}
        <section className="social-hero">
          <div className="social-shell">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="social-eyebrow">
                LABOR SOCIAL
              </p>

              <h1>
                El futuro se
                <br />
                construye con
                <br />
                <span>las personas.</span>
              </h1>

              <p className="social-lead">
                Tecnología, educación y servicio forman parte de una misma
                convicción: crear oportunidades para que otros puedan
                desarrollar todo su potencial.
              </p>

              <div className="social-actions">
                <a
                  href="mailto:renatocabrerafigueroa@gmail.com"
                  className="social-primary"
                >
                  Quiero apoyar <span>→</span>
                </a>

                <Link
                  to="/contact-us"
                  className="social-secondary"
                >
                  Contáctame
                </Link>
              </div>

            </motion.div>

          </div>
        </section>

        {/* SALESIAN ROOTS */}
        <section className="social-story">
          <div className="social-shell">

            <div className="social-grid">

              <motion.div
                className="social-photo"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={require("assets/img/regalos.jpg")}
                  alt="Formación y servicio salesiano"
                />
              </motion.div>

              <motion.div
                className="social-content"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <p className="social-section-label">
                  Mi formación
                </p>

                <h2>
                  Una forma de
                  <br />
                  entender la vida.
                </h2>

                <p className="social-large-copy">
                  Desde 2006, la formación salesiana ha marcado profundamente
                  mi manera de entender la educación, el trabajo y el servicio.
                </p>

                <p className="social-body-copy">
                  En el Colegio Salesiano Don Bosco aprendí mucho más que
                  conocimientos académicos. Encontré valores, acompañamiento
                  y una manera de mirar a cada persona desde sus posibilidades.
                </p>

                <p className="social-body-copy">
                  Esa formación también me permitió continuar mis estudios
                  universitarios y comprender que las oportunidades recibidas
                  adquieren verdadero sentido cuando somos capaces de
                  multiplicarlas para otros.
                </p>

              </motion.div>

            </div>

          </div>
        </section>

        {/* PRINCIPLE */}
        <section className="social-principle">
          <div className="social-shell social-narrow">

            <p className="social-section-label light">
              Una convicción
            </p>

            <h2>
              La educación puede
              <br />
              <span>cambiar una vida.</span>
            </h2>

            <p>
              Y cuando cambia una vida, empieza a cambiar una familia,
              una comunidad y, eventualmente, un país.
            </p>

          </div>
        </section>

        {/* EDUCATION PROJECT */}
        <section className="social-education">
          <div className="social-shell">

            <div className="social-grid reverse">

              <motion.div
                className="social-content"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <p className="social-section-label">
                  Educación
                </p>

                <h2>
                  Nadie debería
                  <br />
                  caminar solo.
                </h2>

                <p className="social-large-copy">
                  Mi mayor anhelo es contribuir al fortalecimiento de la
                  educación en Guatemala desde los espacios en los que
                  puedo servir.
                </p>

                <p className="social-body-copy">
                  Junto al Oratorio Don Bosco y a los Salesianos Cooperadores,
                  trabajamos para acompañar a estudiantes que necesitan apoyo
                  para continuar sus estudios.
                </p>

                <p className="social-body-copy">
                  El acompañamiento no se limita a una ayuda económica.
                  También buscamos ofrecer seguimiento académico,
                  orientación personal y cercanía.
                </p>

              </motion.div>

              <motion.div
                className="social-photo"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <img
                  src={require("assets/img/oratorio.jpg")}
                  alt="Oratorio Don Bosco"
                />
              </motion.div>

            </div>

          </div>
        </section>

        {/* SUPPORT CARDS */}
        <section className="social-impact">
          <div className="social-shell">

            <div className="social-heading">

              <p className="social-section-label">
                Cómo ayudamos
              </p>

              <h2>
                Pequeñas acciones.
                <br />
                <span>Impacto real.</span>
              </h2>

            </div>

            <div className="social-impact-grid">

              <article className="social-impact-card">
                <span>01</span>
                <h3>Educación</h3>
                <p>
                  Apoyo para que niños y jóvenes puedan continuar sus estudios
                  y superar barreras económicas.
                </p>
              </article>

              <article className="social-impact-card">
                <span>02</span>
                <h3>Acompañamiento</h3>
                <p>
                  Seguimiento académico, orientación y presencia cercana para
                  que ningún joven sienta que debe avanzar solo.
                </p>
              </article>

              <article className="social-impact-card">
                <span>03</span>
                <h3>Necesidades concretas</h3>
                <p>
                  Útiles, mochilas, zapatos, víveres y otros recursos que
                  pueden marcar la diferencia en la continuidad educativa.
                </p>
              </article>

              <article className="social-impact-card">
                <span>04</span>
                <h3>Comunidad</h3>
                <p>
                  Personas que aportan tiempo, conocimiento, recursos y
                  voluntad para construir oportunidades juntos.
                </p>
              </article>

            </div>

          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="social-help">
          <div className="social-shell">

            <div className="social-help-grid">

              <motion.div
                className="social-help-image"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
              >
                <img
                  src={require("assets/img/labsoc.png")}
                  alt="Labor social"
                />
              </motion.div>

              <div className="social-help-content">

                <p className="social-section-label">
                  Puedes ser parte
                </p>

                <h2>
                  Hagamos un mejor
                  <br />
                  mundo para todos.
                </h2>

                <p>
                  Si deseas apoyar alguno de estos proyectos, aportar recursos,
                  compartir conocimientos o simplemente conocer cómo puedes
                  involucrarte, estaré muy feliz de conversar contigo.
                </p>

                <a
                  href="mailto:renatocabrerafigueroa@gmail.com"
                  className="social-email-link"
                >
                  renatocabrerafigueroa@gmail.com →
                </a>

              </div>

            </div>

          </div>
        </section>

        {/* CLOSING */}
        <section className="social-closing">
          <div className="social-shell social-narrow">

            <h2>
              Lo que recibimos
              <br />
              cobra sentido cuando
              <br />
              <span>lo compartimos.</span>
            </h2>

            <div className="social-closing-links">

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
        <footer className="social-footer">

          <div className="social-shell social-footer-inner">

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

        .rc-social {
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

        .social-shell {
          width: calc(100% - 80px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .social-narrow {
          max-width: 920px;
        }

        /* HERO */

        .social-hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          padding: 170px 0 110px;
          background:
            radial-gradient(
              circle at 78% 18%,
              rgba(52, 199, 89, 0.10),
              transparent 31%
            ),
            #fff;
        }

        .social-eyebrow,
        .social-section-label {
          margin: 0 0 28px;
          color: #6e6e73;
          font-size: 13px;
          line-height: 1;
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .social-hero h1 {
          max-width: 1000px;
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(66px, 9vw, 126px);
          line-height: 0.92;
          letter-spacing: -0.07em;
          font-weight: 650;
        }

        .social-hero h1 span {
          color: #86868b;
        }

        .social-lead {
          max-width: 720px;
          margin: 50px 0 0;
          color: #6e6e73;
          font-size: clamp(22px, 2.3vw, 30px);
          line-height: 1.38;
          letter-spacing: -0.03em;
        }

        .social-actions {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 44px;
        }

        .social-primary {
          display: inline-flex;
          gap: 9px;
          padding: 13px 24px;
          border-radius: 999px;
          background: #0071e3;
          color: white !important;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none !important;
          transition: 0.25s ease;
        }

        .social-primary:hover {
          background: #0077ed;
          transform: translateY(-1px);
        }

        .social-secondary {
          color: #0066cc !important;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none !important;
        }

        /* STORY */

        .social-story,
        .social-education {
          padding: 170px 0;
          background: #fff;
        }

        .social-education {
          background: #f5f5f7;
        }

        .social-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 95px;
          align-items: center;
        }

        .social-grid.reverse {
          grid-template-columns: 0.95fr 1.05fr;
        }

        .social-photo img {
          width: 100%;
          display: block;
          border-radius: 28px;
        }

        .social-content h2,
        .social-heading h2,
        .social-help-content h2,
        .social-principle h2,
        .social-closing h2 {
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .social-large-copy {
          margin: 44px 0 0;
          color: #1d1d1f;
          font-size: clamp(24px, 2.8vw, 33px);
          line-height: 1.28;
          letter-spacing: -0.035em;
          font-weight: 500;
        }

        .social-body-copy {
          margin: 28px 0 0;
          color: #6e6e73;
          font-size: 18px;
          line-height: 1.6;
        }

        /* PRINCIPLE */

        .social-principle {
          padding: 180px 0;
          background: #000;
          color: #f5f5f7;
        }

        .social-section-label.light {
          color: #86868b;
        }

        .social-principle h2 {
          color: #f5f5f7;
        }

        .social-principle h2 span {
          color: #86868b;
        }

        .social-principle > .social-shell > p:last-child {
          max-width: 720px;
          margin: 50px 0 0;
          color: #a1a1a6;
          font-size: 22px;
          line-height: 1.55;
        }

        /* IMPACT */

        .social-impact {
          padding: 170px 0;
          background: #fff;
        }

        .social-heading {
          margin-bottom: 80px;
        }

        .social-heading h2 span {
          color: #86868b;
        }

        .social-impact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: #d2d2d7;
        }

        .social-impact-card {
          min-height: 290px;
          padding: 42px;
          background: #f5f5f7;
        }

        .social-impact-card > span {
          color: #86868b;
          font-size: 13px;
          font-weight: 600;
        }

        .social-impact-card h3 {
          margin: 65px 0 18px;
          font-size: 30px;
          letter-spacing: -0.035em;
          font-weight: 600;
        }

        .social-impact-card p {
          max-width: 440px;
          margin: 0;
          color: #6e6e73;
          font-size: 17px;
          line-height: 1.55;
        }

        /* HELP */

        .social-help {
          padding: 170px 0;
          background: #f5f5f7;
        }

        .social-help-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 95px;
          align-items: center;
        }

        .social-help-image img {
          width: 100%;
          display: block;
          border-radius: 28px;
        }

        .social-help-content > p:not(.social-section-label) {
          margin: 34px 0 30px;
          color: #6e6e73;
          font-size: 19px;
          line-height: 1.6;
        }

        .social-email-link {
          color: #0066cc !important;
          font-size: 20px;
          font-weight: 500;
          text-decoration: none !important;
        }

        /* CLOSING */

        .social-closing {
          padding: 180px 0;
          background: #fff;
        }

        .social-closing h2 span {
          color: #86868b;
        }

        .social-closing-links {
          display: flex;
          gap: 35px;
          margin-top: 55px;
        }

        .social-closing-links a {
          color: #0066cc;
          font-size: 20px;
          font-weight: 500;
          text-decoration: none;
        }

        /* FOOTER */

        .social-footer {
          padding: 35px 0 45px;
          background: #f5f5f7;
          border-top: 1px solid #d2d2d7;
        }

        .social-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #6e6e73;
          font-size: 13px;
        }

        .social-footer-inner div {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .social-footer a {
          color: #424245;
          text-decoration: none;
        }

        .social-footer a:hover {
          text-decoration: underline;
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .social-shell {
            width: calc(100% - 42px);
          }

          .social-hero {
            min-height: auto;
            padding: 150px 0 100px;
          }

          .social-hero h1 {
            font-size: clamp(56px, 17vw, 82px);
          }

          .social-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .social-story,
          .social-education,
          .social-impact,
          .social-help,
          .social-principle,
          .social-closing {
            padding: 110px 0;
          }

          .social-grid,
          .social-grid.reverse,
          .social-help-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .social-grid.reverse .social-photo {
            order: -1;
          }

          .social-impact-grid {
            grid-template-columns: 1fr;
          }

          .social-impact-card {
            min-height: 250px;
            padding: 32px;
          }

          .social-impact-card h3 {
            margin-top: 50px;
          }

          .social-closing-links {
            flex-direction: column;
            gap: 18px;
          }

          .social-footer-inner {
            flex-direction: column;
          }

        }

      `}</style>
    </>
  );
}

export default Social;
