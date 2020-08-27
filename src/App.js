import React from 'react';
import FourOhFour from './components/FourOhFour.js';
import Stuff from "./components/Stuff.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js"
import GodCounter from "./components/GodCounter.js"
import PasswordStrength from "./components/PasswordStrength.js"
import Basket from "./components/Basket.js"
import CatchMeIfYouCan from "./components/CatchMeIfYouCan.js"
import Footer from "./components/Footer.js"
import Square from "./components/Square.js"
import StepCounter from "./components/StepCounter"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => (
  <Router>
    <Header>What an amazing website!</Header>
    <Switch>
      <Route exact path="/">
        <Stuff />
      </Route>
      <Route exact path="/content">
        <Content />
      </Route>
      <Route exact path="/god">
        <GodCounter />
      </Route>
      <Route exact path="/password">
        <PasswordStrength label={ "Password" } name={ "password" }/>
      </Route>
      <Route exact path="/basket">
        <Basket items={ [
            { name: "Coffee", price: 2.10 },
            { name: "Bananas", price: 3.50 },
            { name: "Milk", price: 250.65 },
            { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
            ] } />
      </Route>
      <Route exact path="/catch">
        <CatchMeIfYouCan jump={ 100 } />
      </Route>
      <Route exact path="/square/:colour" render={ ({ match }) => (
        <Square colour={ match.params.colour }/>
      ) }>
      </Route>
      <Route exact path="/step/:max/:step" render={ ({ match }) => (
        <StepCounter max={ match.params.max } step={ match.params.step }/>
      ) }>
      </Route>
      <FourOhFour />
    </Switch>
    <Footer />
  </Router>
  );

export default App;
