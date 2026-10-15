import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

const books = [
  {
    title: "Carrera hacia los Sueños",
    year: "2022",
    category: "Historia · Coleccionismo",
    image: require("assets/img/chls.jpg"),
    description:
      "Una mirada a la historia de Hot Wheels desde la perspectiva de un coleccionista: sus orígenes, curiosidades, mitos, personajes y la evolución de una marca que ha acompañado a generaciones enteras.",
    amazon:
      "https://www.amazon.com/Carrera-hacia-Sueños-Coleccionismo-Coleccionista/dp/B09TN1N5RR",
    pdf:
      "https://app.recurrente.com/s/renato-cabrera-lei80y/carrera-hacia-los-suenos-hot-wheels-historia-curiosidades-y-coleccionismo",
  },
  {
    title: "Hasta Siempre",
    year: "2024",
    category: "Novela",
    image: require("assets/img/hs.png"),
    description:
      "Arthur y Madison emprenden un viaje que pone a prueba el amor, la esperanza y el significado de vivir plenamente cuando el tiempo deja de sentirse infinito.",
    amazon:
      "https://www.amazon.com/-/es/Renato-Cabrera-ebook/dp/B0D7XLHMB5/",
    pdf:
      "https://app.recurrente.com/s/renato-cabrera-lei80y/hasta-siempre",
  },
];

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("books-page");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("books-page");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />

      <main className="rc-books">

        {/* HERO */}
        <section className="books-hero">
          <div className="books-shell">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="books-eyebrow">
                LIBROS
              </p>

              <h1>
                Historias que
                <br />
                merecen
                <br />
                <span>ser contadas.</span>
              </h1>

              <p className="books-lead">
                Escribir es una forma distinta de construir:
                ordenar ideas, imaginar mundos y dejar algo
                que pueda acompañar a otras personas.
              </p>

            </motion.div>

          </div>
        </section>

        {/* INTRO */}
        <section className="books-intro">
          <div className="books-shell books-narrow">

            <p className="books-section-label">
              Por qué escribo
            </p>

            <h2>
              Cada libro comienza
              <br />
              con una idea que
              <br />
              no quiere irse.
            </h2>

            <p className="books-large-copy">
              Mis libros nacen de mis intereses, de preguntas que me
              acompañan durante años y de historias que encuentro demasiado
              interesantes como para dejarlas únicamente en mi cabeza.
            </p>

            <p className="books-body-copy">
              Algunas hablan de pasiones muy personales. Otras exploran
              emociones, decisiones y la manera en que las personas enfrentan
              momentos que pueden cambiarlo todo.
            </p>

          </div>
        </section>

        {/* BOOKS */}
        <section className="books-library">
          <div className="books-shell">

            <div className="books-heading">

              <p className="books-section-label">
                Publicados
              </p>

              <h2>
                Dos historias.
                <br />
                <span>Dos mundos distintos.</span>
              </h2>

            </div>

            <div className="books-list">

              {books.map((book, index) => (
                <motion.article
                  className="book-item"
                  key={book.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                >

                  <div className="book-cover-wrap">

                    <img
                      src={book.image}
                      alt={book.title}
                      className="book-cover"
                    />

                  </div>

                  <div className="book-content">

                    <div className="book-meta">
                      <span>{book.category}</span>
                      <span>·</span>
                      <span>{book.year}</span>
                    </div>

                    <h3>
                      {book.title}
                    </h3>

                    <p>
                      {book.description}
                    </p>

                    <div className="book-actions">

                      <a
                        href={book.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="book-primary"
                      >
                        Amazon ↗
                      </a>

                      <a
                        href={book.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="book-secondary"
                      >
                        Versión digital ↗
                      </a>

                    </div>

                  </div>

                </motion.article>
              ))}

            </div>

          </div>
        </section>

        {/* WRITING */}
        <section className="books-writing">
          <div className="books-shell books-narrow">

            <p className="books-section-label light">
              Escribir
            </p>

            <h2>
              A veces escribimos
              <br />
              para contar.
              <br />
              <span>Otras veces para entender.</span>
            </h2>

            <p>
              Para mí, escribir también es una herramienta de pensamiento.
              Obliga a ordenar ideas, cuestionar lo que damos por hecho
              y mirar con más atención las historias que nos rodean.
            </p>

          </div>
        </section>

        {/* COMING SOON */}
        <section className="books-coming">
          <div className="books-shell">

            <div className="books-coming-grid">

              <motion.div
                className="books-coming-copy"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >

                <p className="books-section-label">
                  Próximamente
                </p>

                <h2>
                  La historia
                  <br />
                  también se
                  <br />
                  <span>programa.</span>
                </h2>

                <p className="books-large-copy small">
                  Estoy trabajando en una nueva obra sobre la historia
                  de la computación y las ideas que transformaron
                  nuestra relación con la tecnología.
                </p>

                <p className="books-body-copy">
                  Desde los pioneros de la informática hasta los grandes
                  cambios tecnológicos contemporáneos, será un recorrido
                  por las personas, decisiones e innovaciones que hicieron
                  posible el mundo digital que hoy damos por sentado.
                </p>

              </motion.div>

              <motion.div
                className="books-coming-image"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={require("assets/img/comings.png")}
                  alt="Próximo libro de Renato Cabrera"
                />
              </motion.div>

            </div>

          </div>
        </section>

        {/* CLOSING */}
        <section className="books-closing">
          <div className="books-shell books-narrow">

            <h2>
              Una buena historia
              <br />
              puede quedarse contigo
              <br />
              <span>mucho tiempo.</span>
            </h2>

            <div className="books-closing-links">

              <Link to="/blog-posts">
                Leer el blog →
              </Link>

              <Link to="/about-us">
                Sobre mí →
              </Link>

            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="books-footer">

          <div className="books-shell books-footer-inner">

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

        .rc-books {
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

        .books-shell {
          width: calc(100% - 80px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .books-narrow {
          max-width: 920px;
        }

        /* HERO */

        .books-hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 170px 0 110px;
          background:
            radial-gradient(
              circle at 78% 18%,
              rgba(175, 82, 222, 0.09),
              transparent 32%
            ),
            #fff;
        }

        .books-eyebrow,
        .books-section-label {
          margin: 0 0 28px;
          color: #6e6e73;
          font-size: 13px;
          line-height: 1;
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .books-hero h1 {
          max-width: 1000px;
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(68px, 9vw, 126px);
          line-height: 0.92;
          letter-spacing: -0.07em;
          font-weight: 650;
        }

        .books-hero h1 span {
          color: #86868b;
        }

        .books-lead {
          max-width: 690px;
          margin: 50px 0 0;
          color: #6e6e73;
          font-size: clamp(22px, 2.2vw, 30px);
          line-height: 1.38;
          letter-spacing: -0.03em;
        }

        /* INTRO */

        .books-intro {
          padding: 170px 0;
          background: #f5f5f7;
        }

        .books-intro h2,
        .books-heading h2,
        .books-writing h2,
        .books-coming-copy h2,
        .books-closing h2 {
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .books-large-copy {
          margin: 55px 0 0;
          color: #1d1d1f;
          font-size: clamp(24px, 3vw, 34px);
          line-height: 1.28;
          letter-spacing: -0.035em;
          font-weight: 500;
        }

        .books-large-copy.small {
          max-width: 620px;
          font-size: 27px;
        }

        .books-body-copy {
          max-width: 760px;
          margin: 30px 0 0;
          color: #6e6e73;
          font-size: 18px;
          line-height: 1.6;
        }

        /* LIBRARY */

        .books-library {
          padding: 170px 0;
          background: #fff;
        }

        .books-heading {
          margin-bottom: 90px;
        }

        .books-heading h2 span {
          color: #86868b;
        }

        .books-list {
          display: flex;
          flex-direction: column;
          gap: 130px;
        }

        .book-item {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 110px;
          align-items: center;
        }

        .book-item:nth-child(even) .book-cover-wrap {
          order: 2;
        }

        .book-cover-wrap {
          display: flex;
          justify-content: center;
          padding: 55px;
          border-radius: 28px;
          background: #f5f5f7;
        }

        .book-cover {
          width: 100%;
          max-width: 350px;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 22px 28px rgba(0,0,0,0.15));
          transition: transform 0.4s ease;
        }

        .book-item:hover .book-cover {
          transform: translateY(-5px);
        }

        .book-meta {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          color: #86868b;
          font-size: 13px;
          font-weight: 550;
        }

        .book-content h3 {
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(42px, 4vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .book-content > p {
          max-width: 590px;
          margin: 30px 0;
          color: #6e6e73;
          font-size: 18px;
          line-height: 1.6;
        }

        .book-actions {
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .book-primary {
          display: inline-flex;
          padding: 12px 22px;
          border-radius: 999px;
          background: #0071e3;
          color: white !important;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none !important;
        }

        .book-primary:hover {
          background: #0077ed;
        }

        .book-secondary {
          color: #0066cc !important;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none !important;
        }

        /* WRITING */

        .books-writing {
          padding: 180px 0;
          background: #000;
          color: #f5f5f7;
        }

        .books-section-label.light {
          color: #86868b;
        }

        .books-writing h2 {
          color: #f5f5f7;
        }

        .books-writing h2 span {
          color: #86868b;
        }

        .books-writing > .books-shell > p:last-child {
          max-width: 730px;
          margin: 50px 0 0;
          color: #a1a1a6;
          font-size: 22px;
          line-height: 1.55;
        }

        /* COMING */

        .books-coming {
          padding: 170px 0;
          background: #f5f5f7;
        }

        .books-coming-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 100px;
          align-items: center;
        }

        .books-coming-copy h2 span {
          color: #86868b;
        }

        .books-coming-image {
          display: flex;
          justify-content: center;
          padding: 60px;
          border-radius: 28px;
          background: #fff;
        }

        .books-coming-image img {
          width: 100%;
          max-width: 430px;
          display: block;
          object-fit: contain;
        }

        /* CLOSING */

        .books-closing {
          padding: 180px 0;
          background: #fff;
        }

        .books-closing h2 span {
          color: #86868b;
        }

        .books-closing-links {
          display: flex;
          gap: 35px;
          margin-top: 55px;
        }

        .books-closing-links a {
          color: #0066cc;
          font-size: 20px;
          font-weight: 500;
          text-decoration: none;
        }

        /* FOOTER */

        .books-footer {
          padding: 35px 0 45px;
          background: #f5f5f7;
          border-top: 1px solid #d2d2d7;
        }

        .books-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #6e6e73;
          font-size: 13px;
        }

        .books-footer-inner div {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .books-footer a {
          color: #424245;
          text-decoration: none;
        }

        .books-footer a:hover {
          text-decoration: underline;
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .books-shell {
            width: calc(100% - 42px);
          }

          .books-hero {
            min-height: auto;
            padding: 150px 0 100px;
          }

          .books-hero h1 {
            font-size: clamp(56px, 17vw, 82px);
          }

          .books-intro,
          .books-library,
          .books-writing,
          .books-coming,
          .books-closing {
            padding: 110px 0;
          }

          .books-heading {
            margin-bottom: 60px;
          }

          .books-list {
            gap: 90px;
          }

          .book-item,
          .books-coming-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .book-item:nth-child(even) .book-cover-wrap {
            order: 0;
          }

          .book-cover-wrap,
          .books-coming-image {
            padding: 40px;
          }

          .book-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .books-closing-links {
            flex-direction: column;
            gap: 18px;
          }

          .books-footer-inner {
            flex-direction: column;
          }

        }

      `}</style>
    </>
  );
}

export default LandingPage;
