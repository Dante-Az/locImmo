// Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home'; // Importe le composant Home depuis le fichier Home.jsx
import About from '../../pages/About/About'; // Importe le composant About depuis le fichier About.jsx
import Erreur from '../../pages/Erreur/Erreur'; // Importe le composant Erreur depuis le fichier Erreur.jsx
import Logement from "../../pages/Logement/Logement"; // Importe le composant Logement depuis le fichier Logement.jsx
import Header from "../../components/Header/Header";
// Définit le composant AppRouter

export default function AppRouter() {
  return (
    <Router>
      <Header /> {/* Composant Header */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Route pour la page About */}
        <Route path="/logement" element={<Logement />} /> {/* Route pour la page Logement */}
        <Route path="*" element={<Erreur />} /> {/* Route pour toutes les autres pages */}
      </Routes>
    </Router>
  );
}