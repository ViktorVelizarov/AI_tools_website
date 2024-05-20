"use client"

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '@/app/globals.css';  

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full lg:p-16 lg:pt-5 p-4 z-50 ">
            <nav className="p-4 rounded-lg shadow-lg flex justify-between items-center bg-gray-800">
                <img
                    src="https://static.wixstatic.com/media/1f0c05_16ebb10fb8914769a49e730d2b619bf4~mv2.png/v1/fill/w_325,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/agency-white-pad.png"
                    alt="Logo"
                    className="h-10"
                />
                <div className="block lg:hidden">
                    <button
                        onClick={toggleDropdown}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex justify-around space-x-8">
                    <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#ai-applications" className="text-white hover:text-gray-300">AI Applications</a></li>
                    <li><a href="#gpt-tools" className="text-white hover:text-gray-300">GPT Tools</a></li>
                    <li><a href="#ai-trends" className="text-white hover:text-gray-300">AI Trends</a></li>
                    <li><a href="#events" className="text-white hover:text-gray-300">Events</a></li>
                    <li><a href="#contacts" className="text-white hover:text-gray-300">Contacts</a></li>
                </ul>
                <ul className="hidden lg:flex justify-around space-x-5 pr-4">
                    <li><a href="#login" className="text-white hover:text-gray-300">Login</a></li>
                    <li><a href="#signup" className="text-white hover:text-gray-300">Sign up</a></li>
                </ul>
            </nav>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="dropdown"
                unmountOnExit
            >
                <div className="lg:hidden mt-2 bg-gray-800 rounded-lg shadow-lg">
                    <ul className="flex flex-col items-start space-y-2 p-4">
                        <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#ai-applications" className="text-white hover:text-gray-300">AI Applications</a></li>
                        <li><a href="#gpt-tools" className="text-white hover:text-gray-300">GPT Tools</a></li>
                        <li><a href="#ai-trends" className="text-white hover:text-gray-300">AI Trends</a></li>
                        <li><a href="#events" className="text-white hover:text-gray-300">Events</a></li>
                        <li><a href="#contacts" className="text-white hover:text-gray-300">Contacts</a></li>
                        <li><a href="#login" className="text-white hover:text-gray-300">Login</a></li>
                        <li><a href="#signup" className="text-white hover:text-gray-300">Sign up</a></li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Navbar;
