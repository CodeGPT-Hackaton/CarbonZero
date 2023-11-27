// ChatForm.js
import React from 'react';

const ChatForm = ( ) => {

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
      };
      return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                   
                    onChange={handleUserInput}
                />

                <button type="submit">Enviar</button>
            </form>
        );
}
export default ChatForm;