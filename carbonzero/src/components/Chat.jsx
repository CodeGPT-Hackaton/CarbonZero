// Chat.jsx
import React, { useState } from 'react';
import { interactWithAgent } from '../API/API';
import { useChatContext } from '../Context/ChatContext';
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {


  const handleUserInput = (e) => {
    setUserInput(e.target.value);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  // ... (existing code)

  return (
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={userInput}
          onChange={handleUserInput}
        />

        <button type="submit">Enviar</button>
        {/* Button to clear the chat */}

        <button type="button" onClick={clearMessages}>
          Limpiar Chat
        </button>

      </form>
      {/* FIN DE FROM */}
  );
};

export default Chat;
