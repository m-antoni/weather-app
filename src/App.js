import React, { useReducer, createContext } from 'react';
import 'bootswatch/dist/materia/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Wheather from './components/Pages/Wheather';

export const WeatherForecastContext = createContext();

const initialState = {
    loading: false,
    form: false,
    forecast: null,
    forecast_two: null, 
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {

            }
          break;   
        default:
          return initialState;
          break;
    }
}

function App() {

  const  [state, dispatch] = useReducer(reducer, initialState);


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
