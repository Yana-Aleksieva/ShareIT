// import logo from './logo.svg';
import './App.css';
import Register from './components/Register/Register';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login.js';
import { AuthContext } from './components/contexts/authContext.js';
import { useState } from 'react';
import Home from './components/Home/Home.js';


function App() {

  const [auth, setAuth] = useState({})

  const userLogin = (authData) => {

    setAuth(authData);
  }

  const userLogout = () => {

    setAuth({});
  }

  return (

    <AuthContext.Provider value={{ user: auth, userLogin, userLogout}}>
      <div id='box'>
        <Header />

        <main id='main-content'>


          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home/>} />
            <Route path='/logout' element={<Logout />} />
          </Routes>

        </main>

      </div>
    </AuthContext.Provider>

  );
}

export default App;
