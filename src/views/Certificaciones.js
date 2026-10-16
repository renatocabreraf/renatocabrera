import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import "assets/css/certificaciones.css";

const badgeContext = require.context(
  "../assets/img/badges",
  false,
  /\.(png|jpe?g|webp|svg)$/i
);

const BADGE_INFO = {
  "Insignia de certificación Google Ads IA.png": {
    title: "AI-Powered Performance Ads Certification",
    year: 2026,
    order: 1,
  },

  "Insignia de curso completado InterNaciones.png": {
    title: "Curso de Gestión de Proyectos Ágiles",
    year: 2026,
    order: 2,
  },

  "Insignia de Certificación Scrum Básico.png": {
    title: "Registered Scrum Basics",
    year: 2025,
    order: 3,
  },

  "Sello de Certificación Yellow Belt.png": {
    title: "Lean Six Sigma Yellow Belt",
    year: 2025,
    order: 4,
  },

  "Certificado de Configuración Hillstone.png": {
    title: "Configuración y Gestión de Firewall Hillstone",
    year: 2024,
    order: 5,
  },

  "Insignia de finalización Lean Six Sigma.png": {
    title: "Lean Six Sigma White Belt",
    year: 2023,
    order: 6,
  },

  "Insignia de certificación Scrum Foundation.png": {
    title: "Scrum Foundation Professional Certificate - SFPC",
    year: 2023,
    order: 7,
  },

  "Imagen de ChatGPT 15 oct 2026, 06_52_27 p.m.png": {
    title: "Dirigir y delegar de forma efectiva como gerente",
    year: 2022,
    order: 8,
  },

  "Imagen de ChatGPT 15 oct 2026, 06_52_06 p.m.png": {
    title: "Agile Project Planning",
    year: 2022,
    order: 9,
  },

  "Imagen de ChatGPT 15 oct 2026, 06_51_58 p.m.png": {
    title: "Project Management Introduction (PMBOK® Guide Sixth Edition)",
    year: 2022,
    order: 10,
  },

  "Insignia de finalización del curso ITIL 4.png": {
    title: "ITIL 4 Exam Preparation",
    year: 2022,
    order: 11,
  },

  "Certificado de Git y Terminal.png": {
    title: "Curso de Git y la Terminal de comandos - Para programadores",
    year: 2022,
    order: 12,
  },

  "Insignia de certificación Scrum certificada.png": {
    title: "Registered Scrum Team Member™",
    year: 2022,
    order: 13,
  },

  "Insignia Circular de Certificación en JavaScript.png": {
    title: "Máster en JavaScript: Aprender JS, jQuery, Angular, NodeJS",
    year: 2022,
    order: 14,
  },

  "Certificado de Finalización de HTML5.png": {
    title: "Curso de HTML5 desde cero: El más completo en Español",
    year: 2022,
    order: 15,
  },

  "Certificado Circular Dorado de Huawei.png": {
    title: "Huawei University Open Courses",
    year: 2021,
    order: 16,
  },

  "Insignia de finalización de Google Cloud.png": {
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    year: 2020,
    order: 17,
  },

  "Insignia de finalización de Coursera y Michigan.png": {
    title: "Programming for Everybody (Getting Started with Python)",
    year: 2020,
    order: 18,
  },
};

