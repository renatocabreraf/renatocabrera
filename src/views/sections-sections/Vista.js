import React from "react";
import { motion } from "framer-motion";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import SiteFooter from "components/Renato/SiteFooter";
import "assets/css/renato-editorial.css";

function Vista(){
  React.useEffect(()=>{document.documentElement.classList.remove("nav-open");window.scrollTo(0,0)},[]);
  return <>
    <ScrollTransparentNavbar/>
    <main className="re-page">
      <section className="re-hero green"><div className="re-shell"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
        <p className="re-eyebrow">JUVENTUD · EDUCACIÓN</p><h1>El futuro<br/>empieza mucho<br/><span>antes del mañana.</span></h1>
        <p className="re-lead">Una reflexión sobre educación, comunidad y el papel que todos podemos asumir para acompañar a niños y jóvenes.</p>
        <div className="re-author"><img src={require("assets/img/rostro.png")} alt="Renato Cabrera"/><span>Renato Cabrera · 9 de junio de 2025</span></div>
      </motion.div></div></section>
      <section className="re-section soft"><div className="re-shell"><div className="re-grid"><div><p className="re-label">El punto de partida</p><h2 className="re-heading">La juventud no es<br/>una promesa.<br/><span>Es el presente.</span></h2><div className="re-copy" style={{marginTop:38}}><p>Cuando pensamos en el desarrollo de una nación solemos mirar hacia las grandes decisiones políticas, económicas o tecnológicas. Pero el cambio sostenible comienza mucho antes: en la niñez y en la juventud, donde se forman valores, identidad, confianza y sueños.</p></div></div><img className="re-image" src={require("assets/img/nena.png")} alt="Niñez y juventud"/></div></div></section>
      <section className="re-article-section"><div className="re-shell re-narrow"><p className="re-label">01 · Educación</p><h2>Una oportunidad puede cambiar una trayectoria.</h2><p>En mi propia historia, la educación fue la puerta que me permitió imaginar un futuro diferente. Una beca obtenida por esfuerzo y buenas calificaciones hizo posible continuar mis estudios universitarios.</p><p>Aquello fue mucho más que apoyo económico: fue la señal de que alguien creía en mi futuro. Acompañar a un joven no consiste únicamente en abrirle una puerta, sino en ayudarle a descubrir que puede atravesarla.</p></div></section>
      <section className="re-quote"><div className="re-shell re-narrow"><h2>Educar también significa<br/><span>creer en alguien.</span></h2></div></section>
      <section className="re-article-section"><div className="re-shell"><div className="re-grid"><img className="re-image" src={require("assets/img/niños.png")} alt="Niños y jóvenes"/><div><p className="re-label">02 · Comunidad</p><h2>El desarrollo de un joven nos involucra a todos.</h2><p>No es una responsabilidad exclusiva de la familia o de la escuela. Profesionales, empresas, comunidades y ciudadanos también pueden construir oportunidades.</p><p>A veces eso significa una beca o mentoría. Otras veces, resolver una necesidad mucho más concreta: útiles, una mochila, zapatos, alimentos o simplemente tiempo para escuchar.</p></div></div></div></section>
      <section className="re-section soft"><div className="re-shell re-narrow"><p className="re-label">Lo que podemos hacer</p><h2 className="re-heading">Acompañar.<br/>Formar.<br/><span>Inspirar.</span></h2><p className="re-intro">Un país también se construye en decisiones cotidianas: cuando dejamos de mirar a la juventud como un número y empezamos a verla como personas con nombre, historia, talento y posibilidades.</p></div></section>
      <SiteFooter/>
    </main>
  </>
}
export default Vista;
