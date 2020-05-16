import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="mt-2 text-justify">
                <h1>Contact</h1>
                
                <div>Thank you for using my app Hope you enjoy it. I appreciate any comments.</div>
                <br/>

                <div>Created by:&nbsp; Michael Antoni </div>
                <div>Version: 1.0</div>
                <br/>
                <h6><i className="fa fa-envelope"></i>&nbsp;<a href="mailto:codehive2018@gmail.com" className="text-primary"> michaelantoni.cs@gmail.com</a></h6>
				<h6><i className="fab fa-github"></i>&nbsp;<a href="https://www.github.com/m-antoni" className="text-primary" target="_blank"> www.github.com/m-antoni</a></h6>
				<h6><i className="fab fa-linkedin-in"></i>&nbsp;<a href="https://linkedin.com/in/michaelantoni-cs" className="text-primary" target="_blank"> linkedin.com/in/michaelantoni-cs</a></h6>
            
                <div className="mt-3">
                    <img src="coding.gif" className="img-fluid" alt="coding..."/>
                </div>
            </div>
        </div>
    )
}

export default Contact
