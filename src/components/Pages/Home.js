import React, { Fragment} from 'react'
import TypeIt from 'typeit-react';
export default function Home() {
    return (
        <Fragment>
            <div class="jumbotron jumbotron-fluid bg-dark text-white">
                <div class="container text-center my-2">
                    <h1 class="display-4">Weather App</h1>
                    <p class="lead"><TypeIt options={{ loop: true, pause: 300, speed: 50, strings: [ "Search weather forecast around the world"]}}></TypeIt></p>
                    <a href="/wheather" className="btn btn-primary">search city</a> &nbsp;
                    <a href="/compare" className="btn btn-warning text-dark">compare forecasts</a>
                </div>
            </div>
        </Fragment>
    )
}
