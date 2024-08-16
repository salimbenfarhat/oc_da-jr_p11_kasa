import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss';

import Home from './pages/Home';
import About from './pages/About';
import AccommodationSheet from './pages/AccommodationSheet';
import Error from './components/Error';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,  // Page d'erreur
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "a-propos",
        element: <About />,
      },
      {
        path: "fiche-logement/:id",
        element: <AccommodationSheet />,
      },
      {
        path: "erreur-404",  // Route pour afficher la page d'erreur personnalisée
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();