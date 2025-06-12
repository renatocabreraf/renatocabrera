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
import VistaHeader from "components/Headers/VistaHeader";
import Footer from "components/Footers/Footer.js";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

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
      <div className="wrapper">

        <div >
          <br/>
          <br/>
          <br/>
          <div >
            <div className="features-3">

              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">La juventud es la clave del desarrollo de las sociedades</h2>
                    <h4 >
                      Acompáñame a conocer cómo puedes ayudar a forjar una mejor sociedad, tomando a la niñez como punto de partida.
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
                  <Col md="12">
                    <p>
                      Cuando pensamos en el desarrollo de una nación, solemos dirigir la mirada hacia las grandes decisiones políticas, las reformas económicas o los avances tecnológicos. Pero hay un pilar que, aunque silencioso a veces, sostiene el verdadero cambio a largo plazo: la juventud. Más aún, si retrocedemos un paso, veremos que todo empieza desde la niñez, ese momento crucial donde se forjan los valores, la identidad y los sueños.

                      Guatemala es un país joven: más del 60% de su población tiene menos de 30 años. Este dato no es menor. Es un llamado a actuar, a invertir no solo recursos, sino tiempo, presencia y vocación en aquellos que mañana decidirán el rumbo de nuestras comunidades. Pero, ¿cómo podemos hacerlo? ¿Qué rol juega cada uno de nosotros? ¿Y cómo convertir esta estadística en una oportunidad histórica?
                    </p>
                    <img src={require("assets/img/nena.png")} width={"700px"}></img>
                  </Col>

                </Row>
                <br />
                <Row>
                <Col md="6">
                  <h3>
                    La educación como Cimiento
                  </h3>
                  <p>
                    En mi propia historia, la educación fue la puerta que me permitió imaginar un futuro diferente. Gracias a una beca otorgada por mi esfuerzo y buenas calificaciones, pude estudiar Ingeniería en Informática y Sistemas en la universidad que quería, algo que, en otras circunstancias, habría sido inalcanzable. Pero esa beca no solo fue una ayuda económica: fue un acto de fe, una muestra de que alguien creía en mí, de que mi futuro valía la pena.
                    En Guatemala, cientos de niños y jóvenes abandonan sus estudios por falta de recursos, desmotivación o entornos familiares frágiles. Romper este ciclo implica algo más que construir escuelas: implica acompañar, formar, escuchar, ser presencia. El conocimiento técnico es importante, sí, pero lo es aún más el acompañamiento humano, la educación en valores y el ejemplo vivo.
                    Por eso, es indispensable que se promuevan programas de apoyo directo a niños y jóvenes. 
                  </p>
                </Col>
                <Col md="6">
                  <h3>
                    El papel de la comunidad y la corresponsabilidad
                  </h3>
                  <p>
                    Uno de los errores más comunes es pensar que el desarrollo de un niño es responsabilidad únicamente de sus padres o de las instituciones educativas. La realidad es que todos somos responsables. Cada profesional, cada empresario, cada ciudadano puede ser parte activa de la construcción de oportunidades. Desde donar útiles escolares hasta ofrecer mentorías o becas, cada acción suma.

                    En nuestras iniciativas, también apoyamos necesidades concretas: si un niño necesita una mochila, zapatos, cuadernos o incluso alimentos, gestionamos fondos o donaciones para cubrirlo. Porque sabemos que ningún niño puede concentrarse en aprender con hambre, frío o inseguridad. Nuestra labor es sencilla pero poderosa: responder cuando alguien pide ayuda.
                  </p>
                </Col>
                <Col md="12">
       <img src={require("assets/img/niños.png")} width={"500px"}></img>
       <br/><br/>
                  <p>
                   Guatemala no se construirá con grandes discursos ni con promesas vacías. Se construirá con decisiones cotidianas, con compromiso, con entrega. Se construirá cuando dejemos de ver a la niñez y la juventud como una carga o un número, y empecemos a verlos como lo que realmente son: la semilla del futuro que soñamos.

Tú también puedes formar parte de este cambio. Puedes apoyar económicamente, donar tu tiempo, compartir tus conocimientos o simplemente ser un adulto significativo en la vida de un joven. Acompañar, formar, inspirar.

Porque cuando se transforma una vida, se transforma una familia. Y cuando se transforma una familia, se transforma una comunidad. Y así, poco a poco, se transforma un país entero.

La juventud es la clave. La niñez es el comienzo. Y tú, estés donde estés, puedes ser parte de este sueño.
                  </p>
                  
                </Col>
                </Row>
                
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>


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
