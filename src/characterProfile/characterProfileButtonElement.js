function CharacterProfileButtonElement(props) {


    return (
      <>
        <li key={props.id} className="CharacterProfileButtonElementLi">
            <button className="rollButton">
                {props.name}
            </button><br/>
            <button className="statButton">
                0
            </button><br/>
            <button className="statButton">
                0
            </button><br/>
            <button className={props.id>8? "statButton" : "statButton , borderBottom"}>
                0
            </button>
        </li>
      </>
    );
  }
  
  export default CharacterProfileButtonElement;