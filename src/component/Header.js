import React from 'react';

function Header(props) {

    return (
        <header className="main">
            <nav>
                <div>
                    <span className='mx-5'>
                        <i style={{ fontSize: "x-large" }}>Rohit Singh</i>
                    </span>
                    <div>
                        <ul id="list" className={`d-${props.display}`}>
                            <li onClick={() => { props.handleOnclick() }}><a href="#home">Home</a></li>
                            <li onClick={() => { props.handleOnclick() }}><a href="#about">About</a></li>
                            <li onClick={() => { props.handleOnclick() }}><a href="#project">Project</a></li>
                            <li onClick={() => { props.handleOnclick() }}><a href="#contact">Contact</a></li>
                        </ul>
                        <svg id="three-dot" onClick={() => { props.handleOnclick() }} xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </div>
                </div>

                <div className="form-check form-switch" onClick={() => { props.handleMode() }}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                </div>

                {/* <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div> */}
            </nav>

        </header>
    );
}

export default Header;
