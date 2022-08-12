import { register } from "../../services/userService.js";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext.js";


const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();


  const onSubmit = async (e) => {

   

    e.preventDefault();
    const {

      email,
      password
    } = Object.fromEntries(new FormData(e.target));
    console.log(email, password);

    try {
      await register('POST', 'http://localhost:3030/data/users/login', { email, password })
        .then(authData => {
          userLogin(authData)
        })
      console.log(user);

      navigate('/')
    } catch (err) {
      navigate('/')
    }


  }


  return (

    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <form
        className="login-form" 
        onSubmit={onSubmit}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-4 col-sm-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-3 text-center">
                  <div className="mb-md-5 mt-md-4 pb-0">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your name, email and password!
                    </p>

                    <div className="form-outline form-white mb-4">
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
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePassword"
                        name="password"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

  );

}

export default Login;