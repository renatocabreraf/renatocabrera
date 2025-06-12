import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function PulseHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/b4.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
            
              <h1 className="title">Las 5 Lecturas que han ayudado a formarme como profesional</h1>
              <h4>
                Una pequeña reflexión sobre el hábito de leer y su impacto en la vida laboral y personal.
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default PulseHeader;
