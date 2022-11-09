import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold lg:text-4xl e">Frequently asked questions.</h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">

                        <div>
                            <div className="inline-block p-3 text-white bg-gray-800 hover:bg-orange-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold ">What is the difference between javascript and Node JS?</h1>

                                <p className="mt-2 text-sm font-bold text-justify">
                                    JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-gray-800 hover:bg-orange-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold ">Difference between SQL and NoSQL?</h1>

                                <p className="mt-2 text-sm text-justify font-bold">
                                    SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
                                    Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
                                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                    SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
                                    Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-gray-800 hover:bg-orange-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold ">How does Node JS handle multiple requests at the same time??</h1>

                                <p className="mt-2 text-sm font-bold text-justify">
                                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallels using the NodeJS cluster module or worker_threads module.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="inline-block p-3 text-white bg-gray-800 hover:bg-orange-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold ">What is JWT, and how does it work?</h1>

                                <p className="mt-2 text-sm  font-bold text-justify">
                                    First, some term's d’art need to be disambiguated. It’s not uncommon to hear somebody refer to a REST API as simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;