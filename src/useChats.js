import { useState, useEffect } from 'react'
import { saveToDatabase, getFromDatabase } from './database';
import {v4 as uuidv4} from 'uuid';

const useChats = (userId) => {
    const [currentChat, setCurrentChat] = useState(null);
    const [myActiveChats, setMyActiveChats] = useState([]);
    const [currentChatMessages, setCurrentChatMessages] = useState([]);

    useEffect(() => {
        getFromDatabase(`/users/${userId}/chats`, res => {
            setMyActiveChats(Object.keys(res));
        });

        getFromDatabase(`/chats/${currentChat}/messages`, res => {
            setCurrentChatMessages(Object.values(res));
        })
    }, [currentChat, userId]);

    const sendMessage = (chatName, body) => {
        const messageId = uuidv4();
        saveToDatabase(`/chats/${chatName}/messages/${messageId}`, {
            body, sender: userId, created: new Date().toISOString(),
        })
    };
    const createChat = (recipient, chatName) => {
        const fullChatName = `${chatName}<id!45@${uuidv4()}`;
        saveToDatabase(`/users/${recipient}/chats/${fullChatName}`, 0);
        saveToDatabase(`/users/${userId}/chats/${fullChatName}`, 0);
        saveToDatabase(`/chats/${fullChatName}/messages/`, {});
        setCurrentChat(fullChatName);
        
    }
    const addUser = (recipient, fullChatName) => {
        saveToDatabase(`/users/${recipient}/chats/${fullChatName}`, 0);
    }


    return {
        addUser,
        sendMessage,
        createChat,
        currentChat,
        myActiveChats,
        currentChatMessages,
        setCurrentChat
    };
};

export default useChats;