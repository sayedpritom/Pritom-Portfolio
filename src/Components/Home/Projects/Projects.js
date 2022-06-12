import React, { useEffect, useState } from 'react';
import './Projects.css';
import img1 from '../../../assets/Images/Projects/1.jpg'
import img2 from '../../../assets/Images/Projects/2.jpg'
import img3 from '../../../assets/Images/Projects/3.jpg'
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <div id="projects" className="bg-lightGray py-1 my-5">
            <div className="my-5 max-w-7xl mx-auto">
                <div className="relative flex items-center justify-center mt-10  mb-20">
                    <h1 className='about-outline uppercase text-7xl lg:text-9xl text-lightGray font-extra-bold'>Gallery</h1>
                    <h2 className='absolute uppercase font-bold text-3xl lg:text-4xl text-primary uppercase'>My Projects</h2>
                </div>
                {/* Project 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 mb-20">
                    {
                        projects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;