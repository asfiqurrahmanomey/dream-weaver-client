import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div>
                <div className='text-center mt-20'>
                    <h2 className="text-5xl font-bold my-6 hover:text-orange-600 hover:underline">
                        Our Services
                    </h2>
                    <p className='mb-6 hover:text-orange-600 hover:underline'>
                        It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. <br /> Our pride is in offering the best shoots as we help you tell your story in photos.
                    </p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 '>
                    {
                        services.map(service => <ServicesCard
                            key={services._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
                <div className='text-center my-10'>
                    <Link to={'/allServices'} className='bg-gray-700 text-white p-4 rounded-xl hover:bg-orange-600'>More Services</Link>
                    <span class="animate-ping bg-sky-400 opacity-75"></span>
                </div>
            </div>
        </div>
    );
};

export default Services;