import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CharacterPage from "./components/CharacterPage";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [characters, setCharacters] = useState([
    {
      name: "Erin Solstice",
      class: "Innkeper",
      trueClass: "Magical Innkeeper",
      quote:
        "One soup to rule them all. One soup to bring them together. And in the darkness blind them.",
      slug: "erin-solstice",
      img: "/images/erin.jpg",
      shortDesc:
        "Erin Solstice is the main protagonist of The Wandering Inn. She is a [Magical Innkeeper] and a master-class chess player. She first wandered into this world on her way to the bathroom and has been stuck ever since.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Pisces Jealnet",
      class: "Necromancer",
      trueClass: "Deathbane Necromancer",
      quote:
        "The Goblins have secrets, Miss Selys. I wished to know some of them. Secrets are important. Valuable. They are the dark lifeblood of this world. They run thicker than blood and are worth far more than gold.",
      slug: "pices-jealnet",
      img: "/images/pisces.png",
      shortDesc:
        "Pisces Jealnet is a [Necromancer], and regular customer of The Wandering Inn. He is a Gold-ranked adventurer and member of the Horns of Hammerad.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Ceria Springwalker",
      class: "Cryomancer",
      trueClass: "Arctic Cryomancer",
      quote:
        "You are all cowards. Fearful, small people, living in the shadow of the Golems. You won’t ever find true magic, not here. Not while Cognita and the Golems are the true rulers of this place. I’m leaving—I won’t stay here, hiding from the truth. So long as the Golems live, there are no true mages in Wistram. None, except for the dead.",
      slug: "ceria-springwalker",
      img: "/images/ceria.png",
      shortDesc:
        "Ceria Springwalker is a half-Elf [Arctic Cryomancer] and captain of the Horns of Hammerad.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Pawn",
      class: "Priest",
      trueClass: "Priest of Wrath and Sky",
      quote: "What do you tell a soldier under your command when he is dying?",
      slug: "pawn",
      img: "/images/pawn.png",
      shortDesc:
        "Pawn is an Individual Worker Antinium that belongs to Liscor's Antinium Hive. He is the first Antinium to become a named individual in the Innverse. Chapters primarily featuring Pawn are often labeled with an L.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
    {
      name: "Flos Reimarch",
      class: "King",
      trueClass: "Unknown",
      quote:
        "Let this nation wake from its decade-long slumber! Let every hand grab sword and axe! Stand, all those who still remember my name! Hear me and obey! Rise!",
      slug: "flos-reimarch",
      img: "/images/flos.jpg",
      shortDesc:
        "Flos Reimarch, also known as Flos, the King of Destruction, is a [King] whose Kingdom, Reim, is located in central Chandrar, beside the Great Desert. He is infamous worldwide, having managed to conquer almost half of the civilized world twenty years ago. The current era of history, A.F., is named for him.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus neque, tincidunt in turpis ac, fringilla aliquet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id sapien et ipsum tempor sollicitudin in non eros. Aenean semper feugiat ante, vel dapibus massa tempor eget. Donec viverra ut mi vitae tempus. Nulla in tempus magna. Aliquam molestie vel nisl sed dapibus. Sed eu elit nunc. Sed eget sodales dui. Aliquam blandit lorem at sapien lacinia, ac auctor nisi pulvin",
    },
  ]);
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} user={user} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home characters={characters} />} />
          <Route
            path="/characters/:slug"
            element={
              <CharacterPage
                characters={characters}
                user={user}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/characters"
            element={<Characters characters={characters} />}
          />
            <Route
            path="/signin"
            element={<Register loggedIn = {loggedIn} users = {users} setUsers = {setUsers}  />}
          />
          <Route
            path="/login"
            element={
              <Login
                users={users}
                setUser={setUser}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
