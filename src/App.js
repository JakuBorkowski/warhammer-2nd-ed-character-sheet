import "./App.css";
import Hero from "./elements/hero";
import HeroDescriptioneron from "./elements/hero description";
import CharacterProfile from "./elements/character profile";
import Wepons from "./elements/weapons";
import Armour from "./elements/armour";
import Player from "./elements/player";
import ExperiencePoint from "./elements/experience point";
import CombatMovment from "./elements/combat movment";
import ArmourPoints from "./elements/armour points";
import { HeroStats } from "./data/providers/heroStats";

function App() {
  return (
    <>
      <HeroStats>
        <ul className="mainConetner">
          <li className="leftColumn">
            <Hero />
            <HeroDescriptioneron />
            <CharacterProfile />
            <Wepons />
            <Armour />
          </li>
          <li className="rightColumn">
            <Player />
            <ExperiencePoint />
            <CombatMovment />
            <ArmourPoints />
          </li>
        </ul>
      </HeroStats>
    </>
  );
}

export default App;
