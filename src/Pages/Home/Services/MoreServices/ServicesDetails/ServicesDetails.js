import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ServicesDetails = () => {
    const { title, img, description, price, rating, photographer } = useLoaderData();
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                {title}
                            </h2>
                            <p className="text-base md:text-lg text-justify">
                                {description}
                            </p>
                        </div>
                        <div className="grid  sm:grid-cols-2">
                            <div className=" bg-white border-l-4 shadow-sm">
                                <div className="p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Photographer:  {photographer}
                                    </h6>
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Price:  ${price}
                                    </h6>
                                    <div className="mb-4 font-semibold leading-5 flex align-middle">
                                        <p className=''>Rating: {rating}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-orange-600 w-6 h-6 ml-2 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <button>
                                        <Link to={'/myreview'} className='text-white bg-gray-700 p-2 rounded-lg hover:text-orange-200 mb-2'>My Review</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded-xl shadow-lg sm:h-96"
                            src={img}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;