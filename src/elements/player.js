import { useState } from "react";
import LabelValueInfo from "./atoms/labelValueInfo";

function Player() {

  const [playerName, setPlayerName] = useState('-')
  const [gameMaster,setGameMaster ] = useState('-')
  const [campaing,setCampaing ] = useState('-')
  const [campaingYear,setCampaingYear ] = useState('-')


  const data = [
    { name: "Imię", id: 1,value:playerName, setValue:setPlayerName  },
    { name: "Mistrz gry", id: 2,value:gameMaster, setValue:setGameMaster  },
    { name: "Kampannia", id: 3,value:campaing, setValue:setCampaing  },
    { name: "Rok kampanni", id: 4,value:campaingYear, setValue:setCampaingYear  },
  ];

  return (
    <div className="element">
      <h1 className="elementHeader">GRACZ</h1>
      <ul className="playerUl">
        {data.map((data) => (
          <LabelValueInfo
            cName={
              data.id % 2 ? "playerLiElement" : "playerLiElement borderLeft"
            }
            key={data.id}
            name={data.name}
            value={data.value} setValue={data.setValue}
          />
        ))}
      </ul>
    </div>
  );
}

export default Player;
