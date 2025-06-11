import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import FixedTransparentNavbar from 'components/Navbars/FixedTransparentNavbar';
import Footer from 'components/Footers/Footer';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";


const initialPhotosData = [
  {

    id: 1,
    src: require("assets/img/km1.png"),
    modalImg: require("assets/img/km2.png"),
    title: 'Kind Mind',
    subtitle: 'CEO & Fundador',
    description:
      'Kind Mind es una empresa que nace con la finalidad de hacer fácil lo difícil, llegar a todas las industrias de Guatemala y resolver los problemas nacientes, encontrando soluciones de calidad y cuidar que el cliente entienda la tecnología y la haga su aliada',
    linkedin: 'https://www.linkedin.com/company/kind-mind-gt/?viewAsMember=true',
  },
  {
    id: 2,
    src: require("assets/img/q1.png"),
    modalImg: require("assets/img/q2.png"),
    title: 'Grupo R2C',
    subtitle: 'Coordinador de Informática y Sistemas',
    description:
      'Líder de área, encargado de la innovación y transformación tecnológica de la cadena de restaurantes Quedely.',
    linkedin: 'https://www.linkedin.com/company/quedely/posts/?feedView=all',
  },
  {
    id: 3,
    src: require("assets/img/c1.png"),
    modalImg: require("assets/img/c2.png"),
    title: 'Conduent',
    subtitle: 'IT Project Manager',
    description:
      'Dirigir el proyecto de Global Roaster para Royal Caribbean y Aetna.',
    linkedin: 'https://www.linkedin.com/company/conduent/posts/?feedView=all',
  },
  {
    id: 4,
    src: require("assets/img/ga1.png"),
    modalImg: require("assets/img/ga2.png"),
    title: 'Grupo Alta',
    subtitle: 'IT Manager',
    description:
      'Liderar el departamento de Informática y Sistemas de todo el grupo, incluyendo la innovación y actualización de todas las marcas.',
    linkedin: 'https://www.linkedin.com/company/grupoaltaguate/posts/?feedView=all',
  },

];

