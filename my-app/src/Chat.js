import React, { useState } from 'react';
import './Chat.css'; // Import CSS for styling

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, type: 'user' },
      ]);
      // Simulate a response from the bot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a simulated response.', type: 'bot' },
        ]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-window">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSend} className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="input-field"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
