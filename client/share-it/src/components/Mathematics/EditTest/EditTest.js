import { useState, useEffect } from "react";
import { getOneById } from "../../../services/testsService";
import { useParams, useNavigate } from "react-router-dom";
import { edit } from "../../../services/testsService";
import { deleteTest } from "../../../services/testsService";

const Edit = () => {

  const navigate = useNavigate();
  const params = useParams()
  const id = params.id
  const [test, setTest] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const body = await getOneById(id)
        setTest(body);
      } catch (err) {

      }
    }


    fetchData()

  }, [])

  const onClick = (e) => {
    e.preventDefault()
    deleteTest(id)
    navigate('/');

  }


  const onSubmit = (e) => {

    e.preventDefault();


    const data = Object.fromEntries(new FormData(e.target));
    console.log(data)
    edit(id, data)

    navigate('/')


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
                    defaultValue={test.title}
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
                    defaultValue={test.question1}
                  >
                  </input>
                </div>
                <div className="ans ml-2">
                  <label >a.


                    <input
                      className="ml-5"
                      placeholder="answer"
                      name="answer1"
                      defaultValue={test.answer1} />
                  </label>
                </div>
                <div className="ans ml-2">
                  <label >b. </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer2"
                    defaultValue={test.answer2} />



                </div>
                <div className="ans ml-2">
                  <label >c.  </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer3"
                    defaultValue={test.answer3}>

                  </input>
                </div>
                <div className=" ml-2">
                  <label >d. </label>

                  <input className="ml-5"
                    placeholder="answer"
                    name="answer4"
                    defaultValue={test.answer4} />
                </div>
              </div>

              <div className="d-flex flex-row justify-content-between align-items-rig p-3 bg-white">

                <button
                  className="btn btn-primary border-success align-items-center btn-success"
                  type="submit"
                >
                  Edit
                  <i className="fa fa-angle-right ml-2" />
                </button>
                <button
                  onClick={onClick}
                  type="button"
                  className="btn btn-primary border-success align-items-center btn-success"

                >
                  Delete
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