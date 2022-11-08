import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerItems = <>
        <Link to={'/'} className="link link-hover font-bold text-lg hover:text-orange-600 hover:text-underline">Home</Link>
        <Link to={'/services'} className="link link-hover font-bold text-lg hover:text-orange-600 hover:text-underline">Service</Link>
        <Link to={'/blog'} className="link link-hover font-bold text-lg hover:text-orange-600 hover:text-underline">Blog</Link>
        <Link to={'/'} className="link link-hover font-bold text-lg hover:text-orange-600 hover:text-underline">Spacial</Link>
    </>
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content">
                <div className="grid grid-flow-col gap-4">
                    {
                        footerItems
                    }
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 ">
                        <Link to={'/'}>
                            <FaFacebook className='w-8 h-8 hover:text-orange-600 '>
                            </FaFacebook>
                        </Link>
                        <Link to={'/'}>
                            <FaGithub className='w-8 h-8 hover:text-orange-600 '></FaGithub>
                        </Link>
                        <Link to={'/'}>
                            <FaLinkedin className='w-8 h-8 hover:text-orange-600 '></FaLinkedin>
                        </Link>
                        <Link to={'/'}>
                            <FaInstagramSquare className='w-8 h-8 hover:text-orange-600 '></FaInstagramSquare>
                        </Link>
                    </div>
                </div>
                <div className='text-lg'>
                    <p className='hover:text-orange-600'>Copyright © 2022 - All right reserved by Asfiqur Rahman</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;