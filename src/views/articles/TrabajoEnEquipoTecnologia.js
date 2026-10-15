import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

const AUTHOR = "Renato José Cabrera Figueroa";

const sections = [
  {
    title: "Tener expertos es bueno. Depender de ellos no.",
    paragraphs: [
      `Todo equipo necesita especialistas. Siempre habrá alguien que conozca mejor una plataforma, una arquitectura, un proceso o una parte crítica del negocio. Eso no representa un problema. Al contrario, la experiencia profunda es una de las mayores fortalezas de un departamento de tecnología.`,
      `La vulnerabilidad aparece cuando ese conocimiento no logra salir de una sola persona.`,
      `En proyectos complejos, especialmente durante migraciones, actualizaciones o salidas a producción, es fácil que el integrante con mayor dominio técnico termine absorbiendo una proporción excesiva de las decisiones y del trabajo.`,
      `El resto del equipo puede acompañar, ayudar, probar, documentar o resolver tareas relacionadas. Sin embargo, si el conocimiento central continúa concentrado, existe una dependencia que muchas veces solo se descubre cuando esa persona deja de estar disponible.`,
    ],
  },
  {
    title: "Una experiencia que cambió mi forma de verlo",
    paragraphs: [
      `Durante una actualización tecnológica importante, trabajamos durante varios meses preparando una salida a producción.`,
      `El proyecto requería conocimiento especializado y, de manera natural, uno de los miembros del equipo terminó convirtiéndose en el principal referente técnico de la implementación.`,
      `El equipo acompañó el proceso, pero gran parte del conocimiento más profundo permaneció concentrado. El compromiso permitió avanzar. También reveló una debilidad.`,
      `Cuando fue necesario redistribuir temporalmente las responsabilidades, descubrimos que el resto del equipo conocía el proyecto, pero no necesariamente podía asumir con autonomía todas las tareas críticas.`,
      `La situación también me recordó algo desde el liderazgo: conocer la operación y poder entrar técnicamente cuando hace falta es valioso, pero un gerente no debería convertirse en el mecanismo permanente de contingencia del departamento.`,
      `La solución real tiene que estar en el equipo.`,
    ],
    quote:
      "Un equipo puede estar unido, comprometido y trabajar muy duro, y aun así tener un riesgo importante si su conocimiento no está distribuido.",
  },
  {
    title: "El problema del “héroe de TI”",
    paragraphs: [
      `En muchos departamentos existe, explícita o implícitamente, la figura del héroe: la persona a la que todos llaman cuando algo falla.`,
      `Conoce configuraciones que nadie documentó, recuerda por qué se tomó determinada decisión y entiende relaciones entre sistemas que quizá nunca quedaron escritas.`,
      `Durante algún tiempo esto puede parecer eficiencia. En realidad, es deuda operativa.`,
      `Si cada problema importante termina en la misma persona, no construimos un equipo más fuerte. Construimos una dependencia cada vez mayor.`,
      `Y esa dependencia afecta tanto a la organización como al propio especialista. El buen desempeño puede terminar siendo recompensado con más interrupciones, más tareas críticas, más decisiones y más presión.`,
      `Eso no es sostenibilidad.`,
    ],
  },
  {
    title: "Trabajo en equipo no significa que todos hagan lo mismo",
    paragraphs: [
      `Compartir conocimiento no significa convertir a cada miembro del departamento en una copia de los demás.`,
      `Un especialista en infraestructura no necesita convertirse en desarrollador senior. Un desarrollador no necesita conocer cada detalle de redes. Soporte no necesita administrar toda la arquitectura cloud.`,
      `La diversidad técnica es precisamente una fortaleza.`,
      `Lo importante es que cada integrante comprenda suficientemente cómo su trabajo se conecta con el de los demás.`,
      `Un equipo tecnológico maduro conoce sus especialidades, pero también entiende el sistema completo. Sabe quién hace qué, dónde encontrar información y cómo reaccionar cuando alguien no está.`,
    ],
  },
  {
    title: "La comunicación también es arquitectura",
    paragraphs: [
      `Muchas fallas que parecen tecnológicas no comienzan realmente en la tecnología. Comienzan en conversaciones que nunca ocurrieron.`,
      `Una decisión que desarrollo no comunicó a infraestructura. Un cambio que operaciones conocía, pero soporte no. Una dependencia que nadie documentó. Una prioridad del negocio que llegó a una persona, pero no al equipo.`,
      `Por eso creo que la comunicación dentro de TI debería tratarse casi como un componente técnico: tiene que diseñarse, tener frecuencia, responsables y mecanismos de respaldo.`,
    ],
  },
  {
    title: "Documentar no es burocracia",
    paragraphs: [
      `Una de las primeras respuestas ante la concentración de conocimiento suele ser: “tenemos que documentar”. Es correcto.`,
      `Pero documentar no consiste en producir archivos que nadie volverá a abrir. La documentación útil reduce incertidumbre y permite que otras personas puedan actuar cuando sea necesario.`,
    ],
    bullets: [
      "¿Qué hace este sistema?",
      "¿Cómo se despliega?",
      "¿Qué depende de qué?",
      "¿Qué ocurre si falla?",
      "¿Dónde se encuentran los accesos?",
      "¿Qué decisiones importantes se tomaron y por qué?",
      "¿Quién puede asumir la responsabilidad si la persona principal no está?",
    ],
  },
  {
    title: "La capacitación cruzada debería ser parte del trabajo",
    paragraphs: [
      `Capacitar al compañero no debería ser algo que hacemos cuando sobra tiempo. Porque el tiempo nunca sobra.`,
      `Las sesiones de transferencia, programación en pares, revisiones de arquitectura, rotación de ciertas responsabilidades y participación compartida en proyectos críticos permiten distribuir conocimiento de forma natural.`,
      `Cuando una persona entiende únicamente su tarea, puede ejecutar. Cuando entiende cómo esa tarea afecta al resto del sistema, puede tomar mejores decisiones.`,
      `Ahí empieza a aparecer un verdadero equipo.`,
    ],
  },
  {
    title: "La responsabilidad también es individual",
    paragraphs: [
      `El liderazgo tiene una responsabilidad enorme en crear estos espacios. Pero no toda la responsabilidad pertenece al gerente.`,
      `Compartir conocimiento no disminuye el valor de un especialista. Lo aumenta.`,
      `La persona más valiosa de un equipo no es necesariamente la única capaz de resolver determinado problema. Muchas veces es aquella que consiguió que otras tres personas también pudieran resolverlo.`,
      `Enseñar es multiplicar capacidad.`,
    ],
    quote: "¿Qué parte de lo que sé debería saber también alguien más?",
  },
  {
    title: "La responsabilidad del liderazgo",
    paragraphs: [
      `No tiene que existir una emergencia para evaluar las dependencias del departamento.`,
      `Si la ausencia temporal de una persona significa que un proceso se detendría, una plataforma quedaría sin atención o nadie sabría cómo continuar un proyecto, acabamos de identificar un riesgo.`,
      `Un líder de tecnología debe proteger los sistemas, pero también debe proteger a las personas que los sostienen.`,
      `Eso implica vigilar cargas de trabajo, evitar jornadas extraordinarias como forma habitual de operación y detectar cuándo el compromiso empieza a convertirse en agotamiento.`,
      `Cuidar al equipo también es continuidad operativa.`,
    ],
    quote:
      "¿Qué ocurriría mañana si una persona clave no estuviera disponible durante dos semanas?",
  },
];

