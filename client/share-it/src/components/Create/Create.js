import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from 'react-router-dom';
import { createTest } from "../../services/testsService.js";



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

    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="d-flex justify-content-center row">
          <div className="col-md-10 col-lg-10">
            <div className="border">
              <div className="question text-dark p-3 border-bottom">
                <div className="d-flex flex-row justify-content-between align-items-center mcq">
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
                  <h4>Topic</h4>
                  <select
                    className="ml-3"

                    name="topic"
                  >
                     <option value="mathematics">Mathematics</option>
                        <option value="english">English</option>
                        <option value="bulgarian">Bulgarian</option>
                  </select>

                </div>
               
              </div>
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row align-items-center question-title">
                  <h3 className="text-danger">1.</h3>
                  <input
                    className="ml-5"
                    placeholder="Type your question"
                    name="question1"
                  >
                  </input>
                </div>
                <div className="ans ml-2">
                  <label >a.</label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer1" />
                </div>
                <div className="ans ml-2">
                  <label >b. </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer2" />



                </div>
                <div className="ans ml-2">
                  <label >c.  </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer3" />
                </div>
                <div className=" ml-2">
                  <label >d. </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer4" />
                </div>
              </div>

              <div className="d-flex flex-row justify-content-between align-items-rig p-3 bg-white">

                <button
                  className="btn btn-primary border-success align-items-center btn-success"
                  type="submit"
                >
                  Create
                  <i className="fa fa-angle-right ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  );

}

export default Create;