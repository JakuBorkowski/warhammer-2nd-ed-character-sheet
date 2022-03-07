import { DataHeroStats } from "../../../data/providers/heroStats";
import CharacterProfileButtonElement from "./characterProfileButtonElement";
import CharacterProfileNamesElement from "./CharacterProfileNamesElement";

function CharacterProfileElement() {
  const heroStats = DataHeroStats();

  const dataName = [
    { name: "Początkowa", id: 1 },
    { name: "Schemat rozwoju", id: 2 },
    { name: "Aktualna", id: 3 },
  ];
  const dataMainAttributename = [
    { name: "WW", id: 0 },
    { name: "US", id: 2 },
    { name: "K", id: 4 },
    { name: "Odp", id: 6 },
    { name: "Zr", id: 8 },
    { name: "Int", id: 10 },
    { name: "SW", id: 12 },
    { name: "Ogd", id: 14 },
  ];
  const datasecondaryAttributename = [
    { name: "A", id: 16 },
    { name: "Żyw", id: 18 },
    { name: "S", id: 20 },
    { name: "Wt", id: 22 },
    { name: "Sz", id: 24 },
    { name: "Mag", id: 26 },
    { name: "PO", id: 28 },
    { name: "PP", id: 30 },
  ];

  return (
    <div className="CharacterProfileElement">
      <div className="attributeCharacterProfile">
        <ul className="CharacterProfileNamesElement">
          <li>
            <p>Cechy główne</p>
          </li>
          {dataName.map((data) => (
            <CharacterProfileNamesElement key={data.id} name={data.name} />
          ))}
        </ul>

        <ul className="CharacterProfileButtonElement">
          {dataMainAttributename.map((data) => (
            <CharacterProfileButtonElement
              heroStatsStarting={heroStats.starting[data.id]}
              setHeroStatsStarting={heroStats.starting[data.id + 1]}
              heroStatsAdvance={heroStats.advance[data.id]}
              setHeroStatsAdvance={heroStats.advance[data.id + 1]}
              heroStatsCurrent={heroStats.current[data.id]}
              setHeroStatsCurrent={heroStats.current[data.id + 1]}
              name={data.name}
              id={data.id}
              key={data.id}
            />
          ))}
        </ul>
      </div>
      <div className="attributeCharacterProfile">
        <ul className="CharacterProfileNamesElement">
          <li>
            <p>Cechy drugożędne</p>
          </li>
          {dataName.map((data) => {
            return (
              <CharacterProfileNamesElement key={data.id} name={data.name} />
            );
          })}
        </ul>
        <ul className="CharacterProfileButtonElement">
          {datasecondaryAttributename.map((data) => (
            <CharacterProfileButtonElement
              heroStatsStarting={heroStats.starting[data.id]}
              setHeroStatsStarting={heroStats.starting[data.id + 1]}
              heroStatsAdvance={heroStats.advance[data.id]}
              setHeroStatsAdvance={heroStats.advance[data.id + 1]}
              heroStatsCurrent={heroStats.current[data.id]}
              setHeroStatsCurrent={heroStats.current[data.id + 1]}
              name={data.name}
              id={data.id}
              key={data.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CharacterProfileElement;
