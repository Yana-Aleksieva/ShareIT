import { useState, useEffect } from "react";
import { getOneById } from "../../../services/testsService";
import { useParams } from "react-router-dom";


const Edit = () => {
  const params = useParams()
  console.log(params);
  const [test, setTest] = useState([]);


  useEffect(() => {
    getOneById(params.id)
      .then(result => {
        console.log(result)
        setTest(result);
      }, []);
  });


  const onSubmit = (e) => {

    e.preventDefault();





  }





  console.log(test);
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
                    className="ml-5"
                    placeholder="Type your question"
                    name="title"
                    value={test.title}
                  >
                  </input>

                </div>
              </div>
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row align-items-center question-title">
                  <h3 className="text-danger">1.</h3>
                  <input
                    className="ml-5"
                    placeholder="Type your question"
                    name="question1"
                    value={test.question1}
                  >
                  </input>
                </div>
                <div className="ans ml-2">
                  <label >a.</label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer1"
                    value={test.answer1}></input>
                </div>
                <div className="ans ml-2">
                  <label >b. </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer2" 
                    value={test.answer2}/>



                </div>
                <div className="ans ml-2">
                  <label >c.  </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer3" 
                    value={test.answer3}>

                  </input>
                </div>
                <div className=" ml-2">
                  <label >d. </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer4" 
                    value={test.answer4}/>
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

export default Edit;