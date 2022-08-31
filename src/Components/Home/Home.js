import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

import { useEffect, useState } from 'react';
import Loading from './Loading/Loading';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }

    useEffect(() => {
        window.addEventListener("load", handleLoading());
        return () => window.removeEventListener("load", handleLoading());
    }, [])

    return (
        <section>
            <Loading isLoading={isLoading} />
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <About></About>
            </div>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </section>
    );
};

export default Home;