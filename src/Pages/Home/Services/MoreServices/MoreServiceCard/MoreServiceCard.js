import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const MoreServiceCard = ({ allServices }) => {
    const { _id, title, img, description, price, rating, photographer } = allServices;
    return (
        <div>
            <div class="container mx-auto mb-20 ">
                <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <Link class="w-full block h-full">
                        <PhotoProvider>
                            <PhotoView className='h-64 w-full rounded-t-xl' src={img}>
                                <img src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div class="bg-white dark:bg-gray-800 w-full p-4 text-justify rounded-b-xl ">
                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                {title}
                            </p>
                            <h2 class="text-gray-800 dark:text-white text-md font-medium mb-2">
                                Price: ${price}
                            </h2>
                            <h2 class="text-gray-400 dark:text-gray-300 font-light text-md">
                                {
                                    description.length > 150 ?
                                        <p>{description.slice(0, 100) + '...'} <Link to={`/services/${_id}`} className="underline text-orange-500">Read More</Link> </p>
                                        :
                                        <p>{description}</p>
                                }
                            </h2>
                            <div class="flex items-center mt-4">
                                <div class="flex flex-col justify-between ml-4 text-sm">
                                    <p class="text-gray-800 dark:text-white">
                                        Photographer: {photographer}
                                    </p>
                                    <div class="text-white flex align-middle">
                                        <p>Rating: {rating}</p>
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="ml-2 w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                        </svg>
                                    </div>
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