import './App.css';
import Hero from './hero';
import HeroDescriptioneron from './hero description';
import CharacterProfile from './character profile';
import Wepons from './weapons';
import Armour from './armour';
import Player from './player';
import ExperiencePoint from './experience point';
import CombatMovment from './combat movment';
import ArmourPoints from './armour points';

function App() {
  return (
    <div>
     <Hero/>
     <HeroDescriptioneron/>
     <CharacterProfile/>
     <Wepons/>
     <Armour/>
     <Player/>
     <ExperiencePoint/>
     <CombatMovment/>
     <ArmourPoints/>
    </div>
  );
}

export default App;
