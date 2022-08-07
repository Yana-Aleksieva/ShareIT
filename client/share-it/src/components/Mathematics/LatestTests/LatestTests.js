import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.js";

const LatestTests = ({
    test
}) => {

  const {user} = useContext(AuthContext)

 
    return (

        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0" >
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0 font-weight-bold text-dark">{test.title}</p>
            <div
              className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: 35, height: 35 }}
            >
           
            </div>
          </div>
          {/* <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            className="card-img-top"
            alt="Laptop"
          /> */}
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">
                <a href="#!" className="text-dark">
                 
                </a>
              </p>
              <p className="mb-0 text-dark"></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0 text-dark">Class: {test.class}</h5>
              <h5 className="text-dark mb-0">Topic: {test.topic}</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
            
              <div className="ms-auto text-warning">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />

                { user._id == test._ownerId
                
                ? <Link to={`/edit/${test._id}` } className="text-white-50 fw-bold btn btn-dark" type="button" >Edit</Link>
                
                :<Link to={`/ `} className="text-white-50 fw-bold btn btn-dark" type="button" >Try it</Link>
                
}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LatestTests;