import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Header } from "./components/Header";
import { CharactersPage } from "./components/Pages/CharacterPage";
import { LocationPage } from "./components/Pages/LocationPage";
import { EpisodePage } from "./components/Pages/EpisodePage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/characters/:page" element={<CharactersPage />} />
        <Route path="/location/:page" element={<LocationPage />} />
        <Route path="/episode/:page" element={<EpisodePage />} />
      </Routes>
    </div>
  );
}

export default App;
