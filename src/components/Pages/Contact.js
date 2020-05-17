import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="mt-2 text-justify">
                <h1>Contact</h1>
                
                <p>Thank you for using my app Hope you enjoy it. I appreciate any comments.</p>
    

                <h4 className="mt-3">
                    <i className="fa fa-envelope"></i>&nbsp;<a href="mailto:codehive2018@gmail.com" className="text-primary"> michaelantoni.cs@gmail.com</a>
                </h4>
                <h4 className="mt-3">
                    <i className="fab fa-github"></i>&nbsp;<a href="https://github.com/m-antoni" className="text-primary" target="_blank"> github.com/m-antoni</a>
                </h4>

                <div>Created by:&nbsp; Michael Antoni </div>
                <div>App Version: 1.0</div>
            </div>
        </div>
    )
}

export default Contact
