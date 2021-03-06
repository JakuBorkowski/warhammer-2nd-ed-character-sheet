import InputStateValue from "./atoms/inputStateValue";

function Wepons() {
  const data = [{name:"Nazwa",id:1},{name:"Obc.",id:2},{name:"Kategoria",id:3},{name:`Siła broni`,id:4},{name:"Zasięg",id:5},{name:"Przeład.",id:6},{name:"Cechy oręża",id:7}]

  const lineAdvanceWeponID = [1,2,3,4,5,6]
    return (
      <div className="element">
         <h1 className="elementHeader">BRONIE</h1>
         <ul className="weponUl">
          {data.map(data=><li  style={data.id === 1 || data.id === 7 ? {width:"25%"} :{width:"10%"}} key={data.id}>
            <p className="weponP">{data.name}</p>
            
            {lineAdvanceWeponID.map(data=><div key={data}><InputStateValue nameClass={data.id===1?'noBorderLeft , weponInput':'weponInput'}/></div>)}

          </li>)}
          </ul>
      </div>
    );
  }
  
  export default Wepons;