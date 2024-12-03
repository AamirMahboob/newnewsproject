// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';

// const CustomRoutes = () => {
//   const router = createBrowserRouter([
//     { path: '/', element: <Home /> },
//     { path: '/about', element: <About /> },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default CustomRoutes;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AdminLayout from '../Admin/AdminLayout';
import AdminDashboard from '../Admin/pages/AdminDashboard';
import ClientLayout from '../pages/ClientLayout';
import Contact from '../pages/Contact';

 

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,  // Wrap the client routes with ClientLayout
    children: [
      {
        path: '',  // Default path, equivalent to '/'
        element: <Home />,
      },
      {
        path: 'about',  
        element: <About />,
      },
      {
        path: 'contact',  
        element: <Contact />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
    ],
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
