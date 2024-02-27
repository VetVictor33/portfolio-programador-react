import { ClientContext, GraphQLClient } from "graphql-hooks";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import "./styles/index.modules.sass";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DATO_CMS_API_TOKEN}`,
  },
});

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project/:projectId",
        element: <ProjectPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <RouterProvider router={router} />
    </ClientContext.Provider>
  </React.StrictMode>
);
