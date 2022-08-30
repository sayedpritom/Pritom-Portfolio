import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../../assets/Images/Logo/Full Logo.png';
import './Navbar.css';

const Navbar = () => {

    const [colorChanged, setColorChanged] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChanged(true);
        }
        else {
            setColorChanged(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <div class={`flex justify-center items-start fixed top-0 w-full nav-container h-0 ${colorChanged ? " h-[70px!important] pb-3 bg-[#fff] shadow-lg z-10" : ""}`}>
            <div class="navbar max-w-7xl">
                <div class="navbar-start">
                    <Link activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="/" class="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
                </div>
                <div class="navbar-end">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" id="dropdown-content" class="bg-white font-medium menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="home">Home</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="about">About Me</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="projects">My Projects</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="blogs">Blogs</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="contact">Contact</Link></li>
                            <li><a href='https://docs.google.com/document/d/1L4_rjqGeM9qeIDjgEf0ouU7gQnYoo49zP-wQlKXzylY/edit#heading=h.ofli7lu20jj5' target="_blank">Resume</a></li>
                        </ul>
                    </div>
                    <ul class="font-medium menu menu-horizontal p-0 hidden lg:flex">
                        <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="home">Home</Link></li>
                        <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="about">About Me</Link></li>
                        <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="projects">My Projects</Link></li>
                        <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="blogs">Blogs</Link></li>
                        <li><Link activeClass="active" spy={true} smooth={true} offset={-190} duration={500} to="contact">Contact</Link></li>
                        <li><a href='https://docs.google.com/document/d/1L4_rjqGeM9qeIDjgEf0ouU7gQnYoo49zP-wQlKXzylY/edit#heading=h.ofli7lu20jj5' target="_blank">Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;