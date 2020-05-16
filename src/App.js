import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route,useParams } from "react-router-dom";
import Navbar from './components/Layouts/Navbar';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Home from './components/Pages/Home';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
  );
}

export default App;
