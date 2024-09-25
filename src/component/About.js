import React from 'react';

function About(props) {
    return (
        <>
            <div id="about" >
                <div className="about" style={{color: (props.mode == 'dark'? 'rgba(250, 236, 236, 0.997)': 'rgba(0, 0, 0, 1)'), background: (props.mode == 'dark' ? 'rgba(0, 0, 0, 1)': 'rgba(255, 255, 255, 1)')}}>
                    <p>
                        <span>
                            welcome to my web page. :)
                        </span>
                    </p>
                    <br />
                    <p>
                        <span>
                            My name is Rohit Singh, and I am preparing for software engineer.
                        </span>
                    </p>
                    <p>
                        <span>
                            I am pursuing BCA from sri dev suman Uttarakhand university. My hobby is playing cricket,
                            football and many
                            physical game, I also love solving puzzles and learning about the world. and i enjoy learning
                            new things.
                        </span>
                    </p>

                </div>
                <img src="photo/rohit2.JPG" alt="" className="rohit"></img>
            </div>
            <div className="about_me" style={{color: (props.mode == 'dark'? 'antiquewhite': 'rgba(0, 0, 0, 1)'), background: (props.mode == 'dark' ? 'rgba(0, 0, 0, 1)': 'rgba(255, 255, 255, 1)')}}>
                <div className="about1"  style={{color: (props.mode == 'dark'? 'rgb(231, 172, 93)' : 'rgb(181, 103, 0)')}}>
                    <div className="detail1">Name:</div>
                    <div className="detail1">S/O:</div>
                    <div className="detail1">DOB:</div>
                    <div className="detail1">Email:</div>
                    <div className="detail1">Add:</div>
                    <div className="detail1">contact:</div>
                </div>
                <div className="about2">
                    <div className="detail2">Rohit Singh</div>
                    <div className="detail2">Devendra Singh</div>
                    <div className="detail2">24-03-2004</div>
                    <a href="kumar.rohitsingh37@gmail.com">kumar.rohitsingh37@gmail.com</a>
                    <div className="detail2">Aurangabad (Bihar)</div>
                    <div className="detail2">6203039479</div>
                </div>
            </div>
        </>
    );
}

export default About;
