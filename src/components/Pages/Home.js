import React, { Fragment} from 'react'
import TypeIt from 'typeit-react';
export default function Home() {
    return (
        <Fragment>
            <div class="container text-center mb-5">
                <div>
                    <img src="assets/img/weather.gif" className="img-fluid" alt="img" width="300px"/>
                </div>
                <p class="lead py-3 text-white"><TypeIt options={{ loop: true, pause: 300, speed: 50, strings: [ "Search weather forecast around the world"]}}></TypeIt></p>
                <a href="/search" className="btn btn-dark m-1 wow fadeInLeft">search now</a> &nbsp;
                <a href="/compare" className="btn btn-light m-1 wow fadeInUp">compare forecasts</a>
                <div className="pt-3 text-white">Created by: <span className="font-weight-bolder">Michael Antoni</span></div>
            </div>
        </Fragment>
    )
}
