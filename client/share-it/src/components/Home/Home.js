import { Link } from "react-router-dom";
const Home  = () => {


    return (
<div className="container py-5">
  <div className="row gutters">
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-plan">
        <div className="pricing-header">
         
          <div className="pricing-cost">Mathematics</div>
         
        </div>
        <ul className="pricing-features">
          <li>5GB Linux Web Space</li>
          <li>5 MySQL Databases</li>
          <li>500 Emails</li>
          <li>250Gb mothly Transfer</li>
          <li className="text-muted">
            <del>24/7 Tech Support</del>
          </li>
          <li className="text-muted">
            <del>Daily Backups</del>
          </li>
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
        <div className="pricing-header red">
          
          <div className="pricing-cost">English</div>

        </div>
        <ul className="pricing-features">
          <li>10GB Linux Web Space</li>
          <li>10 MySQL Databases</li>
          <li>1000 Emails</li>
          <li>750Gb mothly Transfer</li>
          <li>24/7 Tech Support</li>
          <li className="text-muted">
            <del>Daily Backups</del>
          </li>
        </ul>
        <div className="pricing-footer">
          <a href="/enlish" className="btn btn-danger btn-lg">
            Tri it
          </a>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="pricing-plan">
        <div className="pricing-header red">
          
          <div className="pricing-cost">English</div>

        </div>
        <ul className="pricing-features">
          <li>10GB Linux Web Space</li>
          <li>10 MySQL Databases</li>
          <li>1000 Emails</li>
          <li>750Gb mothly Transfer</li>
          <li>24/7 Tech Support</li>
          <li className="text-muted">
            <del>Daily Backups</del>
          </li>
        </ul>
        <div className="pricing-footer">
          <a href="/enlish" className="btn btn-danger btn-lg">
            Tri it
          </a>
        </div>
      </div>
    </div>
  </div>
</div>



    );
}


export default Home;