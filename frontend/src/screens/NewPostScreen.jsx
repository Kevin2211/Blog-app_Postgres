import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export default function NewPostScreen() {

  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const userInfo = useSelector((state) => state.user.userInfo)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
        const { data } = await axios.post('/api/posts/new', {
            userId: userInfo.id,
            title,
            content
        })



        toast.success('New post added')
        navigate('/')
    } catch (error) {
        toast.error(error)
    }
}

  return (
    <Container className="small-container">

        <h1 className='my-3'>Add new blog</h1>
        <Form onSubmit={ submitHandler }>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Title:</Form.Label>
                <Form.Control type='email' onChange={(e) => setTitle(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Content:</Form.Label>
                <Form.Control type='password'  onChange={(e) => setContent(e.target.value)} required></Form.Control>
            </Form.Group>

            <div className='mb-3'>
                <Button variant='secondary' type='submit'>Submit</Button>
            </div>

        </Form>
    </Container>
  )
}
