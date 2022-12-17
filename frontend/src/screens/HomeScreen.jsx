import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import LoadingBox from "../components/LoadingBox";
import { Col, Row } from 'react-bootstrap';
import Blog from '../components/Blog';

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_REQUEST':
          return {...state, loading: true};
        case 'FETCH_SUCCESS':
          return{...state, blogs: action.payload, loading: false};
        case 'FETCH_FAIL':
          return {...state, loading: false, error: action.payload};
        default:
          return state;
      }
}


export default function HomeScreen() {
  

    const [{loading, error, blogs}, dispatch] = useReducer(reducer, {
        blogs: [],
        loading: true, 
        error: ''
      })

      useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
              const result = await axios.get('/api/posts')
              dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      
            } catch (error) {
              dispatch({type: 'FETCH_FAIL', payload: error.message})
            }
        }

        fetchData()

      },[])

  return (
    <div className='container'>
        {loading ? (<LoadingBox />) : 
        error ? (
            <div>
                {error}
            </div>
        ) : (
        <div>
            <Row>
                {blogs.map(blog => (
                    <Col md={4} key={blog.id}>
                        <Blog blog={blog} ></Blog>
                    </Col>
                )
                )}
            </Row>
        </div>)}
    </div>
  )
}