function AboutUs() {
  const [photos, setPhotos] = useState(initialPhotosData);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  const startAutoScroll = () => {
    if (!isMobile) {
      stopAutoScroll();
      intervalRef.current = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 1.5;
        }
      }, 16);
    }
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isMobile) {
      startAutoScroll();
    }
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  const handleClickPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    if (selectedPhoto) {
      setPhotos((prevPhotos) =>
        prevPhotos.map((p) =>
          p.id === selectedPhoto.id
            ? { ...p, src: selectedPhoto.modalImg, modalImg: selectedPhoto.src }
            : p
        )
      );
    }
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper"></div>
      <Container style={{ padding: '30px 0' }}>
        <Row>
          <Col className="text-center">
            <h2 style={{ fontWeight: 'bold', color: '#333' }}>Trabajo y escencia</h2>
            <p style={{ fontSize: '20px', color: '#555' }}>
              Mi experiencia con la tecnología, buscando el desarrollo de Guatemala.
            </p>
          </Col>
        </Row>

        {/* Sección para escritorio */}
        {!isMobile && (
          <div
            ref={containerRef}
            style={{
              overflowX: 'auto',
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              touchAction: 'pan-y',
              position: 'relative',
            }}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {[...photos, ...photos].map((photo, index) => (
              <div
                key={index}
                style={{
                  minWidth: '450px',
                  height: '500px',
                  borderRadius: '15px',
                  backgroundImage: `url(${photo.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => handleClickPhoto(photo)}
              />
            ))}
          </div>
        )}

        {/* Sección para móvil */}
        {isMobile && (
          <div style={{ position: 'relative', marginTop: '20px', height: '500px' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                backgroundImage: `url(${photos[currentIndex].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleClickPhoto(photos[currentIndex])}
            />
            <button
              onClick={prevPhoto}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '10px',
                zIndex: 10,
              }}
            >
              ‹
            </button>
            <button
              onClick={nextPhoto}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '10px',
                zIndex: 10,
              }}
            >
              ›
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={handleCloseModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '10px',
              }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  maxWidth: '600px',
                  maxHeight: '80vh',
                  width: '90%',
                  display: 'flex',
                  flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                  alignItems: window.innerWidth < 768 ? 'center' : 'flex-start',
                  gap: '20px',
                }}
              >
                <img
                  src={selectedPhoto.modalImg}
                  alt={selectedPhoto.title}
                  style={{ maxWidth: '40%', height: 'auto' }}
                />
                <div>
                  <h3>{selectedPhoto.title}</h3>
                  <h5>{selectedPhoto.subtitle}</h5>
                  <p>{selectedPhoto.description}</p>
                  <a
                    href={selectedPhoto.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            Tech Stack
          </h2>
          <img src={require("assets/img/React.webp")} width={"60px"}></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src={require("assets/img/python_logo_icon_168886.webp")} width={"50px"} ></img>
          &nbsp;&nbsp;&nbsp;&nbsp;<img src={require("assets/img/java-icon-1511x2048-6ikx8301.png")} width={"40px"}></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src={require("assets/img/Swift-2-512.webp")} width={"50px"}></img>
          &nbsp;&nbsp;&nbsp;&nbsp; <img src={require("assets/img/typescript_original_logo_icon_146317.webp")} width={"50px"}></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src={require("assets/img/Amazon_Web_Services-Logo.wine.png")} width={"80px"}></img>
          &nbsp;&nbsp;&nbsp;&nbsp; <img src={require("assets/img/odoo-logo-png_seeklogo-320087.png")} width={"80px"}></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src={require("assets/img/SAP_2011_logo.svg.png")} width={"80px"}></img>
          &nbsp;&nbsp;&nbsp;&nbsp;<img src={require("assets/img/63e0cf28d5cae5023ecd83d3_Opera-Logo 1.png")} width={"100px"}></img>

        </div>
      </Container>
      <Container>
        <div style={{ backgroundColor: '#fff', padding: '60px 30px', fontFamily: 'Helvetica, Arial, sans-serif', color: '#333' }}>

          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Profesional en Ingeniería en Informática y Sistemas con experiencia en gestión de IT, desarrollo de software y transformación digital. Especialista en metodologías ágiles, gestión de proyectos y optimización de procesos tecnológicos. Fundador y CEO de Kind Mind, con un historial de liderazgo en implementación de ERP, consultoría en TI y desarrollo de soluciones empresariales. Certificado en Scrum, ITIL 4 y Lean Six Sigma. Apasionado por la innovación, la seguridad informática y la mejora continua.
          </p>

          <div style={{ justifyContent: "center", display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {/* Botón Resume */}
            <a
              href="https://drive.google.com/file/d/1oLwF9Map2C2dZ--JLE0Xv8PsHI-ZcOj2/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                backgroundColor: '#111',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                border: '2px solid #111',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#111';
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = '#111';
                e.target.style.color = '#fff';
              }}
            >
              Resume
            </a>

            {/* Botón LinkedIn */}
            <a
              href="https://www.linkedin.com/in/renatocabreraf/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                gap: '10px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = '#084c75';
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = 'black';
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                style={{ width: '20px', height: '20px', borderRadius: '3px' }}
              />
              LinkedIn
            </a>
          </div>
          <br /><br /><br />
          <Container>
            <Row>
              <Col>
                <h3 style={{ fontSize: '1.5rem' }}>Educación</h3>
              </Col>
            </Row>
            <Row style={{ alignItems: 'center', marginTop: '20px' }}>
              <Col md="6">
                <p>
                  <strong>Colegio Salesiano Don Bosco</strong><br />
                  Primaria, Secundaria y Diversificado (2006–2016)
                </p>
                <p>
                  <strong>Universidad Rafael Landívar</strong><br />
                  Ingeniería en Informática y Sistemas (2017–2022)
                </p>
              </Col>
              <Col md="6">
                <img
                  src={require("assets/img/U.jpg")}
                  alt="Educación"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <h3 style={{ fontSize: '1.5rem', marginTop: '40px' }}>Certificaciones</h3>
              </Col>
            </Row>
            <Row style={{ alignItems: 'center', marginTop: '20px' }}>
              <Col md="6">
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li>Lean Six Sigma Yellow Belt – MF Treinamentos (2025)</li>
                  <li>Apple Certified Developer – Apple (2024)</li>
                  <li>Hillstone Security Master Configuration – FRT (2024)</li>
                  <li>Lean Six Sigma White Belt – MF Treinamentos (2023)</li>
                  <li>Scrum Foundation Professional Certificate – CertiProf (2023)</li>
                  <li>Agile Project Planning – Skillsoft (2022)</li>
                  <li>Project Management (PMBOK 6th Ed.) – Skillsoft (2022)</li>
                  <li>ITIL 4 – LearnQuest (2022)</li>
                  <li>Registered Scrum Team Member – Scrum Inc. (2022)</li>
                  <li>Master JavaScript – Udemy (2022)</li>
                  <li>Master HTML5 Professional – Udemy (2022)</li>
                  <li>ITZ Data Internship: AWS & Oracle DB – Datum (2022)</li>
                  <li>Python Master – University of Michigan (2020)</li>
                  <li>Google Cloud Platform Professional – Google Cloud (2020)</li>
                </ul>
              </Col>
              <Col md="6">
                <img
                  src={require("assets/img/comnet.jpg")}
                  alt="Educación"
                  style={{ width: '50%', borderRadius: '8px' }}
                />
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <h3 style={{ fontSize: '1.5rem', marginTop: '40px' }}>Habilidades Técnicas</h3>
              </Col>
            </Row>
            <Row style={{ alignItems: 'center', marginTop: '20px' }}>
              <Col md="6">
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li>Desarrollo Backend y Frontend (JavaScript, TypeScript, Python, Java, C#)</li>
                  <li>Gestión de Bases de Datos (SQL, Oracle, NoSQL)</li>
                  <li>Frameworks y tecnologías (Node.js, Angular, Vue.js, Odoo, SAP B1)</li>
                  <li>Administración de infraestructuras en la nube (AWS, Google Cloud)</li>
                  <li>Ciberseguridad y gestión de riesgos</li>
                </ul>
              </Col>
              <Col md="6">
                <img
                  src={require("assets/img/escritorio.JPG")}
                  alt="Educación"
                  style={{ width: '50%', borderRadius: '8px' }}
                />
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <h3 style={{ fontSize: '1.5rem', marginTop: '40px' }}>Habilidades de Gestión</h3>
              </Col>
            </Row>
            <Row style={{ alignItems: 'center', marginTop: '20px' }}>
              <Col md="6">
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li>Gestión de Proyectos IT y Transformación Digital</li>
                  <li>Implementación de ERP y soluciones empresariales</li>
                  <li>Liderazgo y toma de decisiones estratégicas</li>
                  <li>Análisis y optimización de procesos de negocio</li>
                </ul>
              </Col>
              <Col md="6">
                <img
                  src={require("assets/img/sanp.JPG")}
                  alt="Educación"
                  style={{ width: '50%', borderRadius: '8px' }}
                />
              </Col>
            </Row>
          </Container>


          <Container>
            <Row>
              <Col>
                <h3 style={{ fontSize: '1.5rem', marginTop: '40px' }}>Voluntariado y Asociaciones</h3>
              </Col>
            </Row>
            <Row style={{ alignItems: 'center', marginTop: '20px' }}>
              <Col md="6">
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li>Vicepresidente – Asociación de Becados Loyola (2018)</li>
                  <li>Vocal Estudiantil – Agrupación de Alumnos de Ingeniería (2019)</li>
                  <li>Secretario – Asociación de Salesianos Cooperadores, Centro Don Bosco (2022–2024)</li>
                  <li>Coordinador – Asociación de Salesianos Cooperadores, Centro Don Bosco (2025–2027)</li>
                </ul>
              </Col>
              <Col md="6">
                <img
                  src={require("assets/img/24m.JPG")}
                  alt="Educación"
                  style={{ width: '50%', borderRadius: '8px' }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Container>


        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          <span style={{ textAlign: "center", color: 'black' }}>💼</span> Experiencia Laboral
        </h2>

        <div style={{ borderLeft: '3px solid black', marginLeft: '10px', paddingLeft: '20px', marginTop: '40px' }}>
          <div style={{ marginBottom: '40px', position: 'relative' }}>
            <div style={{ width: '14px', height: '14px', backgroundColor: '#00cfff', borderRadius: '50%', position: 'absolute', left: '-31px', top: '5px' }}></div>
            <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>Enero, 2022 - Actualidad</p>
            <h3 style={{ color: '#00cfff', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Kind Mind - CEO y Fundador</h3>
            <p style={{ color: 'black', lineHeight: '1.6' }}>
              Kind Mind ha desarrollado soluciones IT personalizadas para más de 10 empresas en Guatemala,
              abordando diversas necesidades estratégicas a través de software empresarial, plataformas de ecommerce
              y soluciones basadas en la nube. El enfoque especializado ha permitido a estas organizaciones
              modernizar sus operaciones y adaptarse a entornos digitales altamente competitivos.
              Además, se ha liderado la implementación de auditorías tecnológicas orientadas a identificar
              áreas de mejora, optimizar recursos y elevar la eficiencia operativa de forma sostenible.</p>
          </div>

          <div style={{ marginBottom: '40px', position: 'relative' }}>
            <div style={{ width: '14px', height: '14px', backgroundColor: '#032346', borderRadius: '50%', position: 'absolute', left: '-31px', top: '5px' }}></div>
            <p style={{ color: '#032346', fontSize: '0.9rem', marginBottom: '4px' }}>Junio, 2023 - Actualmente </p>
            <h3 style={{ color: '#032346', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Grupo Alta - IT Manager</h3>
            <p style={{ color: 'black', lineHeight: '1.6' }}>

              Como parte de la estrategia de transformación digital del grupo, lidero
              la implementación del sistema Odoo ERP en diversas unidades de negocio, incluyendo Gimnasios C3NTRO, Helados Adela (en Guatemala y México),
              Villa Bokéh y Casa Palopó. Esta implementación permitió una reducción del 30% en los tiempos operativos gracias
              a la optimización de procesos tecnológicos clave. Asimismo, supervisé el desarrollo de soluciones integrales orientadas
              a las necesidades específicas de cada empresa, garantizando eficiencia operativa y una mejora continua.
              También doy seguimiento a proyectos de infraestructura que fortalecieron significativamente la conectividad
              y las telecomunicaciones corporativas.
            </p>

          </div>
          <div style={{ marginBottom: '40px', position: 'relative' }}>
            <div style={{ width: '14px', height: '14px', backgroundColor: 'red', borderRadius: '50%', position: 'absolute', left: '-31px', top: '5px' }}></div>
            <p style={{ color: '#032346', fontSize: '0.9rem', marginBottom: '4px' }}>Agosto, 2020 - Junio 2023 </p>
            <h3 style={{ color: 'red', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Grupo R2C - Coordinador de Informática y Sistemas</h3>
            <p style={{ color: 'black', lineHeight: '1.6' }}>

              Lideré la implementación del sistema Odoo en 40 puntos de venta a nivel nacional, integrando también
              la parte administrativa para lograr una gestión unificada y eficiente. Acompañé de cerca el desarrollo
              de mejoras tecnológicas específicas para los restaurantes Quedely, asegurando que cada avance
              respondiera a las necesidades operativas del negocio. Asimismo, diseñé y desarrollé herramientas
              enfocadas en optimizar los procesos administrativos, lo que permitió mejorar significativamente la
              operación interna y la toma de decisiones.
            </p>

          </div>
          <div style={{ marginBottom: '40px', position: 'relative' }}>
            <div style={{ width: '14px', height: '14px', backgroundColor: 'orange', borderRadius: '50%', position: 'absolute', left: '-31px', top: '5px' }}></div>
            <p style={{ color: '#032346', fontSize: '0.9rem', marginBottom: '4px' }}>Abril, 2022 - Diciembre, 2022 </p>
            <h3 style={{ color: 'orange', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>Conduent - IT Project Manager</h3>
            <p style={{ color: 'black', lineHeight: '1.6' }}>

              Dirigí el proyecto de organización y normalización de la base de datos para el sistema Global
              Roster de Royal Caribbean y Aetna, asegurando una estructura de datos coherente, limpia y
              eficiente. Esta labor fue clave para mejorar la gestión del personal y la planificación operativa,
              garantizando la integridad y disponibilidad de la información en tiempo real para ambos
              clientes a nivel global.
            </p>

          </div>
        </div>

      </Container>

      <footer className="site-footer">
        <div className="footer-links">
          <Link to="/about-us">Conóceme</Link>
          <Link to="/blog-post">Blog</Link>
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
    </>
  );
}

export default AboutUs;
