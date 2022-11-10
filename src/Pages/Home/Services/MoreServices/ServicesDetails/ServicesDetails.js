import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServicesDetails = () => {
    const { _id, title, img, description, price, rating, photographer } = useLoaderData();

    const { user } = useContext(AuthContext);

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const photo = form.photo.value;
        const message = form.message.value;

        const review = {
            services: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
            photo
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Success')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {/* Service Details Container Start */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div className="flex justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                {title}
                            </h2>
                            <p className="text-base md:text-lg text-justify">
                                {description}
                            </p>
                            <div className="hover:scale-110 transition duration-300 ease-in-out block object-cover object-center mt-4">
                                <div className=" bg-white border-l-4 shadow-sm rounded-xl">
                                    <div className="p-5 border border-l-0 rounded-r">
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Photographer:  {photographer}
                                        </h6>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Price:  ${price}
                                        </h6>
                                        <div className="mb-4 font-semibold leading-5 flex align-middle">
                                            <p className=''>Rating: {rating}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-orange-600 w-6 h-6 ml-2 ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </div>
                                        <Link to={'/myreview'} className='text-white bg-gray-700 p-2 rounded-lg hover:text-orange-200 mb-2'>
                                            My Review
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img className='rounded-2xl hover:scale-110 transition duration-300 ease-in-out block object-cover object-center' src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
            </div>
            {/* Submit Review Part Start */}
            <section className="min-h-screen bg-no-repeat mt-20 bg-cover" style={{
                backgroundImage: `url("https://cdn0.weddingwire.in/vendor/3618/3_2/960/jpg/dsc06994-_15_43618-164512839259048.jpeg")`
            }}>
                <div className="flex flex-col min-h-screen">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="lg:w-1/2 lg:mx-6">
                                <h1 className="text-3xl text-white font-semibold capitalize lg:text-5xl">Submit Your Review</h1>
                                <p className="max-w-xl mt-6 mb-4 text-white">
                                    Your review is valuable to us its inspire us to work hard and give more dedication. We Always focus on customer satisfaction let us know how was our service .
                                </p>

                                <Link to={'/allServices'} className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-opacity-50">
                                    All Services
                                </Link>
                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-600 shadow-2xl rounded-xl lg:max-w-xl">
                                    <h1 className="text-2xl font-medium text-white">Submit Review</h1>
                                    <form onSubmit={handleReviewSubmit} className="mt-6 bg-scroll ">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input name="firstName" type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input name="email" type="email" placeholder="johndoe@example.com" defaultValue={user?.email} className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Phone</label>
                                            <input name="phone" type="phone" placeholder="+8801234567890" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Image</label>
                                            <input type="file" id="photo" name="photo" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                        </div>

                                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-md  focus:outline-none focus:ring hover:bg-orange-600 focus:ring-opacity-50">
                                            get in touch
                                        </button>
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

export default ServicesDetails;