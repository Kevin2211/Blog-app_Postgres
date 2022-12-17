import {Navbar, Container, Nav} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import { useEffect, useState } from 'react';

function App() {

  const [userInfo, setUserInfo ] = useState({})
  const [isLoggedIn, setIsLoggedIn] =useState(false)

  const signoutHandler = () => {
    localStorage.removeItem('userInfo')
    window.location.href = '/'
  }

  useEffect(() => {


  },[])


  return (
    <div >
      <BrowserRouter>
      <Navbar bg="primary" variant="dark" expand="lg" className='shadow-lg'>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className='store d-flex align-items-center'>
                 <div className='d-none d-md-block'>Blog App</div>
                </Navbar.Brand>
            </LinkContainer>

            <Nav className='me-auto w-100 justify-content-end'>
            {isLoggedIn ? (
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
              <Route path='/' element={<HomeScreen/>}></Route>
              <Route path='/signup' element={<SignupScreen/>}></Route>
              <Route path='/signin' element={<SigninScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
