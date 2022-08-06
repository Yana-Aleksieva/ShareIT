

const LatestTests = ({
    test
}) => {

    const onClick = (e) => {

    }
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
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            className="card-img-top"
            alt="Laptop"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">
                <a href="#!" className="text-dark">
                  {test._ownerId}
                </a>
              </p>
              <p class="mb-0 text-dark">Yana</p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0 text-dark">Grade</h5>
              <h5 className="text-dark mb-0">6</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
            
              <div className="ms-auto text-warning">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <button className="btn btn-dark" onClick={onClick}>Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LatestTests;