import React from 'react';

const ActiveChats = ({ myActiveChats, setCurrentChat}) => {
    return (
        <div>
            {myActiveChats.map(chat => (
                <div onClick={()=>setCurrentChat(chat)}>{chat.split('<id!45@')[0]}</div>
            ))}
        </div>
    );
};

export default ActiveChats;