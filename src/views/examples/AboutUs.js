import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

const experiences = [
  {
    company: "Corporación LB",
    role: "Gerente de Sistemas",
    period: "2026 — Actualidad",
    description:
      "Lidero la estrategia tecnológica y la evolución de los sistemas de la organización, conectando infraestructura, ERP, desarrollo, procesos y operación para acompañar el crecimiento del negocio.",
    current: true,
  },
  {
    company: "COMNET",
    role: "Administrador de Sistemas",
    period: "Actualidad",
    description:
      "Administro y evoluciono plataformas y procesos tecnológicos de la organización, con especial enfoque en Odoo, automatización, soporte funcional, control de accesos y mejora continua de los procesos internos.",
    current: true,
  },
  {
    company: "Grupo Alta",
    role: "Coordinador de IT",
    period: "2023 — 2025",
    description:
      "Lideré tecnología, infraestructura y transformación digital para las distintas operaciones del grupo, impulsando modernización, continuidad y soluciones orientadas al negocio.",
  },
  {
    company: "Grupo R2C",
    role: "Coordinador de Sistemas",
    period: "2020 — 2023",
    description:
      "Dirigí iniciativas de sistemas, desarrollo y transformación tecnológica, incluyendo proyectos para operación, restaurantes, ERP e infraestructura.",
  },
  {
    company: "Conduent",
    role: "Project Manager Analyst",
    period: "2022",
    description:
      "Participé en la gestión de proyectos tecnológicos internacionales, coordinando planificación, seguimiento y ejecución en entornos corporativos.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Tecnología",
    text: "Diseño soluciones que conectan software, infraestructura, nube y datos con problemas reales de negocio.",
  },
  {
    number: "02",
    title: "Liderazgo",
    text: "Construyo equipos capaces de entender la tecnología como una herramienta para transformar organizaciones.",
  },
  {
    number: "03",
    title: "Producto",
    text: "Me interesa convertir ideas complejas en experiencias digitales simples, útiles y bien diseñadas.",
  },
  {
    number: "04",
    title: "Propósito",
    text: "Creo que la tecnología alcanza su verdadero valor cuando mejora las oportunidades y la vida de las personas.",
  },
];

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("renato-about-page");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("renato-about-page");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />

      <main className="rc-about">

        {/* HERO */}
        <section className="rc-hero">
          <div className="rc-shell">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="rc-eyebrow">RENATO CABRERA</p>

              <h1>
                Tecnología,
                <br />
                liderazgo
                <br />
                <span>y propósito.</span>
              </h1>

              <p className="rc-hero-copy">
                Ingeniero, líder de tecnología y emprendedor.
                Trabajo construyendo soluciones digitales que transforman
                organizaciones y hacen que la tecnología sea más simple,
                útil y humana.
              </p>

              <div className="rc-actions">
                <a
                  href="https://www.linkedin.com/in/renatocabreraf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rc-primary"
                >
                  LinkedIn <span>↗</span>
                </a>

                <Link to="/contact-us" className="rc-secondary">
                  Contáctame <span>→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="rc-intro">
          <div className="rc-shell rc-narrow">
            <p className="rc-section-label">Mi trabajo</p>

            <h2>
              Hacer que lo complejo
              <br />
              se vuelva simple.
            </h2>

            <p className="rc-large-copy">
              He desarrollado mi carrera entre la gestión de tecnología,
              desarrollo de software, transformación digital y dirección de
              proyectos. Mi enfoque no parte de una herramienta específica:
              parte de entender el problema, las personas y el negocio.
            </p>

            <p className="rc-body-copy">
              Actualmente lidero sistemas en Corporación LB y continúo como
              Administrador de Sistemas en COMNET, trabajando en entornos donde
              conviven ERP, puntos de venta, infraestructura, desarrollo,
              automatización, seguridad y procesos empresariales.
            </p>

            <p className="rc-body-copy">
              Paralelamente continúo desarrollando productos y consultoría
              tecnológica a través de Kind Mind Technologies.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="rc-experience">
          <div className="rc-shell">
            <div className="rc-section-heading">
              <p className="rc-section-label">Experiencia</p>

              <h2>
                Construyendo tecnología
                <br />
                desde distintos ángulos.
              </h2>
            </div>

            <div className="rc-experience-list">
              {experiences.map((experience, index) => (
                <motion.article
                  className="rc-experience-item"
                  key={`${experience.company}-${experience.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="rc-exp-meta">
                    <span className="rc-exp-period">
                      {experience.period}
                    </span>

                    {experience.current && (
                      <span className="rc-current">Actual</span>
                    )}
                  </div>

                  <div className="rc-exp-content">
                    <h3>{experience.company}</h3>

                    <p className="rc-exp-role">
                      {experience.role}
                    </p>

                    <p className="rc-exp-description">
                      {experience.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FOCUS */}
        <section className="rc-focus">
          <div className="rc-shell">
            <div className="rc-section-heading">
              <p className="rc-section-label light">
                Cómo pienso
              </p>

              <h2 className="light">
                Tecnología con
                <br />
                intención.
              </h2>
            </div>

            <div className="rc-focus-grid">
              {focusAreas.map((area) => (
                <article
                  className="rc-focus-card"
                  key={area.number}
                >
                  <span className="rc-focus-number">
                    {area.number}
                  </span>

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KIND MIND */}
        <section className="rc-kindmind">
          <div className="rc-shell rc-narrow">
            <p className="rc-section-label">
              También construyo
            </p>

            <h2>
              Kind Mind Technologies.
            </h2>

            <p className="rc-large-copy">
              Una empresa creada para convertir tecnología compleja en
              soluciones que las personas y las organizaciones realmente
              puedan utilizar.
            </p>

            <p className="rc-body-copy">
              Desarrollo de software, consultoría tecnológica, cloud y
              experiencia digital se encuentran en un mismo principio:
              entender primero y construir después.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="rc-credentials">
          <div className="rc-shell">
            <div className="rc-credentials-grid">

              <div>
                <p className="rc-section-label">
                  Formación
                </p>

                <h3>
                  Ingeniería en Informática y Sistemas
                </h3>

                <p>
                  Universidad Rafael Landívar · 2022
                </p>
              </div>

              <div>
                <p className="rc-section-label">
                  Especialización
                </p>

                <h3>
                  Gestión, agilidad y transformación
                </h3>

                <p>
                  ITIL 4 · Scrum · Agile Project Planning ·
                  Lean Six Sigma
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="rc-closing">
          <div className="rc-shell rc-narrow">

            <h2>
              Siempre hay
              <br />
              algo nuevo que
              <br />
              <span>podemos construir.</span>
            </h2>

            <Link
              to="/contact-us"
              className="rc-closing-link"
            >
              Hablemos <span>→</span>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="rc-footer">
          <div className="rc-shell rc-footer-inner">

            <span>
              © 2026 Renato Cabrera
            </span>

            <div>
              <Link to="/presentation">
                Inicio
              </Link>

              <Link to="/blog-posts">
                Blog
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
        .renato-about-page {
          margin: 0;
          background: #ffffff;
          color: #1d1d1f;
        }

        .rc-about {
          overflow: hidden;
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
        }

        .rc-shell {
          width: calc(100% - 80px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .rc-narrow {
          max-width: 920px;
        }

        /* HERO */

        .rc-hero {
          min-height: 94vh;
          display: flex;
          align-items: center;
          padding: 150px 0 100px;
          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(0, 113, 227, 0.08),
              transparent 31%
            ),
            #fff;
        }

        .rc-eyebrow,
        .rc-section-label {
          margin: 0 0 28px;
          color: #6e6e73;
          font-size: 13px;
          line-height: 1;
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .rc-hero h1 {
          max-width: 950px;
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(64px, 9vw, 124px);
          line-height: 0.92;
          letter-spacing: -0.07em;
          font-weight: 650;
        }

        .rc-hero h1 span {
          color: #86868b;
        }

        .rc-hero-copy {
          max-width: 700px;
          margin: 52px 0 0;
          color: #6e6e73;
          font-size: clamp(21px, 2vw, 28px);
          line-height: 1.38;
          letter-spacing: -0.025em;
          font-weight: 400;
        }

        .rc-actions {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 44px;
        }

        .rc-primary,
        .rc-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none !important;
          transition:
            transform 0.25s ease,
            opacity 0.25s ease,
            background 0.25s ease;
        }

        .rc-primary {
          padding: 13px 24px;
          border-radius: 999px;
          background: #0071e3;
          color: #fff !important;
        }

        .rc-primary:hover {
          background: #0077ed;
          transform: translateY(-1px);
        }

        .rc-secondary {
          color: #0066cc !important;
        }

        .rc-secondary:hover {
          opacity: 0.7;
        }

        /* INTRO */

        .rc-intro,
        .rc-kindmind {
          padding: 160px 0;
        }

        .rc-intro {
          background: #f5f5f7;
        }

        .rc-intro h2,
        .rc-kindmind h2,
        .rc-section-heading h2,
        .rc-closing h2 {
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .rc-large-copy {
          margin: 55px 0 0;
          color: #1d1d1f;
          font-size: clamp(24px, 3vw, 35px);
          line-height: 1.25;
          letter-spacing: -0.035em;
          font-weight: 500;
        }

        .rc-body-copy {
          max-width: 760px;
          margin: 35px 0 0;
          color: #6e6e73;
          font-size: 19px;
          line-height: 1.6;
          letter-spacing: -0.01em;
        }

        /* EXPERIENCE */

        .rc-experience {
          padding: 170px 0;
          background: #fff;
        }

        .rc-section-heading {
          margin-bottom: 90px;
        }

        .rc-experience-list {
          border-top: 1px solid #d2d2d7;
        }

        .rc-experience-item {
          display: grid;
          grid-template-columns: minmax(180px, 0.7fr) 2fr;
          gap: 60px;
          padding: 48px 0;
          border-bottom: 1px solid #d2d2d7;
        }

        .rc-exp-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .rc-exp-period {
          color: #6e6e73;
          font-size: 15px;
          font-weight: 500;
        }

        .rc-current {
          display: inline-flex;
          padding: 5px 10px;
          border-radius: 999px;
          background: #e8f3ff;
          color: #0066cc;
          font-size: 12px;
          font-weight: 650;
        }

        .rc-exp-content h3 {
          margin: 0;
          color: #1d1d1f;
          font-size: 32px;
          line-height: 1.1;
          letter-spacing: -0.035em;
          font-weight: 600;
        }

        .rc-exp-role {
          margin: 8px 0 20px;
          color: #6e6e73;
          font-size: 19px;
        }

        .rc-exp-description {
          max-width: 720px;
          margin: 0;
          color: #6e6e73;
          font-size: 17px;
          line-height: 1.55;
        }

        /* FOCUS */

        .rc-focus {
          padding: 170px 0;
          background: #000;
          color: #f5f5f7;
        }

        .rc-section-label.light {
          color: #86868b;
        }

        .rc-section-heading h2.light {
          color: #f5f5f7;
        }

        .rc-focus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          margin-top: 80px;
          background: #2c2c2e;
        }

        .rc-focus-card {
          min-height: 310px;
          padding: 45px;
          background: #111;
        }

        .rc-focus-number {
          color: #6e6e73;
          font-size: 13px;
          font-weight: 600;
        }

        .rc-focus-card h3 {
          margin: 70px 0 18px;
          color: #f5f5f7;
          font-size: 31px;
          letter-spacing: -0.035em;
          font-weight: 600;
        }

        .rc-focus-card p {
          max-width: 430px;
          margin: 0;
          color: #a1a1a6;
          font-size: 17px;
          line-height: 1.55;
        }

        /* KIND MIND */

        .rc-kindmind {
          background: #fff;
        }

        /* CREDENTIALS */

        .rc-credentials {
          padding: 100px 0;
          background: #f5f5f7;
        }

        .rc-credentials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 100px;
        }

        .rc-credentials-grid h3 {
          max-width: 440px;
          margin: 0 0 16px;
          font-size: 29px;
          line-height: 1.15;
          letter-spacing: -0.035em;
          font-weight: 600;
        }

        .rc-credentials-grid p:not(.rc-section-label) {
          margin: 0;
          color: #6e6e73;
          font-size: 17px;
          line-height: 1.55;
        }

        /* CLOSING */

        .rc-closing {
          padding: 180px 0;
          background: #fff;
        }

        .rc-closing h2 span {
          color: #86868b;
        }

        .rc-closing-link {
          display: inline-flex;
          gap: 10px;
          margin-top: 50px;
          color: #0066cc !important;
          font-size: 21px;
          font-weight: 500;
          text-decoration: none !important;
        }

        /* FOOTER */

        .rc-footer {
          padding: 35px 0 45px;
          background: #f5f5f7;
          border-top: 1px solid #d2d2d7;
        }

        .rc-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #6e6e73;
          font-size: 13px;
        }

        .rc-footer-inner div {
          display: flex;
          gap: 24px;
        }

        .rc-footer a {
          color: #424245;
          text-decoration: none;
        }

        .rc-footer a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */

        @media (max-width: 768px) {
          .rc-shell {
            width: calc(100% - 42px);
          }

          .rc-hero {
            min-height: auto;
            padding: 145px 0 100px;
          }

          .rc-hero h1 {
            font-size: clamp(56px, 17vw, 82px);
          }

          .rc-hero-copy {
            margin-top: 38px;
          }

          .rc-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 22px;
          }

          .rc-intro,
          .rc-kindmind,
          .rc-experience,
          .rc-focus,
          .rc-closing {
            padding: 110px 0;
          }

          .rc-section-heading {
            margin-bottom: 60px;
          }

          .rc-experience-item {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 38px 0;
          }

          .rc-focus-grid {
            grid-template-columns: 1fr;
            margin-top: 55px;
          }

          .rc-focus-card {
            min-height: 260px;
            padding: 32px;
          }

          .rc-focus-card h3 {
            margin-top: 52px;
          }

          .rc-credentials-grid {
            grid-template-columns: 1fr;
            gap: 70px;
          }

          .rc-footer-inner {
            flex-direction: column;
          }

          .rc-footer-inner div {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}

export default AboutUs;
