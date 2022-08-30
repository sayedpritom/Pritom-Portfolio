import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const { name, image, title, site, client, server, id } = props.project;
    return (
        <div data-aos="flip-right" data-aos-duration="1000" class="card w-full bg-white shadow-xl text-left">
            <figure className="projectImageContainer" ></figure>
            <div className="relative">
                <div className="screen">
                    <img src={image} className="projectImage" alt="Shoes" />
                </div>
            </div>
            <div class="card-body">
                <h2 class="card-title text-primary">
                    {name}
                </h2>
                <p className="text-gray-600 my-3">{title}</p>
                <div class="card-actions">
                <a target="_blank" href={site}><button class="btn btn-sm btn-outline btn-primary normal-case text-sm ">Live</button></a>
                    {server ?
                        <>
                            <a target="_blank" href={client}><button class="btn btn-sm btn-outline normal-case text-sm ">Client Repo</button></a>
                            <a target="_blank" href={server && server}><button class="btn btn-sm btn-outline normal-case text-sm ">Server Repo</button></a>
                        </>
                        :
                        <a target="_blank" href={client}><button class="btn btn-sm btn-outline normal-case text-sm ">Repository</button></a>
                    }
                </div>
                <hr className="my-2" />
                <Link to={`/project/${id}`} ><button class="btn btn-primary normal-case w-full">View Details</button></Link>
            </div>
        </div>
    );
};

export default Project;