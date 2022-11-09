import Main from '../Layout/Main'
import Home from '../Pages/Home/Home';
import MoreServiceCard from '../Pages/Home/Services/MoreServices/MoreServiceCard/MoreServiceCard';
import MoreServices from '../Pages/Home/Services/MoreServices/MoreServices';
import ServicesDetails from '../Pages/Home/Services/MoreServices/ServicesDetails/ServicesDetails';
import Login from '../Pages/Login/Login';
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <MoreServices></MoreServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/servicesdetails/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;