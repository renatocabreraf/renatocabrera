import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import AboutUs from "views/examples/AboutUs.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import LandingPage from "views/examples/LandingPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import PulseViews from "views/sections-sections/PulseView";
import CodeCrafting from "views/sections-sections/CodeCrafting";
import Counsel from "views/sections-sections/Counsel";
import GeniusCloud from "views/sections-sections/GeniusCloud";
import Vista from "views/sections-sections/Vista";
import GlobalIdentity from "components/Renato/GlobalIdentity";
import TrabajoEnEquipoTecnologia from "views/articles/TrabajoEnEquipoTecnologia";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
      <GlobalIdentity />
      <BrowserRouter>
    <Switch>
      <Route exact path="/about-us" component={AboutUs}/>
      <Route exact path="/blog-posts" component={BlogPosts}/>
      <Route exact path="/contact-us" component={ContactUs}/>
      <Route exact path="/libros" component={LandingPage}/>
      <Route exact path="/5lecturas" component={PulseViews}/>
      <Route exact path="/social" component={CodeCrafting}/>
      <Route exact path="/programacion" component={Counsel}/>
      <Route exact path="/saludmental" component={GeniusCloud}/>
      <Route exact path="/juventud" component={Vista}/>
      <Route exact path="/politicas" component={NucleoIcons}/>
      <Route exact path="/presentation" component={Presentation}/>

      <Redirect exact from="/" to="/presentation"/>
      <Redirect exact from="/blog-post" to="/blog-posts"/>
      <Redirect exact from="/index" to="/presentation"/>
      <Redirect exact from="/e-commerce" to="/presentation"/>
      <Redirect exact from="/login-page" to="/presentation"/>
      <Redirect exact from="/pricing" to="/presentation"/>
      <Redirect exact from="/product-page" to="/presentation"/>
      <Redirect exact from="/profile-page" to="/presentation"/>
      <Redirect exact from="/sections" to="/presentation"/>
      <Redirect exact from="/sign-up" to="/presentation"/>
      
        <Route
          path="/trabajo-en-equipo-tecnologia"
          render={(props) => <TrabajoEnEquipoTecnologia {...props} />}
        />
<Redirect to="/presentation"/>
    </Switch>
  </BrowserRouter>
    </>
);
