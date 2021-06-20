import React from 'react';
import './Projects.css';
import countries from './countries.jpg';
import smartbrain from './face.jpg';

const Projects = () => {
    return (
        <div className="card-deck">
            <div className="card">
                <img className="imageSize" src={countries} alt="Card"/>
                <div className="card-body">
                <h5 className="card-title">Countries App</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="buttonsBox">
                <a className='seeLive' href="https://countries-app-junior.netlify.app/" target="_blank" rel="noreferrer">
                See Live
                </a>
                <a className='sourceCode' href="https://github.com/juniormr/coutries-app.git" target="_blank" rel="noreferrer">
                Source Code
                </a>
                </div>
                </div>
            </div>
            <div className="card">
                <img className="imageSize" src={smartbrain} alt="Card"/>
                <div className="card-body">
                <h5 className="card-title">Face Recognition App</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <div className="buttonsBox">
                <a className='seeLive' href="https://supersmart-brain.herokuapp.com/" target="_blank" rel="noreferrer">
                See Live
                </a>
                <a className='sourceCode' href="https://github.com/juniormr/smart-brain.git" target="_blank" rel="noreferrer">
                Source Code
                </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
