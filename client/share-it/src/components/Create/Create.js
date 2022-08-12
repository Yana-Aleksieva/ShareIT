import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from 'react-router-dom';
import { createTest } from "../../services/testsService.js";
import './create.css'


const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {

    e.preventDefault();
    console.log(user)
    const data = Object.fromEntries(new FormData(e.target));
    data._ownerId = user._id;
    console.log(data);
    try {

      const response = await createTest(data);
      console.log(response);



      navigate('/')
    } catch (err) {
      navigate('/')
    }
  }
  return (

    <div className="container mt-1 vh-100 gradient-custom py-5">
      <form onSubmit={onSubmit} className="">
        <div className=" boreder d-flex justify-content-center row">
          <div className="col-md-9 col-lg-9">
            <div className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}>
              <div className="card-body p-3 text-center">
                <div className="question text-white p-3 border-bottom">
                  <div className=" d-flex flex-row justify-content-between align-items-center mcq">
                    <h4>Title</h4>
                    <input
                      className="ml-3"
                      placeholder=""
                      name="title"
                    >
                    </input>
                    <h4>Class</h4>
                    <input
                      className="ml-3"
                      name="class"
                    >
                    </input>
                    <h4>Subject</h4>
                    <select
                      className="ml-3"

                      name="subject"
                    >
                      <option value="mathematics">Mathematics</option>
                      <option value="english">English</option>
                      <option value="bulgarian">Bulgarian</option>
                    </select>

                  </div>

                </div>
                <div className="question bg-dark text-white p-3 border-bottom">
                  <div className="d-flex flex-row align-items-center question-title">
                    <h3 className="text-danger">1.</h3>
                    <input
                      className="ml-5"
                      placeholder="Type your question"
                      name="question1"
                    >
                    </input>
                  </div>
                  <div className="ans ml-2 text-white">
                    <label >a.</label>

                    <input className="ml-5"
                      placeholder="answer"
                      name="answer1" />
                  </div>
                  <div className="ans ml-2 text-white">
                    <label >b. </label>

                    <input className="ml-5 text-white"
                      placeholder="answer"
                      name="answer2" />



                  </div>
                  <div className="ans ml-2 text-white">
                    <label >c.  </label>

                    <input className="ml-5"
                      placeholder="answer"
                      name="answer3" />

                  </div>
                  <div className=" ml-2 text-white">
                    <label >d. </label>

                    <input className="ml-5"
                      placeholder="answer"
                      name="answer4" />
                  </div>
                </div>

                <div className="card-footer d-flex flex-row justify-content-between align-items-rig p-1 bg-dark">
                  <input
                    className="col-lg-8"
                    placeholder="Type the correct answer"
                    name="correct">

                  </input>
                  <button
                    className="create-btn btn btn-primary border-success align-items-center "
                    type="submit"  >
                    Create

                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>

  );

}

export default Create;