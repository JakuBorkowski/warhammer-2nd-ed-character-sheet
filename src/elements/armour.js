import InputStateValue from "./atoms/inputStateValue";
import LabelValueInfo from "./atoms/labelValueInfo";

function Armour() {
  const elementID = "Armour";

  const dataBasic = [
    {
      id: 1,
      name: "Typ opancerzenia",
    },
    {
      id: 2,
      name: "Punkty zbroi",
    },
  ];

  const lineAdvanceArmourID = [1, 2, 3, 4, 5, 6];

  const dataAdvence = [
    { id: 1, name: "Typ pancerza" },
    { id: 2, name: "Obc" },
    { id: 3, name: "Lokalizacja ciała" },
    { id: 4, name: "PZ" },
  ];

  return (
    <div className="element">
      <h1 className="elementHeader">PANCERZ</h1>
      <p className="arElementTitle">Opancerzenie proste</p>
      <ul className={`basic${elementID}`}>
        {dataBasic.map((data) => (
          <LabelValueInfo
            cName={`shortElement50 borderTop ${
              data.id % 2 ? "" : "borderLeft"
            }`}
            key={data.id}
            name={data.name}
          />
        ))}
      </ul>
      <p className="arElementTitle">Opancerzenie złożone</p>
      <ul className={`advence${elementID}`}>
        {dataAdvence.map((data) => (
          <li
            key={data.id}
            className={
              data.id % 2
                ? `advence${elementID}LongElement`
                : `advence${elementID}ShortElement`
            }
          >
          <p className="advenceArP">{data.name}</p>
          {lineAdvanceArmourID.map(data=><div key={data}><InputStateValue nameClass={data.id===1?`noBorderLeft , lineAdvance${elementID}`:`lineAdvance${elementID}`}/></div>)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Armour;
