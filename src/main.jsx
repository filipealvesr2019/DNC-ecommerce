import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/home",
    element: <Home/>,
  },
/*
  {
    path: "/products",
    element: <App />,
  },

  {
    path: "/pay",
    element: <App />,
  },*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />npm 
  </React.StrictMode>,
)
