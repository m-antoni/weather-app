import React, { Fragment} from 'react'
import TypeIt from 'typeit-react';
export default function Home() {
    return (
        <Fragment>
            <div class="container text-center mb-5">
                <div>
                    <img src="https://lh3.googleusercontent.com/ogD8EJ413GofX_85vnzkK0CpnGmi3tVWcd_Dh4jGwCmHKEpVuFgrMD72lHhgkLC9dJ-GQQ1mVdvflspWr8-P69qHNLXkhafaq8MV9-T6Getv2Y6qHN5IvQqDEMR3AJ_fm_12sytb=w2400" className="img-fluid" alt="img" width="300px"/>
                </div>
                <p class="lead py-3 text-white"><TypeIt options={{ loop: true, pause: 300, speed: 50, strings: [ "Search weather forecast around the world"]}}></TypeIt></p>
                <a href="/search" className="btn btn-dark m-1 wow fadeInLeft">search now</a> &nbsp;
                <a href="/compare" className="btn btn-light m-1 wow fadeInUp">compare forecasts</a>
                <div className="pt-3 text-white">Created by: <span className="font-weight-bolder">Michael Antoni</span></div>
            </div>
        </Fragment>
    )
}
