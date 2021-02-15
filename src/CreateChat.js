import React, { useState } from 'react';

const CreateChat = ({createChat, users, getUsers}) => {
    const [chatName, setChatName] = useState('');     
    const [recipient, setRecipient] = useState('');
    
    return (
        <div>
            <h3>Create chat</h3>
            <p>Enter chat name, and choose recipient for your char</p>
            <input placeholder='Chat name' value={chatName} onChange={e => setChatName(e.target.value)} />
            <select  onChange={e => setRecipient(e.target.value)} placeholder='select'>
                {
                    users  ? users.map(user => { 
                        return(
                        <option key={user} value={user}>
                            {user}
                        </option>
                        );
                    
                    }) : 'Empty list'
                }

                
                

            </select>


            <p>Chat name: <b>{chatName}</b>, recipient <b>{recipient}</b></p>
            <button onClick={() => {
                createChat(recipient,chatName);
                setChatName('');
                setRecipient('');

            }} disabled={!recipient || !chatName}>Create chat</button>
        </div>
    );
};

export default CreateChat;