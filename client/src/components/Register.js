import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";

const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()

    const handleRegister = (event) => {
        event.preventDefault()

    }

  return (
    <div>Register a new user using form below: 
        <br />
        <Form onSubmit={handleRegister}>
          <Form.Group>
            <Form.Label>username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <Form.Label>password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form.Group>
        </Form>
    </div>
  )
}

export default Register