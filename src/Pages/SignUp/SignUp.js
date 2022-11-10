import React, { useContext } from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    // SignUp Handler
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div className='text-center'>
                <h2 className="text-2xl font-bold my-6 hover:text-orange-600 hover:underline">
                    SignUp Now
                </h2>
            </div>

            <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-600 mb-20">
                <img src={logo} class="" alt='' />
                <form onSubmit={handleSignUp} class="mt-6">
                    <div>
                        <label for="username" class="block text-sm text-white">Full Name</label>
                        <input name="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                    </div>

                    <div>
                        <label for="username" class="block text-sm text-white mt-4">Your Email</label>
                        <input name="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm text-white">Password</label>
                        </div>

                        <input name="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                    </div>

                    <div class="mt-6">
                        <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-gray-600">
                            SignUp
                        </button>
                    </div>
                </form>

                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b dark:border-white lg:w-1/5"></span>

                    <p class="text-xs text-center uppercase text-white hover:underline">
                        or SignUp with Social Media
                    </p>

                    <span class="w-1/5 border-b dark:border-white lg:w-1/5"></span>
                </div>

                <div class=" mt-6 mx-auto">
                    <SocialLogin></SocialLogin>
                </div>

                <p class="mt-8 font-light text-center text-md text-white"> Already have an account?
                    <Link to={'/login'} class="font-medium text-white hover:underline ml-2">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;