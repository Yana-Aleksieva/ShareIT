import { createTest } from '../../services/testsService.js'
import { useLocation, useNavigate } from 'react-router-dom'

const GenerateTest = () => {
const navigate = useNavigate();
	const location = useLocation()
	const { question } = location.state






	const onSubmit = async (e) => {

		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target));
	
console.log(data)
			try {

				const response = await createTest(data);
				  navigate('/')
			} catch (err) {
				 navigate('/')
			}
		}
	

	return (

		<div className="container vh-100 gradient-custom py-5">
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
											defaultValue =	{question.category}

										>
										
										</input>
										<h4>Class</h4>
										<input
											className="ml-3"
											name="class"
											defaultValue ="3"

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
											className="ml-2 col-7"
											placeholder="Type your question"
											name="question1"
											defaultValue ={question.question}
										>
										</input>


									</div>
									<div className="ans row ml-3 pt-1 text-white ">
										<label >a.</label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer1"
											defaultValue ={question.incorrectAnswers[0]}
										/>

									</div>

									<div className="ans row ml-3 pt-3 text-white ">
										<label >b. </label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer2"
											defaultValue ={question.incorrectAnswers[1]}
										/>



									</div>
									<div className="ans row ml-3 pt-3 text-white ">
										<label >c.  </label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer3"
											defaultValue ={question.incorrectAnswers[2]}
										/>


									</div>

									<div className="ans row ml-3 pt-3 text-white ">
										<label className="">d.   </label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer4"
											defaultValue ={question.correctAnswer}
										/>



									</div>

								</div>

								<div className="card-footer d-flex flex-row justify-content-between  p-1 bg-dark">
									<input
										className="col-sm-4"
										placeholder="Type the correct answer"
										name="correct"
										defaultValue={question.correctAnswer}
									>
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

export default GenerateTest;