import React, { useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './component/styles.css';

function App() {
  const [mode, setMode] = useState('light')
  const [display, setDisplay] = useState('flex')
  function handleMode() {
    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }

  function handleOnclick() {
    if (window.innerWidth < 767) {
      if (display === 'none') {
        setDisplay("flex")
      }
      else {
        setDisplay("none")
      }
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 767) {
      setDisplay("flex")
    }
    else {
      setDisplay('none')
    }
    if (window.innerWidth >= 1000) {
      let elem = document.querySelector(".rohit")
      elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
    }
    else {
      let elem = document.querySelector('.about')
      elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
    }
  })

  window.addEventListener("load", () => {
    if (window.innerWidth < 767) {
      setDisplay("none")
    }
    if (window.innerWidth >= 1000) {
      let elem = document.querySelector(".rohit")
      elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
    }
  })

  let apikey = process.env.REACT_APP_API_KEY

  return (
    <div className="App" style={{
      background: (mode === 'dark' ? 'rgb(10, 15, 20)' : 'rgb(225, 225, 225)'),
      color: 'white'
    }}>
      <Header handleOnclick={handleOnclick} handleMode={handleMode} display={display} />
      <Hero />
      <About mode={mode} />
      <Skills mode={mode} />
      <Projects mode={mode} />
      <Contact mode={mode} apikey={apikey} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
