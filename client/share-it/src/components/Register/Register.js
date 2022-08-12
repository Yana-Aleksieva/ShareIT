import { register } from "../../services/userService.js";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext.js";
import './register.css';


const Register = () => {

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const initialValues = {
    name: '',
    email: '',
    password: '',
    repass: '',

  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {


  }, [formErrors])

  const onSubmit = async (e) => {
    e.preventDefault();
       setIsSubmit(true);
    setFormErrors(validate(formValues));


    if (Object.keys(formErrors).length === 0) {

   
    const {
      name,
      email,
      password,
      role
    } = Object.fromEntries(new FormData(e.target));

    const user = await register('POST', 'http://localhost:3030/data/users/register', { name, email, password, role });

    userLogin(user)
    navigate('/')

  }
 
   

  }

  useEffect(() => {

  
  }, [formErrors]);


  const validate = (values) => {

    const errors = {};
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

    if (!values.name) {
      errors.name = "Username is required!"
    }
    if (!values.password) {
      errors.password = "Password is required!"
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!"
    } else if (values.password != values.repass) {
      errors.repass = "Password and Reapeat Password dont match!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!emailRegEx.test(values.email)) {
      errors.email = "This is not a valid email!"
    }

    return errors;
  }

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

  }
  return (


    <form className=" register-form pt-3 h-50 w-75" onSubmit={onSubmit}>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card bg-dark text-white  opacity-50"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-3 text-center">
              <div className="mb-md-5 mt-md-4 pb-1">
                <h2 className="fw-bold mb-0 text-uppercase">Register</h2>
                <p className="text-white-50 mb-5">

                  Please enter your email and password!


                </p>
                <div className="form-outline form-white mb-2 pt-0">
                <label className=" label form-label col-sm-4 p-0" htmlFor="typeEmailX">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="form-control form-control-lg col-sm-8"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  <p className="error">{formErrors.name}</p>
               
                </div>
                <div className="form-outline form-white mb-2">
                <label className="label form-label col-sm-4 p-0" htmlFor="typeEmailX">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX"
                    name="email"
                    className="form-control form-control-lg col-sm-8"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p className="error">{formErrors.email}</p>
                
                </div>
                <div className="form-outline form-white mb-2">
                <label className="label form-label col-sm-4 p-0" htmlFor="typePasswordX">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePasswordX"
                    name="password"
                    className="form-control form-control-lg col-sm-8"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p className="error">{formErrors.password}</p>
                
                </div>
                <div className="form-outline form-white mb-2">
                <label className=" label form-label col-sm-4 p-0" htmlFor="typePasswordX">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repass"
                    className="form-control form-control-lg col-sm-8"
                    value={formValues.repass}
                    onChange={handleChange}
                  />
                  <p className="error">{formErrors.repass}</p>
                
                </div>
                <div className="form-outline form-white mb-2">
                <label className="label-role form-label col-sm-4 p-0" htmlFor="typeEmailX">
                    Role
                  </label>
                  <select

                    name="role"
                    className="role form-control form-control-lg col-sm-8"
                    value={formValues.role}
                    onChange={handleChange}
                  >

                    <option value="teacher">Teacher</option>
                    <option value="student" >Student</option>
                  </select>
               

                </div>
                <button
                  className="btn btn-outline-light btn-lg px-5 mt-2"
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