import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import StarRaiting from "../StarRaitings/StarRaitings.js";
import { FaStar } from "react-icons/fa"
import '../StarRaitings/starRaiting.css'


const LatestTests = ({
  test
}) => {

  const { user } = useContext(AuthContext)
  const [raiting, setRaiting] = useState(null)


  const onChange = (value) => {
console.log(value)
  }
  return (
    <>


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
      
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">
              </p>
              <p className="mb-0 text-dark"></p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0 text-dark">Class: {test.class}</h5>
              <h5 className="text-dark mb-0">Subject: {test.subject}</h5>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0 text-dark">Author: {test._ownerId}</h5>
              
            </div>
            <div className="d-flex justify-content-between mb-2">

              <div className="ms-auto text-warning">
             
                {user._id == test._ownerId

                  ? <Link to={`/edit/${test._id}`} className="text-white-50 fw-bold btn btn-dark" type="button" >Edit</Link>

                  : <Link to={`/${test._id}/submit `}  className="text-white-50 fw-bold btn btn-dark" type="button" >Try it</Link>

                }
              </div>
            <StarRaiting
          
         
            onChange={onChange()}
            >

            </StarRaiting>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default LatestTests;