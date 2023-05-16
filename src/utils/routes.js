import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import UpdateProfile from '../pages/UpdateProfile';
import Error from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: '/profile/:userId',
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: '/profile/:userId/update-profile',
    element: <UpdateProfile />,
    errorElement: <Error />,
  },
]);
