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

function LandingPage() {
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
                    <h2 className="title">Mi pasión es contar historias.</h2>
                    <h4> Cada página que escribo es una ventana a mi forma de entender el mundo, la tecnología, el pensamiento crítico y la vida misma.<br /><br /> En esta sección encontrarás las obras que he publicado —proyectos nacidos de la experiencia, la pasión y la necesidad de compartir ideas que merecen ser contadas. Ya sea que exploren el impacto de la innovación tecnológica, la historia detrás de grandes mentes, o reflexiones sobre la condición humana, cada libro es una invitación a pensar, cuestionar y crecer.<br /><br /> Te invito a descubrirlos, hojear sus ideas, y, si resuenan contigo, hacerlos parte de tu propia historia. </h4> <br />
                  </Col>

                </Row>

                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div>
                        <img src={require("assets/img/chls.jpg")} width={"100px"}></img>
                      </div>
                      <h4 className="info-title">Carrera hacia los Sueños</h4>
                      <h5>
                        "Carrera hacia los Sueños" trata de contar, desde la perspectiva de un coleccionista, toda la historia de Hot Wheels, desde el inicio con los esposos Handler en Mattel, hasta los días actuales, detallando sucesos y contando mitos y leyendas de la marca. Es una lectura sencilla que busca reforzar el legado de Hot Wheels y poder contar a nuevos y viejos coleccionistas, como inició la marca y hacia donde va, apoyado de muchos recursos bibliográficos y audiovisuales, "Carrera hacia los Sueños" es el tipo de lectura que puede hacerte enamorar de los Hot Wheels.
                      </h5>
                    </div>
                    <h3 style={{ textAlign: "center" }}>Adquiérelo aquí</h3>
                    <Row className="justify-content-center">
                      <Col md="auto" className="mx-2">
                        <a href="https://www.amazon.com/Carrera-hacia-Sueños-Coleccionismo-Coleccionista/dp/B09TN1N5RR" target="_blank" rel="noopener noreferrer">
                          <img src={require("assets/img/amazon.svg.png")} alt="Disponible en Amazon" style={{ maxWidth: "100px" }} />
                        </a>
                      </Col>
                      <Col md="auto" className="mx-2">
                        <a href="https://app.recurrente.com/s/renato-cabrera-lei80y/carrera-hacia-los-suenos-hot-wheels-historia-curiosidades-y-coleccionismo" target="_blank" rel="noopener noreferrer"><img src={require("assets/img/Downloadable-Pdf-Button-Vector-PNG-Clipart-Background.png")} alt="Versión PDF" style={{ maxWidth: "100px" }} /></a>
                      </Col>
                      <br />     <br />     <br />
                    </Row>

                  </Col>

                  <Col md="4">
                    <div className="info info-hover">
                      <div>
                        <img src={require("assets/img/hs.png")} width={"97px"}></img>
                      </div>
                      
                      <h4 className="info-title">Hasta Siempre</h4>
                      
                      <h5>
                        Arthur y Madison no eran como los demás. Desde su encuentro en la secundaria de Mapplewood, Virginia, sus vidas se entrelazaron en una danza de amor, risas, y desafíos que los llevaría a recorrer un camino lleno de aventuras y adversidades. Su historia comienza con un plan audaz: un viaje épico por Estados Unidos, lleno de promesas, sueños y la fuerza de un amor capaz de desafiar cualquier obstáculo.

                        Mientras Madison lucha contra una leucemia devastadora, Arthur se convierte en su roca, abandonando todo para darle un último año lleno de vida, sorpresas y amor. 

                      </h5>
                    </div>
                    <h3 style={{ textAlign: "center" }}>Adquiérelo aquí</h3>
                    <Row className="justify-content-center">
                      <Col md="auto" className="mx-2">
                        <a href="https://www.amazon.com/-/es/Renato-Cabrera-ebook/dp/B0D7XLHMB5/ref=sr_1_1?__mk_es_US=ÅMÅŽÕÑ&crid=38RJC6C2YHX05&dib=eyJ2IjoiMSJ9.uCkawqlj13_U1Wh4EhPreQ.VP7ft3VIkqW3pJBtj4c-5A1Ja_u5DdOlaYCY-5lkjwA&dib_tag=se&keywords=hasta+siempre+renato+cabrera&qid=1750479538&s=books&sprefix=hasta+siempre+renato+cabrer%2Cstripbooks-intl-ship%2C154&sr=1-1" target="_blank" rel="noopener noreferrer">
                          <img src={require("assets/img/amazon.svg.png")} alt="Disponible en Amazon" style={{ maxWidth: "100px" }} />
                        </a>
                      </Col>
                      <Col md="auto" className="mx-2">
                        <a href="https://app.recurrente.com/s/renato-cabrera-lei80y/hasta-siempre" target="_blank" rel="noopener noreferrer"><img src={require("assets/img/Downloadable-Pdf-Button-Vector-PNG-Clipart-Background.png")} alt="Versión PDF" style={{ maxWidth: "100px" }} /></a>
                      </Col>
                      <br />     <br />     <br />
                    </Row>

                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div>
                        <img src={require("assets/img/comings.png")} width={"105px"}></img>
                      </div>
                      <br/><br/> <br/>
                      <h4>Próximamente</h4>
                      <h5> Prepárate para un viaje a través del tiempo, donde los circuitos, las ideas y las revoluciones digitales cobran vida. Muy pronto presentaré un libro que no solo narra la historia de la computación, sino que la analiza, la cuestiona y la conecta con el presente y el futuro.
                      Desde los pioneros de la informática hasta los titanes tecnológicos del siglo XXI, este libro explorará cómo la humanidad transformó la chispa de una idea en una red que conecta al mundo entero.
                      Si alguna vez te has preguntado cómo llegamos hasta aquí —o hacia dónde vamos— esta obra es para ti.<br/><br/> <strong>La historia no solo se cuenta. Se programa.</strong> </h5> <br/>
                    </div>
                    

                  </Col>

                </Row>
              </Container>
            </div>
          </div>

        </div>




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

export default LandingPage;
