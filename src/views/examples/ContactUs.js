import React from "react";
import { useAlert } from 'react-alert'
import axios from 'axios';
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import Footer from "components/Footers/Footer.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";
import FooterBlack from "components/Footers/FooterBlack";

function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const alert = useAlert()
  const handleSubmit = (e) => {
    axios.post('https://mw275xspoi.execute-api.us-east-2.amazonaws.com/default/SendContactEmail', {senderName: name, senderEmail:email, senderPhone:number , message: message})
      .then(response => {
        response.status === 200 ? alert.show("Mensaje enviado correctamente") : alert.show("Ha ocurrido un error al enviar el mensaje");
          return response.data;      
      })
      .catch(error => {
        console.log(error.response);
        alert.show("Lo sentimos, el mensaje no pudo ser enviado");
      })
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
    e.preventDefault();
  }

  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Envíanos un mensaje</h2>
                  <p className="description">
                    Ponte en contacto con mi equipo, será un placer poder estar en comunicación contigo. <br></br>
                    
                  </p>
                  <h3><a href="mailto:rc@renatocabrera.com" style={{ color: "black" }}>
                  rc@renatocabrera.com
                </a></h3>
                <h5>Contacta con  <img
                  src={require("assets/img/Imagotipo Horizontal_Vivid Blue.png")} // Usa tu foto aquí
                 
                  style={{
                    
                  
                    width: '100px',
                  }}
                /> si necesitas ayuda tecnológica con tu empresa</h5>
                <h6><a href="mailto:info@kindmindgt.com" style={{ color: "black" }}>
                  info@kindmindgt.com
                </a></h6>
                <h6><a href="www.kindmindgt.com" style={{ color: "black" }}>
                  www.kindmindgt.com
                </a></h6>
                <img
                  src={require("assets/img/IMG_5451.JPG")} // Usa tu foto aquí
                  alt="Autor"
                  style={{
                    
                  
                    marginRight: '10px',
                  }}
                />
                </Col>
                <Col className="ml-auto mr-auto" md="5"
              >
                  <div className="info info-horizontal mt-5">
                    <div className="icon icon-info">
                      <i className="now-ui-icons business_bulb-63"></i>
                    </div>
                    <div className="description"
                    >
                      <h4 className="info-title"
                      >Agenda una Cita conmigo</h4>
                      <h5
                      >
                        Si necesitas alguna Asesoría o Consultoría, puedes contactarme por medio de correo electrónico y agendar una cita conmigo.
                      </h5>
                      <h6><a href="https://calendar.app.google/KMwKDykx7d7SRrYq9" style={{ color: "black" }}>Haz clic aquí</a></h6>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">¿Tienes una pregunta? Ponte en contacto con nosotros</h4>
                      <p>
                        info@kindmindgt.com <br></br>
               
                        Lunes - Domingo, 9:00-22:00
                        +502 4751-6077
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="business_briefcase-24 now-ui-icons"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Ficha de Negocio</h4>
                      <p>
                        Kind Mind Technologies, Sociedad Anónima. <br></br>
                        NIT: 120340747 <br></br>
                        Ciudad de Guatemala <br></br>
                       
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: "#929292", padding: "20px 0" }}>
            <Container fluid>
              <Row>
                <Col
                  md="4"
                  xs="12"
                  style={{
                    display: "flex",
                    
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    gap: "20px",
                  }}
                >
                  <span>info@kindmindgt.com</span>
                  
                </Col>
                <Col
                  md="4"
                  xs="12"
                  style={{
                    display: "flex",
                    
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    gap: "20px",
                  }}
                >
                  
                  <a
                    href="https://wa.me/50247516077?text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Tel: +502 4751-6077
                  </a>
                </Col>
                <Col
                  md="4"
                  xs="12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                    flexWrap: "wrap",
                    paddingTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/company/92917090/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-linkedin"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                        borderRight: "2px solid darkblue",
                        paddingRight: "10px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61569560279035"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-facebook"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                        borderRight: "2px solid darkblue",
                        paddingRight: "10px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/kindmindgt"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-instagram"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                        borderRight: "2px solid darkblue",
                        paddingRight: "10px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.tiktok.com/@kindmindgt"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-tiktok"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                      }}
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <FooterBlack />
      </div>
    </>
  );
}

export default ContactUs;

