import React from 'react';
import { Form, Col,Row } from "react-bootstrap";
import Connect from './Connect';
import SignIns from './SignIns';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({connect}) => {
    return (
        <div style={{marginTop:'50px'}}>
            <Form className='loginForm '>

                <Form>
                    <Row>
                    <Col md={3} xl={4}></Col>
                    <Col md={6} xl={4}>
                    <Form>
                        <Connect connect={connect} />

                        <SignIns con={connect} />
                    </Form>
                    </Col>
                    </Row>
                </Form>

            </Form>
        </div>
    );
};

export default Login;