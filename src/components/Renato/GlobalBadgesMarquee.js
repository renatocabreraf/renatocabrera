import React from "react";
import { Link, useLocation } from "react-router-dom";

import "assets/css/global-badges-marquee.css";

const badgeContext = require.context(
  "../../assets/img/badges",
  false,
  /\.(png|jpe?g|webp|svg)$/i
);

const preferredOrder = [
  "Insignia de certificación Google Ads IA.png",
  "Insignia de curso completado InterNaciones.png",
  "Insignia de Certificación Scrum Básico.png",
  "Sello de Certificación Yellow Belt.png",
  "Certificado de Configuración Hillstone.png",
  "Insignia de finalización Lean Six Sigma.png",
  "Insignia de certificación Scrum Foundation.png",
  "Imagen de ChatGPT 15 oct 2026, 06_52_27 p.m.png",
  "Imagen de ChatGPT 15 oct 2026, 06_52_06 p.m.png",
  "Imagen de ChatGPT 15 oct 2026, 06_51_58 p.m.png",
  "Insignia de finalización del curso ITIL 4.png",
  "Certificado de Git y Terminal.png",
  "Insignia de certificación Scrum certificada.png",
  "Insignia Circular de Certificación en JavaScript.png",
  "Certificado de Finalización de HTML5.png",
  "Certificado Circular Dorado de Huawei.png",
  "Insignia de finalización de Google Cloud.png",
  "Insignia de finalización de Coursera y Michigan.png",
  "Insignia de certificación en la nube 2021.png",
];

function cleanFilename(key) {
  return key.replace(/^\.?\//, "").trim();
}

const availableBadges = badgeContext.keys().reduce((acc, key) => {
  const filename = cleanFilename(key);
  const imported = badgeContext(key);

  acc[filename] = {
    filename,
    src: imported.default || imported,
  };

  return acc;
}, {});

const orderedBadges = [
  ...preferredOrder
    .filter((filename) => availableBadges[filename])
    .map((filename) => availableBadges[filename]),

  ...Object.values(availableBadges)
    .filter((badge) => !preferredOrder.includes(badge.filename))
    .sort((a, b) =>
      a.filename.localeCompare(b.filename, "es", {
        sensitivity: "base",
      })
    ),
];

function BadgeStrip({ duplicate = false }) {
  return orderedBadges.map((badge) => (
    <div
      className="rgbm-badge"
      key={`${duplicate ? "duplicate" : "primary"}-${badge.filename}`}
      aria-hidden={duplicate ? "true" : undefined}
    >
      <img
        src={badge.src}
        alt={
          duplicate
            ? ""
            : `Credencial profesional de Renato José Cabrera Figueroa`
        }
        loading="lazy"
        draggable="false"
        data-author="Renato José Cabrera Figueroa"
        data-owner="Renato José Cabrera Figueroa"
      />
    </div>
  ));
}

export default function GlobalBadgesMarquee() {
  const location = useLocation();

  if (location.pathname === "/certificaciones") {
    return null;
  }

  return (
    <section
      className="rgbm-section"
      aria-label="Certificaciones y credenciales"
    >
      <div className="rgbm-container">
        <div className="rgbm-heading">
          <div>
            <span className="rgbm-eyebrow">APRENDIZAJE CONTINUO</span>
            <h2>Certificaciones y credenciales.</h2>
          </div>

          <Link to="/certificaciones" className="rgbm-link">
            Ver certificaciones →
          </Link>
        </div>
      </div>

      <div className="rgbm-marquee">
        <div className="rgbm-fade rgbm-fade-left" />
        <div className="rgbm-fade rgbm-fade-right" />

        <div className="rgbm-track">
          <BadgeStrip />
          <BadgeStrip duplicate />
        </div>
      </div>
    </section>
  );
}
