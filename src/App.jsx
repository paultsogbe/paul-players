import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Layout/Navbar";

function App() {
	return (
		<BrowserRouter>
      <Navbar />
      <div
        style={{padding:"30px"}}
      >
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
		</BrowserRouter>
	);
}

export default App;

// 1/ Créer un nouveau projet react avec vite.js

// 2/ Initialiser un routeur avec "react-router-dom" et créer une navbar ainsi qu'une page "Home"

// 3/ Créer l'application du schéma.

// 4/ Utiliser le context pour gérer les données.

// 5/ Depuis la liste des joueurs, ajouter la possibilité de supprimer un joueur