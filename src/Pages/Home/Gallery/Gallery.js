import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className="py-20 flex flex-col items-center justify-center">
                <div className="xl:w-1/2 w-11/12">
                    <h1 tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center">
                        Moment Gallery
                    </h1>
                    <h2 tabIndex={0} className="text-base leading-normal text-center mt-5">
                        It's not enough to just own a camera. Everyone owns a camera. To be a photographer, <br /> you must understand, appreciate, and harness the power you hold!
                    </h2>
                </div>
                <section className="overflow-hidden text-gray-700">
                    <div className="container px-5 py-2 mx-auto lg:pt-10 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="hover:scale-110 transition duration-300 ease-in-out block object-cover object-center w-full h-full rounded-lg"
                                        src="https://weddingdiary.com.bd/wp-content/uploads/2022/03/08.-portrait-01.jpg" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="hover:scale-110 transition duration-300 ease-in-out block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i0.wp.com/www.tobiahtayo.com/wp-content/uploads/2018/03/hindu-wedding-photography-thornton-manor-156.jpg?resize=960%2C640&ssl=1" />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="hover:scale-110 transition duration-300 ease-in-out block object-cover object-center w-full h-full rounded-lg"
                                        src="https://snapshotbd.com/admin/uploads/1a5f9a6f990b6474fe2aed37a9b27c61.jpg" />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="hover:scale-110 transition duration-300 ease-in-out block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.pinimg.com/originals/14/26/70/14267001791dd3eb1bcc342b0541389e.jpg" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="hover:scale-110 transition duration-300 ease-in-out block object-cover object-center w-full h-full rounded-lg"
                                        src="https://www.bdeventmanagement.com/wp-content/uploads/2018/12/Best-professional-Wedding-photographers-in-Bangladesh-top-10-photographer-in-bangladesh-bd-wedding-photographer-wedding-photography-bangladesh-dhaka-BD-Event-6.jpg" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="hover:scale-110 transition duration-300 ease-in-out block object-cover object-center w-full h-full rounded-lg"
                                        src="https://humayra.com.bd/wp-content/uploads/2019/05/Wedding-of-Farha.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;