import React, { Fragment} from 'react'
import TypeIt from 'typeit-react';
export default function Home() {
    return (
        <Fragment>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center my-2">
                    <h1 class="display-4">Wheather App</h1>
                    <p class="lead"><TypeIt options={{ loop: true, pause: 300, speed: 50, strings: [ "Search Wheather Forecast around the world"]}}></TypeIt></p>
                    <a href="wheather" className="btn btn-primary">search now</a>
                </div>
            </div>
        </Fragment>
    )
}
