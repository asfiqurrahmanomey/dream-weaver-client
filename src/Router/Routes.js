import Main from '../Layout/Main'
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import MoreServices from '../Pages/Home/Services/MoreServices/MoreServices';
import ServicesDetails from '../Pages/Home/Services/MoreServices/ServicesDetails/ServicesDetails';
import Login from '../Pages/Login/Login';
import AllReview from '../Pages/MyReview/AllReview';
import MyReview from '../Pages/MyReview/MyReview';
import AddServices from '../Pages/Shared/AddServices/AddServices';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const { createBrowserRouter, Link } = require("react-router-dom")

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allServices',
                element: <MoreServices></MoreServices>,
                loader: () => fetch('https://dream-weaver-server.vercel.app/allServices')
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`https://dream-weaver-server.vercel.app/services/${params.id}`)
            },
            {
                path: 'addservices',
                element: <AddServices></AddServices>
            },
            {
                path: '/myreview',
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path: '/allreview',
                element: <AllReview></AllReview>
            }
        ]
    },
    {
        path: '*',
        element: <div className='bg-blue-500 my-20 mx-20 p-12 rounded-lg shadow-lg text-white text-3xl'><Link className='mx-auto' to='/'>This Page not found click on me to go to main page</Link></div>
    }
])

export default router;