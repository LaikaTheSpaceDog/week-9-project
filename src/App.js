import React from 'react';
import Stuff from "./components/Stuff.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js"
import GodCounter from "./components/GodCounter.js"
import {BrowserRouter as Router, Route} from "react-router-dom";

const App = () => (
  <Router>
    <Header>What an amazing website!</Header>
    <Route exact path="/">
      <Stuff />
    </Route>
    <Route exact path="/content">
      <Content />
    </Route>
    <Route exact path="/god">
      <GodCounter />
    </Route>
  </Router>
  );

export default App;
