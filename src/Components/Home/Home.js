import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
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
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;