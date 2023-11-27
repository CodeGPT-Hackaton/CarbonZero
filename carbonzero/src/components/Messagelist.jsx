// Messagelist.js
import React, { useEffect } from 'react';
import { useChatContext } from '../Context/ChatContext';
import MessageBubble from './MessageBubble';
import AgentBubble from './AgentBubble';

const Messagelist = () => {
    //messages []arreglo
    //addMessage funcion

  const { messages, addMessage } = useChatContext();


  
  useEffect(() => {
    // Ejemplo: Agregar un mensaje después de 2 segundos
    const timeout = setTimeout(() => {
      addMessage({
        id: messages.length + 1,
        text: 'Este es un nuevo mensaje',
        type: 'user',
        timestamp: new Date().toISOString(),
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [messages, addMessage]);





  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <MessageBubble key={message.id} text={message.text} type={message.type} />
      ))}
      {messages.length > 0 && (
        <AgentBubble text={messages[messages.length - 1].text} />
      )}
    </div>
  );
};

export default Messagelist;
