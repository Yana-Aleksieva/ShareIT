import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from 'react-router-dom';
import { createTest, generateQuestion } from "../../services/testsService.js";
import './create.css'


const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    class: '',
    question1: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {


  }, [formErrors]);

  const validate = (values) => {

    const errors = {};
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

    if (!values.title) {
      errors.title = "Title is required!"
    }
    if (!values.class) {
      errors.class = "Class is required!"
    }
    if (!values.answer1) {
      errors.answer1 = "Answer is required!"
    } if (!values.answer2) {
      errors.answer2 = "Answer is required!"
    } if (!values.answer3) {
      errors.answer3 = "Answer is required!"
    } if (!values.answer4) {
      errors.answer4 = "Answer is required!"
    }

    return errors;
  }

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  }

  const onClick = async () => {
    const id = user._id
    const res = await generateQuestion()[0];

    console.log(res);
  }


  const onSubmit = async (e) => {

    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));

    const data = Object.fromEntries(new FormData(e.target));
    data._ownerId = user._id;
    if (Object.keys(formErrors).length === 0) {
      try {

        const response = await createTest(data);
        // navigate('/')
      } catch (err) {
        // navigate('/')
      }
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
                      value={formValues.title}
                      onChange={handleChange}
                    >
                    </input>
                    <h4>Class</h4>
                    <input
                      className="ml-3"
                      name="class"
                      value={formValues.class}
                      onChange={handleChange}
                    >

                    </input>
                    <p className="error">{formErrors.class}</p>
                    <h4>Subject</h4>
                    <select
                      className="ml-3"
                      name="subject"
                      onChange={handleChange}
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
                      value={formValues.question1}
                      onChange={handleChange}
                    >
                    </input>
                    <p className="error">{formErrors.question1}</p>
                    <button className="btn btn-dark border-success align-items-center ml-5"
                      onClick={onClick}>
                      Generate Question</button>
                  </div>
                  <div className="ans ml-2 text-white pt-2">
                    <label >a.</label>

                    <input className="ml-5"
                      placeholder="answer"
                      name="answer1"
                      value={formValues.answer1}
                      onChange={handleChange} />

                  </div>
                  <p className="error">{formErrors.answer1}</p>
                  <div className="ans ml-2 text-white">
                    <label >b. </label>

                    <input className="ml-5 text-white"
                      placeholder="answer"
                      name="answer2"
                      value={formValues.answer3}
                      onChange={handleChange} />

                    <p className="error">{formErrors.answer2}</p>

                  </div>
                  <div className="ans ml-2 text-white">
                    <label >c.  </label>

                    <input className="ml-5"
                      placeholder="answer"
                      name="answer3"
                      value={formValues.answer3}
                      onChange={handleChange} />

                  </div>
                  <div className=" ml-2 text-white">
                    <label >d. </label>

                    <input className="ml-5"
                      placeholder="answer"
                      name="answer4"
                      value={formValues.answer3}
                      onChange={handleChange} />
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