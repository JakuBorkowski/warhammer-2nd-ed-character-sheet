import LabelValueInfo from "./atoms/labelValueInfo";

function Player() {
  const data = [
    {name:"Imię", id:1,},{name:"Mistrz gry", id:2},{name:"Kampannia", id:3},{name:"Rok kampanni", id:4},
  ]

    return (
      <div className="element" >
      <h1 className="elementHeader">GRACZ</h1>
      <ul className="playerUl">
        {data.map(data=><LabelValueInfo
          cName={data.id%2 ? "playerLiElement" :"playerLiElement borderLeft"} 
          key={data.id} 
          name={data.name}/>)}
      </ul>
     </div>
    );
  }
  
  export default Player;