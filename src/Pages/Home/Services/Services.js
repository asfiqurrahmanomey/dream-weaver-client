import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div>
                <div className='text-center mt-20'>
                    <h2 className="text-5xl font-bold my-6">
                        Our total Service: {services.length}
                    </h2>
                    <p className='mb-6'>
                        It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. <br /> Our pride is in offering the best shoots as we help you tell your story in photos.
                    </p>
                </div>

                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 my-20">
                    <div className="">
                        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">

                            </div>

                            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

                                <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                    <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="" >
                        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">

                            </div>

                            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

                                <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                    <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="" >
                        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">

                            </div>

                            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

                                <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                    <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;