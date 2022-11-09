import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="">
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className="w-full h-64 bg-center bg-cover rounded-lg shadow-md">
                            <img src={img} alt="" className='rounded-lg h-64 w-full hover:scale-110 transition duration-300 ease-in-out' />
                        </div>
                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800 max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                            <h3 className="py-2 font-bold tracking-wide text-center text-white uppercase">{title}</h3>
                            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                <span className="font-bold text-gray-800 dark:text-gray-200">${price}</span>
                                <Link to={'/allServices'} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded   focus:outline-none hover:bg-orange-600">More Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;