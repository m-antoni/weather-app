import React, { Fragment, useContext } from 'react'
import Spinner from '../Layouts/Spinner';
import { WeatherForecastContext } from '../../App';

function Search() {

    const { state: { forecast, loading, value, hidden_form }, dispatch, handleDateFormat, handleFormSubmit } = useContext(WeatherForecastContext);
    
    return (
        <Fragment>
            <div className="container">
                {
                    !hidden_form && 
                    <div className="row">
                        <div className="col-md-8 offset-md-2">  
                            <form className="mt-4 mb-5">
                                <div className="form-group col-12 col">
                                    <h5>Search for "City" or "Country"</h5>
                                    <input onChange={e => dispatch({ type: 'HANDLE_INPUT', payload: e.target.value })} type="text" className="form-control" id="inputValid" value={value} placeholder="eq. London"/>
                                </div>
                                <div className="form-group col-12 col">
                                    <button onClick={handleFormSubmit} className="btn btn-outline-primary mt-2"><i className="fa fa-search"></i> Search</button>
                                    &nbsp;&nbsp;
                                    <a href="/" className="btn btn-dark text-white mt-2"><i className="fa fa-arrow-left"></i> Back</a>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                
                {
                    loading ? <Spinner/> : forecast &&
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card mt-3">
                                <div className="card-body bg-dark text-white">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-10">
                                            <div className="pb-md-4 ml-md-4">
                                                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}/>
                                                <h1><strong>{forecast.main.temp} &#8451;</strong></h1>
                                                <h4 className="text-success">{forecast.weather[0].main}</h4>
                                                <div>{forecast.weather[0].description}</div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6 col-10 pl-1 pt-2">
                                            <h2><span className="text-secondary"><i className="fa fa-map-marker-alt"></i> </span> <span className="text-warning">{forecast.name}, {forecast.sys.country}</span></h2>
                                            <div><span className="text-secondary">Geolocation:</span> <span>{forecast.coord.lon}</span>, <span>{forecast.coord.lat}</span></div>
                                            <div><span className="text-secondary">Humidity:</span> {forecast.main.humidity} %</div>
                                            <div><span className="text-secondary">Pressure:</span> {forecast.main.pressure} hPa</div>  
                                            <div><span className="text-secondary">Wind:</span> {forecast.wind.speed} m/s</div>
                                            <br/>
                                            <div><span className="text-secondary">Sunrise:</span> <span>{handleDateFormat('time',forecast.sys.sunrise)}</span> </div>
                                            <div><span className="text-secondary">Sunset:</span> <span>{handleDateFormat('time',forecast.sys.sunset)}</span></div>
                                            <div><span className="text-secondary">Date: </span>{handleDateFormat('date',forecast.dt)}</div>

                                            <button onClick={() => dispatch({ type: 'SEARCH_AGAIN' })} className="btn btn-primary mt-2"><i className="fa fa-search"></i> Search Again</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </Fragment>
    )
}

export default Search
