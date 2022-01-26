function CharacterProfileNamesElement(props) {
  const elementId="CharacterProfileNamesElement"
  return (
    <>
     <li key={[props.id,elementId]}>
       <p>
        {props.name}
       </p>
     </li>
    </>
  );
}

export default CharacterProfileNamesElement;
