import React from 'react'

function About() {
    return (
        <div className="container">
            <div className="mt-2 text-justify">
                <h1 className="wow fadeInLeft">About</h1>
                <p>
                    A pretty simple straight forward application that lets you search weather forecast by city or country and compare two weather forecast between them.
                    ,application is build using <a href="https://reactjs.org/" target="_blank">React</a> a javascript library for building user-interfaces 
                    together with <a href="https://openweathermap.org/" target="_blank">openwheathermap</a>.
                </p>
            </div>
        </div>
    )
}

export default About
