import React, { useReducer, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootswatch/dist/materia/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { ToastDanger } from './components/Pages/_toast';
import axios from 'axios';
import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Search from './components/Pages/Search';

export const WeatherForecastContext = createContext();

const initialState = {
    value: '',
    loading: false,
    hidden_form: false,
    forecast: null,
    forecast_two: null, 
    api_key: `${process.env.REACT_APP_API_KEY}`
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                value: '',
                loading: false,
                hidden_form: true,
                forecast: action.payload,
            }
          break;
        case 'HANDLE_INPUT':
            return {
              ...state,
              value: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SEARCH_AGAIN':
            return {
                ...state,
                value: '',
                loading: false,
                hidden_form: false,
                forecast: null,
            }
        default:
          return initialState;
          break;
    }
}

function App() {

  const  [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = e => {
      e.preventDefault();
      
      if(state.value == '')
      {
          ToastDanger('Please fill in empty field');
      }
      else
      {
          dispatch({ type: 'LOADING', payload: true});
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.value}&units=metric&appid=${state.api_key}`)
              .then(res => {
                  dispatch({type: 'FETCH_SUCCESS', payload: res.data })
              })
              .catch(err => {
                  dispatch({ type: 'LOADING', payload: false});
                  ToastDanger('City or Country is not found!');
              });
      }
  }

  const handleDateFormat = (status, date) => {
      let milliseconds = date * 1000
      let dataObj = new Date(milliseconds);
      let humanReadable;
      if(status == 'time')
      {
          humanReadable = dataObj.toLocaleTimeString()
      }
      else
      {
          humanReadable = dataObj.toDateString();
      }

      return humanReadable;
  }

  const WeatherForecastContextValues = {
      state,
      dispatch,
      handleFormSubmit,
      handleDateFormat
  }
  
  return (
      <WeatherForecastContext.Provider value={WeatherForecastContextValues}>
          <Router>
              <Navbar/>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/search" component={Search}/>
              </Switch>
          </Router>
      </WeatherForecastContext.Provider>
  );
}

export default App;
