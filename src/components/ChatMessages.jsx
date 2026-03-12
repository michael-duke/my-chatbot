import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ chatMessages, isLoading }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) containerElem.scrollTop = containerElem.scrollHeight;
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(({ message, sender, id, timestamp }) => (
        <ChatMessage
          key={id}
          message={message}
          sender={sender}
          timestamp={timestamp}
        />
      ))}
      {isLoading && <ChatMessage sender="robot" />}
    </div>
  );
}

export default ChatMessages;
