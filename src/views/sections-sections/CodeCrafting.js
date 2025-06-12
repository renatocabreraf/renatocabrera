import React from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import { Link } from "react-router-dom";

function PulseViews() {
  return (
    <>
      <ScrollTransparentNavbar />

      <section style={{ backgroundColor: "#f8f9fa", padding: "160px 0" }}>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 style={{ fontWeight: "bold", fontSize: "2.5rem", marginBottom: "20px" }}>Hagamos un mejor mundo para todos</h2>
              <p style={{ fontSize: "18px", color: "#666", maxWidth: "700px", margin: "auto" }}>
                Mi compromiso con el desarrollo tecnológico me ha llevado a estudiar y comprender de manera más profunda
                a la sociedad. Guatemala es mi punto de partida, pero quisiera poder llegar a todas partes en donde se necesite
                y pueda brindar mi ayuda y conocimientos.
              </p>
            </Col>
          </Row>

          <Row style={{ marginTop: "60px", alignItems: "center" }}>
            <Col md="6">
              <h3 style={{ fontSize: "1.75rem", color: "#333" }}>Esta formación, cambió mi vida</h3>
              <p style={{ fontSize: "16px", color: "#555" }}>
                Desde el año 2006, mi vida encontró rumbo bajo la luz del carisma salesiano. Fue en los pasillos del Colegio Salesiano Don Bosco donde empecé a descubrir no solo el conocimiento académico, sino también un estilo de vida guiado por valores, fe y servicio. Ahí no solo aprendí matemáticas, ciencia o lenguaje; aprendí lo que significa ser honesto, trabajador, compasivo, y profundamente humano. Cada maestro, cada consejo, cada Eucaristía, fueron sembrando en mí una semilla que con el tiempo florecería en compromiso y vocación.

                Gracias al esfuerzo constante y a la formación que me inculcaron, fui bendecido con una beca universitaria que me permitió continuar mis estudios superiores en Ingeniería en Informática y Sistemas. Esta oportunidad no solo transformó mi realidad personal y profesional, sino que reforzó en mí la certeza de que la educación es una de las herramientas más poderosas para cambiar vidas. Fue entonces cuando comprendí que no podía quedarme con los dones recibidos, sino que estaba llamado a multiplicarlos.

                Inspirado por el sueño de San Juan Bosco, decidí continuar este camino formándome como Salesiano Cooperador. Hoy, mi vocación va mucho más allá de lo profesional: es un compromiso de vida. Acompañar a niños y jóvenes, escucharlos, orientarlos y caminar junto a ellos en sus luchas y esperanzas se ha vuelto parte de mi esencia. Me esfuerzo por aplicar el Sistema Preventivo como una forma de educar con amor, razón y religión.

                Cada chico que cruza mi camino es un recordatorio de que estamos llamados a ser faros en medio de sus tormentas. Mi misión es guiarlos con ternura y firmeza, acompañarlos en sus procesos, y ser testimonio de que los sueños sí se pueden alcanzar cuando hay alguien que cree en ti. Como Don Bosco decía: “La educación es cosa del corazón”, y hoy, con gratitud y alegría, puedo decir que mi corazón late al ritmo del carisma salesiano.

              </p>
            </Col>
            <Col md="6" className="text-center">
              <img
                src={require("assets/img/regalos.jpg")}
                alt="Desarrollo"
                style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              />
            </Col>
          </Row>

          <Row style={{ marginTop: "60px", alignItems: "center", flexDirection: "row-reverse" }}>
            <Col md="6">
              <h3 style={{ fontSize: "1.75rem", color: "#333" }}>El valor de la Educación</h3>
              <p style={{ fontSize: "16px", color: "#555" }}>
                Mi mayor anhelo es poder contribuir, desde donde me encuentre, al fortalecimiento de la educación en mi país. Estoy convencido de que Guatemala no necesita héroes solitarios, sino profesionales comprometidos, decididos a poner sus talentos al servicio de los demás. Cada uno de nosotros, desde su trinchera, puede ser parte de un cambio verdadero, y la educación es, sin duda, el terreno más fértil para sembrar esperanza.

                Con esa visión clara, y movido por el carisma salesiano que ha marcado mi vida, hemos unido esfuerzos con el Oratorio Don Bosco para impulsar un programa que va más allá del simple apoyo económico. Como Coordinador del Centro Local Don Bosco de los Salesianos Cooperadores, y junto a mis hermanos de vocación, hemos diseñado una iniciativa que busca acompañar con dedicación y cercanía a los estudiantes becados por el Oratorio. No solo les brindamos ayuda financiera para que puedan continuar sus estudios, sino que también les ofrecemos seguimiento académico, orientación y acompañamiento personal. Nos aseguramos de que no caminen solos, de que sientan que hay alguien que cree en ellos, que les apoya, que les escucha.

                Además, extendemos nuestra ayuda a cualquier alumno del Oratorio que lo necesite. Ya sea un cuaderno, una mochila, útiles escolares, zapatos o víveres: si lo piden, buscamos la forma de conseguirlo. Gestionamos fondos, buscamos donaciones, tocamos puertas. Porque creemos que ningún niño o joven debería detener su educación por falta de recursos. Creemos que cada historia vale la pena ser acompañada, y cada necesidad atendida con dignidad.

                Este sueño no es solo mío. Es un sueño compartido, una respuesta comunitaria al llamado de Don Bosco: amar a los jóvenes, educarlos y caminar con ellos, especialmente con los más pobres y necesitados. Porque transformar una vida, es empezar a transformar el país.
              </p>
            </Col>
            <Col md="6" className="text-center">
              <img
                src={require("assets/img/oratorio.jpg")}
                alt="Consultoría"
                style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              />
            </Col>
          </Row>

          <Row style={{ marginTop: "60px", alignItems: "center" }}>
            <Col md="6">
              <h3 style={{ fontSize: "1.75rem", color: "#333" }}>¿Cómo puedes apoyar?</h3>
              <p style={{ fontSize: "16px", color: "#555" }}>
                Si tu deseo es apoyar estos proyectos, por favor, contacta conmigo, y estaré muy feliz de poder indicarte
                cómo puedes ser parte de este sueño.
                <br />
                Escribe a <a href="mailto:rc@renatocabrera.com" style={{ color: "#0078d4", textDecoration: "underline" }}>
                  rc@renatocabrera.com
                </a>
                <br />
                Estaré esperando tu mensaje, muchas gracias.
              </p>
            </Col>
            <Col md="6" className="text-center">
              <img
                src={require("assets/img/IMG_5445.JPG")}
                alt="Social"
                style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="site-footer">
        <div className="footer-links">
          <Link to="/about-us">Conóceme</Link>
          <Link to="/blog-posts">Blog</Link>
          <Link to="/social">Labor Social</Link>
        </div>
        <div className="footer-bottom">
          <Link to="/privacy">Política de Privacidad</Link>
          <Link to="/terms">Términos de uso</Link>
          <Link to="/contacto">Contáctame</Link>
          <span>© 2025 Renato Cabrera</span>
        </div>
      </footer>

      <style jsx>{`
        .navbar-container {
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 1000;
          background: linear-gradient(to right, #222, #111);
          padding: 0.5rem 1rem;
        }

        .navbar {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
        }

        .logo {
          height: 100px;
          width: 190px;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .menu-toggle {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: white;
          display: none;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-item {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
        }

        .nav-item:hover {
          text-decoration: underline;
        }

        .search-icon {
          background: none;
          border: none;
          font-size: 1.3rem;
          color: white;
        }

        .presentation-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .presentation-inner {
          position: relative;
          width: 100%;
          max-width: 1920px;
        }

        .presentation-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .presentation-overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 10px;
        }

        .presentation-box {
          color: black;
          text-decoration: none;
        }

        .presentation-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #444;
        }

        .presentation-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 10px 0;
        }

        .presentation-description {
          font-size: 1rem;
          color: #666;
        }

        .fade-in-text {
          opacity: 0;
          animation: fadeInText 1.2s ease-out forwards;
          animation-delay: 0.4s;
        }

        @keyframes fadeInText {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-highlight {
          padding: 60px 20px;
          text-align: center;
        }

        .text-highlight p {
          font-size: 1.6rem;
          color: #555;
          max-width: 800px;
          margin: auto;
          line-height: 1.6;
        }

        .inline-photo {
          height: 40px;
          width: auto;
          margin: 0 8px;
          vertical-align: middle;
          border-radius: 6px;
        }

        .featured-section {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding: 60px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .featured-left {
          flex: 1;
          min-width: 300px;
        }

        .featured-image-wrapper {
          position: relative;
        }

        .featured-image {
          width: 100%;
          border-radius: 12px;
        }

        .featured-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 8px;
        }

        .featured-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          color: #444;
        }

        .featured-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 10px 0;
        }

        .featured-description {
          font-size: 1rem;
          color: #666;
        }

        .featured-right {
          flex: 1;
          min-width: 300px;
        }

        .mini-featured-image {
          width: 100%;
          border-radius: 8px;
          margin-top: 20px;
        }
          .site-footer {
  background-color: #f5f5f5;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #555;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.footer-links,
.footer-bottom {
  margin-bottom: 20px;
}

.footer-links a,
.footer-bottom a {
  color: #333;
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-bottom a:hover {
  color: #0078d4; /* azul sobrio como en Gates Notes */
  text-decoration: underline;
}

.footer-bottom span {
  display: block;
  margin-top: 10px;
  color: #999;
}

      `
      }</style>
    </>
  );
}

export default PulseViews;
