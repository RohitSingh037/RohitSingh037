import React from 'react';

function Skills(props) {
    return (

        <section id="skills" style={{background: (props.mode == 'dark' ? '#201f1f' : '#ffffff')}}>
            <h2 style={{color: (props.mode == 'dark' ? 'rgb(255, 235, 122)' : 'rgb(0, 183, 255)')}}>skills</h2>
            <div>
                {/* <img src="photo/c.png" alt="c" /> */}
                <img src="photo/c++.png" alt="cpp" />
                <img src="photo/ds.png" alt="Data Structure" />
                <img src="photo/html.jpeg" alt="HTML" />
                <img src="photo/css.png" alt="css" />
                <img src="photo/js.png" alt="javascript" />
                <img src="photo/react.png" alt="react" />
                <img src="photo/nodejs.png" alt="nodejs" />
                <img src="photo/express.png" alt="express" />
                <img src="photo/mongodb.png" alt="mongodb" />
                <img src="photo/fullstack.jpeg" alt="Full stack" />
                <img src="photo/dbms.jpeg" alt="DBMS" />
                {/* <img src="photo/mysql.png" alt="mysql" /> */}
                <img src="photo/github.png" alt="github" />
                {/* <img src="photo/python.jpeg" alt="python" /> */}
            </div>
        </section>
    );
}

export default Skills;
