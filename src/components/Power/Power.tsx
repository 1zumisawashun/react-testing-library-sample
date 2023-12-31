import { useState } from "react";

function Power({ name }: { name: string }) {
  const [power, setPower] = useState(false);

  return (
    <div style={{ margin: "2em" }}>
      <h1>
        {name} {power ? "ON" : "OFF"}
      </h1>
      <button
        onClick={() => setPower(true)}
        disabled={power ? true : false}
        onPointerDown={() => console.log("PointerDown Event")}
      >
        ON
      </button>
      <button
        onClick={() => setPower(false)}
        disabled={!power ? true : false}
        onPointerDown={() => console.log("PointerDown Event")}
      >
        OFF
      </button>
    </div>
  );
}

export default Power;
