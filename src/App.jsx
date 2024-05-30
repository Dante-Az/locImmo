// App.jsx
import React from 'react'; // Importe la bibliothèque React
import AppRouter from '../src/components/Router/Router'; // Importe le composant AppRouter depuis le fichier Router.jsx

// Définit le composant App
function App() {
  // Renvoie le JSX à afficher quand le composant est utilisé
  return (
    // Crée une div avec la classe "App"
    <div className="App">
      // Crée une div avec la classe "Content"
      <div className="Content">
        // Utilise le composant AppRouter qui définit les routes de l'application
        <AppRouter />
      </div>
    </div>
  );
}

// Exporte le composant App pour qu'il puisse être utilisé dans d'autres fichiers
export default App;