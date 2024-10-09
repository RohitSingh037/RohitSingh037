import React from 'react';

function About(props) {
    return (
        <>
            <div id="about" >
                <div className="about" style={{ color: (props.mode == 'dark' ? 'rgba(250, 236, 236, 0.997)' : 'rgba(0, 0, 0, 1)'), background: (props.mode == 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)') }}>
                    <p>
                        <h4>
                            welcome to my web page. :)
                        </h4>
                    </p>
                    <br />
                    <p>
                        <span>
                        Hi! I’m Rohit Singh, an aspiring software engineer pursuing a BCA at Sri Dev Suman Uttarakhand University.
                        </span>
                    </p>
                    <p>
                        <span>
                        I’m passionate about technology and sports, enjoying cricket, football, and various games. I also love solving puzzles and learning about the world. Continuous learning is important to me, and I’m always eager to expand my skills.
                        </span>
                    </p>
                    <p>
                        <span>
                            Thanks for visiting my page!
                        </span>
                    </p>

                </div>
                <img src="photo/rohit2.JPG" alt="" className="rohit"></img>
            </div>
            <div className="about_me" style={{ color: (props.mode == 'dark' ? 'antiquewhite' : 'rgba(0, 0, 0, 1)'), background: (props.mode == 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)') }}>
                <div className="about1" style={{ color: (props.mode == 'dark' ? 'rgb(231, 172, 93)' : 'rgb(181, 103, 0)') }}>
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
