import React, { useState } from 'react';
const ChatWindow = ({ messages = [], sendMessage, currentChat, userId, users, addUser }) => {
    const [messageBody, setMessageBody] = useState('');

    const sortedMessages = messages.sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf());
    return (
        <div>
            <div className='messages'>
               {sortedMessages.map((message, index) => { return (
                   <p className={userId === message.sender ? 'myMessage' : 'otherMessage' } 
                   key={index}>{message.sender}: {message.body}</p>
               )})} 
            </div>
            <div className='send-message'>
               <textarea value={messageBody} onChange={e => setMessageBody(e.target.value)} className='text-entry' />
               <button className='submit' onClick={() => {sendMessage(currentChat, messageBody); setMessageBody('') }}>Submit</button>
               <select onChange={e => addUser(e.target.value,currentChat)} value='select'>
                {
                    users.map(user => { 
                        return(
                        <option key={user} value={user}>
                            {user}
                        </option>
                    )
                    })
                }   
                </select>
            </div>
        </div>
    );
};

export default ChatWindow;