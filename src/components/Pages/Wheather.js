import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../Layouts/Spinner';
import axios from 'axios';
import { ToastDanger } from './_toast';

function Wheather() {

    const [city, setCity] = useState('');
    const [loading, setLoading ] = useState(false);
    const [weather, setWeather] = useState(null);
    const [api_key] = useState('ac0645b6d4c8f6daa749658ff2158cf9');

    const handleFormSubmit = e => {
        e.preventDefault();
        
        if(city == '')
        {
            ToastDanger('Please fill in empty field');
        }
        else
        {
            setLoading(true);
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
                .then(res => {
                    setWeather(res.data);
                    setLoading(false);
                    setCity('');
                })
                .catch(err => {
                    setLoading(false);
                    ToastDanger('City is either invalid or not found')
                    setCity('');
                    console.log(err);
                });
        }

    }

    const dateFunc = (status, date) => {
        let milliseconds = date * 1000
        let dataObj = new Date(milliseconds);
        let humanReadable;
        if(status == 'time')
        {
            humanReadable = dataObj.toLocaleTimeString()
        }
        else
        {
            humanReadable = dataObj.toLocaleString();
        }

        return humanReadable;
    }

    const handleOnChange = e => {
        setCity(e.target.value);
        setWeather(null);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">  
                        <form className="mt-4 mb-5">
                            <div className="form-group col-12 col">
                                <h5>Search for Cities Wheather Forecast</h5>
                                <input onChange={handleOnChange} type="text" className="form-control" id="inputValid" value={city} placeholder="eq. London"/>
                            </div>
                            <div className="form-group col-12 col">
                                <button onClick={handleFormSubmit} className="btn btn-primary mt-2"><i className="fa fa-search"></i> Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                
                {
                    loading ? <Spinner/> : weather &&
                    <div>
                        <h1 className="text-center"></h1>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="card">
                                    <div className="card-body bg-dark text-white">
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 col-10">
                                                <div className="pb-md-4 ml-md-4">
                                                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                                                    <h1><strong>{weather.main.temp} &#8451;</strong></h1>
                                                    <h4 className="text-success">{weather.weather[0].main}</h4>
                                                    <div>{weather.weather[0].description}</div>
                                                </div>
                                               
                                            </div>
                                            <div className="col-md-6 col-10 pl-1 pt-2">
                                                <h2><span className="text-secondary">City:</span> <span className="text-warning">{weather.name}, {weather.sys.country}</span></h2>
                                                <div><span className="text-secondary">Geolocation:</span> <span>{weather.coord.lon}</span>, <span>{weather.coord.lat}</span></div>
                                                <div><span className="text-secondary">Humidity:</span> {weather.main.humidity} %</div>
                                                <div><span className="text-secondary">Pressure:</span> {weather.main.pressure} hPa</div>  
                                                <div><span className="text-secondary">Wind:</span> {weather.wind.speed} m/s</div>
                                                <br/>
                                                <div><span className="text-secondary">Sunrise:</span> <span>{dateFunc('time',weather.sys.sunrise)}</span> </div>
                                                <div><span className="text-secondary">Sunset:</span> <span>{dateFunc('time',weather.sys.sunset)}</span></div>
                                                <div><span className="text-secondary">Date: </span>{dateFunc('date',weather.dt)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }


                {/* <div className="row justify-content-center">
                    <div className="col-md-8 pb-3 d-none d-md-block">
                        <div id="openweathermap-widget-11"></div>
                    </div>
                    <div className="col-md-4 col-12 pb-3">
                        <div id="openweathermap-widget-cebu"></div>
                    </div>
                    <div className="col-md-4 col-12 pb-3">
                        <div id="openweathermap-widget-vigan"></div>
                    </div>
                    <div className="col-md-4 col-12 pb-3">
                        <div id="openweathermap-widget-bicol"></div>
                    </div>
                    <div className="col-md-4 col-12 pb-3">
                        <div id="openweathermap-widget-davao"></div>
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}

export default Wheather
