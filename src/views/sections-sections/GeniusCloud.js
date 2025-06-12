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
      <div >
          <br/><br/><br/><br/><br/>
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
                  <Col md="2"></Col><Col md="2"></Col>
                  
                  <Col md="4">
                  
                  </Col>
                </Row>
              </Container>
   
      
          <div className="separator-line bg-info"></div>


        </div>

    




      <Footer />
    </>
  );
}

export default PulseViews;
