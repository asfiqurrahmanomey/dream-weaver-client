import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-semibold'>
            <Link className='hover:text-orange-600 hover:underline' to='/'>Home</Link>
            <Link to={'/allServices'} className='hover:text-orange-600 hover:underline'>Service</Link>
            <Link to={'/blog'} className='hover:text-orange-600 hover:underline'>Blog</Link>
            {
                user?.email ?
                    <>
                        <Link to={'/myreview'} className='hover:text-orange-600 hover:underline'>My Review</Link>
                        <Link to={'/addservice'} className='hover:text-orange-600 hover:underline'>Add Service</Link>
                        <button onClick={handleLogOut} className='hover:text-orange-600 hover:underline'>Sign Out</button>
                    </>
                    :
                    <Link to={'/login'}>
                        <button className="hover:text-orange-600 hover:underline">Login</button>
                    </Link>
            }
        </li>
    </>

    return (
        <div>
            <div className="navbar mb-12 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <Link tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:text-orange-600">
                            {
                                menuItems
                            }
                        </Link>
                    </div>
                    <Link to={'/'}>
                        <img className='w-28 h-28' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to={'/login'}>
                        <button className="btn btn-outline text-orange-600 hover:bg-blue-500 hover:border-white">Login</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;