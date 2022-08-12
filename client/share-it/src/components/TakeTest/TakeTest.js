import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TestsContext } from "../contexts/testsContext"
import Popup from "../PopUp/PopUp.js";

import './takeTests.css';


const TakeTest = () => {

  const navigate = useNavigate();
  const { tests } = useContext(TestsContext)
  const params = useParams();
  const [selected, setSelected] = useState([]);
  const currentTest = tests.filter(t => t._id === params.id);
  const test = currentTest[0];
  const [submited, setSubmited] = useState(false);


  const onChange = (e) => {

    setSelected([e.target.value])

  }
  const togglePopup = () => {
    setSubmited(!submited);
    if(submited){
      navigate('/')
    }
  }

  const onSubmit = (e) => {

    e.preventDefault();
    setSubmited(true);
    if (test.correct === selected[0]) {
      // alert('Correct answer')

    }

    // navigate('/');
  }
  console.log(submited)
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-1 h-100">
        <form className="submitForm pt-5" onSubmit={onSubmit}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">{test.title}</h2>


                    <div className="form-outline form-white mb-3 ">
                      <input
                        type="question"
                        defaultValue={test.question1}
                        name="question"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX">

                      </label>
                    </div>
                    <div className="">
                      <div className="form-check form-check-inline ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          name="option1"

                          onChange={onChange}
                          value={test.answer1}
                        />
                        <label className="form-check-label h4" htmlFor="inlineCheckbox1">
                          {test.answer1}
                        </label><br />
                      </div>
                      <div className="form-check form-check-inline h4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          name="option2"

                          value={test.answer2}
                          onChange={onChange}
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                          {test.answer2}
                        </label><br />
                      </div>
                      <div className="form-check form-check-inline h4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          name="option3"

                          value={test.answer3}
                          onChange={onChange}

                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                          {test.answer3}
                        </label><br />
                      </div>
                      <div className="form-check form-check-inline h4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox4"
                          name="option4"

                          value={test.answer4}
                          onChange={onChange}
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                          {test.answer4}
                        </label>
                      </div>
                    </div>


                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={togglePopup}
                    >
                      Submit
                    </button>
                    {
                      submited && <Popup
                        content={
                          <>
                            {test.correct === selected[0]
                              ?
                              <h3>Correct answer!</h3>
                              :
                              <h3>Thank you for submitting the test</h3>
                             
                            }


                          </>

                        }
                        handleClose={togglePopup}

                      />
                    }

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
  );
}


export default TakeTest;