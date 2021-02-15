import React, { useState } from 'react'
import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap'
import './App.css'


const Connect = ({ connect }) => {
    const [username, setUsername] = useState('');
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Form className='formLogin'>
                        <Form.Group
                            controlId='formGridLogin'>
                            <Form.Label htmlFor='usernameId'>Login</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <i class="material-icons-round backGr">person</i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                    id='usernameId'
                                    type='text'
                                    placeholder='Enter name'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group
                            controlId='formGridPassword'>
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <span class="material-icons-round">vpn_key</span>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button
                            variant='success'
                            block disabled={!username} onClick={() => connect(username)}>Connect</Button>

                    </Form>
                </Col>
            </Row>
        </>
    )
};

export default Connect;