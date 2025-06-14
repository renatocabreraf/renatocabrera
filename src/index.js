/*!

=========================================================
* Now UI Kit PRO React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import AboutUs from "views/examples/AboutUs.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Sections from "views/Sections.js";
import SignupPage from "views/examples/SignupPage.js";
import PulseViews from "views/sections-sections/PulseView";
import CodeCrafting from "views/sections-sections/CodeCrafting";
import Counsel from "views/sections-sections/Counsel";
import GeniusCloud from "views/sections-sections/GeniusCloud";
import Vista from "views/sections-sections/Vista";


// others
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const optionsAlert = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider template={AlertTemplate} {...optionsAlert}>
    <BrowserRouter>
      <Switch>
        <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
        <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
        <Route
          path="/blog-posts"
          render={(props) => <BlogPosts {...props} />}
        />
        <Route
          path="/contact-us"
          render={(props) => <ContactUs {...props} />}
        />
        <Route
          path="/e-commerce"
          render={(props) => <Ecommerce {...props} />}
        />
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route 
          path="/5lecturas"
          render={(props) => <PulseViews {...props} />} />
           <Route 
          path="/social"
          render={(props) => <CodeCrafting {...props} />} />    
           <Route 
          path="/counsel"
          render={(props) => <Counsel {...props} />} />
          <Route 
          path="/saludmental"
          render={(props) => <GeniusCloud {...props} />} /> 
          <Route 
          path="/juventud"
          render={(props) => <Vista {...props} />} />                   
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/presentation"
          render={(props) => <Presentation {...props} />}
        />
        <Route path="/pricing" render={(props) => <Pricing {...props} />} />
        <Route
          path="/product-page"
          render={(props) => <ProductPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route path="/sections" render={(props) => <Sections {...props} />} />
        <Route path="/sign-up" render={(props) => <SignupPage {...props} />} />
        <Redirect to="/presentation" />
      </Switch>
    </BrowserRouter>
  </Provider>
);
