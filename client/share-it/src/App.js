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
import Mathematics, { Mathemtics } from './components/Mathematics/Mathematics'
import Home from './components/Home/Home.js';
import Create from './components/Create/Create.js';


function App() {

  const [auth, setAuth] = useState({})
  const [test, setTests] = useState({})
  const userLogin = (authData) => {

    setAuth(authData);
  }

  const userLogout = () => {

    setAuth({});
  }

  const testsData = (data) => {

    setTests(data);
  }


  return (

    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <TestsContext.Provider value={{testsData}}>
        <div id='box'>
          <Header />

          <main id='main-content'>


            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/math' element={<Mathematics />} />
              <Route path='/create' element={<Create />} />
            </Routes>

          </main>

        </div>
      </TestsContext.Provider>
    </AuthContext.Provider>

  );
}

export default App;
