import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer >
            <div className="container d-flex justify-content-center p-1">
                <a className='social-b' href="https://github.com/juniormr/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} size="3x" style={{color:"#2C3B38"}} />
                </a>
                <a className='social-b' href="https://www.linkedin.com/in/junior-marquez/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="3x" style={{color:"#2C3B38"}} />
                </a>
            </div>
            <div  className="container d-flex justify-content-center">
            <div className="line">
                © 2021
                <a className="copy text-black" style={{textDecoration:"none"}} href="https://github.com/juniormr/" target="_blank" rel="noreferrer">Junior Marquez</a>
                - Built with Bootstrap, React
            </div>
            </div>
        </footer>
    )
}

export default Footer;

