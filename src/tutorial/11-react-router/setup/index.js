import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  //Wrap your entire application inside the BrowserRouter from react-router-dom package
  return <Router>
    {/** If we dont add the exact prop then / will be displayed in /about as well as /people as the '/' matches */}
    <Route exact path="/">
      <Home />
    </Route>
    {/* If we dont add exact here all the pages with /about/anything/dfvd/f will render this component */}
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/people">
      <People />
    </Route>
  </Router>;
};

export default ReactRouterSetup;
