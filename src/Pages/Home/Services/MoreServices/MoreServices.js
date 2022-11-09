import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MoreServiceCard from './MoreServiceCard/MoreServiceCard';

const MoreServices = () => {
    const allServices = useLoaderData();
    return (
        <div>
            {
                allServices.map(services => <MoreServiceCard
                    key={services._id}
                    services={services}
                ></MoreServiceCard>)
            }
        </div>
    );
};

export default MoreServices;