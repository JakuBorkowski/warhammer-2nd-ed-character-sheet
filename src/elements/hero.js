import LabelValueInfo from "./atoms/labelValueInfo";

function Hero() {
  const elementID ="hero";
  const data =[
  {name:"Imię:", id:[elementID, 1]},
  {name:"Rasa:", id:[elementID , 2]},
  {name:"Obecna profesja:", id:[elementID , 3]},
  {name:"Poprzednia profesja:", id:[elementID , 4]},

]
  return (
    <div className="element" >
       <h1 className="elementHeader">BOCHATER</h1>
        <ul>
        {data.map(data=><LabelValueInfo
          cName={''}
          key={data.id} 
          name={data.name}/>)}
        </ul>
      </div>
  );
}

export default Hero;
