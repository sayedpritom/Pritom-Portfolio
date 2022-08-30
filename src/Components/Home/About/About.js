import React from 'react';
import Navbar from './About.css';
import image from '../../../assets/Images/Wavy_Tech-21_Single-06.jpg'
const About = () => {
    return (
        <div id="about" className="py-5">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="relative flex items-center justify-center my-20">
                <h1 className='about-outline uppercase text-7xl lg:text-9xl text-white font-extra-bold'>About</h1>
                <h2 className='absolute uppercase font-bold text-3xl lg:text-4xl text-primary'>About Me</h2>
            </div>
            <div>
                <div data-aos="zoom-in-up" class="card lg:card-side">
                    <figure><img src={image} alt="Album" /></figure>
                    <div class="card-body text-left text-gray-600 font-normal leading-8">
                        <h2 class="text-3xl font-bold my-3 text-primary uppercase">MERN Stack & Junior Front-End Web Developer</h2>
                        <p>
                            Hi!, I’m Pritom, from a small village called Sakowa. I've learned the necessary skills as a junior web developer & did a few projects. Apart from that, I also have a bit of experience working as a freelance graphic designer. But my interest in coding made me shift from the path of designing to programming.
                            I'm still a student. Doing my Hons degree in English literature.</p>
                        <h3 className="text-2xl uppercase font-bold mt-5">Here are the skills I've gained:</h3>
                        <hr className="mb-5" />
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <h3 className="text-gray-600 uppercase font-bold"> Expert In –</h3>
                                <p>
                                    HTML, CSS, Bootstrap, Tailwind, Daisy UI, React Bootstrap
                                    JavaScript, ES6, React, React Router, React Hooks, Rest API, React Query, React hook form,
                                    React, rechart, React-Query, Axios,
                                    React-router,
                                </p>
                            </div>
                            <div>
                                <h3 className="text-gray-600 uppercase font-bold">Comfortable With –</h3>
                                <p>
                                    Node, Node-Express, Nodemon, Dotenv, Jsonwebtoken,
                                    Firebase,
                                    MongoDB,
                                </p>
                            </div>
                        </div>
                        <div class="card-actions">
                            <a href='https://docs.google.com/document/d/1L4_rjqGeM9qeIDjgEf0ouU7gQnYoo49zP-wQlKXzylY/edit#heading=h.ofli7lu20jj5' target="_blank">
                                <button class="btn btn-outline btn-primary my-3">Download Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;