import { createBrowserRouter } from 'react-router-dom';

import AppPage from '../pages/AppPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppPage/>,
      errorElement: <NotFoundPage/>
    },
    {
      path: '/contact',
      element: <ContactPage/>
    },
    {
      path: '/about',
      element: <AboutPage/>
    }
  ],
  { basename: '/dflap' } 
);