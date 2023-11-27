// MessageBubble.js
import React from 'react';

const MessageBubble = ({ text, type }) => {

    (
        <div className={`p-2 m-2 rounded-lg ${type === 'user' ? 'bg-blue-200' : 'bg-green-200'} inline-block max-w-xs`}>
            <p className="text-sm">{text}</p>
        </div>
    );
}
export default MessageBubble;
