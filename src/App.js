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
    <dataContext className='mainConetner'>
     <div className='leftColumn'>
     <Hero/>
     <HeroDescriptioneron/>
     <CharacterProfile/>
     <Wepons/>
     <Armour/>
     </div>
     <div className='rightColumn'>
      <Player/>
      <ExperiencePoint/>
      <CombatMovment/>
      <ArmourPoints/>
    </div>
      </dataContext>
  );
}

export default App;
