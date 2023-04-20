import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import About from './pages/About/About';
import Home from './pages/Home/Home'
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: < Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'project/:projectId',
        element: <ProjectPage />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
