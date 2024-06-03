// Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home'; // Importe le composant Home depuis le fichier Home.jsx
import About from '../../pages/About/About'; // Importe le composant About depuis le fichier About.jsx
import Erreur from '../../pages/Erreur/Erreur'; // Importe le composant Erreur depuis le fichier Erreur.jsx
import Logement from "../../pages/Logement/Logement"; // Importe le composant Logement depuis le fichier Logement.jsx
import Header from "../../components/Header/Header";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  );
}