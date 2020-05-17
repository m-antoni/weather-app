import React, { Fragment} from 'react'
import TypeIt from 'typeit-react';
export default function Home() {
    return (
        <Fragment>
            <div class="container text-center my-5">
                <h1 class="display-4 wow zoomIn"><i className="fa fa-cloud-sun-rain fa-2x"></i>   </h1>
                <p class="lead py-3"><TypeIt options={{ loop: true, pause: 300, speed: 50, strings: [ "Search weather forecast around the world"]}}></TypeIt></p>
                <a href="/search" className="btn btn-primary m-1 wow fadeInLeft">search now</a> &nbsp;
                <a href="/compare" className="btn btn-outline-dark m-1 wow fadeInUp">compare forecasts</a>
                <div className="pt-3">Created by: <span className="font-weight-bolder">Michael Antoni</span></div>
            </div>
        </Fragment>
    )
}
