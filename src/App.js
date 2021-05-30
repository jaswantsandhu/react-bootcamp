import "./App.css";
import { useState } from "react";
import Message from "./components/message";
import Messages from "./config/message";

function App() {

  // Change variables
  // showMessage > showMessages
  // setShowMessage > setShowMessages
  const [showMessages, setShowMessages] = useState(false);

  return (
    <>
      {showMessages && Messages.map((item) => {
        return <Message message={item} />;
      })}

      <button
        onClick={() => {
          setShowMessages(!showMessages);
        }}
      >
        Show Messages
      </button>
    </>
  );
}

export default App;
