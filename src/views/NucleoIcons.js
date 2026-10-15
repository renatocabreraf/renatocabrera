import React from "react";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import SiteFooter from "components/Renato/SiteFooter";
import "assets/css/renato-editorial.css";

function NucleoIcons(){
  React.useEffect(()=>{document.documentElement.classList.remove("nav-open");window.scrollTo(0,0)},[]);
  return <>
    <ScrollTransparentNavbar/>
    <main className="re-page">
      <section className="re-policy"><div className="re-shell re-narrow">
        <header className="re-policy-header"><p className="re-eyebrow">RENATOCABRERA.COM</p><h1>Política de Privacidad.</h1><p className="re-policy-meta">Última actualización: 7 de octubre de 2026</p></header>
        <section className="re-policy-block"><h2>Introducción</h2><p>En renatocabrera.com respeto tu privacidad. Esta política explica, de forma general, qué información puede recopilarse al utilizar el sitio, para qué puede utilizarse y qué opciones tienes sobre tus datos.</p></section>
        <section className="re-policy-block"><h2>Información que puede recopilarse</h2><ul><li>Datos que compartas voluntariamente al comunicarte por correo electrónico.</li><li>Información técnica o de navegación que pueda ser generada por el navegador, el servidor o herramientas de medición habilitadas en el sitio.</li><li>Cualquier otra información que decidas incluir en una comunicación enviada por iniciativa propia.</li></ul></section>
        <section className="re-policy-block"><h2>Uso de la información</h2><ul><li>Responder consultas o solicitudes.</li><li>Mantener y mejorar el funcionamiento del sitio.</li><li>Comprender de forma agregada el uso del sitio.</li><li>Cumplir obligaciones legales cuando corresponda.</li></ul></section>
        <section className="re-policy-block"><h2>Conservación</h2><p>Los datos se conservan únicamente durante el tiempo razonable para cumplir la finalidad para la que fueron recibidos o el período requerido por una obligación legal aplicable.</p></section>
        <section className="re-policy-block"><h2>Servicios de terceros</h2><p>Algunas funciones pueden depender de servicios de terceros, como alojamiento, analítica, enlaces externos, correo, calendarios o plataformas de contenido. El tratamiento que esos servicios realicen está sujeto también a sus propias políticas.</p></section>
        <section className="re-policy-block"><h2>Cookies y tecnologías similares</h2><p>El sitio puede utilizar cookies u otras tecnologías necesarias para su funcionamiento o medición. El navegador permite gestionar, limitar o eliminar cookies desde su configuración.</p></section>
        <section className="re-policy-block"><h2>Tus solicitudes sobre datos</h2><p>Si deseas consultar, corregir o solicitar la eliminación de información personal que hayas enviado directamente a través de los medios de contacto del sitio, puedes escribir a:</p><p><a className="re-link" href="mailto:renatocabrerafigueroa@gmail.com">renatocabrerafigueroa@gmail.com →</a></p></section>
        <section className="re-policy-block"><h2>Seguridad</h2><p>Se aplican medidas razonables orientadas a proteger la información frente a acceso, modificación, pérdida o divulgación no autorizada. Ningún sistema conectado a internet puede garantizar seguridad absoluta.</p></section>
        <section className="re-policy-block"><h2>Cambios a esta política</h2><p>Esta política puede actualizarse cuando cambien las funciones del sitio o la forma en que se procesan datos. La versión vigente será la publicada en esta misma página.</p></section>
      </div></section>
      <SiteFooter/>
    </main>
  </>
}
export default NucleoIcons;
