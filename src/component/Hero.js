import React from 'react';

function Hero() {
    return (
        <div className="hero" id='home'>
            <div className='centred'>
                <h3>Hii, I am Rohit Singh</h3>
                <h2>A Professional web developer</h2>
                <button className="btn btn- bg-primary"><a href="photo/Rohit_Singh_Resume.pdf" download className="download-btn"
                >Download CV
                    <i className="fa fa-fownload"></i>
                </a></button>
            </div>
        </div>
    );
}

export default Hero;
