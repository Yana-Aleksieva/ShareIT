import { Link } from "react-router-dom";
import './home.css'
import { getAll } from "../../services/testsService.js";
import { useState, useEffect, useContext } from 'react';
import { TestsContext } from "../contexts/testsContext.js";
import { StarRaiting } from "../CurrentUserTests/StarRaitings/StarRaitings";
import { getRandomQuote } from "../../services/homeService.js";

const Home = () => {

  const { tests, getAllTests } = useContext(TestsContext);
  const [quote, setQuote] = useState({})

  useEffect(() => {

    const fetchData = async () => {

      const data = await getAll()
      getAllTests(data)

    }
    fetchData()
    const data = getRandomQuote().then(res => setQuote(res.contents.quotes[0]));


  }, []);


  return (
<div>
   
<h6 className="shareit-title text-dark pt-2">ShareIT <br></br>The place where you can give and receive knowledge</h6>
    
    <div className="container ">
    


      <div className="catalog-box container py-3">
        <div className="row gutters">
          <div className="tests-box col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="pricing-plan">
              <div className="pricing-header">

                <div className="pricing-cost">Mathematics</div>

              </div>
              <ul className="pricing-features">

              </ul>
              <div className="pricing-footer">
                <Link to="/math" className="btn btn-primary btn-lg">
                  Try it
                </Link>
              </div>
            </div>
          </div>
          <div className="tests-box col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="pricing-plan">
              <div className="pricing-header">

                <div className="pricing-cost">English</div>

              </div>
              <ul className="pricing-features">

              </ul>
              <div className="pricing-footer">
                <Link to="/english" className="btn btn-primary btn-lg">
                  Try it
                </Link>
              </div>
            </div>
          </div>
          <div className="tests-box col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
            <div className="pricing-plan bg">
              <div className="pricing-header">

                <div className="pricing-cost">Bulgarian</div>

              </div>
              <ul className="pricing-features">

              </ul>
              <div className="pricing-footer">
                <Link to="/bulgarian" className="btn btn-primary btn-lg">
                  Try it
                </Link>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote box">
        <h5 className="text-dark text-center">Quote 0f the day:</h5>
        <span className="quote-box animate-charcter">{ quote.quote}</span>
      </div>
   
      <br/>
    </div>
    </div>
  );
}


export default Home;