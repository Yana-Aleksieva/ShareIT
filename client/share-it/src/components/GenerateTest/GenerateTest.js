import { useEffect, useState } from "react";
import { generateQuestion } from "../../services/testsService.js";


const GenerateTest = () => {
	const [question, setQuestion] = useState([]);


useEffect(() => {
	const fetchQuestion = async  ()	=> {
		const data = await generateQuestion()
	
		setQuestion(data[0]) ;
	}
	fetchQuestion()
}, [])

	

console.log(question)

	const onSubmit = async () => {

		
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
											className="ml-2 col-7"
											placeholder="Type your question"
											name="question1"

										>
										</input>


									</div>
									<div className="ans row ml-3 pt-1 text-white ">
										<label >a.</label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer1"

										/>

									</div>

									<div className="ans row ml-3 pt-3 text-white ">
										<label >b. </label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer2"

										/>



									</div>
									<div className="ans row ml-3 pt-3 text-white ">
										<label >c.  </label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer3"
									
										/>


									</div>

									<div className="ans row ml-3 pt-3 text-white ">
										<label className="">d.   </label>

										<input className="ml-2 col-5"
											placeholder="answer"
											name="answer4"

										/>



									</div>

								</div>

								<div className="card-footer d-flex flex-row justify-content-between  p-1 bg-dark">
									<input
										className="col-sm-4"
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

export default GenerateTest;