import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Practice from "./components/Error/Error.jsx";
import {
  About,
  Contact,
  Education,
  Experience,
  Home,
  Projects,
  Resume,
  Services,
  Skills,
} from "./container/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Practice></Practice>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
