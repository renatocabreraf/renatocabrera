import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

// core components

function BlogPostsHeader() {
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
            backgroundImage: "url(" + require("assets/img/yo2.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">
                Un espacio para conectar, con tecnología, noticias y el mundo.
              </h2>
              <a href="https://www.facebook.com/renatocabrera98/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-round btn-icon" color="info">
                  <i className="fab fa-facebook"></i>
                </Button>
              </a>
              <a href="https://instagram.com/renatocabreraf" target="_blank" rel="noopener noreferrer">
                <Button className="btn-round btn-icon" color="info">
                  <i className="fab fa-instagram"></i>
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogPostsHeader;
