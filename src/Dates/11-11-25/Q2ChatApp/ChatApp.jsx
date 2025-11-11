//parent
import { useState } from "react";
import React from "react";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [chatType, setChatType] = useState("dm");

  const handleSendMessage = (text) => {};

  const handleSelectUser = (userID) => {
    setSelectedChat(userID);
    setChatType(null);
  };

  return (
    <div>
      <UserList
        users={onlineUsers}
        selectedChat={selectedChat}
        onSelectUser={handle}
      />
      <div className="chat-main">
        <CurrentChatHeader
          selectedChat={selectedChat}
          chatType={chatType}
          users={onlineUsers}
        />
        <MessageList
          messages={messages}
          selectedChat={selectedChat}
          currentUser={currentUser}
        />
        <MessageInput
          onSendMessage={handleSendMessage}
          disabled={!selectedChat}
        />
      </div>
    </div>
  );
};

export default ChatApp;

// ChatApp (parent)

// MessageList (displays messages)

// MessageInput (text input and send button)

// UserList (shows online users, each can be clicked to start DM)

// CurrentChatHeade
