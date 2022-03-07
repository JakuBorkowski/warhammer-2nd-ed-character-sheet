import React, { useState } from "react";

function ButtonHandlingStartingStat(props) {
  const [stat, setStat] = useState("");

  const hadnleChangeStat = () => {
    props.changeStatCurrent(stat);
    props.changeStatStarting(stat);
    props.buttonActvie();
  };
  const handleChangeStatValue = (event) => {
    setStat(event.target.value);
  };
  const handlePress = (event) => {
    if (event.key === "Enter") {
      hadnleChangeStat();
    }
  };
  return (
    <div className="ButtonHandling">
      <p>wprowadź wartość statyki</p>
      <input
        onKeyPress={handlePress}
        autoFocus
        value={stat}
        onChange={handleChangeStatValue}
      />
      <button onClick={hadnleChangeStat}>Akceptuj</button>
      <button onClick={props.buttonActvie}>Anuluj</button>
    </div>
  );
}

export default ButtonHandlingStartingStat;
