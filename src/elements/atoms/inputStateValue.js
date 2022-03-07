import { useState } from "react";

function InputStateValue(props) {

    const [value, setValue]=useState("")

    const handleValueChange=(e)=>{
        props.value===undefined?setValue(e.target.value):props.setValue(e.target.value)
        console.log(props.value)
}

    return (
      <>
        <input className={props.nameClass} value={props.value===undefined?value:props.value} onChange={handleValueChange}></input>
      </>
    );
  }
  
  export default InputStateValue;