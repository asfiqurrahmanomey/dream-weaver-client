import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReview from '../../../MyReview/AllReview';
import MoreServiceCard from './MoreServiceCard/MoreServiceCard';

const MoreServices = () => {
    const allServices = useLoaderData();
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto'>
                {
                    allServices.map(allServices => <MoreServiceCard
                        key={allServices._id}
                        allServices={allServices}
                    ></MoreServiceCard>)
                }
            </div>
            <h1 tabIndex={0} className="text-4xl font-bold 2xl:leading-10 leading-0 text-center">
                All Reviews
            </h1>
            <AllReview></AllReview>
        </div>

    );
};

export default MoreServices;