function cleanFilename(key) {
  return key
    .replace(/^\.?\//, "")
    .replace(/^.*assets\/img\/badges\//, "")
    .trim();
}

function cleanTitle(filename) {
  return filename
    .replace(/\.(png|jpe?g|webp|svg)$/i, "")
    .replace(/^Imagen de ChatGPT.*$/i, "Credencial profesional")
    .trim();
}

const uniqueFiles = Array.from(
  new Set(
    badgeContext.keys().map(cleanFilename)
  )
);

const badges = uniqueFiles
  .map((filename) => {
    const key = badgeContext
      .keys()
      .find((item) => cleanFilename(item) === filename);

    const imported = badgeContext(key);
    const info = BADGE_INFO[filename] || {};

    return {
      filename,
      src: imported.default || imported,
      title: info.title || cleanTitle(filename),
      year: info.year || 0,
      order: info.order || 9999,
    };
  })
  .sort((a, b) => {
    if (b.year !== a.year) {
      return b.year - a.year;
    }

    return a.order - b.order;
  });

const badgeGroups = Object.entries(
  badges.reduce((groups, badge) => {
    const key = badge.year ? String(badge.year) : "otras";

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(badge);
    return groups;
  }, {})
).sort(([yearA], [yearB]) => {
  if (yearA === "otras") return 1;
  if (yearB === "otras") return -1;

  return Number(yearB) - Number(yearA);
});

function BadgeCard({ badge }) {
  return (
    <article
      className="rc-badge-card"
      data-author="Renato José Cabrera Figueroa"
    >
      <div className="rc-badge-image-wrap">
        <img
          src={badge.src}
          alt={`${badge.title} — Renato José Cabrera Figueroa`}
          title={`${badge.title} — Renato José Cabrera Figueroa`}
          className="rc-badge-image"
          loading="lazy"
          draggable="false"
          data-author="Renato José Cabrera Figueroa"
          data-owner="Renato José Cabrera Figueroa"
        />
      </div>

      <div className="rc-badge-card-copy">
        <span>
          {badge.year ? `Credencial · ${badge.year}` : "Credencial"}
        </span>
        <h2>{badge.title}</h2>
      </div>
    </article>
  );
}

function MarqueeBadge({ badge, duplicate = false }) {
  return (
    <div
      className="rc-marquee-badge"
      aria-hidden={duplicate ? "true" : undefined}
    >
      <img
        src={badge.src}
        alt={duplicate ? "" : `${badge.title} — Renato José Cabrera Figueroa`}
        draggable="false"
      />
    </div>
  );
}

export default function Certificaciones() {
  useEffect(() => {
    const oldTitle = document.title;
    document.title =
      "Certificaciones y credenciales | Renato José Cabrera Figueroa";

    let meta = document.querySelector('meta[name="description"]');
    const oldDescription = meta ? meta.getAttribute("content") : null;
    let createdMeta = false;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
      createdMeta = true;
    }

    meta.setAttribute(
      "content",
      "Certificaciones, insignias y credenciales profesionales de Renato José Cabrera Figueroa en tecnología, gestión, desarrollo, cloud, metodologías y aprendizaje continuo."
    );

    return () => {
      document.title = oldTitle;

      if (createdMeta) {
        meta.remove();
      } else if (oldDescription !== null) {
        meta.setAttribute("content", oldDescription);
      }
    };
  }, []);

  return (
    <div className="rc-certificaciones-page">
      <ScrollTransparentNavbar />

      <header className="rc-certificaciones-hero">
        <div className="rc-certificaciones-orb rc-orb-one" />
        <div className="rc-certificaciones-orb rc-orb-two" />

        <div className="rc-certificaciones-container rc-hero-inner">
          <div className="rc-certificaciones-eyebrow">
            APRENDIZAJE CONTINUO
          </div>

          <h1>
            Certificaciones
            <br />
            <span>y credenciales.</span>
          </h1>

          <p className="rc-certificaciones-lead">
            Aprender no es acumular diplomas. Es ampliar la capacidad de
            comprender, construir, dirigir y transformar.
          </p>

          <div className="rc-certificaciones-author">
            Renato José Cabrera Figueroa
          </div>
        </div>
      </header>

      <main>
        <section className="rc-certificaciones-intro">
          <div className="rc-certificaciones-container rc-intro-grid">
            <div>
              <span className="rc-section-kicker">Trayectoria profesional</span>

              <h2>
                El conocimiento también
                <br />
                se construye todos los días.
              </h2>
            </div>

            <div className="rc-intro-copy">
              <p>
                Esta colección reúne algunas de las certificaciones,
                especializaciones e insignias que forman parte de mi proceso
                permanente de aprendizaje.
              </p>

              <p>
                Tecnología, desarrollo, metodologías, infraestructura, cloud,
                gestión y liderazgo son áreas que evolucionan constantemente.
                Mantenerse vigente exige seguir aprendiendo.
              </p>
            </div>
          </div>
        </section>

        <section className="rc-certificaciones-gallery">
          <div className="rc-certificaciones-container">
            <div className="rc-gallery-heading">
              <div>
                <span className="rc-section-kicker">Credenciales</span>
                <h2>Badges & certificaciones.</h2>
              </div>

              <div className="rc-gallery-count">
                {badges.length} credenciales
              </div>
            </div>

            <div className="rc-badges-grid">
              {badges.map((badge) => (
                <BadgeCard
                  key={badge.filename}
                  badge={badge}
                />
              ))}
            </div>

            <div className="rc-certificaciones-cta">
              <p>
                Consulta el detalle completo de mis cursos, certificaciones y
                credenciales profesionales.
              </p>

              <a
                href="https://www.linkedin.com/in/renatocabreraf/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="rc-linkedin-cert-button"
              >
                Revisa las certificaciones
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="rc-marquee-section">
          <div className="rc-certificaciones-container rc-marquee-heading">
            <span className="rc-section-kicker rc-kicker-light">
              APRENDIZAJE EN MOVIMIENTO
            </span>

            <h2>Siempre hay algo nuevo por aprender.</h2>

            <p>
              Una trayectoria profesional no se construye con una sola
              habilidad, sino con la decisión permanente de seguir creciendo.
            </p>
          </div>

          <div className="rc-marquee-shell">
            <div className="rc-marquee-fade rc-marquee-fade-left" />
            <div className="rc-marquee-fade rc-marquee-fade-right" />

            <div className="rc-marquee-track">
              {badges.map((badge) => (
                <MarqueeBadge
                  key={`first-${badge.filename}`}
                  badge={badge}
                />
              ))}

              {badges.map((badge) => (
                <MarqueeBadge
                  key={`second-${badge.filename}`}
                  badge={badge}
                  duplicate
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="rc-certificaciones-footer">
        <div className="rc-certificaciones-container rc-footer-inner">
          <div>
            <strong>Renato José Cabrera Figueroa</strong>
            <span>Tecnología · Innovación · Liderazgo</span>
          </div>

          <Link to="/presentation">Volver al inicio →</Link>
        </div>
      </footer>
    </div>
  );
}
