import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({click}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="/#">Junior Marquez</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#487A6E"}}/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ml">
                <li className="nav-item active">
                    <a className="nav-link" href="/#" onClick={()=>click('home')} >Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#" onClick={()=>click('projects')} >Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/#" onClick={()=>click('aboutme')} >About me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/#" onClick={()=>click('contact')} >Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        
    )
}

export default Navbar;