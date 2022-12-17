import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { signin} from '../Redux/userReducer'

export default function SigninScreen() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/users/signin', {
                email,
                password
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
            dispatch(signin(data))
            toast.success('Sign in successfully')
            navigate('/')
        } catch (error) {
            toast.error('Invalid Email or Password')
        }
    }

  return (
    <Container className="small-container">

        <h1 className='my-3'>Sign In</h1>
        <Form onSubmit={ submitHandler }>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type='password'  onChange={(e) => setPassword(e.target.value)} required></Form.Control>
            </Form.Group>

            <div className='mb-3'>
                <Button variant='secondary' type='submit'>Sign In</Button>
            </div>

        </Form>
    </Container>
  )
}
