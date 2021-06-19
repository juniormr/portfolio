import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>Hi, I'm Junior M</h1>
                <Typed
                className="typed-text"
                strings={[`I'm a Frontend Developer`,`I'm an Electronic Engineer`]}
                typeSpeed={70}
                backSpeed={80}
                loop
                />
            </div>
        </div>
    )
}

export default Header;
