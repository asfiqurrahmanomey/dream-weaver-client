import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MoreServiceCard from './MoreServiceCard/MoreServiceCard';

const MoreServices = () => {
    const allServices = useLoaderData();
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto'>
            {
                allServices.map(allServices => <MoreServiceCard
                    key={allServices._id}
                    allServices={allServices}
                ></MoreServiceCard>)
            }
        </div>
    );
};

export default MoreServices;