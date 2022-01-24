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
         <ul className="listHeroDescriptioneron">
          {data.map(data=>{return<li className={data.id<=8? "shortElement":"longElement"} style={{borderLeft:"black 1px solid"}} key={data.id}>
            <label className="form">
              <p className="name">{data.name}</p>
              <input className="heroInput"></input>
              </label>
            </li>
          }
          )}
        </ul>
  
      </div>
    );
  }
  
  export default HeroDescriptioneron;
  