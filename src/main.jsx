import * as React from "react";
import App from './components/App.jsx'
import Accueil from './components/Accueil.jsx'
import Destination from './components/Destination.jsx'
import Equipage from './components/Equipage.jsx'
import Technologie from './components/Technologie.jsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/destination/:id",
    element: <Destination />,
  },
  {
    path: "/crew/:id",
    element: <Equipage />,
  },
  {
    path: "/technology/:id",
    element: <Technologie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


