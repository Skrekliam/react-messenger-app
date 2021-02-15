import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SignInWithGoogle from './SignInWithGoogle'
import useAuth from './useAuth'

const SignIns = ({con}) => {
    
    
    return (
            <>
            
            <Form className='formLoginWith'>
            <p className='text-muted' >Or login with</p>
            <SignInWithGoogle connect={con} />
            <Button
                variant="outline-primary"
                size='sm'
                block
                onClick={() => {
                    con('1233');

                }}>Login as Adminn</Button>
                

        </Form>
        
        </>
    );
};

export default SignIns;