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
            backgroundImage: "/assets/img/b4.jpg)"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <img src="/assets/img/b4.png"></img>
              <h1 className="title">Desarrollamos el Éxito</h1>
              <h4>
                Convertimos tu idea en una realidad, impulsamos el desarrollo de tu negocio.
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default PulseHeader;
