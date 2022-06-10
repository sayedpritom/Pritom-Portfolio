import React from 'react';
import './Projects.css';
import img1 from '../../../assets/Images/Projects/1.jpg'
import img2 from '../../../assets/Images/Projects/2.jpg'
import img3 from '../../../assets/Images/Projects/3.jpg'

const Projects = () => {
    return (
        <div id="projects" className="bg-lightGray py-1 my-5 max-w-7xl mx-auto">
            <div className="my-5 max-w-7xl mx-auto">
                <div className="relative flex items-center justify-center mt-10  mb-20">
                    <h1 className='about-outline uppercase text-9xl text-lightGray font-extra-bold'>Gallery</h1>
                    <h2 className='absolute uppercase font-bold text-4xl text-primary uppercase'>My Projects</h2>
                </div>
                {/* Project 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 mb-20">
                    <div class="card w-full bg-base-100 shadow-xl text-left">
                        <figure className="projectImageContainer" ></figure>
                        <div className="relative">
                            <div className="screen">
                                <img src={img1} className="projectImage" alt="Shoes" />
                            </div>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title text-primary">
                                Max Motor
                            </h2>
                            <p className="text-gray-600 my-3">This Is an Electric Parts Manufacturer Company Website</p>
                            <div class="card-actions">
                                <button class="btn btn-sm btn-outline btn-primary normal-case text-sm "><a target="_blank" href="https://manufacturer-website-af272.web.app/">Live Website</a></button>
                                <button class="btn btn-sm btn-outline normal-case text-sm "><a target="_blank" href="https://github.com/sayedpritom999/Manufacturer-website-client">Github Client Side</a></button>
                                <button class="btn btn-sm btn-outline normal-case text-sm "><a target="_blank" href="https://github.com/sayedpritom999/manufacturer-website-server">Github Server Side</a></button>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div class="card w-full bg-base-100 shadow-xl text-left">
                        <figure className="projectImageContainer" ></figure>
                        <div className="relative">
                            <div className="screen">
                                <img src={img2} className="projectImage" alt="Shoes" />
                            </div>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title text-primary">
                                Ware House
                            </h2>
                            <p className="text-gray-600 my-3">Shoe Company warehouse management website</p>
                            <div class="card-actions">
                                <button class="btn btn-sm btn-outline btn-primary normal-case text-sm "><a target="_blank" href="https://warehouse-eebb3.web.app/">Live Website</a></button>
                                <button class="btn btn-sm btn-outline normal-case text-sm "><a target="_blank" href="https://github.com/sayedpritom999/warehouse-management-client-">Github Client Side</a></button>
                                <button class="btn btn-sm btn-outline normal-case text-sm "><a target="_blank" href="https://github.com/sayedpritom999/warehouse-management-server">Github Server Side</a></button>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div class="card w-full bg-base-100 shadow-xl text-left">
                        <figure className="projectImageContainer" ></figure>
                        <div className="relative">
                            <div className="screen">
                                <img src={img3} className="projectImage" alt="Shoes" />
                            </div>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title text-primary">
                                Honda
                            </h2>
                            <p className="text-gray-600 my-3">Random Car Picker Website</p>
                            <div class="card-actions">
                                <button class="btn btn-sm btn-outline btn-primary normal-case text-sm "><a target="_blank" href="https://manufacturer-website-af272.web.app/">Live Website</a></button>
                                <button class="btn btn-sm btn-outline normal-case text-sm "><a target="_blank" href="https://github.com/sayedpritom999/lucky-one-Random-Item-Picker-">Github Website Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;