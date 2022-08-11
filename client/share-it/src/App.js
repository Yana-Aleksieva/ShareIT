// import logo from './logo.svg';
import './App.css';
import Register from './components/Register/Register';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login.js';
import { AuthContext } from './components/contexts/authContext.js';
import { TestsContext } from './components/contexts/testsContext'
import { useState } from 'react';
import Mathematics from './components/Tests/Mathematics/Mathematics.js';
import Bulgarian from './components/Tests/Bulgarian/Bulgarian'
import English from './components/Tests/English/English'
import Home from './components/Home/Home.js';
import Create from './components/Create/Create.js';
import Edit from './components/Tests/Mathematics/EditTest/EditTest';
import Profile from './components/Profile/Profile.js';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import CurrentUserTests from './components/UserTests/CurrentUsrTests/CurrentUserTests.js';
import UserTests from './components/UserTests/UserTests.js';
import TakeTest from './components/TakeTest/TakeTest.js';
import Footer from './components/Footer/Footer.js';

function App() {

  const [auth, setAuth] = useLocalStorage('auth', {})
  const [tests, setTests] = useState([])
  const userLogin = (authData) => {

    setAuth(authData);
  }

  const userLogout = () => {

    setAuth({});
  }

  const getAllTests = (testsData) => {
    setTests(testsData)
  }


  return (

    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <TestsContext.Provider value={{tests: tests, getAllTests}}>

        <div id='box'>
          <Header />

          <main id='main-content'>


            <Routes >
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/math' element={<Mathematics />} />
              <Route path='/english' element={<English/>} />
              <Route path='/bulgarian' element={<Bulgarian/>}/>
              <Route path='/create' element={<Create />} />
              <Route path='/edit/:id' element={<Edit />} />
               <Route path='/:id/submit' element={<TakeTest />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/user/tests' element={<UserTests />} />

            </Routes>

          </main>
<Footer/>
        </div>


      </TestsContext.Provider>
    </AuthContext.Provider>

  );
}

export default App;
