import React from 'react';
import Typewriter from 'typewriter-effect';
import './Banner.css';

import bannerImage from '../../../assets/Images/Banner-main-image.png';
import bg from '../../../assets/Images/banner-bg.png'
import twitter from '../../../assets/Images/Social-Icons/icons8-twitter.svg'
import github from '../../../assets/Images/Social-Icons/icons8-github.svg'
import linkedIn from '../../../assets/Images/Social-Icons/icons8-linkedin.svg'

const Banner = () => {
    return (
        <div id="home" className="banner" style={{ backgroundImage: `url(${bg})` }}>
            <div class="max-w-6xl mx-auto px-10 xl:px-0">
                <div className="flex flex-wrap md:flex-nowrap banner-body justify-between items-center">
                    <div data-aos="fade-right" className="text-left">
                        <p className="text-xl font-bold my-5">HELLO! I'M </p>
                        <p class="my-name">Sayed Pritom</p>
                        <div className="x-title my-5">
                            <Typewriter className="text-xl font-bold my-5"
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('front end developer')
                                        .pauseFor(2000)
                                        .deleteAll(30)
                                        .typeString('React.JS developer')
                                        .pauseFor(2000)
                                        .deleteAll(30)
                                        .start();
                                }}
                            />
                        </div>
                        <div class="banner-bottom-line">
                        </div>
                    </div>
                    <div className="mt-20"><img src={bannerImage} alt="Album" /></div>
                    <ul data-aos="fade-left" className="social-icons">
                        <li><a target="_blank" href="https://twitter.com/sayed_pritom"><img src={twitter} alt="" /></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/sayed-pritom/"><img src={linkedIn} alt="" /></a></li>
                        <li><a target="_blank" href="https://github.com/sayedpritom999"><img src={github} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;