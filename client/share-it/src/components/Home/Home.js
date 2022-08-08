import { Link } from "react-router-dom";
import './home.css'
import { getAll } from "../../services/testsService.js";
import { useState, useEffect, useContext } from 'react';
import { TestsContext } from "../contexts/testsContext.js";

const Home = () => {

  const { tests, getAllTests } = useContext(TestsContext);


  useEffect(() => {

    const fetchData = async () => {

      const data = await getAll()
      getAllTests(data)

    }
    fetchData()


  }, []);


  return (
    <div className="container py-5">
      <div className="row gutters">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
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
          </div>
        </div>
      </div>
    </div>



  );
}


export default Home;