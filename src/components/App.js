import React from "react";
import AboutUs from "../pages/AboutUs";
import GlobalStyle from "../components/GlobalStyled";
import Nav from "../components/Nav";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import OurWork from "../pages/OurWork";
import AboutUS from "../pages/AboutUs";
import MovieDetail from "../pages/MovieDetail";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./ScrollTop";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUS} />
          <Route exact path="/work" component={OurWork} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/work/:id" component={MovieDetail} />
        </Switch>
      </AnimatePresence>
      <ScrollTop />
    </div>
  );
};

export default App;
