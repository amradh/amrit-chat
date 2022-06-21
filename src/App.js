import "./App.css";
import React, { useState } from "react";

import sampleData from "./sampleData";

function App() {
  const [messages, setMessages] = useState(sampleData);

  return (
    <div className="App">
      <section>
        <ChatRoom
          //  messages={messages}
          setMessages={setMessages}
        />
        <ChatRoom
          messages={messages}
          // setMessages={setMessages}
        />
      </section>
    </div>
  );
}

function ChatRoom({ messages = [], setMessages = null }) {
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    setMessages &&
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          uid: "cardMember",
          displayName: "CardMember",
          text: formValue,
          createdAt: new Date(),
        },
      ]);

    setFormValue("");
  };

  return (
    <div
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <main>
        {messages && messages.map((msg) => <ChatMessage message={msg} />)}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message..."
        />

        <button type="submit" disabled={!formValue}>
          ➡️
        </button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;
  const messageClass = uid === "ccpAgent" ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            messageClass === "sent"
              ? "https://cdn-icons-png.flaticon.com/512/4298/4298373.png"
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt=""
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
