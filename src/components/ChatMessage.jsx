import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import robotIcon from "../assets/robot.png";
import userIcon from "../assets/user.png";
import loadingSpinner from "../assets/loading-spinner.gif";

function ChatMessage({ message, sender, timestamp }) {
  const isRobot = sender.includes("robot");
  const profileImage = isRobot ? robotIcon : userIcon;
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
          <img
            className="chat-loading-gif"
            src={loadingSpinner}
            alt="loading-spinner"
          />
        )}
        {formattedTime && (
          <span
            className={`chat-timestamp ${isRobot ? "timestamp-robot" : "timestamp-user"}`}
          >
            {formattedTime}
          </span>
        )}
      </div>

      <img className="chat-message-profile" src={profileImage} alt={sender} />
    </div>
  );
}

export default ChatMessage;
