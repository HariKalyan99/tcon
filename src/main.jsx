import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx';
import './index.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx';
import Sections from './components/Sections.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Ourworkers from './components/Ourworkers.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <Dashboard />},
    {path: "/sections", element: <Sections />},
    {path: "worker-gallery", element: <Ourworkers />},
    {path: "*", element: <PageNotFound />}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
