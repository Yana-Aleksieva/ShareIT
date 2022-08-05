import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {logout} from '../../services/userService'
import { useContext} from 'react';
import {AuthContext} from '../contexts/authContext'


const Logout = () => {

    const {user, userLogout} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {

      logout();
     userLogout()
      navigate('/')
    })
    return null;
}

export default Logout;