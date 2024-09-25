import React from 'react';

function Contact(props) {
    return (
        <section id="contact" style={{ background: (props.mode === 'dark' ? '#201f1f' : '#ffffff') }}>
            <h2 style={{ color: (props.mode === 'dark' ? 'rgb(255, 235, 122)' : 'rgb(0, 183, 255)') }}>Get in touch</h2>
            <form style={{ color: (props.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)') }} id="contactForm" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={props.apikey}></input>
                <label htmlFor="name">Name:</label>
                <input style={{ color: (props.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'), background: (props.mode === 'dark' ? '#201f1f' : '#ffffff') }} type="text" id="name" name="name" placeholder="Enter your name" required />

                <label htmlFor="email">Email:</label>
                <input style={{ color: (props.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'), background: (props.mode === 'dark' ? '#201f1f' : '#ffffff') }} type="email" id="email" name="email" placeholder="Enter your email" required />

                <label htmlFor="message">Message:</label>
                <textarea style={{ color: (props.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'), background: (props.mode === 'dark' ? '#201f1f' : '#ffffff') }} id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
