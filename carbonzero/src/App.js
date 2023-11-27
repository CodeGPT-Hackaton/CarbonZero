import "./App.css";
import ChatBot from "./components/Chatbot";
import { ChatProvider } from "./Context/ChatContext";
function App() {
  return (
    <ChatProvider>
      <div className="App">
        <ChatBot />
      </div>
    </ChatProvider>
  );
}

export default App;
