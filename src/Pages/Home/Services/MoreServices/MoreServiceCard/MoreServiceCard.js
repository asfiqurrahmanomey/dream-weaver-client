import React from 'react';
import { Link } from 'react-router-dom';

const MoreServiceCard = ({ services }) => {
    const { _id, title, img, description, price, rating, photographer } = services;
    console.log(services);
    return (
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <Link href="#" class="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/1.jpg" class="max-h-40 w-full object-cover" />
                        <div class="bg-white dark:bg-gray-800 w-full p-4">
                            <p class="text-indigo-500 text-md font-medium">
                                Video
                            </p>
                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                Title
                            </p>
                            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                Work at home, remote, is the new age of the job, every person can work at home....
                            </p>
                            <div class="flex items-center mt-4">
                                <Link href="#" class="block relative">
                                    <img alt="profile" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                </Link>
                                <div class="flex flex-col justify-between ml-4 text-sm">
                                    <p class="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MoreServiceCard;