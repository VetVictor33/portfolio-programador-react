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
import { projectsMock } from './mock';

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
        path: '/project/:project',
        element: <ProjectPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
