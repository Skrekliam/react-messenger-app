import React, { useState } from 'react'
import firebase from 'firebase/app'
import { Button, Alert } from 'react-bootstrap'


const SignInWithGoogle = ({ connect }) => {
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({code:null,mess:null});
    return (
        <>
            <Button 
            variant="outline-primary"
            size='sm'
            block
            onClick={() => {
                var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('profile');
                provider.addScope('email');
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    // This gives you a Google Access Token.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    connect((result.user.email).replace(/\./gi, '(dot)'));
                }).catch((error) => {
                    // Handle Errors here.
                    setErrors({code: error.code, mess:error.message});
                })
                

            }}>Log in with Google</Button>
            {errors.code ? 
            <Alert variant="danger" transition='1s'>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <h3>
             {errors.code}
            </h3>
            {errors.mess}
          </Alert>
            
            : '' }
        </ >
    )
};

export default SignInWithGoogle;
    // var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('profile');
    // provider.addScope('email');
    // firebase.auth().signInWithPopup(provider).then(function (result) {
    //     // This gives you a Google Access Token.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    // connect('123');
    //})