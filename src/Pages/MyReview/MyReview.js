import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewOrder from './MyReviewOrder';


const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://dream-weaver-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('You Want to Delete');
        if (proceed) {
            fetch(`https://dream-weaver-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Review Deleted Successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero h-96 rounded-xl" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8&w=1000&q=80")` }}>
                <div className="hero-overlay rounded-xl bg-opacity-80"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className='text-white font-semibold text-2xl'>Number of Reviews: {reviews.length}</h1>
                    </div>
                </div>
            </div>
            <section class="py-20 lg:py-[120px]">
                <div class="container mx-auto">
                    <div class=" flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="max-w-full overflow-x-auto">
                                <table class="w-full table-auto">
                                    <thead>
                                        <tr class="bg-primary text-center">
                                            <th
                                                class="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >

                                            </th>
                                            <th
                                                class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Service Image
                                            </th>
                                            <th
                                                class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Title & Price
                                            </th>
                                            <th
                                                class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Review
                                            </th>
                                            <th
                                                class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Profile
                                            </th>
                                            <th
                                                class="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Edit Review
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews.map(review => <MyReviewOrder
                                                key={review._id}
                                                review={review}
                                                handleDelete={handleDelete}
                                            ></MyReviewOrder>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyReview;