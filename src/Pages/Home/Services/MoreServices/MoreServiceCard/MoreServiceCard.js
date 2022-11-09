import React from 'react';
import { Link } from 'react-router-dom';

const MoreServiceCard = ({ allServices }) => {
    const { _id, title, img, description, price, rating, photographer } = allServices;
    return (
        <div>
            <div class="container mx-auto mb-20">
                <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <Link  class="w-full block h-full">
                        <img className='h-64 w-full rounded-t-xl' alt='' src={img} />
                        <div class="bg-white dark:bg-gray-800 w-full p-4 text-justify rounded-b-xl">
                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                {title}
                            </p>
                            <p class="text-gray-800 dark:text-white text-md font-medium mb-2">
                                Price: ${price}
                            </p>
                            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                {
                                    description.length > 150 ?
                                        <p>{description.slice(0, 100) + '...'} <Link to={`/services/${_id}`} className="underline text-orange-500">Read More</Link> </p>
                                        :
                                        <p>{description}</p>
                                }
                            </p>
                            <div class="flex items-center mt-4">
                                <div class="flex flex-col justify-between ml-4 text-sm">
                                    <p class="text-gray-800 dark:text-white">
                                        Photographer: {photographer}
                                    </p>
                                    <p class="text-white">
                                        Rating: {rating}  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
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