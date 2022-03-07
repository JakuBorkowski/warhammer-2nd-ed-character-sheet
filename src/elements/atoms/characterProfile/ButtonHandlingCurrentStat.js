import React, { useEffect, useState } from "react";

function ButtonHandlingCurrentStat(props) {
  const [minValueToSuccess, setminValueToSuccess] = useState(
    props.heroStatsCurrent
  );

  const[rollResultInfo, setrollResultInfo] = useState();

  const [rollResult, setRollResult] = useState();

  const [rollResultInfoInvisible, setrollResultInfoInvisible] = useState(false);

  const modyficationOption = [20, 15, 10, 0, -5, -10, -15, -20];

  const handleminValueToSuccess = (option) => {
    setminValueToSuccess(Number(props.heroStatsCurrent) + option);
  };
  const handleRollDice = () => {
    setRollResult(Math.floor(Math.random() * 101));
    setrollResultInfoInvisible(true);
  };
  useEffect(() => {
    if (rollResult <= minValueToSuccess) {
      setrollResultInfo("SUKCES!");
    } else if (true) {
      setrollResultInfo("Porażka");
    }
  }, [rollResult, minValueToSuccess]);

  return (
    <div className="ButtonHandling , rollButtonHandling">
      <div className="rollInterface">
        <div className="rollInterfaceOptions">
          {modyficationOption.map((option) => (
            <label key={option}>
              <p>
                {option > 0 ? "+" : null}
                {option}
              </p>
              <input
                type={"radio"}
                name="modyficationOption"
                onChange={() => handleminValueToSuccess(option)}
              />
            </label>
          ))}
        </div>

        <div className="rollInterfaceButtonAndResult">
          <button className="roll" onClick={handleRollDice}>
            Rzut
          </button>
          <p
            className={
              rollResultInfo === "SUKCES!"
                ? "rollResultSuccess"
                : "rollResultFail"
            }
          >
            {rollResult} {rollResultInfoInvisible ? rollResultInfo : null}
          </p>
        </div>
      </div>
      <button onClick={props.buttonActvie}>Anuluj</button>
    </div>
  );
}

export default ButtonHandlingCurrentStat;
