function Armour() {
    const elementID="Armour"

    const lineAdvanceArmourID=[1,2,3,4,5,6]

    const data=[
      {id:1,name:"Typ pancerza", },
      {id:2,name:"Obc",},
      {id:3, name:"Lokalizacja ciała",},
      {id:4,name:"PZ",}
    ]


    return (
      <div className="element">
      <h1 className="elementHeader">PANCERZ</h1>
      <p>Opancerzenie proste</p>
      <ul className={`basic${elementID}`}>
        <li className={`basic${elementID}Li`}>
          <p>Typ opancerzenia</p>
          <input></input>
        </li>
        <li className={`basic${elementID}Li`}>
          <p>Punkty zbroi</p>
          <input></input>
        </li>
      </ul>
      <br/><p>Opancerzenie złożone</p><br/>
      <ul className={`advence${elementID}`}>
        {data.map(data=><li 
        key={data.id} 
        className={data.id%2 ? `advence${elementID}LongElement`:`advence${elementID}ShortElement`}>
          <p>{data.name}</p>
          {lineAdvanceArmourID.map(line=><input 
          className={`lineAdvance${elementID}`} 
          style={data.id===1? {borderLeft:"0px"}:null} 
          key={line}></input>)}
        </li>)}
      </ul>
      
   </div>
    );
  }
  
  export default Armour;