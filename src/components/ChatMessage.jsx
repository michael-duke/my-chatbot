import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";

function ChatMessage({ message, sender, timestamp }) {
  const isRobot = sender.includes("robot");
  // Format the timestamp using dayjs
  const formattedTime = timestamp ? dayjs(timestamp).format("h:mm A") : "";
  return (
    <div
      className={`chat-message ${isRobot ? "chat-message-robot" : "chat-message-user"}`}
    >
      <div className="chat-message-content">
        {/* If message exists, show text. Otherwise, show the spinner! */}
        {message ? (
          <div className="chat-message-text markdown-content">
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        ) : (
          <img className="chat-loading-gif" src="./loading-spinner.gif" />
        )}
        {formattedTime && (
          <span
            className={`chat-timestamp ${isRobot ? "timestamp-robot" : "timestamp-user"}`}
          >
            {formattedTime}
          </span>
        )}
      </div>

      <img className="chat-message-profile" src={`${sender}.png`} />
    </div>
  );
}

export default ChatMessage;
