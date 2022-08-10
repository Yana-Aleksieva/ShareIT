import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext.js";
import { editProfile, retrieveAvatar, updateProfile } from "../../services/userService.js";
import './profile.css';


const Profile = () => {
  const { user } = useContext(AuthContext);
  const [img, setImg] = useState([]);


  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    editProfile(user._id, data);
  }




  const getAvatar = () => {

    const imageUrl = `https://robohash.org/${user.name}`;
    const fetchImage = async () => {
      const res = await fetch(imageUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };

    useEffect(() => {
      fetchImage();
    }, []);

    return (
      <>
        <img src={img} alt="icons" />
      </>
    );
  }
  const result = getAvatar();


  return (

    <section className="gradient-custom ">
      <div className="container  py-5 h-50 ">
        <div className="avatar">
          {result}
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
                    <h2 className="fw-bold mb-2 text-uppercase my-profile">My Profile</h2>
                    <p className="text-white-50 mb-5">
                      Welcome, {user.name}!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Phone
                      </label>
                      <input
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


                    <button

                      className="btn btn-outline-light btn-lg px-5 updateProfile"
                      type="submit"
                    >
                      Update profile
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