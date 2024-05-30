// Router.jsx
import * as React from "react"; // Importe la bibliothèque React
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importe les fonctions nécessaires depuis la bibliothèque react-router-dom
import Home from '../../pages/Home/Home'; // Importe le composant Home depuis le fichier Home.jsx
import About from '../../pages/About/About'; // Importe le composant About depuis le fichier About.jsx

// Crée un routeur avec deux routes
const router = createBrowserRouter([
    {
      path: "/", // La route pour la page d'accueil
      element: <Home/>, // Le composant à afficher pour la page d'accueil
    },
    {
      path: "about", // La route pour la page "About"
      element: <About />, // Le composant à afficher pour la page "About"
    },
]);

// Définit le composant AppRouter
export default function AppRouter() {
  // Renvoie le Provider du routeur pour être utilisé dans l'application
  return <RouterProvider router={router} />;
}