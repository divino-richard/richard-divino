import React from 'react';
import './About.css';
import ME from '../../assets/me.jpg';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="Richard"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <h5>Experience</h5>
                        <small>NeoDocto Internship</small>
                    </article>
                    <article className='about__card'>
                        <h5>Hobbies</h5>
                        <small>Traveling, Sound Trip, & Coding</small>
                    </article>
                    <article className='about__card'>
                        <h5>Education</h5>
                        <small>North Easter Mindanao State University <br/> CS</small>
                    </article>
                </div>
                <p>
                    I am a senior Computer Science student at NEMSU - Lianga Campus! I am currently pursuing a career as a Software
                    Engineer. I have a strong passion for both front-end
                    and back-end development. I love to learn and I am always looking to learn
                    and experiment with new technologies!
                </p>

                <a href="#contact" className='btn btn-primary'>Contact Me</a>
            </div>
        </div>
    </section>
  );
}

export default About;