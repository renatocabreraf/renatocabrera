import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

function Servicios() {
  const cintilloText = "100% Kind 100% Mind";

  return (
    <>
      {/* Cintillo superior */}
      <div
        style={{
          backgroundColor: "white",
          color: "grey",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: "14px",
          padding: "5px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            
          }}
        >
          {Array(20).fill(cintilloText).join(" - ")}
        </div>
        <style>{`
          @keyframes scroll-left {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>

      {/* Contenido central */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 0",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            {/* Columna izquierda: Imagen */}
            <Col
              xs="12"
              md="6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="Sticker principal"
                src="https://cdn.kindmindgt.com/assets/img/sticker2.png"
                style={{
                  width: "80%",
                  maxWidth: "300px", // Limita el tamaño máximo
                  borderRadius: "10px", // Bordes redondeados
                }}
              />
            </Col>

            {/* Columna derecha: Texto */}
            <Col
              xs="12"
              md="6"
              style={{
                padding: "20px",
                color: "#1c1862",
              }}
            >
              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.8rem)",
                  fontWeight: "900", // Aumenta el grosor de las letras
                  color: "#1c1862", // Color sólido
                }}
              >
                Si se resuelve el problema cuando ya es problema, vamos tarde.
              </p>
              <Button
                style={{
                  backgroundColor: "#fc71f0", // Rosado por defecto
                  border: "2px solid #fc71f0",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "30px", // Bordes redondeados
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#fc71f0";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#fc71f0";
                  e.target.style.color = "white";
                }}
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cHr6QweJLZXKEm2eIutWH2S1pB82Slw77iLFpLu6LIx3c5Pz57zto3PMwFIHf2-8bh1Anq4NN"
                target="_blank"
                aria-label="Agendar reunión"
              >
               Solo Llámanos
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Cintillo inferior */}
      <div
        style={{
          backgroundColor: "white",
          color: "grey",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: "14px",
          padding: "5px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            
          }}
        >
          {Array(20).fill(cintilloText).join(" - ")}
        </div>
      </div>
    </>
  );
}

export default Servicios;
