import React, { Fragment, useContext } from 'react';
import Spinner from '../Layouts/Spinner';
import { WeatherForecastContext } from '../../App';
 
function Compare() {

    const { state: { forecast_one, forecast_two, loading, value, value2, hidden_form }, handleOnChange, dispatch, handleDateFormat, handleFormSubmit } = useContext(WeatherForecastContext);

    return (
        <Fragment>
            <div className="container">
                {
                    !hidden_form && 
                    <div className="row">
                        <div className="col-md-8 offset-md-2">  
                            <form className="mt-4 mb-5">
                                <div className="form-group col-12 col">
                                    <h5 className="text-white">Compare weather forecast local or international</h5>
                                    <input onChange={handleOnChange} type="text" name="search_one" className="form-control wow fadeInDown text-white" id="inputValid" placeholder="Enter city or country"/>
                                </div>
                                <div className="form-group col-12 col">
                                    <input onChange={handleOnChange} type="text" name="search_two" className="form-control wow fadeInUp text-white" id="inputValid" placeholder="Enter city or country"/>
                                </div>
                                <div className="form-group col-12 col">
                                    <button onClick={handleFormSubmit('multi')} className="btn btn-light mt-2 wow fadeInLeft"><i className="fa fa-search"></i> Search</button>
                                    &nbsp;&nbsp;
                                    <a href="/" className="btn btn-dark text-white mt-2 wow fadeInUp" data-wow-delay="1s"><i className="fa fa-arrow-left"></i> Back</a>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                {
                    loading ? <Spinner/> : ( forecast_one && forecast_two )&&
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card mt-3 bg-dark text-white border-warning">
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-10">
                                            <div className="pb-md-4 ml-md-4">
                                                <img src={`http://openweathermap.org/img/wn/${forecast_one.weather[0].icon}@2x.png`}/>
                                                <h1><strong>{forecast_one.main.temp} &#8451;</strong></h1>
                                                <h4 className="text-success">{forecast_one.weather[0].main}</h4>
                                                <div>{forecast_one.weather[0].description}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-10 pl-1 pt-2">
                                            <h2><span className="text-secondary"><i className="fa fa-map-marker-alt"></i> </span> <span className="text-warning">{forecast_one.name}</span></h2>
                                            <div><span className="text-secondary">Geolocation:</span> <span>{forecast_one.coord.lon}</span>, <span>{forecast_one.coord.lat}</span></div>
                                            <div><span className="text-secondary">Humidity:</span> {forecast_one.main.humidity} %</div>
                                            <div><span className="text-secondary">Pressure:</span> {forecast_one.main.pressure} hPa</div>  
                                            <div><span className="text-secondary">Wind:</span> {forecast_one.wind.speed} m/s</div>
                                            <br/>
                                            <div><span className="text-secondary">Sunrise:</span> <span>{handleDateFormat('time',forecast_one.sys.sunrise)}</span> </div>
                                            <div><span className="text-secondary">Sunset:</span> <span>{handleDateFormat('time',forecast_one.sys.sunset)}</span></div>
                                            <div><span className="text-secondary">Date: </span>{handleDateFormat('date',forecast_one.dt)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 offset-md-2">
                            <div className="card mt-3 mb-4 bg-dark text-white border-warning">
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-10">
                                            <div className="pb-md-4 ml-md-4">
                                                <img src={`http://openweathermap.org/img/wn/${forecast_two.weather[0].icon}@2x.png`}/>
                                                <h1><strong>{forecast_two.main.temp} &#8451;</strong></h1>
                                                <h4 className="text-success">{forecast_two.weather[0].main}</h4>
                                                <div>{forecast_two.weather[0].description}</div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6 col-10 pl-1 pt-2">
                                            <h2><span className="text-secondary"><i className="fa fa-map-marker-alt"></i> </span> <span className="text-warning">{forecast_two.name}</span></h2>
                                            <div><span className="text-secondary">Geolocation:</span> <span>{forecast_two.coord.lon}</span>, <span>{forecast_two.coord.lat}</span></div>
                                            <div><span className="text-secondary">Humidity:</span> {forecast_two.main.humidity} %</div>
                                            <div><span className="text-secondary">Pressure:</span> {forecast_two.main.pressure} hPa</div>  
                                            <div><span className="text-secondary">Wind:</span> {forecast_two.wind.speed} m/s</div>
                                            <br/>
                                            <div><span className="text-secondary">Sunrise:</span> <span>{handleDateFormat('time',forecast_two.sys.sunrise)}</span> </div>
                                            <div><span className="text-secondary">Sunset:</span> <span>{handleDateFormat('time',forecast_two.sys.sunset)}</span></div>
                                            <div><span className="text-secondary">Date: </span>{handleDateFormat('date',forecast_two.dt)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="form-group">
                                <button onClick={() => dispatch({ type: 'SEARCH_AGAIN' })} className="btn btn-light mt-1 wow fadeInUp"><i className="fa fa-search"></i> Search Again</button>
                                &nbsp;&nbsp;
                                <a href="/" className="btn btn-dark mt-2 wow fadeInUp" data-wow-delay="1s"><i className="fa fa-arrow-left"></i> Back</a>
                            </div>
                       
                        </div>
                    </div>
                }

            </div>
        </Fragment>
    )
}

export default Compare
