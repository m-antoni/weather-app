import React from 'react'

export default function Home() {
    return (
        <div className="container">
            <div className="row section">
                <div className="col 8 offset-s1">
                    <div id="openweathermap-widget-11"></div>
                </div>
                <div className="col 4">
                    <div id="openweathermap-widget-cebu"></div>
                </div>
            </div>
            <div className="row section">
                <div className="col 4 offset-s1">
                    <div id="openweathermap-widget-davao"></div>
                </div>
            </div>
        </div>
    )
}
