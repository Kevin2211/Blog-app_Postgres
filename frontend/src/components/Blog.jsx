import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Blog(props) {
    const { blog } = props
  return (
    <Card className='shadow border-0' key={blog.id}>
    <Card.Body>
        <Link className='nav-link' to={`/product/${blog.id}`}>
            <Card.Title> { blog.title }</Card.Title>

        <Button >View</Button>
        </Link>

    </Card.Body>
</Card>
  )
}
