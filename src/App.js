import "./App.css";
import { useState } from "react";
import Message from "./components/message";

function App() {
  const [message, setMessage] = useState("Hello World!!!");

  function updateMessage() {
    setMessage("Hello Everyone!!!");
  }

  return (
    <>
      <Message message={message} />
      <button
        onClick={(e) => {
          updateMessage(e);
        }}
      >
        Update Message
      </button>
    </>
  );
}

export default App;
