import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import App from './App';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreateBlog from './pages/Dashboard/Blog/CreateBlog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <div>Forgot Password Page</div>, // To be implemented
  },
  {
    path: '/terms',
    element: <div>Terms Page</div>, // To be implemented
  },
  {
    path: '/privacy',
    element: <div>Privacy Policy Page</div>, // To be implemented
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/create-blog',
    element: <CreateBlog />,
  },
  {
    path: '/blog/:id',
    element: <div>Blog Detail Page</div>, // To be implemented
  }
]);

export default router;