import './App.css';
import Connect from './Connect.js'
import CreateChat from './CreateChat';
import ActiveChats from './ActiveChats';
import useAuth from './useAuth';
import Firebase from "firebase";
import firebaseConfig from './firebase.config.js'
import ChatWindow from './ChatWindow'
import SignInWithGoogle from './SignInWithGoogle'
import useChats from './useChats';
import Container  from "react-bootstrap/Container";
import Login from './Login'
import SignIns from './SignIns'

function App() {
  if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
  } else {
    Firebase.app(); // if already initialized, use that one
  }
  const [userId, users, connect, getUsers] = useAuth();
  const {
    myActiveChats,
    setCurrentChat,
    createChat,
    sendMessage,
    currentChat,
    currentChatMessages,
    addUser
    
  } = useChats(userId);

  return (
    <Container>
    {/* console.log(`updated ${new Date().toISOString().toString() }`) */}
    <p>id {userId}</p>
      {!userId ?<Login connect={connect}/>: (
        <>
          <p style={{ backgroundColor: 'green' }}>Connected as: {userId}</p>
          <div className = 'ActiveChats'>
          <ActiveChats
            setCurrentChat={setCurrentChat}
            myActiveChats={myActiveChats}
          />
          </div>
          <div className = 'CreateChat'>
          <CreateChat
            createChat={createChat}
            users={users  ? users.filter(user => user !== userId): ''}
            getUsers={getUsers}
          />
          </div>
          <div className = 'CurrentChat'>
          {
            currentChat &&
            <ChatWindow sendMessage={sendMessage}
              currentChat={currentChat} 
              messages={currentChatMessages}
              userId = { userId}
              users={users.filter(user => user !== userId)}
              addUser = { addUser }
            />
          }
          </div>
        </>
      )}
    </Container>
  );
}

export default App;
