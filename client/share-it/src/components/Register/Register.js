import { register } from "../../services/userService.js";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext.js";
import './register.css';

const Register = () => {

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();



  const onSubmit = async (e) => {



    e.preventDefault();
    const {
      name,
      email,
      password,
      role
    } = Object.fromEntries(new FormData(e.target));
 

    try {
      const user = await register('POST', 'http://localhost:3030/data/users/register', { name, email, password, role });
    
      userLogin(user)
      navigate('/')
    } catch (err) {
      navigate('/')
    }






  }


  return (


    <form className=" register-form pt-3 h-50 w-75" onSubmit={onSubmit}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card bg-dark text-white  opacity-50"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                <p className="text-white-50 mb-5">
                  Please enter your email and password!
                </p>
                <div className="form-outline form-white mb-2">
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typeEmailX">
                    Name
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <input
                    type="email"
                    id="typeEmailX"
                    name="email"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typeEmailX">
                    Email
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <input
                    type="password"
                    id="typePasswordX"
                    name="password"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typePasswordX">
                    Password
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repass"
                    className="form-control form-control-lg"
                  />

                  <label className="form-label" htmlFor="typePasswordX">
                    Repeat Password
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <select

                    name="role"
                    className="form-control form-control-lg"
                  >
                    <option value="teacher">Teacher</option>
                    <option value="student" >Student</option>
                  </select>
                  <label className="form-label" htmlFor="typeEmailX">
                    Role
                  </label>

                </div>
                <button
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit"
                >
                  Register
                </button>

              </div>
              <div>
                <p className="mb-0 pt-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-white-50 fw-bold">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>


  );

}

export default Register;