import React from "react";
import { motion } from "framer-motion";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import SiteFooter from "components/Renato/SiteFooter";
import "assets/css/renato-editorial.css";

const books = [
  ["Steve Jobs","Walter Isaacson","assets/img/sj.jpg","Esta biografía me ayudó a comprender el valor de unir tecnología y arte, de cuidar los detalles y de construir productos que no solo funcionen, sino que también sean útiles, bellos y significativos."],
  ["Minimalismo Digital","Cal Newport","assets/img/md.jpg","Me hizo replantear mi relación con las herramientas digitales: recuperar enfoque, elegir mejor dónde invierto mi atención y poner límites a la distracción constante."],
  ["El Método Lean Startup","Eric Ries","assets/img/ls.jpg.jpg","Me dio una estructura práctica para desarrollar proyectos con pocos recursos: probar, aprender, corregir y validar antes de invertir demasiado en una idea."],
  ["Enganchado","Nir Eyal","assets/img/hooked.jpg","Me acercó al diseño conductual y a la forma en que los productos digitales pueden integrarse en los hábitos de las personas. Entender al usuario es tan importante como construir la tecnología."],
  ["La Teoría del Todo","Stephen Hawking","assets/img/tt.jpg.jpg","Me recordó que el conocimiento no tiene una frontera definitiva. La curiosidad, la capacidad de cuestionar y la humildad frente a lo desconocido también forman parte del crecimiento profesional."]
];

function PulseViews(){
  React.useEffect(()=>{document.documentElement.classList.remove("nav-open");window.scrollTo(0,0)},[]);
  return <>
    <ScrollTransparentNavbar/>
    <main className="re-page">
      <section className="re-hero purple"><div className="re-shell">
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
          <p className="re-eyebrow">5 LECTURAS</p>
          <h1>Leer también<br/><span>es construir.</span></h1>
          <p className="re-lead">Cinco libros que me han acompañado en distintas etapas y que cambiaron mi forma de pensar sobre tecnología, liderazgo, productos, atención y curiosidad.</p>
          <div className="re-author"><img src={require("assets/img/rostro.png")} alt="Renato Cabrera"/><span>Renato Cabrera · 9 de junio de 2025</span></div>
        </motion.div>
      </div></section>

      <section className="re-section soft"><div className="re-shell re-narrow">
        <p className="re-label">La lectura</p>
        <h2 className="re-heading">Una conversación con<br/><span>otras formas de ver el mundo.</span></h2>
        <p className="re-intro">Leer ha sido uno de los hábitos más transformadores que he cultivado. No se trata solamente de adquirir conocimientos, sino de cuestionar, imaginar, construir y mirar un mismo problema desde perspectivas diferentes.</p>
      </div></section>

      <section className="re-section"><div className="re-shell">
        <p className="re-label">La selección</p><h2 className="re-heading">Cinco libros que dejaron huella.</h2>
        <div className="re-cards">
          {books.map((b,i)=><motion.article className="re-card" key={b[0]} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.04}}>
            <span className="re-card-index">{String(i+1).padStart(2,"0")}</span>
            <div className="re-card-image-wrap"><img className="re-card-image" src={require(`assets/img/${b[2].split("/").pop()}`)} alt={b[0]}/></div>
            <h3>{b[0]}<br/><span style={{color:"#86868b",fontSize:18}}>{b[1]}</span></h3><p>{b[3]}</p>
          </motion.article>)}
        </div>
      </div></section>

      <section className="re-quote"><div className="re-shell re-narrow"><h2>Un buen libro no termina cuando cierras la última página.<br/><span>Se queda pensando contigo.</span></h2></div></section>

      <section className="re-section soft"><div className="re-shell"><div className="re-grid">
        <div><p className="re-label">Bonus</p><h2 className="re-heading">Cirque du Freak.<br/><span>La saga que encendió la chispa.</span></h2>
          <div className="re-copy" style={{marginTop:38}}><p>Cuando tenía entre 13 y 15 años, mi tía me regaló la saga juvenil de Darren Shan. Fue la primera vez que me sumergí completamente en una historia y terminé leyendo los libros de golpe, para después volver a ellos más de una vez.</p><p>Más allá de los vampiros, hablaba de crecimiento, amistad, responsabilidad, pérdida y transformación. El hecho de que llegara a mí como un regalo también hizo que lectura, familia y adolescencia quedaran conectadas para siempre.</p></div>
        </div>
        <img className="re-image" src={require("assets/img/darrenshan.jpg.jpg")} alt="Cirque du Freak"/>
      </div></div></section>
      <SiteFooter/>
    </main>
  </>
}
export default PulseViews;
