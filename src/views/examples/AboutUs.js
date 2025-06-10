import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import FixedTransparentNavbar from 'components/Navbars/FixedTransparentNavbar';
import Footer from 'components/Footers/Footer';

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
    title: 'José Herrera',
    subtitle: 'CIO & Co-Fundador',
    description:
      'Ingeniero en Informática, con experiencia en banca e instrumentos financieros. Experto en Gobernanza y Gestión de Datos.',
    linkedin: 'https://www.linkedin.com/in/joseherrera7/',
  },
  {
    id: 4,
    src: require("assets/img/ga1.png"),
    modalImg: require("assets/img/ga2.png"),
    title: 'Emmanuel Alvarado',
    subtitle: 'CTO & Co-Fundador',
    description:
      'Senior Developer, experto en servicios en la nube y arquitecturas modernas de software.',
    linkedin: 'https://www.linkedin.com/in/emmanuel-alvarado-jl99/',
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
            <h2 style={{ fontWeight: 'bold', color: '#333' }}>Trabajo y mi escencia</h2>
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

      {/* Sección de Valores */}
      <div style={{ backgroundColor: 'white', padding: '60px 20px', position: 'relative' }}>
        <Container>
          <Row style={{ marginTop: '50px', borderTop: '1px solid #ccc' }}>
            {[
              {
                letra: 'P',
                titulo: 'Planteamos',
                texto:
                  'Planteamos nuestra opinión, con respeto. Tomamos una posición o defendemos una idea de manera ﬁrme pero respetuosa.',
              },
              {
                letra: 'A',
                titulo: 'Apoyamos',
                texto:
                  'Apoyo mutuo, el equipo se compromete a responsabilizarse por sus acciones, tareas y compromisos.',
              },
              {
                letra: 'T',
                titulo: 'Toma de decisiones',
                texto:
                  'Tomamos decisiones conscientes, actuamos con propósito y basados en la alineación de objetivos del proyecto.',
              },
              {
                letra: 'A',
                titulo: 'Aprendemos',
                texto:
                  'Aprendemos continuamente, buscamos siempre el crecimiento personal y profesional tanto del equipo como de los negocios.',
              },
            ].map((valor, index) => (
              <Col
                key={index}
                md="3"
                style={{ padding: '30px', borderRight: index < 3 ? '1px solid #ccc' : 'none' }}
              >
                <h3 style={{ color: '#1c1862', fontWeight: 'bold', textAlign: 'center' }}>
                  {valor.letra}
                </h3>
                <h5 style={{ color: '#1c1862', textAlign: 'center' }}>{valor.titulo}</h5>
                <p style={{ fontSize: '14px', color: '#555' }}>{valor.texto}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
