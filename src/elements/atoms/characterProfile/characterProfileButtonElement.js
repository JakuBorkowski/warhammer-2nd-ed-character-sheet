import { useState } from "react";
import ButtonHandlingAdvanceStat from "./ButtonHandlingAdvanceStat";
import ButtonHandlingCurrentStat from "./ButtonHandlingCurrentStat";
import ButtonHandlingStartingStat from "./ButtonHandlingStartingStat";

function CharacterProfileButtonElement(props) {
  const [buttonHandlingActive, setButtonHandlingActive] = useState(false);

  const [buttonNameChangingValue, setButtonNameChangingValue] = useState();

  const buttonHandling = (buttonId) => {
    setButtonHandlingActive(true);
    if (buttonId === "starting") {
      setButtonNameChangingValue(
        <ButtonHandlingStartingStat
          buttonActvie={() => setButtonHandlingActive(false)}
          changeStatStarting={props.setHeroStatsStarting}
          changeStatCurrent={props.setHeroStatsCurrent}
        />
      );
    } else if (buttonId === "advence") {
      setButtonNameChangingValue(
        <ButtonHandlingAdvanceStat
          buttonActvie={() => setButtonHandlingActive(false)}
          changeStatAdvance={props.setHeroStatsAdvance}
          changeStatCurrent={props.setHeroStatsCurrent}
          heroStatsAdvance={props.heroStatsAdvance}
          heroStatsCurrent={props.heroStatsCurrent}
        />
      );
    } else if (buttonId === "current") {
      setButtonNameChangingValue(
        <ButtonHandlingCurrentStat
          buttonActvie={() => setButtonHandlingActive(false)}
          heroStatsCurrent={props.heroStatsCurrent}
        />
      );
    }
  };

  return (
    <>
      <li key={props.id} className="CharacterProfileButtonElementLi">
        <p className="statName">{props.name}</p>
        <button
          className="statButton"
          onClick={() => buttonHandling("starting")}
        >
          {props.heroStatsStarting}
        </button>
        <br />
        <button
          className="statButton"
          onClick={() => buttonHandling("advence")}
        >
          {props.heroStatsAdvance}
        </button>
        <br />
        <button
          className={props.id > 15 ? "statButton" : "statButton , borderBottom"}
          onClick={props.id > 15 ? null : () => buttonHandling("current")}
        >
          {props.heroStatsCurrent}
        </button>
        {buttonHandlingActive ? buttonNameChangingValue : null}
      </li>
    </>
  );
}

export default CharacterProfileButtonElement;
