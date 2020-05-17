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
import Compare from './components/Pages/Compare';

export const WeatherForecastContext = createContext();


const initialState = {
    search_one: '',
    search_two: '',
    loading: false,
    hidden_form: false,
    forecast_one: null,
    forecast_two: null, 
    api_key: `${process.env.REACT_APP_API_KEY}`
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SINGLE':
            return {
                ...state,
                search_one: '',
                search_two: '',
                loading: false,
                hidden_form: true,
                forecast_one: action.payload,
            }
        case 'FETCH_MULTI':
            return {
                ...state,
                search_one: '',
                search_two: '',
                loading: false,
                hidden_form: true,
                forecast_one: action.payload.one,
                forecast_two: action.payload.two
            }
        case 'HANDLE_INPUT':
            return {
              ...state,
              [action.key]: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload,
                hidden_form: action.payload,
                search_one: '',
                search_two: ''
            }
        case 'SEARCH_AGAIN':
            return {
                ...state,
                search_one: '',
                search_two: '',
                loading: false,
                hidden_form: false,
                forecast_one: null,
                forecast_two: null,
            }
        default:
          return initialState;
    }
}

function App() {

  const  [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = status => e => {
        e.preventDefault();
        dispatch({ type: 'LOADING', payload: true});
        switch (status) {
            case 'single':
                if(state.search_one == '') 
                {
                    ToastDanger('Please fill in empty field');
                    dispatch({ type: 'LOADING', payload: false});
                }
                else
                {
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.search_one}&units=metric&appid=${state.api_key}`)
                        .then(res => {
                            dispatch({type: 'FETCH_SINGLE', payload: res.data })
                        })
                        .catch(err => {
                            dispatch({ type: 'LOADING', payload: false});
                            ToastDanger('City or Country is not found!');
                        });
                }
                break;
            case 'multi':

                if(state.search_one == '' || state.search_two == '')
                {
                    ToastDanger('Please fill in empty field');
                    dispatch({ type: 'LOADING', payload: false});

                }
                else
                {
                    const one = `https://api.openweathermap.org/data/2.5/weather?q=${state.search_one}&units=metric&appid=${state.api_key}`;
                    const two = `https://api.openweathermap.org/data/2.5/weather?q=${state.search_two}&units=metric&appid=${state.api_key}`;
            
                    const REQUEST_ONE = axios.get(one);
                    const REQUEST_TWO = axios.get(two);
                    
                    axios.all([REQUEST_ONE, REQUEST_TWO])
                        .then(
                            axios.spread((...res) => {
                                const response_one = res[0].data;
                                const response_two = res[1].data;
                                dispatch({ type: 'FETCH_MULTI', payload: { one: response_one, two: response_two } });
                                console.log(response_one, response_two);
                            })
                        )
                        .catch( err => {
                            console.log(err);
                            dispatch({ type: 'LOADING', payload: false});
                            ToastDanger('City or country is not found');
                        })
                }
                break;
            default:
                break;
        }
  }

  const handleOnChange = e =>  dispatch({type: 'HANDLE_INPUT', key: e.target.name, payload: e.target.value });

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
      handleDateFormat,
      handleOnChange,
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
                  <Route exact path="/compare" component={Compare}/>
              </Switch>
          </Router>
      </WeatherForecastContext.Provider>
  );
}

export default App;
