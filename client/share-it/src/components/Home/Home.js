import { Link } from "react-router-dom";
import './home.css'

const Home = () => {


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
              <a href="/enlish" className="btn btn-primary btn-lg">
                Try it
              </a>
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
              <a href="/enlish" className="btn btn-primary btn-lg">
                Try it
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}


export default Home;