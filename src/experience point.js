import LabelValueInfo from "./labelValueInfo";

function ExperiencePoint() {
    const data = [
      {
        id:1,
        name:"Obecnie",
        cName:"expPointShort"
      },
      {
        id:2,
        name:"Razem",
        cName:"expPointLong"
      },
    ]
    
    return (
      <div className="element" >
      <h1 className="elementHeader">PUNKTY DOŚWIADCZENIA</h1>
       <ul className="expPointUl">
       {data.map(data=><LabelValueInfo
         cName={data.id%2 ? data.cName :`${data.cName} borderLeft`}
         key={data.id} 
         name={data.name}/>)}
       </ul>
     </div>
    );
  }
  
  export default ExperiencePoint;