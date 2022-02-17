import LabelValueInfo from "./labelValueInfo";

function CombatMovment() {
  const data = [
    {
      id:1,
      name:"Ruch/odwrót",
    },
    {
      id:2,
      name:"Szarża",
    },
    {
      id:3,
      name:"Bieg",
    },
  ]


  return (
    <div className="element" >
    <h1 className="elementHeader">PUNKTY DOŚWIADCZENIA</h1>
     <ul className="combatMovmentUl">
     {data.map(data=><LabelValueInfo
       cName={data.id<2 ? "combatMovmentLi" :`combatMovmentLi borderLeft`}
       key={data.id} 
       name={data.name}/>)}
     </ul>
   </div>
    );
  }
  
  export default CombatMovment;
  