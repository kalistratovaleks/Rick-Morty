import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Header } from "./components/Header";
import { CharactersPage } from "./components/Pages/CharacterPage";
import { LocationPage } from "./components/Pages/LocationPage";
import { EpisodePage } from "./components/Pages/EpisodePage";
import { CharactersInfoPage } from "./components/InfoPages/CharactersInfo";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters/:page" element={<CharactersPage />} />
        <Route path="/location/:page" element={<LocationPage />} />
        <Route path="/episode/:page" element={<EpisodePage />} />
        <Route path="/characterInfo/:id" element={<CharactersInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
