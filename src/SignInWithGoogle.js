import React, { useState } from 'react'
import firebase from 'firebase/app'
import { Button } from 'react-bootstrap'


const SignInWithGoogle = ({ connect }) => {
    const [username, setUsername] = useState('');
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
                    connect((result.user.email).replace(/\.|#|$|[|]/gi, '(dot)'));
                })



            }}>Log in with Google</Button>

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