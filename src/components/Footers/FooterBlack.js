/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer
        className="footer"
        style={{ backgroundColor: "#929292", padding: "20px 0",
          //padding: "1px", // Espaciado interno entre la línea y la sección
          marginTop: "1px", // Centrado horizontal y espacio superior/inferior
         }} // Fondo del mismo color que la imagen
      >
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
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <p
              style={{
                fontWeight: "bold",
                lineHeight: "1.5",
                fontSize: "clamp(1.5rem, 2.5vw, 3rem)", // Tamaño dinámico
              }}>Proyectos</p>
            </Col>
            <Col
            md="4"
            xs="12"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
             <p
              style={{
                fontWeight: "bold",
                lineHeight: "1.5",
                fontSize: "clamp(1.5rem, 2.5vw, 3rem)", // Tamaño dinámico
              }}>Expertos en:</p>
            </Col>

            <Col
              md="4"
              xs="12"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
             <a href="/about-us"> <img
                src="https://cdn.kindmindgt.com/assets/img/foot1.png"
                alt="Servicios"
                useMap="#iconMap"
                style={{
                  width: "90%", // Tamaño grande y responsivo
                  maxWidth: "800px",
                  height: "auto",
                }}
              /></a>
              <a href="/about-us"> <img
                src="https://cdn.kindmindgt.com/assets/img/foot2.png"
                alt="Servicios"
                useMap="#iconMap"
                style={{
                  width: "90%", // Tamaño grande y responsivo
                  maxWidth: "800px",
                  height: "auto",
                }}
              /></a>
              
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "white",
                fontSize: "0.9rem",
              }}
            >
              Copyright © {new Date().getFullYear()} Kind Mind Technologies, S.A.
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};


export default FooterBlack;
