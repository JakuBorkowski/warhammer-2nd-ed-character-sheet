function Wepons() {
  const data = [{name:"Nazwa",id:1},{name:"Obc.",id:2},{name:"Kategoria",id:3},{name:`Siła broni`,id:4},{name:"Zasięg",id:5},{name:"Przeład.",id:6},{name:"Cechy oręża",id:7}]

    return (
      <div className="element">
         <h1 className="elementHeader">BRONIE</h1>
         <ul className="wepon">
          {data.map(data=><li  style={data.id === 1 || data.id === 7 ? {width:"25%"} :{width:"10%"}} key={data.id}>
            <p className="weponP">{data.name}</p>
            <input className={data.id===1?"borderTop , weponInput":"weponInput"}></input>
            <input className="weponInput"></input>
            <input className="weponInput"></input>
            <input className="weponInput"></input>
            <input className="weponInput"></input>
            <input className="weponInput"></input>
          </li>)}
          </ul>
      </div>
    );
  }
  
  export default Wepons;