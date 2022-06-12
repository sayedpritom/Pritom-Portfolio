import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const { name, image, title, site, client, server, id } = props.project;
    return (
        <div class="card w-full bg-base-100 shadow-xl text-left">
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
                <a target="_blank" href={site}><button class="btn btn-sm btn-outline btn-primary normal-case text-sm ">Live Website</button></a>
                    {server ?
                        <>
                            <a target="_blank" href={client}><button class="btn btn-sm btn-outline normal-case text-sm ">Github Client Side</button></a>
                            <a target="_blank" href={server && server}><button class="btn btn-sm btn-outline normal-case text-sm ">Github Server Side</button></a>
                        </>
                        :
                        <a target="_blank" href={client}><button class="btn btn-sm btn-outline normal-case text-sm ">Github Website Code</button></a>
                    }
                </div>
                <hr className="my-2" />
                <Link to={`/project/${id}`} ><button class="btn btn-primary normal-case w-full">View Details</button></Link>
            </div>
        </div>
    );
};

export default Project;