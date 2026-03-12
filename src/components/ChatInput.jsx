import React, { useState } from "react";
import dayjs from 'dayjs'

function ChatInput({ setChatMessages, isLoading, setIsLoading }) {
  const [message, setMessage] = useState("");

  function saveInputText(event) {
    setMessage(event.target.value);
    if (event.key === "Escape") setMessage("");
    if (event.key === "Enter") sendMessage();
  }

  async function sendMessage() {
    // Chatbot response will be saved in ChatMessages
    const userMessage = message.trim();
    const now = dayjs();
    if (!userMessage) {
      console.log("Cannot send empty message!");
      return;
    }
    setMessage("");
    setIsLoading(true);

    const userMsg = {
      message: userMessage,
      sender: "user",
      id: crypto.randomUUID(),
      timestamp: now,
    };

    setChatMessages((prev) => [...prev, userMsg]);

    try {
      // const response = await Chatbot.getResponseAsync(message);
      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`, // Paste your token here
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-ai/DeepSeek-V3",
            messages: [
              {
                role: "system",
                content: `You are a witty, professional Senior Software Engineer mentor. 
                        Give concise, helpful advice with a touch of developer humor.`,
              },
              { role: "user", content: userMessage },
            ],
            max_tokens: 500,
          }),
        },
      );

      const data = await response.json();

      const aiContent = data.choices[0].message.content;
      const robotMsg = {
        message: aiContent,
        sender: "robot",
        id: crypto.randomUUID(),
        timestamp: dayjs(),
      };

      setChatMessages((prev) => [...prev, robotMsg]);
    } catch (error) {
      console.error("Chatbot error", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="chat-input-container">
      <input
        name="chat-input"
        className="chat-input"
        disabled={isLoading}
        placeholder={
          isLoading ? "Chatbot is thinking.." : "Send a message to Chatbot"
        }
        value={message}
        onChange={saveInputText}
        onKeyDown={saveInputText}
      />
      <button
        disabled={isLoading || !message}
        className="send-button"
        onClick={sendMessage}
      >
        {isLoading ? "..." : "Send"}
      </button>
    </div>
  );
}

export default ChatInput;
