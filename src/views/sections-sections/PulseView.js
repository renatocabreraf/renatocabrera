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
import PulseHeader from "components/Headers/PulseHeader.js";
import Footer from "components/Footers/Footer.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";

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
      <FixedTransparentNavbar />
      <div className="wrapper">
        <PulseHeader />
        <div >
          <div >
            <div >
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Leer también es cool.</h2>
                    <h4 >
                      Leer ha sido uno de los hábitos más transformadores que he cultivado. No se trata solamente
                      de adquirir conocimientos, sino de mirar el mundo desde nuevas perspectivas, cuestionar,
                      imaginar, construir. La lectura es, en muchos sentidos, una conversación íntima con mentes
                      brillantes, que nos ayuda a pulir la nuestra.
                      <br />
                      Estas cinco obras me han acompañado en diferentes etapas de mi camino y me han moldeado
                      tanto en lo profesional como en lo humano. Aquí comparto una reseña de cada una y cómo
                      me han impactado profundamente.
                    </h4>
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
                      Por <strong>Renato Cabrera</strong> publicado en <time dateTime="2025-06-09">Lunes, Junio 09, 2025</time>
                    </span>

                  </div>
                  </Col>
                  
                </Row>
                
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div>
                        <img src={require("assets/img/sj.webp")} width={"100px"}></img>
                      </div>
                      <h4 className="info-title">Steve Jobs – Walter Isaacson</h4>
                      <p >
                        Esta biografía autorizada de Steve Jobs es mucho más que una historia de éxito; es una exploración cruda, brillante y humana del genio detrás de Apple. Isaacson retrata a Jobs tal como fue: visionario, obsesivo con los detalles, apasionado hasta el extremo y, a la vez, profundamente complejo.
                        <br />
                        Por qué me impactó:<br />
                        Este libro me ayudó a comprender el valor de unir la tecnología con el arte, de crear desde la intuición y también desde la excelencia. En mi trabajo como ingeniero y líder de proyectos, he aprendido que no basta con que algo funcione; debe ser bello, funcional, útil y significativo. La figura de Jobs me enseñó que la pasión es el motor de la innovación y que no hay que tener miedo a romper lo establecido.
                      </p>
                    </div>

                  </Col>

                  <Col md="4">
                    <div className="info info-hover">
                      <div >
                        <img src={require("assets/img/md.webp")} width={"103px"}></img>
                      </div>
                      <h4 className="info-title">Minimalismo Digital – Cal Newport</h4>

                      <p >
                        En un mundo saturado por notificaciones y estímulos digitales, este libro fue una guía valiente para reconectar con lo esencial. Newport plantea un enfoque consciente del uso de la tecnología, donde se prioriza lo verdaderamente importante sobre la distracción constante.
                        <br />
                        Por qué me impactó:<br />
                        Aplicar el minimalismo digital ha sido clave para recuperar enfoque, reducir la ansiedad y mejorar mi productividad. Hoy gestiono mejor mi tiempo, elijo con más claridad qué herramientas utilizar y pongo límites saludables al mundo digital. Esto me ha ayudado a ser más presente, tanto en el trabajo como en mi vida personal.

                      </p>
                    </div>

                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div >
                        <img src={require("assets/img/ls.jpg.webp")} width={"98px"}></img>
                      </div>
                      <h4 className="info-title"> El Método Lean Startup – Eric Ries</h4>
                      <p >
                        Un clásico del emprendimiento moderno. Ries propone una metodología ágil para lanzar productos y negocios a partir de la validación constante, el aprendizaje iterativo y la adaptación rápida.
                        <br />
                        Por qué me impactó:<br />
                        Este libro me dio estructura para tomar decisiones inteligentes con pocos recursos. Lo aplico en cada proyecto que desarrollo: probar, aprender, corregir. Me enseñó que fallar rápido no es un error, sino una estrategia. Gracias a esta mentalidad, he podido liderar iniciativas tecnológicas con más confianza y flexibilidad, evitando caer en inversiones innecesarias.
                      </p>
                    </div>



                  </Col>
                  <Col md="6">
                    <div className="info info-hover">
                      <div >
                        <img src={require("assets/img/hooked.jpg")} width={"100px"}></img>
                      </div>
                      <h4 className="info-title"> Enganchado – Nir Eyal</h4>
                      <p >
                        Una guía brillante sobre cómo diseñar productos que no solo resuelven necesidades, sino que se integran en la rutina del usuario mediante hábitos.
                        <br />
                        Por qué me impactó:<br />
                        Me abrió los ojos al mundo del diseño conductual y cómo aplicar la psicología al desarrollo tecnológico. Entender el modelo de activación y recompensa me ha servido tanto en el diseño de software como en estrategias de fidelización. Aprendí que detrás de un producto exitoso hay una comprensión profunda del comportamiento humano.                      </p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-hover">
                      <div >
                        <img src={require("assets/img/tt.jpg.webp")} width={"95px"}></img>
                      </div>
                      <h4 className="info-title"> La Teoría del Todo – Stephen Hawking</h4>
                      <p >
                        Una obra que logra hacer accesibles los conceptos más complejos del universo, desde el Big Bang hasta los agujeros negros, con una narrativa sencilla, clara y profundamente inspiradora.                        <br />
                        Por qué me impactó:<br />
                        Me recordó que el conocimiento no tiene límites. Que la ciencia también puede ser poesía, y que la humildad ante el misterio del universo nos hace mejores profesionales y personas. Este libro me inspira a nunca dejar de aprender, de explorar, de cuestionar. En cada desafío laboral, intento tener esa mente abierta que Hawking promovía: buscar siempre la próxima frontera.                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>

          <Container >
            <Row>

              <Col className="text-center" md="12">
                <h2 className="title">¡Bonus! Mi saga favorita de Libros</h2>
                <img src={require("assets/img/darrenshan.jpg.webp")} width={"750px"}></img>
              </Col>

              <h4 className="info-title">Cirque du Freak - La Saga de Darren Shan</h4>
              <p >
                Cuando tenía entre 13 y 15 años, mi tía me regaló esta saga juvenil, y puedo decir sin exagerar que marcó un antes y un después en mi relación con la lectura. La historia gira en torno a Darren, un chico común que termina convirtiéndose en vampiro tras una serie de decisiones que lo alejan de su vida normal y lo sumergen en un mundo oscuro, mágico y lleno de dilemas morales.
                <br />Por qué me impactó:<br />
                Fue la primera vez que me sumergí completamente en una historia. Leí los libros de golpe, y luego los volví a leer más de una vez. Me atrapó su mundo, su ritmo, y sobre todo, los dilemas de crecimiento, lealtad y sacrificio. A esa edad, en plena adolescencia, los conflictos internos de Darren resonaban conmigo. Más allá de los vampiros, la saga hablaba de amistad, responsabilidad, pérdida y transformación.

                El hecho de que me los regalara mi tía le añade un valor emocional. Fue un acto de amor que sembró en mí el gusto por la lectura. Esa conexión entre libros, familia y adolescencia sigue siendo uno de los recuerdos más cálidos de mi vida. Y aunque hoy leo textos más técnicos o filosóficos, jamás olvido que fue la literatura juvenil la que encendió esa chispa.
              </p>
            </Row>
          </Container>
        </div>
        <div className="separator-line bg-info"></div>
        <div className="projects-5">

        </div>



      </div>
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
