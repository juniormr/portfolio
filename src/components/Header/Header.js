import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>Hi, I'm Junior M</h1>
                <h2>I'm a
                <Typed
                className="typed-text"
                strings={[` Frontend Developer`,`n Electronic Engineer`]}
                typeSpeed={70}
                backSpeed={80}
                loop
                />
                </h2>
            </div>
        </div>
    )
}

export default Header;
