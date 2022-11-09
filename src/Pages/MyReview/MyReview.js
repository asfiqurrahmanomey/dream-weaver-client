import React from 'react';
import { Link } from 'react-router-dom';

const MyReview = () => {
    return (
        <div>
            <section className="min-h-screen bg-cover bg-scroll " style={{
                backgroundImage: `url("https://cdn0.weddingwire.in/vendor/3618/3_2/960/jpg/dsc06994-_15_43618-164512839259048.jpeg")`
            }}>
                <div className="flex flex-col min-h-screen bg-scroll ">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="lg:w-1/2 lg:mx-6">
                                <h1 className="text-3xl text-white font-semibold capitalize lg:text-5xl">Submit Your Review</h1>
                                <p className="max-w-xl mt-6 mb-4 text-white">
                                    Your review is valuable to us its inspire us to work hard and give more dedication. We Always focus on customer satisfaction let us know how was our service .
                                </p>

                                <Link to={'/allServices'} className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-opacity-50">
                                    All Services
                                </Link>
                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-600 shadow-2xl rounded-xl lg:max-w-xl">
                                    <h1 className="text-2xl font-medium text-white">Submit Review</h1>
                                    <form className="mt-6 bg-scroll ">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input name="name" type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input name="email" type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input type="file" id="img" name="img" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                        </div>

                                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-md  focus:outline-none focus:ring hover:bg-orange-600 focus:ring-opacity-50">
                                            get in touch
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyReview;