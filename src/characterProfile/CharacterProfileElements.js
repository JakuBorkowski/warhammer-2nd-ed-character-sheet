import CharacterProfileButtonElement from "./characterProfileButtonElement";
import CharacterProfileNamesElement from "./CharacterProfileNamesElement";
function CharacterProfileElement() {
  const dataName = [{name:"Początkowa",id:1},{name:"Schemat rozwoju",id:2}, {name:"Aktualna",id:3}]
  const dataMainAttributename=[{name:"WW",id:1},{name:"US",id:2},{name:"K",id:3},{name:"Odp",id:4},{name:"Zr",id:5},{name:"Int",id:6},{name:"SW",id:7},{name:"Ogd",id:8}]
  const datasecondaryAttributename=[{name:"A",id:9},{name:"Żyw",id:10},{name:"S",id:11},{name:"Wt",id:12},{name:"Sz",id:13},{name:"Mag",id:14},{name:"PO",id:15},{name:"PP",id:16}]


  return (
    <div className="CharacterProfileElement">

    <div className="attribute ">
    <ul className="CharacterProfileNamesElement">
      <li><p>Cechy główne</p></li>
      {dataName.map(data=>{
        return <CharacterProfileNamesElement id={data.id} name={data.name} />
      }
      )}
    </ul>
      <ul className="CharacterProfileButtonElement">
    {dataMainAttributename.map(data=><CharacterProfileButtonElement name={data.name} id={data.id}/>)}
      </ul>
    </div>

    <div className="attribute">
    <ul className="CharacterProfileNamesElement">
      <li><p>Cechy drugożędne</p></li>
      {dataName.map(data=>{
        return <CharacterProfileNamesElement id={data.id} name={data.name} />
      }
      )}
    </ul>
    <ul className="CharacterProfileButtonElement">
    {datasecondaryAttributename.map(data=><CharacterProfileButtonElement name={data.name} id={data.id}/>)}
    </ul>
      
    </div>

    </div>
  );
}

export default CharacterProfileElement;
