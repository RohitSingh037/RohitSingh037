import React from 'react';

function Projects(props) {
    return (
        <section id="project" style={{background: (props.mode == 'dark' ? '#201f1f' : '#ffffff')}}>
            <h2 style={{color: (props.mode == 'dark' ? 'rgb(255, 235, 122)' : 'rgb(0, 183, 255)')}}>My Project</h2>
            <div className="projects">
                <div><img src="photo/weatherapp.png" alt="" />
                    <a href="https://github.com/RohitSingh037/Weather_App" target="_blank" className="bottom-left">Source</a><a
                        href="https://rohitsingh037.github.io/Weather_App/" target="_blank" className="bottom-right">Live</a>
                </div>
                <div><img src="photo/analogue.png" alt="" />
                    <a href="https://github.com/RohitSingh037/analog_clock/" target="_blank"
                        className="bottom-left">Source</a><a href="https://rohitsingh037.github.io/analog_clock/"
                            target="_blank" className="bottom-right">Live</a>
                </div>
                <div><img src="photo/independenceday.png" alt="" />
                    <a href="https://github.com/RohitSingh037/IndependenceDay/" target="_blank"
                        className="bottom-left">Source</a><a href="https://rohitsingh037.github.io/IndependenceDay/"
                            target="_blank" className="bottom-right">Live</a>
                </div>
                <div><img src="photo/rps.png" alt="" />
                    <a href="https://github.com/RohitSingh037/Rock_Paper_Scissor/" target="_blank"
                        className="bottom-left">Source</a><a href="https://rohitsingh037.github.io/Rock_Paper_Scissor/"
                            target="_blank" className="bottom-right">Live</a>
                </div>
                <div><img src="photo/ttt.png" alt="" />
                    <a href="https://github.com/RohitSingh037/tic_tac_toe/" target="_blank" className="bottom-left">Source</a><a
                        href="https://rohitsingh037.github.io/tic_tac_toe/" target="_blank" className="bottom-right">Live</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
