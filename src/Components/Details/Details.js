import React, { useEffect, useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import fakeData from '../../fakeData/fakeData';
import logo from '../../assets/Images/Logo/Full Logo.png';

const Details = () => {

    const { id } = useParams();
    const [project, setProject] = useState(fakeData.find(fakeData => fakeData.id === parseInt(id)));

    const { name, image, title, description, site, client, server, img1, img2, img3, img4 } = project;
    console.log(img1, img2, img3, img4);

    return (
        <>
            <div class="bg-base-100 ">
                <div className="navbar max-w-7xl mx-auto">
                    <div class="flex-1">
                        <Link to="/" class="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
                    </div>
                    <div class="flex-none">
                        <Link to="/#projects">
                            <button class="btn btn-square btn-ghost">
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="mx-10 py-20">
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <div className="m-5">
                            <div class="rounded-lg carousel w-full">
                                <div id="slide1" class="carousel-item relative w-full sliders">
                                    <img src={img1} class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" class="btn btn-circle">❮</a>
                                        <a href="#slide2" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" class="carousel-item relative w-full sliders">
                                    <img src={img2} class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" class="btn btn-circle">❮</a>
                                        <a href="#slide3" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                {img3 &&
                                    <div id="slide3" class="carousel-item relative w-full sliders">
                                        <img src={img3} class="w-full" />
                                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide2" class="btn btn-circle">❮</a>
                                            <a href="#slide4" class="btn btn-circle">❯</a>
                                        </div>
                                    </div>}
                                {img4 &&
                                    <div id="slide4" class="carousel-item relative w-full sliders">
                                        <img src={img4} class="w-full" />
                                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide3" class="btn btn-circle">❮</a>
                                            <a href="#slide1" class="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div class="card-body text-center lg:mx-20">
                            <h2 className="text-3xl font-medium uppercase my-2 text-primary font-bold">{name}</h2>
                            <p className="text-xl font-medium my-2">{title}</p>
                            <p className="text-gray-600 leading-8 my-2">{description}</p>

                            <div>
                            <a target="_blank" href={site}><button class="btn btn-sm btn-outline btn-primary normal-case text-sm w-full lg:w-1/2 mx-auto h-10 mb-1 flex items-center">Live Website</button></a> <br />
                                {server ?
                                    <>
                                        <a target="_blank" href={client}><button class="btn btn-sm btn-outline normal-case text-sm w-full lg:w-1/2 mx-auto h-10 mb-1 flex items-center">Github Client Side</button></a> <br />
                                        <a target="_blank" href={server && server}><button class="btn btn-sm btn-outline normal-case text-sm w-full lg:w-1/2 mx-auto h-10 mb-1 flex items-center">Github Server Side</button></a> <br />
                                    </>
                                    :
                                    <a target="_blank" href={client}><button class="btn btn-sm btn-outline normal-case text-sm w-full lg:w-1/2 mx-auto h-10 mb-1 flex items-center">Github Website Code</button></a>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;