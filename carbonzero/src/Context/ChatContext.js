// ChatContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { getAgentInfo } from "../API/API";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState({});
  const [agentInfo, setAgentInfo] = useState(null);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    setHistory((prevHistory) => ({
      ...prevHistory,
      [message.id]: {
        text: message.text,
        type: message.type,
        timestamp: message.timestamp,
      },
    }));
  };

  const clearMessages = () => {
    setMessages([]);
    setHistory({});
  };

  useEffect(() => {
    const fetchAgentInfo = async () => {
      try {
        const info = await getAgentInfo();
        setAgentInfo(info);
      } catch (error) {
        console.error("Error fetching agent information:", error.message);
      }
    };
    fetchAgentInfo();
  }, []);

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, clearMessages, history, agentInfo }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
