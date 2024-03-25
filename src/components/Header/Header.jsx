import React from 'react'
import './Header.css'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg nav-bar-color">
            <div class="container-fluid bar">
                <a class="navbar-brand nav-bar-text">ACCA</a>
                <button class="navbar-toggler tagle-button ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <a class="nav-link  nav-bar-text" aria-current="page" href="#">Become ACCA</a>
                        <a class="nav-link nav-bar-text" href="#">WhyChoose us</a>
                        <a class="nav-link nav-bar-text" href="#">Learning</a>
                        <a class="nav-link nav-bar-text" href="#">Kick off</a>
                        <a class="nav-link nav-bar-text" href="#">Placement</a>
                        <a class="nav-link nav-bar-text more" href="#">More Details</a>
                        
                    </div>
                </div>
                <div className='button'>
                    <button className='btn btn-primary nav-bar-text '>more details</button>
                </div>

            </div>
        </nav>
    )
}

export default Header