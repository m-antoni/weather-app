import React from 'react';

function Navbar() {
    return (
        <nav>
            <div class="nav-wrapper container">
                <a href="/" class="brand-logo">Wheather App</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar