import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";

function BlogPosts() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <BlogPostsHeader />
        <div className="projects-4">
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/libre.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/5lecturas" >
                          Las 5 Lecturas que han ayudado a formarme como profesional.
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Renato Cabrera
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          June 9, 2025
                        </span>
                      </div>
                      <div className="stats-link pull-right">

                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="3">
                <Card className="card-fashion">
                  <CardTitle tag="div">
                    <h4>
                      <a href="juventud" 
                      >
                        La juventud es la clave del desarrollo de las sociedades.
                      </a>
                    </h4>
                  </CardTitle>
                  <CardBody>
                    <CardFooter>
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Renato Caberera
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          June 9, 2025
                        </span>
                      </div>

                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="3">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/comunion.jpg") + ")"
                  }}
                ></Card>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="3">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/apple.jpg") + ")"
                  }}
                ></Card>
              </Col>
              <Col className="px-0" md="3">
                <Card className="card-fashion arrow-left">
                  <CardTitle tag="div">
                    <h4>
                      <a href="/saludmental" >
                        La importancia de cuidar la Salud Mental.
                      </a>
                    </h4>
                  </CardTitle>
                  <CardBody>
                    <CardFooter>
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Renato Cabrera
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          May 20, 2025
                        </span>
                      </div>

                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/code.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Si no sabes programar, serás un analfabeta... ¿o no?
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Renato Cabrera
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          May 2, 2025
                        </span>
                      </div>

                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="main">
          <Container>
            <div className="section">
              <h3 className="title text-center">
                Tal vez te interese conocer
              </h3>
              <br></br>
              <Row>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="http://www.kindmindgt.com" target="_blank" rel="noopener noreferrer">
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/IMG_5451.JPG")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-info">Empresa</h6>
                      <CardTitle tag="h4">
                        <a href="http://www.kindmindgt.com" target="_blank" rel="noopener noreferrer">
                          Kind Mind
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Empresa fundada y dirigida por Renato Cabrera, dedicada al desarrollo de software,
                        consultorías y asesorías, además de proyectar un desarrollo tecnológico para Guatemala
                        en todas las industrias.{" "}
                        <a href="http://www.kindmindgt.com" target="_blank" rel="noopener noreferrer">
                          Conoce Más.
                        </a>
                      </p>
                      <div className="author">

                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="http://www.anima.gt" target="_blank" rel="noopener noreferrer">
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/anima3.png")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-success">Salud Mental</h6>
                      <CardTitle tag="h4">
                        <a href="http://www.anima.gt" target="_blank" rel="noopener noreferrer">
                          Anima
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Anima es un espacio de psicología dedicado al bienestar emocional y el crecimiento personal.
                        Queremos ayudar a las personas a reconectar con ellas mismas y construir una vida con sentido.{" "}
                        <a href="http://www.anima.gt" target="_blank" rel="noopener noreferrer">
                          Conoce Más.
                        </a>
                      </p>

                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="https://www.nukunem.org/home" target="_blank" rel="noopener noreferrer">
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/nukunem4.png")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-danger">
                        {" "}
                        Fundación
                      </h6>
                      <CardTitle tag="h4">
                        <a href="https://www.nukunem.org/home" target="_blank" rel="noopener noreferrer">
                          Nukunem
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Contribuimos a cambiar positivamente la realidad de Guatemala a través de la construcción de un programa comunitario de salud integral.
                        Nukunem, en k’aqchikel, significa “programar”.{" "}
                        <a href="https://www.nukunem.org/home" target="_blank" rel="noopener noreferrer">
                          Conoce Más
                        </a>
                      </p>

                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>

          <footer className="site-footer">
            <div className="footer-links">
              <Link to="/conoce">Conóceme</Link>
              <Link to="/blog-posts">Blog</Link>
              <Link to="/social">Labor Social</Link>

            </div>

            <div className="footer-bottom">
              <Link to="/privacy">Política de Privacidad</Link>
              <Link to="/terms">Términos de uso</Link>
              <Link to="/contacto">Contáctame</Link>
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
        </div>

      </div>
    </>
  );
}

export default BlogPosts;
