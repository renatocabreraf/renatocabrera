import React from "react";
import { motion } from "framer-motion";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import SiteFooter from "components/Renato/SiteFooter";
import "assets/css/renato-editorial.css";

function Counsel(){
  React.useEffect(()=>{document.documentElement.classList.remove("nav-open");window.scrollTo(0,0)},[]);
  return <>
    <ScrollTransparentNavbar/>
    <main className="re-page">
      <section className="re-hero"><div className="re-shell"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
        <p className="re-eyebrow">TECNOLOGÍA · OPINIÓN</p><h1>¿No saber programar<br/>te convierte en<br/><span>analfabeta digital?</span></h1>
        <p className="re-lead">Una mirada crítica sobre el papel de la programación en el mundo moderno y sobre lo que realmente significa estar alfabetizado en la era digital.</p>
      </motion.div></div></section>
      <section className="re-section soft"><div className="re-shell"><img className="re-image re-image-wide" src={require("assets/img/code2.png")} alt="Programación"/></div></section>
      <section className="re-article-section"><div className="re-shell re-narrow"><p className="re-label">01 · El punto de partida</p><h2>Empezamos fuerte.</h2><p>En los últimos años se volvió popular la idea de que quien no sabe programar será el “analfabeta del siglo XXI”. La frase tiene fuerza porque el software transformó casi todos los aspectos de nuestra vida.</p><p>La pregunta es si aprender código es una necesidad universal comparable con leer y escribir o si, en realidad, estamos confundiendo programación con alfabetización digital.</p></div></section>
      <section className="re-article-section"><div className="re-shell re-narrow"><p className="re-label">02 · Una herramienta poderosa</p><h2>Programar enseña mucho más que sintaxis.</h2><p>Aprender a programar puede desarrollar pensamiento lógico, resolución de problemas, abstracción y capacidad para estructurar procesos. También abre oportunidades profesionales y permite convertir ideas en prototipos con mucha más autonomía.</p></div></section>
      <section className="re-article-section"><div className="re-shell re-narrow"><p className="re-label">03 · Alfabetización digital</p><h2>Pero saber código no lo es todo.</h2><p>Estar alfabetizado digitalmente también significa comprender cómo la tecnología afecta nuestras vidas y tomar decisiones informadas dentro de un entorno dominado por plataformas, algoritmos y datos.</p><ul className="re-list"><li>Evaluar la veracidad de la información en internet.</li><li>Proteger privacidad y datos personales.</li><li>Comprender el impacto ético de la inteligencia artificial.</li><li>Liderar equipos con pensamiento tecnológico.</li><li>Diseñar soluciones que respondan a necesidades humanas.</li></ul></div></section>
      <section className="re-quote"><div className="re-shell re-narrow"><h2>La tecnología no es el fin.<br/><span>Es el medio.</span></h2></div></section>
      <section className="re-section soft"><div className="re-shell"><div className="re-grid"><img className="re-image" src={require("assets/img/compu.jpg")} alt="Tecnología y personas"/><div><p className="re-label">Lo humano</p><h2 className="re-heading">El código necesita<br/><span>dirección y propósito.</span></h2><div className="re-copy" style={{marginTop:35}}><p>Empatía, pensamiento crítico, comunicación, liderazgo, creatividad, diseño, arte y ética siguen siendo fundamentales. Un producto tecnológico valioso rara vez nace de una sola habilidad.</p><p>Programar, por sí solo, no cambia el mundo. Las ideas, los valores y las personas detrás del código, sí.</p></div></div></div></div></section>
      <section className="re-section"><div className="re-shell re-narrow"><p className="re-label">Conclusión</p><h2 className="re-heading">Entonces, ¿debemos aprender a programar?</h2><p className="re-intro">Depende del propósito. Aprender código puede darte autonomía, nuevas herramientas y una manera distinta de pensar, pero no querer ser desarrollador no te condena a la irrelevancia.</p></div></section>
      <SiteFooter/>
    </main>
  </>
}
export default Counsel;
