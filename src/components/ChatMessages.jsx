import ChatMessage from "./ChatMessage";
import { useAutoScroll } from "../hooks/useAutoScroll";

function ChatMessages({ chatMessages, isLoading }) {
  const chatMessagesRef = useAutoScroll(chatMessages);
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
