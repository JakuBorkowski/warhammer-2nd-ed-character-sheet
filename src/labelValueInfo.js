function LabelValueInfo(props) {

    return (
      <li  className={`labelValueInfo ${props.cName}`}>
        <label className="label">
        <p>{props.name}</p>
        <input></input>
        </label>
      </li>
    );
  }
  
  export default LabelValueInfo;