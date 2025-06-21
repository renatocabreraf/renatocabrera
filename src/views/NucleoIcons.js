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

function NucleoIcons() {
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
                  <Col className="mr-auto ml-auto" md="12">
                    <h2 className="title">Políticas de Privacidad</h2>
                    <h4 >
                      Última actualización: [20 de junio de 2025]
                      <br />
                      En renatocabrera.com, nos comprometemos a proteger y respetar tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información personal que puedes proporcionarnos a través del sitio web.
                    </h4>
    <br />
                    <h3>
                      Información que Recopilamos
                    </h3>
                    <h4>
                      Podemos recopilar y procesar la siguiente información:<br />

                      Datos de contacto: nombre, correo electrónico, número de teléfono (cuando llenas formularios de contacto o suscripción).<br />
                      Datos de navegación: dirección IP, tipo de navegador, ubicación geográfica, tiempo de visita y páginas vistas, a través de herramientas como Google Analytics o cookies.<br />
                      Otros datos que decidas compartir al comunicarte con nosotros por correo o por el formulario del sitio.<br />
                    </h4>
                        <br />
                    <h3>Finalidad del Tratamiento</h3>
                    <h4>
                      La información recopilada puede ser utilizada para:<br /><br />
                      - Responder consultas o solicitudes realizadas a través del sitio.<br />
                      - Enviar actualizaciones, noticias o contenido profesional (solo si das tu consentimiento).<br />
                      - Mejorar la experiencia del usuario y el rendimiento del sitio web.<br />
                      - Cumplir con obligaciones legales.
                    </h4>
                    <br />

                    <h3>Conservación de los Datos</h3>
                    <h4>
                      Tus datos personales serán conservados únicamente durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, salvo obligación legal que indique lo contrario.
                    </h4>
                    <br />

                    <h3>Compartición de Información</h3>
                    <h4>
                      No compartimos, vendemos ni alquilamos tus datos personales a terceros.<br />
                      Podemos usar servicios externos (como Google o proveedores de email marketing), los cuales pueden tener acceso limitado a tus datos únicamente para cumplir funciones específicas y bajo acuerdos de confidencialidad.
                    </h4>
                    <br />

                    <h3>Cookies y Tecnologías Similares</h3>
                    <h4>
                      Este sitio puede utilizar cookies para analizar el tráfico, personalizar contenido y mejorar tu experiencia de navegación.<br />
                      Puedes aceptar o rechazar las cookies desde la configuración de tu navegador.
                    </h4>
                    <br />

                    <h3>Tus Derechos</h3>
                    <h4>
                      Tienes derecho a:<br /><br />
                      - Acceder a tus datos personales.<br />
                      - Rectificar información incorrecta o desactualizada.<br />
                      - Solicitar la eliminación de tus datos.<br />
                      - Retirar tu consentimiento en cualquier momento.<br /><br />
                      Para ejercer cualquiera de estos derechos, puedes escribir a: contacto@renatocabrera.com
                    </h4>
                    <br />

                    <h3>Seguridad</h3>
                    <h4>
                      Adoptamos medidas razonables para proteger tu información personal contra pérdida, uso indebido, acceso no autorizado o divulgación.
                    </h4>
                    <br />

                    <h3>Cambios a esta Política</h3>
                    <h4>
                      Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento.<br />
                      Los cambios serán publicados en esta página con la fecha de actualización correspondiente.
                    </h4>
                    <br />
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

export default NucleoIcons;
