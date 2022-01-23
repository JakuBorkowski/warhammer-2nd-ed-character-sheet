function Hero() {
  const elementID ="hero";
  const data =[
  {name:"Imię:", id:[elementID, 1]},
  {name:"Rasa:", id:[elementID , 2]},
  {name:"Obecna profesja:", id:[elementID , 3]},
  {name:"Poprzednia profesja:", id:[elementID , 4]},

]
  return (
    <>
    <div className="element" >
       <h1 className="elementHeader">BOCHATER</h1>
        <ul>
          {data.map(data=>{return<li key={data.id}>
            <label className="form">
              <p className="name">{data.name}</p>
              <input className="heroInput"></input>
              </label>
            </li>
          }
          )}
        </ul>
      </div>
    </>
  );
}

export default Hero;
