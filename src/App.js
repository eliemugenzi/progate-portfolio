import React from 'react';
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
// Import custom components...
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="*" component={NotFound}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