function TrabajoEnEquipoTecnologia() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);

    document.title =
      "La importancia del trabajo en equipo en un departamento de tecnología | Renato José Cabrera Figueroa";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Por qué un departamento de tecnología debe compartir conocimiento, evitar dependencias críticas y construir equipos capaces de responder juntos. Una reflexión de Renato José Cabrera Figueroa.";

  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "El trabajo en equipo en tecnología no es opcional. Es infraestructura.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: "https://renatocabrera.com/about-us",
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR,
    },
    mainEntityOfPage:
      "https://renatocabrera.com/trabajo-en-equipo-tecnologia",
  };

  return (
    <>
      <ScrollTransparentNavbar />

      <main className="team-article">

        <span className="hidden-author" aria-hidden="true">
          {AUTHOR}
        </span>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <header className="article-hero">
          <div className="article-shell article-narrow">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <p className="eyebrow">
                TECNOLOGÍA · LIDERAZGO
              </p>

              <h1>
                El trabajo en equipo
                <br />
                en tecnología
                <br />
                <span>es infraestructura.</span>
              </h1>

              <p className="article-description">
                Un departamento de tecnología puede tener grandes
                especialistas, pero si el conocimiento, la responsabilidad
                y las decisiones se concentran en pocas personas,
                el equipo sigue siendo vulnerable.
              </p>

              <div className="byline">
                <img
                  src={require("assets/img/rostro.png")}
                  alt={AUTHOR}
                  title={AUTHOR}
                  data-author={AUTHOR}
                  data-person={AUTHOR}
                />

                <div>
                  <strong>{AUTHOR}</strong>
                  <span>7 de octubre de 2026 · Tecnología y liderazgo</span>
                </div>
              </div>

            </motion.div>

          </div>
        </header>

        <section className="feature-image">
          <div className="article-shell">

            <motion.img
              src={require("assets/img/trabajo-equipo-tecnologia.png")}
              alt="Renato José Cabrera Figueroa - liderazgo y trabajo en equipo en tecnología"
              title={AUTHOR}
              data-author={AUTHOR}
              data-person={AUTHOR}
              data-owner={AUTHOR}
              initial={{ opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            />

          </div>
        </section>

        <article className="article-content">

          <div className="article-shell article-reading">

            <p className="opening">
              En tecnología solemos hablar mucho de arquitectura,
              disponibilidad, redundancia, seguridad y continuidad.
            </p>

            <p>
              Diseñamos sistemas para que no dependan de un solo servidor.
              Replicamos bases de datos. Creamos respaldos. Implementamos
              monitoreo. Pensamos en contingencias.
            </p>

            <p>
              Pero, curiosamente, muchas veces olvidamos aplicar esos mismos
              principios a nuestros equipos.
            </p>

            <p>
              Podemos tener una infraestructura técnicamente robusta y,
              al mismo tiempo, un departamento extremadamente frágil porque
              una sola persona concentra demasiado conocimiento.
            </p>

            <p>
              Y esa es una de las contradicciones más importantes que un
              líder de tecnología debe aprender a identificar.
            </p>

            {sections.map((section, index) => (
              <section className="content-section" key={section.title}>

                <span className="section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>
                  {section.title}
                </h2>

                {section.quote && (
                  <blockquote>
                    {section.quote}
                  </blockquote>
                )}

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

              </section>
            ))}

            <section className="recommendation">

              <p className="eyebrow">
                MI RECOMENDACIÓN
              </p>

              <h2>
                Diseñar equipos que puedan continuar.
              </h2>

              <p>
                Los departamentos de tecnología deberían documentar procesos
                críticos de forma útil, mantener una segunda persona
                familiarizada con cada sistema esencial y crear espacios
                periódicos de transferencia de conocimiento.
              </p>

              <p>
                También debemos involucrar a otros miembros del equipo en los
                proyectos complejos antes de que exista una emergencia,
                revisar después de cada implementación qué conocimiento quedó
                concentrado y evitar medir el valor de alguien por cuántos
                problemas solo esa persona puede resolver.
              </p>

              <p>
                Y desde el liderazgo, debemos reconocer que pedir ayuda,
                redistribuir trabajo y permitir descanso también forman
                parte de una buena gestión tecnológica.
              </p>

            </section>

          </div>

        </article>

        <section className="article-closing">
          <div className="article-shell article-narrow">

            <p className="eyebrow light">
              UNA ÚLTIMA IDEA
            </p>

            <h2>
              Un equipo fuerte no elimina
              a los expertos.
              <br />
              <span>Multiplica su conocimiento.</span>
            </h2>

            <p>
              Siempre necesitaremos especialistas. Pero el objetivo debería
              ser que su experiencia eleve la capacidad colectiva.
            </p>

            <div className="final-question">
              <span>
                La pregunta no es solamente:
              </span>

              <strong>
                ¿Quién puede resolver este problema hoy?
              </strong>

              <span>
                Sino:
              </span>

              <strong>
                ¿Cuántas personas podrían resolverlo mañana?
              </strong>
            </div>

          </div>
        </section>

        <section className="signature">
          <div className="article-shell article-narrow">

            <span>
              Escrito por
            </span>

            <h3>
              Renato José Cabrera Figueroa
            </h3>

            <div className="signature-links">
              <Link to="/about-us">
                Sobre mí →
              </Link>

              <Link to="/blog-posts">
                Más artículos →
              </Link>
            </div>

          </div>
        </section>

        <footer className="article-footer">
          <div className="article-shell footer-inner">

            <span>
              © 2026 Renato José Cabrera Figueroa
            </span>

            <div>
              <Link to="/presentation">Inicio</Link>
              <Link to="/about-us">Conóceme</Link>
              <Link to="/blog-posts">Blog</Link>
              <Link to="/social">Labor Social</Link>
              <Link to="/contact-us">Contacto</Link>
              <Link to="/politicas">Privacidad</Link>
            </div>

          </div>
        </footer>

      </main>

      <style>{`

        .team-article {
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

        .article-shell {
          width: calc(100% - 80px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .article-narrow {
          max-width: 960px;
        }

        .article-reading {
          max-width: 790px;
        }

        .article-hero {
          padding: 175px 0 110px;
        }

        .eyebrow {
          margin: 0 0 28px;
          color: #6e6e73;
          font-size: 13px;
          font-weight: 650;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .article-hero h1 {
          margin: 0;
          font-size: clamp(58px, 7.8vw, 106px);
          line-height: .96;
          letter-spacing: -.065em;
          font-weight: 650;
        }

        .article-hero h1 span {
          color: #86868b;
        }

        .article-description {
          max-width: 760px;
          margin: 48px 0 0;
          color: #6e6e73;
          font-size: clamp(22px, 2.2vw, 29px);
          line-height: 1.43;
          letter-spacing: -.03em;
        }

        .byline {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 42px;
        }

        .byline img {
          width: 48px;
          height: 48px;
          object-fit: cover;
          border-radius: 50%;
        }

        .byline div {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .byline strong {
          font-size: 15px;
        }

        .byline span {
          color: #86868b;
          font-size: 13px;
        }

        .feature-image {
          padding-bottom: 120px;
        }

        .feature-image img {
          width: 100%;
          max-height: 900px;
          display: block;
          object-fit: cover;
          object-position: center;
          border-radius: 30px;
        }

        .article-content {
          padding-bottom: 140px;
        }

        .article-content p,
        .article-content li {
          color: #424245;
          font-size: 19px;
          line-height: 1.75;
        }

        .article-content p {
          margin: 0 0 28px;
        }

        .opening {
          color: #1d1d1f !important;
          font-size: clamp(26px, 3vw, 35px) !important;
          line-height: 1.36 !important;
          letter-spacing: -.035em;
          font-weight: 500;
        }

        .content-section {
          padding-top: 100px;
        }

        .section-number {
          display: block;
          margin-bottom: 18px;
          color: #86868b;
          font-size: 13px;
          font-weight: 650;
        }

        .content-section h2,
        .recommendation h2 {
          margin: 0 0 34px;
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.06;
          letter-spacing: -.05em;
          font-weight: 650;
        }

        blockquote {
          margin: 55px 0;
          padding: 0;
          border: 0;
          color: #1d1d1f;
          font-size: clamp(30px, 4vw, 45px);
          line-height: 1.22;
          letter-spacing: -.04em;
          font-weight: 600;
        }

        .article-content ul {
          padding-left: 25px;
          margin: 30px 0;
        }

        .article-content li {
          margin-bottom: 12px;
        }

        .recommendation {
          margin-top: 115px;
          padding: 60px;
          background: #f5f5f7;
          border-radius: 28px;
        }

        .article-closing {
          padding: 155px 0;
          background: #000;
          color: #f5f5f7;
        }

        .eyebrow.light {
          color: #86868b;
        }

        .article-closing h2 {
          margin: 0;
          color: #f5f5f7;
          font-size: clamp(46px, 6vw, 77px);
          line-height: 1.02;
          letter-spacing: -.055em;
          font-weight: 650;
        }

        .article-closing h2 span {
          color: #86868b;
        }

        .article-closing > div > p:not(.eyebrow) {
          max-width: 720px;
          margin-top: 42px;
          color: #a1a1a6;
          font-size: 21px;
          line-height: 1.6;
        }

        .final-question {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 65px;
          padding-top: 45px;
          border-top: 1px solid #333;
        }

        .final-question span {
          color: #86868b;
          font-size: 17px;
        }

        .final-question strong {
          max-width: 800px;
          color: #f5f5f7;
          font-size: clamp(27px, 3.5vw, 42px);
          line-height: 1.2;
          letter-spacing: -.035em;
        }

        .signature {
          padding: 130px 0;
        }

        .signature > div > span {
          color: #86868b;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .11em;
          font-weight: 650;
        }

        .signature h3 {
          margin: 15px 0 30px;
          font-size: clamp(38px, 5vw, 60px);
          letter-spacing: -.05em;
          font-weight: 650;
        }

        .signature-links {
          display: flex;
          gap: 30px;
        }

        .signature-links a {
          color: #0066cc;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
        }

        .article-footer {
          padding: 35px 0 45px;
          background: #f5f5f7;
          border-top: 1px solid #d2d2d7;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #6e6e73;
          font-size: 13px;
        }

        .footer-inner div {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
        }

        .article-footer a {
          color: #424245;
          text-decoration: none;
        }

        .hidden-author {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0,0,0,0) !important;
          white-space: nowrap !important;
        }

        @media (max-width: 768px) {

          .article-shell {
            width: calc(100% - 42px);
          }

          .article-hero {
            padding: 150px 0 90px;
          }

          .article-hero h1 {
            font-size: clamp(50px, 14.5vw, 72px);
          }

          .feature-image {
            padding-bottom: 85px;
          }

          .feature-image .article-shell {
            width: calc(100% - 28px);
          }

          .feature-image img {
            border-radius: 22px;
          }

          .recommendation {
            padding: 35px 28px;
          }

          .article-closing,
          .signature {
            padding: 105px 0;
          }

          .signature-links,
          .footer-inner {
            flex-direction: column;
          }

        }

      `}</style>
    </>
  );
}

export default TrabajoEnEquipoTecnologia;
