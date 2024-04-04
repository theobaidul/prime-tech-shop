import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CartDetails from './pages/CartDetails';
import Checkout from './pages/Checkout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/cart',
        element: <CartDetails />,
      },
    ],
  },
]);

export default router;
