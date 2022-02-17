import LabelValueInfo from "./labelValueInfo";

function HeroDescriptioneron() {
  const data = [
    {name:"Wiek:", id:1,},
    {name:"Płeć:", id:2,},
    {name:"Kolor oczu:", id:3},
    {name:"Waga:", id:4},
    {name:"Kolor włosów:", id:5},
    {name:"Wzrost:", id:6},
    {name:"Znak gwiezdny:", id:7},
    {name:"Rodzeństwo:", id:8},
    {name:"Miejce urodzenia:", id:9,},
    {name:"Znaki szczególne:", id:10},
  ]
    return (
      <div className="element">
         <h1 className="elementHeader">OPIS BOCHATERA</h1>
         <ul className="heroDescriptioneronUl">
         {data.map(data=><LabelValueInfo
          cName={data.id<9 ? `shortElement50 ${data.id%2 ? "" :"borderLeft"}` : 'longElement100'}
          key={data.id} 
          name={data.name}/>)}
        </ul>
  
      </div>
    );
  }
  
  export default HeroDescriptioneron;
  