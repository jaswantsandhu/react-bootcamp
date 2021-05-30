import './App.css';
import Message from "./components/message";

function App() {

  const message = 'Hello World!!!'

  return (
    <Message message={message} />
  );
}

export default App;
