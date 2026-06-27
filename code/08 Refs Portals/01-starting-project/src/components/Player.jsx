import { useState, useRef } from "react";

export default function Player() {
  const playerInput = useRef();
  const [playerName, setPlayerName] = useState();

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "nobody"}</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={() => setPlayerName(playerInput.current.value)}>
          Set Name
        </button>
      </p>
    </section>
  );
}
