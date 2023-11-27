// ChatForm.js
import React from 'react';

const ChatForm = ( onSubmit, value, onChange ) => {

        (
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={value}
                    onChange={onChange}
                />

                <button type="submit">Enviar</button>
            </form>
        );
}
export default ChatForm;