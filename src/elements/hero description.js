import { useState } from "react";
import LabelValueInfo from "./atoms/labelValueInfo";

function HeroDescriptioneron() {
  const [age, setAge] = useState('26');
  const [gender, setGender] = useState('Mężczyzna');
  const [eyeColor, setEyeColor] = useState('Niebieskie');
  const [weight, setWeight] = useState('85');
  const [hairColor, setHairColor] = useState('Brunet');
  const [height, setHeight] = useState('175');
  const [starSign, setStarSign] = useState('Dragomas');
  const [numberOfSibling, setNumberOfSibling] = useState('2');
  const [birthPlace, setBirthPlace] = useState('Altdorf');
  const [distinguishingMarks, setdistinguishingMarks] = useState('Brak');

  const data = [
    { name: "Wiek:", id: 1,value:age, setValue:setAge },
    { name: "Płeć:", id: 2,value:gender, setValue:setGender },
    { name: "Kolor oczu:", id: 3,value:eyeColor, setValue:setEyeColor },
    { name: "Waga:", id: 4,value:weight, setValue:setWeight },
    { name: "Kolor włosów:", id: 5,value:hairColor, setValue:setHairColor },
    { name: "Wzrost:", id: 6,value:height, setValue:setHeight },
    { name: "Znak gwiezdny:", id: 7,value:starSign, setValue:setStarSign },
    { name: "Rodzeństwo:", id: 8,value:numberOfSibling, setValue:setNumberOfSibling },
    { name: "Miejce urodzenia:", id: 9,value:birthPlace, setValue:setBirthPlace },
    { name: "Znaki szczególne:", id: 10,value:distinguishingMarks, setValue:setdistinguishingMarks },
  ];
  return (
    <div className="element">
      <h1 className="elementHeader">OPIS BOCHATERA</h1>
      <ul className="heroDescriptioneronUl">
        {data.map((data) => (
          <LabelValueInfo
            cName={
              data.id < 9
                ? `shortElement50 ${data.id % 2 ? "" : "borderLeft"}`
                : "longElement100"
            }
            key={data.id}
            name={data.name}
            value={data.value} setValue={data.setValue}
          />
        ))}
      </ul>
    </div>
  );
}

export default HeroDescriptioneron;
