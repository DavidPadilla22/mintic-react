import React, { useRef } from "react";

function EnfocarInput() {
  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe algo..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <br />
      <button onClick={enfocar} style={{ marginTop: "1rem" }}>
        Enfocar input
      </button>
    </div>
  );
}

export default EnfocarInput;
