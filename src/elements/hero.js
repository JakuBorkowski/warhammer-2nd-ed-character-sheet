import { useState } from "react";
import LabelValueInfo from "./atoms/labelValueInfo";

function Hero() {
  const elementID = "hero";
  const [valueName, setValueName] = useState("Bruno")
  const [valueRase, setValueRase] = useState("Człowiek")
  const [valueCurrentCareer, setValueCurrentCareer] = useState("Rzemieślnik")
  const [valuePreviousCareers, setValuePreviousCareers] = useState("-")

  const data = [
    { name: "Imię:", id: [elementID, 1],value:valueName, setValue:setValueName },
    { name: "Rasa:", id: [elementID, 2],value:valueRase, setValue:setValueRase },
    { name: "Obecna profesja:", id: [elementID, 3],value:valueCurrentCareer, setValue:setValueCurrentCareer },
    { name: "Poprzednia profesja:", id: [elementID, 4],value:valuePreviousCareers, setValue:setValuePreviousCareers },
  ];
  return (
    <div className="element">
      <h1 className="elementHeader">BOCHATER</h1>
      <ul>
        {data.map((data) =><LabelValueInfo value={data.value} setValue={data.setValue} cName={""} key={data.id} name={data.name} />
        )}
      </ul>
    </div>
  );
}

export default Hero;
