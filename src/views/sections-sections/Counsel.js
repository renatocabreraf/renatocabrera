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
import PulseHeader from "components/Headers/CounselHeader";
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

        <div >
          <div >
            <div >
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Si no sabes programar, serás un analfabeta… ¿o no?</h2>
                    <h4 >
                      Una mirada crítica sobre el papel de la programación en el mundo moderno y qué significa realmente estar alfabetizado en la era digital.
                    </h4>
                  </Col>
                  <img src={require("assets/img/code2.png")} ></img>
                </Row>
                <Row>
                  <Col md="6">
                    <div >
                      <div >

                      </div>
                      <h4 className="info-title">Empezamos fuerte...</h4>
                      <p>
                        En los últimos años, una frase ha ganado popularidad entre líderes tecnológicos, emprendedores y educadores:
                        “Si no sabes programar, serás el analfabeta del siglo XXI.”

                        Esta declaración, poderosa y controversial, ha sido impulsada por el vertiginoso crecimiento de la industria tecnológica y por la manera en que el software ha transformado casi todos los aspectos de nuestra vida. Desde la forma en que nos comunicamos, aprendemos y trabajamos, hasta cómo compramos, nos entretenemos o cuidamos nuestra salud: la programación está detrás de todo.

                        Pero… ¿es cierto que quien no sabe programar quedará irremediablemente rezagado? ¿Es aprender código una necesidad universal como leer y escribir? ¿O estamos malinterpretando lo que significa estar verdaderamente alfabetizado en esta nueva era?
                      </p>


                    </div>
                  </Col>
                  <Col md="6">
                    <div >
                      <div >

                      </div>
                      <h4 className="info-title">El auge de la programación como herramienta</h4>
                      <p>
                        Aprender a programar, sin duda, ofrece ventajas inmensas. No solo abre las puertas a empleos bien remunerados y de alta demanda, sino que también enseña habilidades de pensamiento lógico, resolución de problemas, abstracción y estructuración de procesos.

                        Hoy existen miles de recursos accesibles, gratuitos y dinámicos para iniciarse en la programación: desde cursos de Python para principiantes hasta plataformas que enseñan a los niños a codificar jugando. Gobiernos, escuelas y empresas privadas impulsan programas de formación digital con la promesa de democratizar el acceso al conocimiento técnico.

                        En un mundo donde la automatización, la inteligencia artificial y la economía digital avanzan a pasos agigantados, no es descabellado pensar que quien no entienda cómo funciona la tecnología podría verse excluido de muchas oportunidades.
                      </p>
                      <br />

                    </div>
                  </Col>
                  <Col md="6">
                    <div >
                      <div >

                      </div>
                      <h4 className="info-title">Pero… ¿es programar la única forma de alfabetización digital?</h4>
                      <p>
                        Aquí es donde la conversación se vuelve más profunda. Porque si bien la programación es una herramienta poderosa, no es la única forma de participar activamente del mundo digital.

                        Alfabetización digital no significa necesariamente saber escribir código, sino entender cómo la tecnología afecta nuestras vidas, cómo usarla críticamente, cómo tomar decisiones informadas en un entorno lleno de algoritmos, plataformas e información.

                        Saber programar puede darte una ventaja, pero no garantiza por sí solo competencias como:<br />

                        - Evaluar la veracidad de la información en internet.<br />
                        - Proteger tu privacidad y datos personales.<br />
                        - Comprender el impacto ético de la inteligencia artificial.<br />
                        - Liderar equipos multidisciplinarios con pensamiento tecnológico.<br />
                        - Diseñar soluciones creativas que respondan a necesidades humanas.<br />
                        En otras palabras, puedes no ser programador, y aún así ser digitalmente alfabetizado. Y viceversa.
                      </p>
                      <br />

                    </div>
                  </Col>
                  <Col md="6">
                    <div >
                      <div >

                      </div>
                      <h4 className="info-title">El valor de lo humano en la era del código</h4>
                      <p>
                        Uno de los mayores errores del discurso “si no sabes programar, estás perdido” es que puede invisibilizar habilidades igual o más importantes: empatía, pensamiento crítico, comunicación, liderazgo, creatividad, diseño, arte, ética. Estas competencias son fundamentales para que la tecnología tenga sentido, dirección y propósito.

                        De hecho, algunos de los mejores productos tecnológicos no fueron creados por los mejores programadores, sino por equipos donde la diversidad de habilidades permitió construir algo útil, bello y transformador.

                        La tecnología no es el fin, es el medio. Programar, por sí solo, no cambia el mundo. Las ideas, los valores y las personas detrás del código, sí.
                      </p>

                      <img
                        src={require("assets/img/compu.jpg")}
                        width={400}
                        style={{ display: "block", margin: "0 auto" }}
                        alt="Imagen"
                      />
                    </div>
                  </Col>
                  <Col md="12">
                    <div >
                      <div >

                      </div>
                      <h4 className="info-title">El valor de lo humano en la era del código</h4>
                      <p>
                        Uno de los mayores errores del discurso “si no sabes programar, estás perdido” es que puede invisibilizar habilidades igual o más importantes: empatía, pensamiento crítico, comunicación, liderazgo, creatividad, diseño, arte, ética. Estas competencias son fundamentales para que la tecnología tenga sentido, dirección y propósito.

                        De hecho, algunos de los mejores productos tecnológicos no fueron creados por los mejores programadores, sino por equipos donde la diversidad de habilidades permitió construir algo útil, bello y transformador.

                        La tecnología no es el fin, es el medio. Programar, por sí solo, no cambia el mundo. Las ideas, los valores y las personas detrás del código, sí.
                      </p>
                    </div>
                  </Col>
                  <Col md="12">
                    <div >
                      <div >

                      </div>
                      <h4 className="info-title">Entonces, ¿debemos o no aprender a programar?</h4>
                      <p>
                        La respuesta no es un “sí” o un “no” rotundo. La clave está en el propósito.<br/>

                       - Si eres emprendedor, programar te da autonomía para prototipar ideas.<br/>
                       - Si eres educador, te permite innovar en tus métodos.<br/>
                       - Si trabajas en salud, gobierno, arte o industria, entender el lenguaje de las máquinas te ayuda a colaborar con quienes las construyen.<br/>
                       - Y si simplemente tienes curiosidad o deseas crecer profesionalmente, aprender a programar puede ser un acto de empoderamiento personal.<br/>
                       Pero si no deseas ser desarrollador, no estás condenado a la irrelevancia. El mundo necesita más que programadores: necesita pensadores, soñadores, constructores de puentes entre la tecnología y la vida.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>


        </div>
        <div className="separator-line bg-info"></div>

      </div>
<footer className="site-footer">
            <div className="footer-links">
              <Link to="/conoce">Conóceme</Link>
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
