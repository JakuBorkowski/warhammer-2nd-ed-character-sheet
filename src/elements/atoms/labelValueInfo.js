import InputStateValue from "./inputStateValue";

function LabelValueInfo(props) {

    return (
      <li  className={`labelValueInfo ${props.cName}`}>
        <label className="label">
        <p>{props.name}</p>
        <InputStateValue value={props.value} setValue={props.setValue} nameClass={null}/>
        </label>
      </li>
    );
  }
  
  export default LabelValueInfo;