import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewCard from './AllReviewCard';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://dream-weaver-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 '>
                {
                    reviews.map(review => <AllReviewCard
                        key={reviews._id}
                        review={review}
                    ></AllReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReview;