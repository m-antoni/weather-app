import React from 'react';
import ReactDOM from "react-dom";
import $ from 'jquery';
import 'bootswatch/dist/materia/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router,Switch,Route,useParams } from "react-router-dom";
import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Wheather from './components/Pages/Wheather';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/wheather" component={Wheather}/>
        </Switch>
      </Router>
  );
}

export default App;
