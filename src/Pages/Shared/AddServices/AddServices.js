import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    return (
        <div>
            {/* Submit Review Part Start */}
            <section className="min-h-screen bg-no-repeat mt-20 bg-cover" style={{
                backgroundImage: `url("https://image.wedmegood.com/resized/540X/uploads/member/575596/1557337623_PSX_20190508_141812.jpg?crop=0,0,2048,1152")`
            }}>
                <div className="flex flex-col min-h-screen">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="lg:w-1/2 lg:mx-6">
                                <h1 className="text-3xl text-white font-semibold capitalize lg:text-5xl">Add New Service</h1>
                                <p className="max-w-xl mt-6 mb-4 text-white">
                                    If you this we need to add more service to improve our quality then submit your preferable service.
                                </p>

                                <Link to={'/allServices'} className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-opacity-50">
                                    All Services
                                </Link>
                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-600 shadow-2xl rounded-xl lg:max-w-xl">
                                    <h1 className="text-2xl font-medium text-white">Add Service</h1>
                                    <form>
                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                                                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                            </div>

                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                                                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                            </div>

                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                                                <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                            </div>

                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                                                <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                            </div>
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                                                <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                            </div>
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                                                <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                            </div>
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                                                <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                            </div>
                                        </div>

                                        <div className="flex justify-end mt-6">
                                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </section>
        </div>
    );
};

export default AddServices;