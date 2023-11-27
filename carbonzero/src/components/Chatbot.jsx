// ChatBot.js

import React from 'react';
import AgentInfo from './AgentInfo'; 
import Chat from  './Chat'

const ChatBot = () => {
  return (
    <div className="chatbot-container">
      <AgentInfo />
      <Chat/>
    </div>
  );
};

export default ChatBot;
