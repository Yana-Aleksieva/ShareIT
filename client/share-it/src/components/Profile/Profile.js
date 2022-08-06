import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext.js";
import { editProfile, retrieveAvatar } from "../../services/userService.js";

const Profile = () => {
  const { user } = useContext(AuthContext);
const [img, setImg] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    editProfile(user._id, data);
  }
  useEffect( () => {
    const result =  retrieveAvatar(user._id)
    .then(result => setImg(result))
    
  })

console.log(img)


  return (

    <section className=" vh-100 gradient-custom ">
      <div className="container  py-5 h-50 ">
        <div className="avatar">
          <img src={img.src} class="rounded-circle"
            alt="Avatar" />
        </div>
        <form className="" onSubmit={onSubmit}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white  opacity-50"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">My Profile</h2>
                    <p className="text-white-50 mb-5">
                      Welcome, {user.name}!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Phone
                      </label>
                      <input
                        type="phone"
                        id="phone"
                        name="phone"
                        className="form-control form-control-lg"
                      />

                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Gender
                      </label>
                      <select

                        name="gender"
                        className="form-control form-control-lg"
                      >
                        <option value="Femle">Female</option>
                        <option value="Male">Male</option>
                      </select>

                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Role
                      </label>
                      <select

                        name="role"
                        className="form-control form-control-lg"
                      >
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                      </select>

                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Register
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg" />
                      </a>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

  )

}

export default Profile;