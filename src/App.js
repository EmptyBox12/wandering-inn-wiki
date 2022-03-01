import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CharacterPage from "./components/CharacterPage";
import AdminPage from "./components/AdminPage";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:slug" element={<CharacterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
