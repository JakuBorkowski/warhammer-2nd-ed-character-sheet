function ArmourPoints() {
    const data =[
      {id:1,name:"Głowa",value:"01-15"},
      {id:2,name:"Korpus",value:"56-80"},
      {id:3,name:"Prawa ręką",value:"16-35"},
      {id:4,name:"Lewa ręka",value:"36-55"},
      {id:5,name:"Prawa noga",value:"81-90"},
      {id:6,name:"Lewa noga",value:"91-00"},
    ]
    return (
      <div className="element" >
      <h1 className="elementHeader">PUNKTY ZBROI</h1>
      <ul className="armourPointsUl">
      {data.map(data=><li className={`arPontLi ${data.id%2? "arPointLiLeftElement" : "arPointLiRightElement"}`}>
        <p className="arPointP longElement100">{data.name}</p>
        <input></input>
        <p className="arPointP longElement100">{data.value}</p>
      </li>)}
      </ul>
     </div>
    );
  }
  export default ArmourPoints;