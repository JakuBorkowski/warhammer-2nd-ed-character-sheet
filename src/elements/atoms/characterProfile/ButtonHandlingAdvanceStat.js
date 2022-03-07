import React, { useState } from "react";

function ButtonHandlingAdvanceStat(props) {
  const [stat, setStat] = useState("");

  const hadnleChangeStat = () => {
    props.changeStatAdvance(stat);
    props.buttonActvie();
  };
  const handleChangeStatValue = (event) => {
    setStat(event.target.value);
  };

  const handleCurrentStatUP = () => {
    props.changeStatAdvance(Number(props.heroStatsAdvance) - 5);
    props.changeStatCurrent(Number(props.heroStatsCurrent) + 5);
    props.buttonActvie();
  };

  const handlePress = (event) => {
    if (event.key === "Enter") {
      hadnleChangeStat();
    }
  };
  return (
    <div className="ButtonHandling">
      {props.heroStatsAdvance > 4 ? null : (
        <p>wprowadź wartość punktów awansu</p>
      )}
      {props.heroStatsAdvance > 4 ? null : (
        <input
          autoFocus
          value={stat}
          onKeyPress={handlePress}
          onChange={handleChangeStatValue}
        />
      )}
      {props.heroStatsAdvance > 4 ? (
        <button onClick={handleCurrentStatUP}>ROZWIŃ</button>
      ) : (
        <button onClick={hadnleChangeStat}>Akceptuj</button>
      )}
      <button onClick={props.buttonActvie}>Anuluj</button>
    </div>
  );
}

export default ButtonHandlingAdvanceStat;
