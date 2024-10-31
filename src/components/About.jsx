import React from 'react';
import aboutImage from '../assets/aboutPage.svg';

const About = () => (
    <>
        <main className="container">
            <div className="content">
            <h1 className="title">Welcome .</h1>
            <p className="sub-title">This is my first challenge with HTML & CSS.</p>
            </div>
            <div>
            <img src={aboutImage} alt="About Page" />
            </div>
        </main>
        <footer>
            <p>
            This app created by <span>Aon2023</span>
            </p>
        </footer>
    </>
);

export default About;
