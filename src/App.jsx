import { useState, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatbot-history");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatbot-history", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 ? (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below
        </p>
      ) : (
        <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />
      )}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
