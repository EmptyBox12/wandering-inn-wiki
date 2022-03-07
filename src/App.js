import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CharacterPage from "./components/CharacterPage";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateCharacter from "./components/CreateCharacter";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [characters, setCharacters] = useState([
    {
      name: "Erin Solstice",
      class: "Innkeper",
      mainCharacter: true,
      trueClass: "Magical Innkeeper",
      gender: "female",
      level: "45",
      quote:
        "One soup to rule them all. One soup to bring them together. And in the darkness blind them.",
      slug: "erin-solstice",
      img: "/images/erin.jpg",
      appearance:
        "Erin has fair skin, hazel eyes and light brown hair with the slightest orange tint.[2] While initially she had short hair, it grew longer, to the point where she can tie it at the back of her head.[3] She would eventually get her hair cut,[4] but it would still be longer than the start.[5] She wears a custom-ordered variation of a t-shirt and pants,[6] and a worker apron, which has become somewhat iconic to her.",
      personality:
        "Erin has a warmhearted and enthusiastic nature. While uncomfortable in social situations, she is quite amiable with people and easily makes friends. She is not very deceptive and is bad at keeping secrets from others. However, she sometimes will deliberately act dumb and oblivious in order to get people to underestimate her, though it has the unintentional side-effect of people thinking that she actually is stupid. While somewhat respectful of authority figures, she has a tendency to act cheeky, especially if they demand respect from her. Despite not being strictly violent, if she or her friends are threatened, she will not hesitate to fight back. Her defining characteristic is that no matter what, Erin will always stand for what's right.",
      classes: ["Magical Innkeeper", "Singer", "Warrior"],
      skills: [
        "Like Fire, Memory",
        "Minatour Punch",
        "Advanced Cooking",
        "Immortal Moment",
      ],
      shortDesc:
        "Erin Solstice is the main protagonist of The Wandering Inn. She is a [Magical Innkeeper] and a master-class chess player. She first wandered into this world on her way to the bathroom and has been stuck ever since.",
      description:
        "Erin Solstice is the main protagonist of The Wandering Inn. She is a [Magical Innkeeper] and a master-class chess player. She first wandered into this world on her way to the bathroom and has been stuck ever since.",
    },
    {
      name: "Pisces Jealnet",
      class: "Necromancer",
      mainCharacter: true,
      trueClass: "Deathbane Necromancer",
      gender: "male",
      level: "38",
      quote:
        "The Goblins have secrets, Miss Selys. I wished to know some of them. Secrets are important. Valuable. They are the dark lifeblood of this world. They run thicker than blood and are worth far more than gold.",
      slug: "pices-jealnet",
      img: "/images/pisces.png",
      appearance:
        "Pisces is a young man with pale skin, brown unkempt hair, and gray-green eyes.[1] Initially, he was wearing dirty grey robes[2] but later replaced them for clean white ones, enchanted to be stainless.[3]",
      personality:
        "When he was first introduced, Pisces was an obnoxious jerk. He has the habit of using seven words where one word would suffice. Pisces often believes himself to be the smartest person in the room - that is often true, and he likes to make that obvious. While this attitude sometimes gets him into trouble,[4] he is not ignorant of the way it makes others view him, and occasionally even acts more arrogant than he really is in order to manipulate those around him.[5]",
      classes: ["Deathbane Necromancer", "Mage"],
      skills: [
        "Authority of Death (Lesser)",
        "Ashen Mana Well",
        "Drain Death Mana",
      ],
      shortDesc:
        "Pisces Jealnet is a [Necromancer], and regular customer of The Wandering Inn. He is a Gold-ranked adventurer and member of the Horns of Hammerad.",
      description:
        "Pisces Jealnet is a [Necromancer], and regular customer of The Wandering Inn. He is a Gold-ranked adventurer and member of the Horns of Hammerad.",
    },
    {
      name: "Ceria Springwalker",
      class: "Cryomancer",
      mainCharacter: true,
      trueClass: "Arctic Cryomancer",
      gender: "female",
      level: "35",
      quote:
        "You are all cowards. Fearful, small people, living in the shadow of the Golems. You won’t ever find true magic, not here. Not while Cognita and the Golems are the true rulers of this place. I’m leaving—I won’t stay here, hiding from the truth. So long as the Golems live, there are no true mages in Wistram. None, except for the dead.",
      slug: "ceria-springwalker",
      img: "/images/ceria.png",
      appearance:
        "Ceria has dirty blonde hair,[1] pointed ears, pale yellow eyes, and skin that is subtly more vibrant than humans'.[2] In the aftermath of the fight against the Crelers Ceria's eyes turned winter-pale, mixed with faint blue and grey with something swirling in their depths.[3]",
      personality:
        "Ceria is not a social person - while she has friends, she does not make more easily, having grown up mostly alone.[9] This can also be attributed to her near immortality: as the people around her changes while she stays the same. This also causes her to feel old and young at once.[10] Ceria is the opposite of the refined image of half-Elves that most people have; mainly being lazy, possessing bad table manners and a glutton. However, she can be surprisingly dedicated, evident when she was able to melt Illphres's ice by rubbing it with a bag of salt all night. She is very upfront and doesn't hide who she is. Similar to most adventurers, she possesses a reckless side.",
      classes: ["Arctic Cryomancer"],
      skills: ["Aura of Rime", "Frozen Quickshape", "Glaciersheet Ice"],
      shortDesc:
        "Ceria Springwalker is a half-Elf [Arctic Cryomancer] and captain of the Horns of Hammerad.",
      description:
        "Ceria Springwalker is a half-Elf [Arctic Cryomancer] and captain of the Horns of Hammerad.",
    },
    {
      name: "Pawn",
      class: "Priest",
      mainCharacter: true,
      trueClass: "Priest of Wrath and Sky",
      gender: "male",
      level: "30",
      quote: "What do you tell a soldier under your command when he is dying?",
      slug: "pawn",
      img: "/images/pawn.png",
      appearance:
        "Pawn is an Antinium worker with a brownish-black body.[1] He was missing one antennae, which was cut off by Ksmvr. After his interrogation by Ksmvr, he lost three arms and part of one leg.[2] However, these limbs regenerated with the help of a unique Antinium substance.[3]",
      personality:
        "Pawn generally has a fairly meek personality. Originally, he was behaving as an Antinium worker and completely obedient to authority figures, such as Klbkch and Erin Solstice. This behaviour only changed gradually as Pawn became more introspective and got more levels and turned into a (spiritual) leader figure himself. After becoming an [Acolyte], he has taken great interest in the well-being of Antinium in general, not wanting to lose any Antinium lives.",
      classes: ["Priest of Wrath and Sky", "Butcher", "Carpenter", "Tactician"],
      skills: [
        "Benediction of Hope",
        "Create Bread",
        " Walked Under Heaven’s Sky",
        "Summon Aberration",
      ],
      shortDesc:
        "Pawn is an Individual Worker Antinium that belongs to Liscor's Antinium Hive. He is the first Antinium to become a named individual in the Innverse. Chapters primarily featuring Pawn are often labeled with an L.",
      description:
        "Pawn is an Individual Worker Antinium that belongs to Liscor's Antinium Hive. He is the first Antinium to become a named individual in the Innverse. Chapters primarily featuring Pawn are often labeled with an L.",
    },
    {
      name: "Flos Reimarch",
      class: "King",
      mainCharacter: false,
      trueClass: "Unknown",
      gender: "male",
      level: "60-70",
      quote:
        "Let this nation wake from its decade-long slumber! Let every hand grab sword and axe! Stand, all those who still remember my name! Hear me and obey! Rise!",
      slug: "flos-reimarch",
      img: "/images/flos.jpg",
      appearance:
        "Flos is over six feet high[1] and has golden-red hair with slightly faded colors and a beard.[2] He has emerald-green eyes.[3]",
      personality:
        "Flos is larger than life, dominating any social setting or gathering he walks in upon, whether with his friends or enemies. He displays an intense curiosity about the world, often to a remarkable level of minutiae. Flos hungers for stories. Stories of Earth, stories of new and exciting things and places. Such stories, and the proof of them, is what his surviving Seven spent over a decade scouring the world for, in order to awaken their sleeping king. To this end, Gazi Pathseeker even attempted to kidnap Erin Solstice. But it was Trey and Teres' stories of Earth which finally woke the King of Destruction from his slumber of decades. Flos has displayed an intense curiosity about anything having to do with the Earth, and enjoys speculating who would win in a war: himself, or the forces of Earth.",
      classes: ["King?", "Allegedly a [King of War]"],
      skills: ["Army of the King", "The King’s Architect", "Royal Vanguard"],
      shortDesc:
        "Flos Reimarch, also known as Flos, the King of Destruction, is a [King] whose Kingdom, Reim, is located in central Chandrar, beside the Great Desert. He is infamous worldwide, having managed to conquer almost half of the civilized world twenty years ago. The current era of history, A.F., is named for him.",
      description:
        "Flos Reimarch, also known as Flos, the King of Destruction, is a [King] whose Kingdom, Reim, is located in central Chandrar, beside the Great Desert. He is infamous worldwide, having managed to conquer almost half of the civilized world twenty years ago. The current era of history, A.F., is named for him.",
    },
    {
      name: "Mrsha",
      class: "Druid",
      mainCharacter: true,
      trueClass: "Druid",
      gender: "female",
      level: "8",
      quote:
        "Let this nation wake from its decade-long slumber! Let every hand grab sword and axe! Stand, all those who still remember my name! Hear me and obey! Rise!",
      slug: "mrsha",
      img: "/images/mrsha.png",
      appearance:
        "She has big, round eyes that were brown with gold strata mixed among the depth.[2] Although her fur was initially a 'colorful forest brown', it became white as snow after most of her tribe was killed by Goblins.[3] This fur color has significance among Gnolls, who call white Gnolls 'Doombringers'",
      personality:
        "Mrsha is kindhearted and insatiably curious. Due to her experiences, Mrsha is mature for her age; however, she still retains a fun-loving attitude and childlike innocence. She enjoys pranks and stealing the guests' food; however, her mischievous nature often gets her in trouble, such as when she became stuck in a cupboard with a [Holding] effect or when she wandered off and ran into a nest of Crelers. Mrsha possesses an active imagination, often acting out fantasies where she is a great [Mage] or [Warrior].[4] Despite her young age, Mrsha is quite precocious, reflected in her writing style which is sophisticated and posh, almost disturbingly so. Thanks to Erin's lessons, she is also gifted in mathematics[5]",
      classes: ["Last Survivor", "Druid", "Emberbearer"],
      skills: ["Army of the King", "The King’s Architect", "Royal Vanguard"],
      shortDesc:
        "Mrsha is a young mute Gnoll [Druid]. One of the few survivors of the Stone Spears Tribe after they were killed by the Goblin Lord's army, she currently resides in the The Wandering Inn, with Erin and Lyonette as her primary caretakers.",
      description:
        "Mrsha is a young mute Gnoll [Druid]. One of the few survivors of the Stone Spears Tribe after they were killed by the Goblin Lord's army, she currently resides in the The Wandering Inn, with Erin and Lyonette as her primary caretakers.",
    },
    {
      name: "Klbkchhezeim",
      class: "Swordslayer",
      mainCharacter: true,
      trueClass: "Swordslayer",
      gender: "male",
      level: "21",
      quote:
        "They were never designed to be people. I am a weapon. One that thinks and lives and changes as I must. But I was made for one purpose. And I will fulfill it, even if it means laboring for ten thousand years. Even if it means my oblivion. I despaired until I met you, Erin Solstice. You gave me hope. Solved the puzzle I had searched for. Salvation for my people.",
      slug: "klbkchhezeim",
      img: "/images/klb.png",
      appearance:
        "Preregeneration (Worker Form) He looked like all the other Worker Antiniums, with antennae, large black bulbous eyes, a dark brown chitinous body, four arms and two long pincers coming out of its mouth. He has a pair of swords at his sides.[1] Postregeneration After his rebirth through the Rite of Anastases, Klbkch has a more humanoid form with only two arms and a slim, graceful body, not like a Worker’s or a Soldier’s,[2] that is slightly taller.[3] This form has been shown as superior to the Worker model. Upgraded Postregeneration After purposely suffering from heavy body harm, he have the Antinium Queens upgrade his form while healing to something close to his original body.",
      personality:
        "Klbkch is a pragmatic and stern individual, placing the Antinium's well being above everyone else's—including his own and the [Queen]. While acting as a [Guardsman], he is a charismatic and kind leader. He is polite to everyone around him, leading him to be well liked by the city enough—so that he was voted in to become a Senior Guardsman—a heavy feat.",
      classes: ["Commander", "Assassin", "Swordslayer"],
      skills: ["Recaptured Sublimity", "Enhanced Movement", "Evasive Leap"],
      shortDesc:
        "Klbkchhezeim, mainly known as Klbkch, is an Antinium who is the Revalantor of the Free Antinium Hive, as well as a Senior Guardsman of Liscor.",
      description:
        "Klbkchhezeim, mainly known as Klbkch, is an Antinium who is the Revalantor of the Free Antinium Hive, as well as a Senior Guardsman of Liscor.",
    },
    {
      name: "Relc Grasstongue",
      class: "Spearmaster",
      mainCharacter: true,
      trueClass: "Spearmaster",
      gender: "male",
      level: "36",
      quote:
        "Good thing I was here, right? Lots of Drakes are angry at you. But we can’t attack Humans randomly! That’s against the law. I think.",
      slug: "relc-grasstongue",
      img: "/images/relc.png",
      appearance:
        "Relc is at least six and a half feet tall. His scales are light green, and he has huge arms, reminiscent of a bodybuilder's, with sharp claws on each hand. Relc's eyes are narrow, resembling that of snakes', being very yellow, with black pupils.[1]",
      personality:
        "Relc is often immature. He prefers personal gratification such as eating or finding nice rocks to laze about upon while he should be performing his duties, much to the exasperation of Watch Captain Zevara. However, he is serious about performing his duties when the situation calls for it and is dependable in a fight. Relc is also fiercely loyal to his friends and willing to own up to his mistakes.",
      classes: ["Trusted Sergeant of the Watch", "Spearmaster"],
      skills: [
        "Spear Dance: The Fish Leap",
        "Indomitable Will",
        "Wear My Integrity",
      ],
      shortDesc:
        "Relc Grasstongue, also known as the Gecko of Liscor, is a Drake, Embria's father and a Senior Guardsman of Liscor.",
      description:
        "Relc Grasstongue, also known as the Gecko of Liscor, is a Drake, Embria's father and a Senior Guardsman of Liscor..",
    },
    {
      name: "Az’kerash",
      class: "Necromancer",
      mainCharacter: false,
      trueClass: "Archmage of Death",
      gender: "male",
      level: "70-80",
      quote:
        "That name is old. Archmage Chandler was a man from a different era. Over a century dead. Address me as you will. But do so by the name they have given me",
      slug: "az-kerash",
      img: "/images/necromancer.png",
      appearance:
        "He has the appearance of an old man with facial lines, white locks, and albino white skin. His pupils are described as pale ghostly white light shining from behind two black corneas.[1] That said, the black color appears to be the result of an illusion spell, as his eyes are supposed to be violet.[2] He wears dark robes that seem to be made from shadows that slowly ripple over his form, sucking in all light, and a silver ring on his finger.[1] ",
      personality:
        "Once an honorable and noble individual, after being betrayed by those he counted as friends, Az'kerash became consumed with hatred for the living and has vowed to eradicate all life. While he had initially went on a rage-filled rampage for the first century, he has become more patient in the present day, willing to secretly lie in wait and make long-term plans. However, he can still become wrathful, sometimes having a tantrum by shooting random spells of destruction. Cold and calculating, Az'kerash is a master manipulator, having tactics such as secretly replacing people with undead puppets.[3]",
      classes: ["Archmage of Death", "Mage"],
      skills: [
        "Parallel Thoughts",
        "Bound Spell - (Spell)",
        "Blackfire Fireball",
      ],
      shortDesc:
        "Perril Chandler, now mostly known to all as Az’kerash or simply as The Necromancer, is a highly skilled Necromancer, as he isn't just able to control zombies or skeletons but create far darker armies, such as Draugr, advanced and incredibly powerful zombies, Wraiths, Wights and Bone Giants.",
      description:
        "Perril Chandler, now mostly known to all as Az’kerash or simply as The Necromancer, is a highly skilled Necromancer, as he isn't just able to control zombies or skeletons but create far darker armies, such as Draugr, advanced and incredibly powerful zombies, Wraiths, Wights and Bone Giants.",
    },
    {
      name: "Ryoka Griffin",
      class: "Runner",
      mainCharacter: true,
      trueClass: "-",
      gender: "female",
      level: "-",
      quote:
        "My friend’s alive. I just need to meet her again. One more time, Lupp. For that, it’s easy to risk my life. Just not anyone else’s.",
      slug: "ryoka-griffin",
      img: "/images/ryoka.png",
      appearance:
        "Ryoka has a distinctly Asian/Japanese appearance, with long raven-black hair, bright green eyes[4] and tanned skin. She is very tall with a height of 6'1[3] and has an athletic build. She isn't wearing any shoes, as she prefers to run, or walk barefoot.[5] When her long hair doesn't cover her ears, it becomes noticeable that her left ear had been torn in the past, as the lower part of her earlobe is missing, and the remainder had healed jaggedly around the round gap.[6] That isn't the only thing she is missing; Ryoka has also lost two fingers of her right hand (pinkie and ring fingers specifically).[7]",
      personality:
        "She enjoys running, and not talking to people. Her hobbies include running, hunting and sports shooting. She also attended martial arts classes since she was eight[8], achieved 4th Dan in Muay Thai but she liked Parkour even more. Growing up, she spent lots of time reading and on Youtube videos and video games.",
      classes: ["-"],
      skills: ["-"],
      shortDesc:
        "Ryoka (Ryō ka / 涼香)[3] Dawning Griffin, or just Ryoka Griffin, is an Earther who was teleported to Izril and became a Runner.",
      description:
        "Ryoka (Ryō ka / 涼香)[3] Dawning Griffin, or just Ryoka Griffin, is an Earther who was teleported to Izril and became a Runner.",
    },
    {
      name: "Belavierr",
      class: "Stitch Witch",
      mainCharacter: false,
      trueClass: "Stitch Witch",
      gender: "female",
      level: "?",
      quote:
        "I am the [Witch] who comes for the end of all stories! I am the last offer of age, the oldest of stories! I have toyed with you all—you now feel my wrath",
      slug: "belavierr",
      img: "/images/belavierr.png",
      appearance:
        "Belavierr is tall, taller even than Ryoka, and has long hair. Her eyes are filled with multiple orange glowing irises, each one smaller and smaller, disappearing into the center of her eyes. She wears a pointed hat wide enough to cast her entire body into shade. It is dark blue as the depths of the ocean. Her body is covered with a very dark ornamented robe that is long and draping. She has black wrapping around her hands, making only the skin on her face visible. She speaks in a deep, quiet voice with a subtle echo to it. Her face shows no expression, and when she does try, like smiling slightly due to seeing her daughter, it comes across as awkward, and then quickly vanishes.[1]",
      personality:
        "While she keeps being polite, she doesn't seem to be interested in other people. Even when she sees the ground filled with dead people, she is completely unfazed by it, as though they are no different than leaves.[1]",
      classes: ["Stitch Witch"],
      skills: ["Immortal Moment", "String of Fate"],
      shortDesc:
        "Belavierr, the Stitch Witch, is a powerful witch and Wiskeria's foster mother.",
      description:
        "Belavierr, the Stitch Witch, is a powerful witch and Wiskeria's foster mother.",
    },
    {
      name: "Geneva Scala",
      class: "Doctor",
      mainCharacter: true,
      trueClass: "Doctor",
      gender: "female",
      level: "34",
      quote:
        "I solemnly pledge to consecrate my life to the service of humanity. I will practice my profession with conscience and dignity; the health of my patient will be my first consideration; I will respect the secrets that are confided in me. I will not use my medical knowledge to violate human rights and civil liberties, even under threat…",
      slug: "geneva-scala",
      img: "/images/geneva.png",
      appearance:
        "She has brown hair and pale, olive skin. Her right arm is practically white.[2]",
      personality:
        "Geneva is best described as intense. Anything she does she will commit 200% effort. Geneva isn't afraid or disgusted by blood. She heals, to the best of her abilities and equipment, anyone and everyone who comes to her looking for medical assistance, even if it's an enemy. However, she often overworks herself to the point that her body would have collapsed if it wasn't inhabited by a Selphid. She can also be singleminded, unable to focus on anything else or consider other potential options.",
      classes: ["Doctor", "Telepath"],
      skills: ["Detect Injury", "Sterile Field", "Hygienic Hands", "Hemostatic Pause"],
      shortDesc:
        "Geneva Scala is a medical student from Earth who was transported to Baleros, becoming a [Doctor] known as the Last Light of Baleros.",
      description:
        "Geneva Scala is a medical student from Earth who was transported to Baleros, becoming a [Doctor] known as the Last Light of Baleros.",
    },
  ]);
  return (
    <div className="App">
      <Navbar
        loggedIn={loggedIn}
        user={user}
        setUser={setUser}
        setLoggedIn={setLoggedIn}
      />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                characters={characters.filter(
                  (character) => character.mainCharacter === true
                )}
              />
            }
          />
          <Route
            path="/characters/:slug"
            element={
              <CharacterPage
                characters={characters}
                user={user}
                loggedIn={loggedIn}
                setCharacters={setCharacters}
              />
            }
          />
          <Route
            path="/characters"
            element={<Characters characters={characters} />}
          />
          <Route
            path="/characters/new"
            element={
              <CreateCharacter
                characters={characters}
                loggedIn={loggedIn}
                setCharacters={setCharacters}
              />
            }
          />

          <Route
            path="/signin"
            element={
              <Register loggedIn={loggedIn} users={users} setUsers={setUsers} />
            }
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
