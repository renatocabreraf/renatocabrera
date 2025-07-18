import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  link,
  Row,
  Col
} from "reactstrap";

// core components
import PulseHeader from "components/Headers/GeniusCloudHeader";
import Footer from "components/Footers/Footer.js";
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar';

function PulseViews() {
  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <br/> <br/>
      <div >
       
        <Container>
          <Row>
            <Col className="mr-auto ml-auto" md="8">
              <h2 className="title">La salud mental: una urgencia silenciosa que ya no puede esperar</h2>
              <p>
                Durante décadas, el concepto de “salud” estuvo ligado casi exclusivamente al cuerpo. Se hablaba de enfermedades, prevención física, alimentación, vacunas… pero se ignoraba, o se relegaba a un segundo plano, aquello que no podía verse ni medirse con un termómetro: la salud mental. Afortunadamente, esa visión ha comenzado a cambiar. Sin embargo, el ritmo de ese cambio aún es lento, especialmente en países como Guatemala, donde los estigmas, el desconocimiento y la falta de recursos continúan dejando a miles de personas sin el acompañamiento emocional que necesitan.

                Hablar de salud mental no es una moda. Es una necesidad urgente. Es reconocer que la mente, las emociones y el equilibrio interior son tan importantes como el corazón, los pulmones o los músculos. Porque una persona emocionalmente herida, ansiosa, deprimida o sin sentido de vida no puede rendir igual en el trabajo, en la escuela, en su familia ni consigo misma.
              </p>
              <div style={{ alignItems: 'center', marginBottom: '20px' }}>
                <img
                  src={require("assets/img/rostro.png")} // Usa tu foto aquí
                  alt="Autor"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                <span style={{ fontSize: '14px', color: '#333' }}>
                  Por <strong>Renato Cabrera</strong> publicado en <time dateTime="2025-05-20">Martes, Mayo 20, 2025</time>
                </span>

              </div>
            </Col>
          </Row>
          <Row>

            <img></img>
            <Col md="6">
              <h2>¿Qué es la salud mental?</h2>
              <p>
                La Organización Mundial de la Salud (OMS) define la salud mental como un “estado de bienestar en el cual el individuo es consciente de sus propias capacidades, puede afrontar las tensiones normales de la vida, trabajar de forma productiva y contribuir a su comunidad”.

                Esto implica que la salud mental no es solo la ausencia de trastornos como la depresión o la ansiedad, sino la presencia de equilibrio emocional, resiliencia, autoestima y relaciones saludables.

                En otras palabras, tener buena salud mental es:

                Ser capaz de gestionar las emociones (positivas y negativas).
                Afrontar crisis y frustraciones con herramientas internas sanas.
                Tener vínculos estables y empáticos.
                Sentir que la vida tiene sentido y dirección.
                Buscar ayuda cuando uno no puede más.
              </p>
            </Col>

            <Col md="6">
              <img src={require("assets/img/prof.png")} width={"500px"} style={{
                marginRight: '10px',
              }}></img>
            </Col>
            <Col md="6">
              <img src={require("assets/img/med.png")} width={"500px"} style={{
                marginRight: '10px',
              }}></img>
            </Col>

            <Col md="6">
              <h2>¿Por qué es tan importante?</h2>
              <p>
                La salud mental afecta cada dimensión de nuestra vida: nuestras decisiones, relaciones, rendimiento académico, productividad laboral y calidad de vida. Cuando una persona tiene problemas emocionales no resueltos, todo su entorno se ve afectado.

                Una mente agobiada puede enfermar el cuerpo. Una emoción reprimida puede transformarse en agresividad, aislamiento o adicciones. Una infancia sin atención emocional puede convertirse en una adultez marcada por relaciones tóxicas, inseguridades y miedo al fracaso.

                Desde una perspectiva social, ignorar la salud mental es una receta para el estancamiento. No se puede construir una sociedad sana con personas emocionalmente rotas. Por eso, invertir en bienestar emocional no es un lujo, es una base esencial para el desarrollo humano sostenible.
              </p>
            </Col>
            <Col md="6">
              <h2>El caso de Guatemala</h2>
              <p>
                En Guatemala, como en muchos países de América Latina, hablar de salud mental sigue siendo un desafío cultural. La atención psicológica se asocia erróneamente con debilidad, locura o problemas graves. Muchos aún creen que ir al psicólogo es solo para quienes “no pueden solos” o están “mal de la cabeza”.

                Esto ha generado generaciones enteras que guardan su dolor, que no saben cómo pedir ayuda, que viven con ansiedad, tristeza o ira sin entender su origen. Y lo más preocupante: lo normalizan.

                Además, los servicios de salud mental en el sistema público son escasos, y en el ámbito privado pueden ser inaccesibles económicamente para gran parte de la población. A esto se suma la falta de formación emocional en las escuelas, donde el rendimiento académico se prioriza por encima del bienestar emocional de los estudiantes.
              </p>
            </Col>
            <Col md="6">
              <img src={require("assets/img/confes.png")} width={"1000px"} style={{

              }}></img>
            </Col>
            <Col md="12">
              <h2>La salud mental en la niñez y la juventud</h2>
              <p>
                Aquí es donde se hace urgente actuar. La niñez es la etapa donde se forman las bases emocionales de la vida. Un niño que crece con validación emocional, con adultos que lo escuchan, con espacios seguros para expresar sus miedos y frustraciones, será un adulto más resiliente, más seguro y más empático.

                Por eso, programas que acompañan a los jóvenes tienen un valor incalculable. No se trata solo de brindar educación académica, sino de educar el corazón. De formar personas con sentido de vida, con herramientas emocionales, con esperanza.

                En cada historia de vida que acompañamos, descubrimos que muchas veces lo que más transforma no es una clase ni una beca: es la presencia. Es el “estoy contigo”, el “te creo”, el “no estás solo”.
              </p>
            </Col>
            <Col md="12">
            <h2>¿Qué podemos hacer?</h2>
            </Col>
            <Col md="6">
              <h3>Como individuos:</h3>
              <p>Romper el estigma. Hablar de salud mental con naturalidad, sin vergüenza ni prejuicios.</p>
              <p>Buscar ayuda profesional. Ir al psicólogo no es debilidad; es responsabilidad emocional.</p>
              <p>Cuidar nuestros hábitos. Dormir bien, alimentarnos con conciencia, mover el cuerpo y desconectarnos del estrés son actos de autocuidado mental.</p>
              <p>Escuchar. Muchas veces, una conversación genuina puede salvar a alguien del abismo.</p>
              
            </Col>
            <Col md="6">
              <h3>Como comunidad:</h3>
              <p>Invertir en salud emocional desde la infancia. Incluir programas de educación emocional en las escuelas.</p>
              <p>Capacitar a maestros, líderes comunitarios y padres de familia en temas de prevención y acompañamiento emocional.</p>
              <p>Garantizar el acceso a servicios de salud mental públicos y privados.</p>
              <p>Promover redes de apoyo comunitarias, donde las personas puedan compartir sus luchas sin sentirse juzgadas.</p>
              
            </Col>
          </Row>
        </Container>


        <div className="separator-line bg-info"></div>


      </div>

<footer className="site-footer">
        <div className="footer-links">
          <Link to="/about-us">Conóceme</Link>
          <Link to="/blog-posts">Blog</Link>
          <Link to="/social">Labor Social</Link>

        </div>

        <div className="footer-bottom">
          <Link to="/politicas">Política de Privacidad</Link>
          <Link to="/presentation"> Home </Link>
          <Link to="/contact-us">Contáctame</Link>
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
