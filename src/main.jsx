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
import { ClientContext, GraphQLClient } from 'graphql-hooks';

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_DATO_CMS_API_TOKEN}`
  }
});


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
    <ClientContext.Provider value={client}>
      <RouterProvider router={router} />
    </ClientContext.Provider>
  </React.StrictMode>
)
