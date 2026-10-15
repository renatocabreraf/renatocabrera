import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

const posts = [
  {
    title: "El trabajo en equipo en tecnología no es opcional. Es infraestructura.",
    category: "Tecnología · Liderazgo",
    date: "7 de octubre de 2026",
    route: "/trabajo-en-equipo-tecnologia",
    image: require("assets/img/trabajo-equipo-tecnologia.png"),
    description:
      "Un departamento de tecnología puede tener grandes especialistas, pero si el conocimiento se concentra en pocas personas, el equipo sigue siendo vulnerable.",
    author: "Renato José Cabrera Figueroa",
  },

  {
    title: "Las 5 lecturas que han ayudado a formarme como profesional.",
    category: "Lecturas",
    date: "9 junio 2025",
    route: "/5lecturas",
    image: require("assets/img/libre.jpg"),
    featured: true,
    description:
      "Cinco libros que han influido en mi manera de pensar, trabajar y entender el crecimiento profesional.",
  },
  {
    title: "La juventud es la clave del desarrollo de las sociedades.",
    category: "Sociedad",
    date: "9 junio 2025",
    route: "/juventud",
    image: require("assets/img/comunion.jpg"),
    description:
      "Una reflexión sobre educación, acompañamiento y el papel de los jóvenes en la construcción del futuro.",
  },
  {
    title: "La importancia de cuidar la salud mental.",
    category: "Bienestar",
    date: "20 mayo 2025",
    route: "/saludmental",
    image: require("assets/img/apple.jpg"),
    description:
      "El bienestar emocional también forma parte del desarrollo personal y profesional.",
  },
  {
    title: "Si no sabes programar, serás un analfabeta... ¿o no?",
    category: "Tecnología",
    date: "2 mayo 2025",
    route: "/programacion",
    image: require("assets/img/code.jpg"),
    description:
      "Una mirada sobre programación, pensamiento lógico y el verdadero papel de la tecnología en la vida moderna.",
  },
];

const recommendations = [
  {
    title: "Kind Mind",
    category: "Tecnología",
    url: "http://www.kindmindgt.com",
    image: require("assets/img/IMG_5451.JPG"),
    description:
      "Tecnología, desarrollo y consultoría orientados a resolver problemas reales de las organizaciones.",
  },

  {
    title: "STEM Racing GT",
    category: "Educación STEM",
    url: "https://www.stemracing.gt",
    image: require("assets/img/stem-racing.jpg"),
    description:
      "Una iniciativa que acerca a niños y jóvenes al mundo STEM a través del diseño, ingeniería, innovación, gestión de proyectos y competencias inspiradas en el motorsport.",
  },
  {
    title: "Nukunem",
    category: "Impacto social",
    url: "https://www.nukunem.org/home",
    image: require("assets/img/nukunem4.png"),
    description:
      "Una iniciativa que busca transformar comunidades a través de salud integral y desarrollo social.",
  },
];

