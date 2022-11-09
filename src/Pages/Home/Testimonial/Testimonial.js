import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Testimonial = () => {
    return (
        <div>
            <div>
                <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative mx-auto z-40">
                    <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4}>
                        <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                            What our customers are
                            <br />
                            saying
                        </h1>
                        <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What our customers are saying</h1>
                        <Slider>
                            <Slide index={0} tabIndex="null">
                                <div className="flex">
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-32 xl:h-96 h-80">
                                            <img className='' src="https://cdna.artstation.com/p/assets/images/images/018/254/690/large/suyog-gawai-alia-illustration.jpg?1558717400" alt='' />
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img className='' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best work that was done!</h1>
                                                <p className="text-base font-medium leading-6 mt-4 text-gray-600">There's only one word to describe "fabulous"... Their experience of the photography nd cinematography was next level... Last but not the least their friendly behavious was just heart touching... Overall a wonderful experience with u the whole team... Keep up the good work</p>
                                            </div>
                                            <div className="md:mt-0 mt-8">
                                                <p className="text-base font-medium leading-4 text-gray-800">Alia Bhat</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                            <img className='' src="https://pbs.twimg.com/media/CXjKcLvUwAA0glx.jpg" alt=''/>
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img className='' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Outdoor Photoshoot</h1>
                                                <p className="text-base font-medium leading-6 mt-4 text-gray-600">Awesome experience! Very easy to work with from the get go. Responsive and clear communication the whole way through. Thank you again for your stellar service!</p>
                                            </div>
                                            <div className="md:mt-0 mt-8">
                                                <p className="text-base font-medium leading-4 text-gray-800">Shahrukh Khhan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                            <img src="https://i.ibb.co/6n4F4V3/314919990-549967103625635-2013747716994837953-n-1.jpg" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" alt=''/>
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img className='' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">The Best Photography!</h1>
                                                <p className="text-base font-medium leading-6 mt-4 text-gray-600">The Best Photography
                                                    In My Budget I Am Glad To Give Him My wedding Photography </p>
                                            </div>
                                            <div className="md:mt-0 mt-8">
                                                <p className="text-base font-medium leading-4 text-gray-800">Elma Binte Yousuf</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={4}>
                                <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                            <img className='' src="https://c.ndtvimg.com/2022-05/ikl55od8_elon-musk_625x300_29_May_22.jpg" alt=''/>
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img className='' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">PhotoShoot for my Twitter!</h1>
                                                <p className="text-base font-medium leading-6 mt-4 text-gray-600">After firing the big guys from Twitter, I was looking for someone who could photograph me very well and he take🧷  very good pictures of mine.</p>
                                            </div>
                                            <div className="md:mt-0 mt-8">
                                                <p className="text-base font-medium leading-4 text-gray-800">Elon Musk</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <div className="flex items-center mt-8">
                            <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                                <img className='' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                            </ButtonBack>

                            <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                                <img className='' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;