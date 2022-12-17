import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import NewPostScreen from './screens/NewPostScreen';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signout } from './Redux/userReducer'
import 'react-toastify/dist/ReactToastify.css'



function App() {

  const navigate = useDispatch()
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.user.userInfo)
  console.log(userInfo)

  const signoutHandler = () => {
    localStorage.removeItem('userInfo')
    toast.success("Sign out successfully")
    console.log('signout')
    dispatch(signout())
    window.location.href = '/'
  }

  useEffect(() => {



  },[])


  return (
    <div >
      <BrowserRouter>
      <Navbar bg="primary" variant="dark" expand="lg" className='shadow-lg'>
      <ToastContainer position='bottom-center' limit={1}/>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className='store d-flex align-items-center'>
                 <div className='d-none d-md-block'>Blog App</div>
                </Navbar.Brand>
            </LinkContainer>

            <Nav className='me-auto w-100 justify-content-end'>
            {userInfo.token ? (
              <>
                <Link className="nav-link" > Welcome back { userInfo.firstName}</Link>
                <Link className="nav-link" onClick={signoutHandler} > Sign Out </Link>

          
              </>
            ): (
              <>
                <Link className="nav-link" to='/signup'> Register</Link>
                <Link className="nav-link" to='/signin'> Sign in</Link>
              </>
            )}


            </Nav>

          </Container>
        </Navbar>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/' element={<HomeScreen/>}>
              </Route>
              <Route path='/signup' element={<SignupScreen/>} ></Route>
              <Route path='/signin' element={<SigninScreen/>}></Route>
              <Route path='/posts/new' element={<NewPostScreen />}></Route>
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
