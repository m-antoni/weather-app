import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../Layouts/Spinner';
import axios from 'axios';

function Wheather() {

    const [city, setCity] = useState('');
    const [loading, setLoading ] = useState(false);
    const [weather, setWeather] = useState(null);
    const [api_key] = useState('ac0645b6d4c8f6daa749658ff2158cf9');

    const handleFormSubmit = e => {
        e.preventDefault();
        setLoading(true);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
            .then(res => {
                setWeather(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
        setCity('');
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


    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">  
                        <form className="mt-4 mb-5">
                            <div className="form-group col-12 col">
                                <h5>Search for Cities Wheather Forecast</h5>
                                <input onChange={e => setCity(e.target.value)} type="text" className="form-control" id="inputValid" value={city} placeholder="eq. London"/>
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
                            <div className="col-md-4 mt-2">
                                <div className="card">
                                    <div className="card-header bg-primary text-white"><h5>General Information</h5></div>
                                    <div className="card-body bg-dark text-white">
                                        <h5><span className="text-secondary">City:</span> <span className="text-warning">{weather.name}</span></h5>
                                        <h5><span className="text-secondary">Code:</span> <span className="text-warning">{weather.sys.country}</span></h5> 
                                        <h5><span className="text-secondary">Geolocation:</span> <span>{weather.coord.lon}</span>, <span>{weather.coord.lat}</span></h5>
                                        <h5><span className="text-secondary">Sunrise:</span> <span>{dateFunc('time',weather.sys.sunrise)}</span> </h5>
                                        <h5><span className="text-secondary">Sunset:</span> <span>{dateFunc('time',weather.sys.sunset)}</span></h5>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-md-4 mt-2">
                                <div className="card">
                                    <div className="card-header bg-primary text-white"><h5>Weather</h5></div>
                                    <div className="card-body bg-dark text-white">
                                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                                        <h5><span className="text-secondary">Weather: </span>{weather.weather[0].main}</h5>
                                        <h5><span className="text-secondary">Description: </span>{weather.weather[0].description}</h5>

                                        <h5><span className="text-secondary">Date: </span>{dateFunc('date',weather.dt)}</h5>
                                   </div>
                                </div>
                            </div>

                            <div className="col-md-4 mt-2">
                                <div className="card">
                                <div className="card-header bg-primary text-white"><h5>Details</h5></div>
                                    <div className="card-body bg-dark text-white">
                                        <h5><span className="text-secondary">Humidity:</span> {weather.main.humidity} %</h5>
                                        <h5><span className="text-secondary">Temperature:</span> {weather.main.temp} &#8451;</h5>
                                        <h5><span className="text-secondary">Feels Like:</span> {weather.main.feels_like} &#8451;</h5>
                                        <h5><span className="text-secondary">Temp Min:</span> {weather.main.temp_min} &#8451;</h5>
                                        <h5><span className="text-secondary">Temp Max:</span> {weather.main.temp_max} &#8451;</h5>
                                        <h5><span className="text-secondary">Wind Speed:</span> {weather.wind.speed} m/s</h5>
                                        <h5><span className="text-secondary">Pressure:</span> {weather.main.pressure} hPa</h5>
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
