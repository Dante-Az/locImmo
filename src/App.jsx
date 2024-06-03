// App.jsx
// Importe les fichiers nécessaires à l'application
import AppRouter from '../src/components/Router/Router'; // Importe le composant AppRouter depuis le fichier Router.jsx
import './App.css'; // Importe le fichier App.css pour styliser l'application
import Header from "./components/Header/Header";
// Définit le composant App
function App() {
  // Renvoie le JSX à afficher quand le composant est utilisé
  return (
    // Crée une div avec la classe "App"
    <div className="App">
      {/* // Crée une div avec la classe "Content" */}
      <div className="Content">
        <Header />
        {/* // Utilise le composant AppRouter qui définit les routes de l'application */}
        <AppRouter />
      </div>
    </div>
  );
}

// Exporte le composant App pour qu'il puisse être utilisé dans d'autres fichiers
export default App;