import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

function BasicComponents() {
  const repeatedText = "hacemos fácil lo difícil - primer radiografía GRATIS";

  return (
    <>
      <div id="connect" style={{ padding: "20px", borderRadius: "5px" }}>
        {/* Fila con imagen */}
        <Row>
          <Col>
            
          </Col>
        </Row>

        {/* Cintillo animado */}
        <div
          style={{
            marginTop: "20px",
            overflow: "hidden", // Oculta contenido fuera del contenedor
            position: "relative",
            height: "80px",
            backgroundColor: "#0b24fa",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              animation: "scroll-left 25s linear infinite",
              fontSize: "44px",
              fontWeight: "bold",
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            {/* Contenido duplicado para continuidad */}
            <span style={{ paddingRight: "100px" }}>{repeatedText}</span>
            <span style={{ paddingRight: "100px" }}>{repeatedText}</span>
            <span style={{ paddingRight: "100px" }}>{repeatedText}</span>
          </div>
        </div>

        {/* Animación CSS */}
        <style>{`
          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default BasicComponents;
