import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  const prevName = useRef("");

  useEffect(() => {
    console.log("Testing");
    inputRef.current.focus();
  }, [input]);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        ref={inputRef}
      />
      <div>
        My name is <span>{input}</span> and it used to be
      </div>
      <h1>{input}</h1>

      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
