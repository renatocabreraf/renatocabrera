import React from "react";
import { motion } from "framer-motion";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import SiteFooter from "components/Renato/SiteFooter";
import "assets/css/renato-editorial.css";

function GeniusCloud(){
  React.useEffect(()=>{document.documentElement.classList.remove("nav-open");window.scrollTo(0,0)},[]);
  return <>
    <ScrollTransparentNavbar/>
    <main className="re-page">
      <section className="re-hero green"><div className="re-shell"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
        <p className="re-eyebrow">BIENESTAR · REFLEXIÓN</p><h1>La salud mental<br/>también<br/><span>es salud.</span></h1>
        <p className="re-lead">Una reflexión sobre bienestar emocional, estigma, comunidad y la importancia de aprender a pedir y ofrecer ayuda.</p>
        <div className="re-author"><img src={require("assets/img/rostro.png")} alt="Renato Cabrera"/><span>Renato Cabrera · 20 de mayo de 2025</span></div>
      </motion.div></div></section>
      <section className="re-section soft"><div className="re-shell re-narrow"><p className="re-label">Una urgencia silenciosa</p><h2 className="re-heading">Lo que no se ve<br/><span>también necesita cuidado.</span></h2><p className="re-intro">Durante mucho tiempo hablar de salud significó hablar casi exclusivamente del cuerpo. Las emociones, el equilibrio interior y el acompañamiento psicológico quedaron muchas veces en segundo plano.</p></div></section>
      <section className="re-article-section"><div className="re-shell"><div className="re-grid"><div><p className="re-label">01 · Bienestar</p><h2>¿Qué entendemos por salud mental?</h2><p>No es únicamente la ausencia de un trastorno. También tiene que ver con nuestra capacidad de gestionar emociones, afrontar dificultades, construir relaciones sanas, encontrar sentido y reconocer cuándo necesitamos ayuda.</p><p>Hablar de bienestar emocional con naturalidad ayuda a romper la idea de que pedir apoyo es una señal de debilidad.</p></div><img className="re-image" src={require("assets/img/prof.png")} alt="Bienestar emocional"/></div></div></section>
      <section className="re-article-section"><div className="re-shell"><div className="re-grid"><img className="re-image" src={require("assets/img/med.png")} alt="Salud mental"/><div><p className="re-label">02 · Importancia</p><h2>Atraviesa todas las dimensiones de la vida.</h2><p>Nuestras emociones influyen en decisiones, relaciones, aprendizaje, trabajo y en la forma en que enfrentamos dificultades.</p><p>Cuidar la salud mental no debe entenderse como un lujo. Es una parte esencial del desarrollo humano.</p></div></div></div></section>
      <section className="re-quote"><div className="re-shell re-narrow"><h2>A veces lo que más transforma no es una respuesta.<br/><span>Es la presencia.</span></h2></div></section>
      <section className="re-section soft"><div className="re-shell"><div className="re-grid"><div><p className="re-label">Niñez y juventud</p><h2 className="re-heading">Escuchar también<br/><span>es acompañar.</span></h2><div className="re-copy" style={{marginTop:35}}><p>La niñez y la adolescencia son etapas fundamentales para construir herramientas emocionales, autoestima, resiliencia y relaciones saludables.</p><p>Los jóvenes necesitan espacios seguros donde puedan expresar miedos, frustraciones y dudas sin sentirse juzgados.</p></div></div><img className="re-image" src={require("assets/img/confes.png")} alt="Acompañamiento"/></div></div></section>
      <section className="re-section"><div className="re-shell"><p className="re-label">Qué podemos hacer</p><h2 className="re-heading">Acciones pequeñas. Cambios importantes.</h2><div className="re-cards">
        <article className="re-card"><span className="re-card-index">01</span><h3 style={{marginTop:65}}>Hablar sin estigma</h3><p>Normalizar las conversaciones sobre bienestar emocional y evitar tratar la búsqueda de ayuda como una debilidad.</p></article>
        <article className="re-card"><span className="re-card-index">02</span><h3 style={{marginTop:65}}>Buscar ayuda profesional</h3><p>Reconocer cuándo necesitamos acompañamiento especializado y acudir a profesionales capacitados.</p></article>
        <article className="re-card"><span className="re-card-index">03</span><h3 style={{marginTop:65}}>Escuchar de verdad</h3><p>Estar presentes, ofrecer un espacio seguro y tomar en serio lo que otra persona intenta expresar.</p></article>
        <article className="re-card"><span className="re-card-index">04</span><h3 style={{marginTop:65}}>Construir comunidad</h3><p>Promover espacios educativos y comunitarios donde el bienestar emocional forme parte del desarrollo integral.</p></article>
      </div><p style={{marginTop:48,color:"#86868b",fontSize:14,maxWidth:760,lineHeight:1.6}}>Este contenido es una reflexión general y no sustituye la evaluación, diagnóstico ni tratamiento de un profesional de la salud.</p></div></section>
      <SiteFooter/>
    </main>
  </>
}
export default GeniusCloud;
