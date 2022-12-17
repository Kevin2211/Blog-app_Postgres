import axios from 'axios'
import React, { useEffect } from 'react'

import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function SignupScreen() {
    const navigate = useNavigate()


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')



    const submitHandler = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('Passwords do not match!')
            return
        }
        try {
            const { data } = await axios.post('/api/users/signup', {
                firstName,
                lastName,
                email,
                password
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
            toast.success('Sign up successfully')
            navigate('/')
        } catch (error) {
            toast.error('Email already exist')
        }
    }


  return (
    <Container className="small-container">

        <h1 className='my-3'>Sign Up</h1>
        <Form onSubmit={ submitHandler }>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>First Name:</Form.Label>
                <Form.Control type='text' onChange={(e) => setFirstName(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type='text' onChange={(e) => setLastName(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type='password'  onChange={(e) => setPassword(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='confirmPassword'>
                <Form.Label>Cornfirm Password:</Form.Label>
                <Form.Control type='password'  onChange={(e) => setConfirmPassword(e.target.value)} required></Form.Control>
            </Form.Group>
            <div className='mb-3'>
                <Button variant='secondary' type='submit'>Sign Up</Button>
            </div>

        </Form>
    </Container>
  )
}

