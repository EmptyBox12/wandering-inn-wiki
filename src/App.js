import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CharacterPage from "./components/CharacterPage";
import AdminPage from "./components/AdminPage";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";

function App() {
  const characters = [
    {
      name: "Erin Solstice",
      slug: "erin-solstice",
      img: "/images/erin.jpg",
      shortDesc:
        "Erin Solstice is the main protagonist of The Wandering Inn. She is a [Magical Innkeeper] and a master-class chess player. She first wandered into this world on her way to the bathroom and has been stuck ever since.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Pisces Jealnet",
      slug: "pices-jealnet",
      img: "/images/pisces.png",
      shortDesc:
        "Pisces Jealnet is a [Necromancer], and regular customer of The Wandering Inn. He is a Gold-ranked adventurer and member of the Horns of Hammerad.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Ceria Springwalker",
      slug: "ceria-springwalker",
      img: "/images/ceria.png",
      shortDesc:
        "Ceria Springwalker is a half-Elf [Arctic Cryomancer] and captain of the Horns of Hammerad.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Pawn",
      slug: "pawn",
      img: "/images/pawn.png",
      shortDesc:
        "Pawn is an Individual Worker Antinium that belongs to Liscor's Antinium Hive. He is the first Antinium to become a named individual in the Innverse. Chapters primarily featuring Pawn are often labeled with an L.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Flos Reimarch",
      slug: "flos-reimarch",
      img: "/images/flos.jpg",
      shortDesc:
        "Flos Reimarch, also known as Flos, the King of Destruction, is a [King] whose Kingdom, Reim, is located in central Chandrar, beside the Great Desert. He is infamous worldwide, having managed to conquer almost half of the civilized world twenty years ago. The current era of history, A.F., is named for him.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home characters={characters} />} />
          <Route
            path="/characters/:slug"
            element={<CharacterPage characters={characters} />}
          />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/characters"
            element={<Characters characters={characters} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
