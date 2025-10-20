import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="mt-2 text-justify text-white contact-text">
                <h1 className="wow fadeInLeft mt-5 mb-3">Contact</h1>
                
                <p>Thank you for using the app hope you enjoy it. I appreciate any comments.</p>
    
                <div className="mt-3"> <i className="fa fa-envelope"></i>&nbsp;<a href="mailto:codehive2018@gmail.com" className="text-warning"> michaelantoni.cs@gmail.com</a> </div>
                <div> <i className="fab fa-github"></i>&nbsp;<a href="https://github.com/m-antoni" className="text-warning" target="_blank"> github.com/m-antoni</a> </div>
                <div>Created by:&nbsp; Michael Antoni </div>
                <div>App Version: 1.0</div>
            </div>
        </div>
    )
}

export default Contact
