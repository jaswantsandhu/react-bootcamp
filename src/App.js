import "./App.css";
import { useState } from "react";
import Message from "./components/message";

function App() {
  const [message, setMessage] = useState("Hello World!!!");
  const [showMessage, setShowMessage] = useState(false);

  function updateMessage() {
    setMessage("Hello Everyone!!!");
  }

  return (
    <>
      {showMessage && <Message message={message} />}
      <button
        onClick={(e) => {
          setShowMessage(!showMessage);
        }}
      >
        Show Message
      </button>
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
