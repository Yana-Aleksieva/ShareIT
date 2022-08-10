import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TestsContext } from "../contexts/testsContext"
import CurrentUserTests from "../UserTests/CurrentUsrTests/CurrentUserTests.js";
import './takeTests.css';


const TakeTest = () => {


  const { tests } = useContext(TestsContext)
  const params = useParams();

  const currentTest = tests.filter(t => t._id === params.id);
  const test = currentTest[0];


  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <form >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">{test.title}</h2>
                    <p className="text-white-50 mb-5">

                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="question"
                        defaultValue={test.question1}
                        name="question"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX">

                      </label>
                    </div>
                    <div className="row d-flex flex-rowd-flex flex-row">
                      <input
                        type="radio"
                        className="btn-check "
                        name="options"
                        id="option4"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-light ml-3 mr-5" htmlFor="option4">
                       {test.answer1}
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="option4"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-light mr-5" htmlFor="option4">
                       {test.answer2}
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="option4"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-light mr-5" htmlFor="option4">
                       {test.answer3}
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="option4"
                        autoComplete="off"
                        onClick={(e) =>   e.target.  className = "btn-check bg-light"}
                      />
                      <label className="btn btn-outline-light mr-5" htmlFor="option4"
                       >
                       {test.answer4}
                      </label>
                    </div><br/>
                    
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                     Submit
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
                    <p className="mb-0">
                      Don't have an account?{" "}
                      {/* <Link to="/register" className="text-white-50 fw-bold">
                        Sign Up
                      </Link> */}
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


export default TakeTest;