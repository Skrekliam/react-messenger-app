import { useState, useEffect } from 'react'
import { saveToDatabase, getFromDatabase } from './database';

const useAuth = () => {
    const [userId, setUserId] = useState(null);
    const [users, setUsers] = useState(null);
    
    useEffect(() => {
        getUsers();
    }, []);

    const connect = (username) => {
        getFromDatabase(`/users/`, res => {
            console.log(Object.keys(res));
            console.log(Object.values(res).indexOf(username)===-1);
            console.log(Object.values(res).indexOf(username));

            if (Object.values(res).indexOf(username)===-1){
            console.log('Successfully entered');
                saveToDatabase(`/users/${username}`, true);
            }
        })
        setUserId(username);
        console.log(`id set to ${userId}`);
    }

    const getUsers = () => {
        getFromDatabase('/users', res => {
            setUsers(Object.keys(res))

        })
    }
    return [userId, users, connect, getUsers];
}

export default useAuth;