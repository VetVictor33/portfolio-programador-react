import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './componentes/ErrorPage/ErrorPage';
import About from './componentes/About/About';
import Home from './componentes/Home/Home'
import ProjectPage from './componentes/ProjectPage/ProjectPage';

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
        path: '/about',
        element: <About />
      },
      {
        path: '/project/:projectId',
        element: <ProjectPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
