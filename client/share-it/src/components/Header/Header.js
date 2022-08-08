import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext.js";
import './header.css'
const Header = () => {

  const { user } = useContext(AuthContext);


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className=" ml-auto" id="navbarNavAltMarkup">

        {
          user.email ?
            <div className="navbar-nav float-right">
              {user.email && <span className='nav-item nav-link disabled text-light'>Welcome, {user.email}</span>}
              <Link to="/logout" className='nav-item nav-link'>Logout
              </Link>
              <Link to="/create" className='nav-item nav-link'>Create test
              </Link>
              <Link to="/profile" className='nav-item nav-link'>Profile
              </Link>
              <Link to="/currentTests" className=' my-tests nav-item nav-link'>My tests
              </Link>
            </div>
            :
            <div className="navbar-nav float-right">
              <Link to="/login" className='nav-item nav-link'>Login
              </Link>
              <Link to="/register" className='nav-item nav-link'>Register
              </Link>
            </div>
        }



      </div>
    </nav >
  );
}

export default Header;