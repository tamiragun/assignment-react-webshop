import React from "react";
import "./App.css";
import { Header } from "./components/Header.js";
import { LandingPage } from "./pages/LandingPage.js";
import { Legal } from "./pages/Legal.js";
import { Profile } from "./pages/Profile.js";
import { Products } from "./pages/Products.js";
import { Navigation } from "./components/Navigation.js";
import CalculatorResults from "./pages/CalculatorResults.js";
import CalculatorForm from "./components/CalculatorForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  //Source for the images and descriptions: www.amazon.com
  render() {
    return (
      <div className="App">
        <Router>
          <Header loggedIn={true} />
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/shopping">
              <Products />
            </Route>
            <Route path="/legal">
              <Legal />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/results">
              <CalculatorResults />
            </Route>
            <Route path="/calculator" exact>
              <CalculatorForm />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