function BlogPosts() {
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("blog-posts");
    };
  }, []);

  const featuredPost = posts.find((post) => post.featured);
  const secondaryPosts = posts.filter((post) => !post.featured);

  return (
    <>
      <ScrollTransparentNavbar />

      <main className="rc-blog">

        {/* HERO */}
        <section className="blog-hero">
          <div className="blog-shell">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <p className="blog-eyebrow">
                BLOG
              </p>

              <h1>
                Ideas,
                <br />
                tecnología
                <br />
                <span>y lo que voy aprendiendo.</span>
              </h1>

              <p className="blog-lead">
                Reflexiones sobre tecnología, sociedad, lectura,
                bienestar y las ideas que van formando mi manera
                de ver el mundo.
              </p>
            </motion.div>

          </div>
        </section>

        {/* FEATURED POST */}
        <section className="blog-featured">
          <div className="blog-wide">

            <Link
              to={featuredPost.route}
              className="blog-featured-link"
            >
              <motion.article
                className="blog-featured-card"
                initial={{ opacity: 0, scale: 0.985 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
              >

                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                />

                <div className="blog-featured-overlay"></div>

                <div className="blog-featured-copy">

                  <div className="blog-meta light">
                    <span>{featuredPost.category}</span>
                    <span>·</span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <h2>
                    {featuredPost.title}
                  </h2>

                  <p>
                    {featuredPost.description}
                  </p>

                  <span className="blog-read-link">
                    Leer artículo →
                  </span>

                </div>

              </motion.article>
            </Link>

          </div>
        </section>

        {/* POSTS */}
        <section className="blog-posts-section">
          <div className="blog-shell">

            <div className="blog-section-heading">

              <p className="blog-section-label">
                Últimas ideas
              </p>

              <h2>
                Algunas cosas sobre
                <br />
                las que vale la pena pensar.
              </h2>

            </div>

            <div className="blog-grid">

              {secondaryPosts.map((post, index) => (
                <motion.article
                  className="blog-card"
                  key={post.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >

                  <Link
                    to={post.route}
                    className="blog-card-image-link"
                  >
                    <div className="blog-card-image-wrap">
                      <img
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                  </Link>

                  <div className="blog-card-content">

                    <div className="blog-meta">
                      <span>{post.category}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>

                    <Link
                      to={post.route}
                      className="blog-card-title-link"
                    >
                      <h3>
                        {post.title}
                      </h3>
                    </Link>

                    <p>
                      {post.description}
                    </p>

                    <Link
                      to={post.route}
                      className="blog-inline-link"
                    >
                      Leer más →
                    </Link>

                  </div>

                </motion.article>
              ))}

            </div>

          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="blog-philosophy">
          <div className="blog-shell blog-narrow">

            <p className="blog-section-label light">
              Escribir
            </p>

            <h2>
              Pensar también
              <br />
              es una forma de
              <br />
              <span>construir.</span>
            </h2>

            <p>
              Escribo para ordenar ideas, cuestionar certezas y
              registrar aquello que voy aprendiendo mientras trabajo,
              leo, construyo proyectos y conozco nuevas personas.
            </p>

          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="blog-recommendations">
          <div className="blog-shell">

            <div className="blog-section-heading">

              <p className="blog-section-label">
                También vale la pena conocer
              </p>

              <h2>
                Proyectos que
                <br />
                hacen cosas interesantes.
              </h2>

            </div>

            <div className="blog-recommendation-grid">

              {recommendations.map((item, index) => (
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-recommendation"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >

                  <div className="blog-recommendation-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="blog-recommendation-copy">

                    <p className="blog-recommendation-category">
                      {item.category}
                    </p>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    <span>
                      Visitar ↗
                    </span>

                  </div>

                </motion.a>
              ))}

            </div>

          </div>
        </section>

        {/* CLOSING */}
        <section className="blog-closing">
          <div className="blog-shell blog-narrow">

            <h2>
              Seguir aprendiendo.
              <br />
              <span>Seguir compartiendo.</span>
            </h2>

            <div className="blog-closing-links">

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
        <footer className="blog-footer">

          <div className="blog-shell blog-footer-inner">

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

        .rc-blog {
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

        .blog-shell {
          width: calc(100% - 80px);
          max-width: 1180px;
          margin: 0 auto;
        }

        .blog-wide {
          width: calc(100% - 48px);
          max-width: 1480px;
          margin: 0 auto;
        }

        .blog-narrow {
          max-width: 900px;
        }

        /* HERO */

        .blog-hero {
          padding: 180px 0 120px;
          background:
            radial-gradient(
              circle at 80% 12%,
              rgba(0, 113, 227, 0.08),
              transparent 30%
            ),
            #fff;
        }

        .blog-eyebrow,
        .blog-section-label {
          margin: 0 0 28px;
          color: #6e6e73;
          font-size: 13px;
          line-height: 1;
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .blog-hero h1 {
          max-width: 1060px;
          margin: 0;
          color: #1d1d1f;
          font-size: clamp(64px, 8.5vw, 122px);
          line-height: 0.93;
          letter-spacing: -0.07em;
          font-weight: 650;
        }

        .blog-hero h1 span {
          color: #86868b;
        }

        .blog-lead {
          max-width: 700px;
          margin: 50px 0 0;
          color: #6e6e73;
          font-size: clamp(21px, 2.2vw, 29px);
          line-height: 1.38;
          letter-spacing: -0.03em;
        }

        /* FEATURED */

        .blog-featured {
          padding: 0 0 150px;
        }

        .blog-featured-link {
          color: inherit;
          text-decoration: none !important;
        }

        .blog-featured-card {
          position: relative;
          overflow: hidden;
          min-height: 700px;
          border-radius: 28px;
          background: #111;
        }

        .blog-featured-card img {
          width: 100%;
          height: 700px;
          display: block;
          object-fit: cover;
        }

        .blog-featured-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,0.74) 0%,
              rgba(0,0,0,0.36) 45%,
              rgba(0,0,0,0.08) 75%
            );
        }

        .blog-featured-copy {
          position: absolute;
          left: 70px;
          bottom: 70px;
          max-width: 670px;
          color: white;
        }

        .blog-meta {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
          color: #86868b;
          font-size: 13px;
          font-weight: 550;
        }

        .blog-meta.light {
          color: rgba(255,255,255,0.7);
        }

        .blog-featured-copy h2 {
          margin: 0;
          color: white;
          font-size: clamp(42px, 5vw, 70px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .blog-featured-copy p {
          max-width: 560px;
          margin: 24px 0;
          color: rgba(255,255,255,0.8);
          font-size: 18px;
          line-height: 1.5;
        }

        .blog-read-link {
          color: white;
          font-size: 17px;
          font-weight: 500;
        }

        /* POSTS */

        .blog-posts-section {
          padding: 160px 0;
          background: #f5f5f7;
        }

        .blog-section-heading {
          margin-bottom: 80px;
        }

        .blog-section-heading h2,
        .blog-philosophy h2,
        .blog-closing h2 {
          margin: 0;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 650;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px 30px;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
        }

        .blog-card-image-link {
          display: block;
        }

        .blog-card-image-wrap {
          overflow: hidden;
          border-radius: 22px;
          background: #ddd;
        }

        .blog-card-image-wrap img {
          width: 100%;
          height: 310px;
          display: block;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .blog-card:hover .blog-card-image-wrap img {
          transform: scale(1.025);
        }

        .blog-card-content {
          padding: 26px 4px 0;
        }

        .blog-card-title-link {
          color: inherit;
          text-decoration: none !important;
        }

        .blog-card-content h3 {
          margin: 0;
          color: #1d1d1f;
          font-size: 29px;
          line-height: 1.12;
          letter-spacing: -0.04em;
          font-weight: 600;
        }

        .blog-card-content > p {
          margin: 20px 0;
          color: #6e6e73;
          font-size: 16px;
          line-height: 1.55;
        }

        .blog-inline-link {
          color: #0066cc !important;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none !important;
        }

        /* PHILOSOPHY */

        .blog-philosophy {
          padding: 180px 0;
          background: #000;
          color: #f5f5f7;
        }

        .blog-section-label.light {
          color: #86868b;
        }

        .blog-philosophy h2 {
          color: #f5f5f7;
        }

        .blog-philosophy h2 span {
          color: #86868b;
        }

        .blog-philosophy > .blog-shell > p:last-child {
          max-width: 720px;
          margin: 50px 0 0;
          color: #a1a1a6;
          font-size: 22px;
          line-height: 1.55;
        }

        /* RECOMMENDATIONS */

        .blog-recommendations {
          padding: 170px 0;
          background: #fff;
        }

        .blog-recommendation-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .blog-recommendation {
          color: inherit !important;
          text-decoration: none !important;
        }

        .blog-recommendation-image {
          overflow: hidden;
          border-radius: 22px;
          background: #f5f5f7;
        }

        .blog-recommendation-image img {
          width: 100%;
          height: 260px;
          display: block;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .blog-recommendation:hover img {
          transform: scale(1.025);
        }

        .blog-recommendation-copy {
          padding: 24px 3px 0;
        }

        .blog-recommendation-category {
          margin: 0 0 10px !important;
          color: #6e6e73 !important;
          font-size: 13px !important;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .blog-recommendation-copy h3 {
          margin: 0 0 15px;
          color: #1d1d1f;
          font-size: 29px;
          letter-spacing: -0.035em;
          font-weight: 600;
        }

        .blog-recommendation-copy > p {
          margin: 0 0 18px;
          color: #6e6e73;
          font-size: 16px;
          line-height: 1.55;
        }

        .blog-recommendation-copy span {
          color: #0066cc;
          font-size: 16px;
          font-weight: 500;
        }

        /* CLOSING */

        .blog-closing {
          padding: 170px 0;
          background: #f5f5f7;
        }

        .blog-closing h2 span {
          color: #86868b;
        }

        .blog-closing-links {
          display: flex;
          gap: 36px;
          margin-top: 50px;
        }

        .blog-closing-links a {
          color: #0066cc;
          font-size: 20px;
          font-weight: 500;
          text-decoration: none;
        }

        /* FOOTER */

        .blog-footer {
          padding: 35px 0 45px;
          background: #f5f5f7;
          border-top: 1px solid #d2d2d7;
        }

        .blog-footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: #6e6e73;
          font-size: 13px;
        }

        .blog-footer-inner div {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .blog-footer a {
          color: #424245;
          text-decoration: none;
        }

        .blog-footer a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {

          .blog-grid,
          .blog-recommendation-grid {
            grid-template-columns: 1fr;
          }

          .blog-card-image-wrap img,
          .blog-recommendation-image img {
            height: auto;
            aspect-ratio: 16 / 10;
          }

        }

        @media (max-width: 768px) {

          .blog-shell {
            width: calc(100% - 42px);
          }

          .blog-wide {
            width: calc(100% - 24px);
          }

          .blog-hero {
            padding: 150px 0 100px;
          }

          .blog-hero h1 {
            font-size: clamp(56px, 16vw, 80px);
          }

          .blog-featured {
            padding-bottom: 100px;
          }

          .blog-featured-card,
          .blog-featured-card img {
            min-height: 650px;
            height: 650px;
          }

          .blog-featured-overlay {
            background:
              linear-gradient(
                0deg,
                rgba(0,0,0,0.82) 0%,
                rgba(0,0,0,0.16) 75%
              );
          }

          .blog-featured-copy {
            left: 28px;
            right: 28px;
            bottom: 35px;
          }

          .blog-posts-section,
          .blog-philosophy,
          .blog-recommendations,
          .blog-closing {
            padding: 110px 0;
          }

          .blog-section-heading {
            margin-bottom: 55px;
          }

          .blog-closing-links {
            flex-direction: column;
            gap: 18px;
          }

          .blog-footer-inner {
            flex-direction: column;
          }

        }

      `}</style>
    </>
  );
}

export default BlogPosts;
