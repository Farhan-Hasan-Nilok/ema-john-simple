import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Shop from '../components/Shop/Shop';
import Orders from '../components/Orders/Orders';
import Inventory from '../components/Inventory/Inventory';
import About from '../components/About/About';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { productsAndCartLoader } from '../loaders/productsAndCartLoader';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
            path: '/', 
            loader: () => fetch('products.json'),
            element: <Shop/>
            },

            {
            path: '/orders', 
            loader: productsAndCartLoader,
            element: <Orders/>
            },

            {
            path: '/inventory', 
            element: <Inventory/>
            },
            {
            path: '/about', 
            element: <About/>
            },
            {
            path: '*', 
            element: <ErrorPage/>
            },
        ]
    }
])