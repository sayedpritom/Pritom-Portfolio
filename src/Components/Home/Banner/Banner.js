import React from 'react';
import bannerImage from '../../../assets/Images/Banner-main-image.png';
import bg from '../../../assets/Images/banner-bg.png'
import './Banner.css';

const Banner = () => {
    return (
        <div id="home" className="banner" style={{ backgroundImage: `url(${bg})` }}>
            <div class="max-w-6xl mx-auto px-10 xl:px-0">
                <div className="flex flex-wrap md:flex-nowrap banner-body justify-between items-center">
                    <div className="text-left">
                        <p className="text-xl font-bold my-5">HELLO! I'M </p>
                        <p class="my-name">Sayed Pritom</p>
                        <p className="text-xl font-bold my-5">FRONT END DEVELOPER</p>
                        <div class="banner-bottom-line">
                        </div>
                    </div>
                    <div><img src={bannerImage} alt="Album" /></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;