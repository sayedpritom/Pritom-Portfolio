import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <About></About>
            </div>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;