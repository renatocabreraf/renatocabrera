import React from "react";
import { Link } from "react-router-dom";

function PresentationHeader() {
  return (
    <>
      <div className="presentation-container">
        <img
          src={require("assets/img/banner7.png")}
          alt="Imagen de presentación"
          className="presentation-image"
        />
      </div>
      
      <div className="sections-container">
        <div className="section-card">
          <Link to="/pdp-10">
            <img src={require("assets/img/banner1.1.1.png")} alt="PDP-10" className="section-image" />
            <div className="section-text" style={{ color: "black" }}>
              <p>Conoce un poco sobre de mi trabajo, mis planes y sueños, todo acerca de emprender innovando.</p>
            </div>
          </Link>
        </div>
        <div className="section-card">
          <Link to="/music">
            <img src={require("assets/img/banner1.2.png")} alt="Billboard Hot 10" className="section-image" />
            <div className="section-text" style={{ color: "black" }}>
              <p>No todo es trabajo. Mis hobbies me mantienen ocupado, pero además de eso, le dan otro enfoque a mis actividades.</p>
            </div>
          </Link>
        </div>
        <div className="section-card">
          <Link to="/news">
            <img src={require("assets/img/banner1.png")} alt="Out of Town News" className="section-image" />
            <div className="section-text">
              <p>Soy de la creencia que siempre debemos devolver las bendiciones que hemos recibido, el cambio está en nosotros.</p>
            </div>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .presentation-container {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .presentation-image {
          width: 100%;
          height: auto;
          max-height: 100vh;
          object-fit: contain;
        }
        .sections-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 20px;
          padding: 20px;
          flex-wrap: wrap;
        }
        .section-card {
          width: 30%;
          border-radius: 10px;
          overflow: hidden;
          background: #f5f5f5;
          text-align: center;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        .section-card:hover {
          transform: scale(1.05);
        }
        .section-image {
          width: 100%;
          height: auto;
          max-height: 200px;
          object-fit: contain;
        }
        .section-text {
          padding: 15px;
          font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .sections-container {
            flex-direction: column;
            align-items: center;
          }
          .section-card {
            width: 90%;
            margin-bottom: 20px;
          }
          .section-image {
            max-height: 150px;
          }
        }
      `}</style>
    </>
  );
}

export default PresentationHeader;
