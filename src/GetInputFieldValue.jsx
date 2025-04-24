import React, { useState } from "react";

export function GetInputFieldValue() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getValue(val) {
    // console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <>
      <br />
      <div>
        {print ? <h2>{data}</h2> : null}

        <input type="text" onChange={getValue} />
        <button onClick={() => setPrint(true)}>View your value</button>
      </div>
    </>
  );
}
