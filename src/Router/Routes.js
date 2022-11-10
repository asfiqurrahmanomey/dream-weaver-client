import Main from '../Layout/Main'
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import MoreServices from '../Pages/Home/Services/MoreServices/MoreServices';
import ServicesDetails from '../Pages/Home/Services/MoreServices/ServicesDetails/ServicesDetails';
import Login from '../Pages/Login/Login';
import MyReview from '../Pages/MyReview/MyReview';
import SignUp from '../Pages/SignUp/SignUp';

const { createBrowserRouter } = require("react-router-dom")

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
                loader: () => fetch('http://localhost:5000/allServices')
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>,
            }
        ]
    }
])

export default router;