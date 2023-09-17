import React from 'react'
import "./Home.css";
import "./plan.css";

function Homecard(props) {
  return (
  <div className="card">
    <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
      <div className="image-container">
        <img className="img-fluid" src={props.image} alt="Product Image" />
      </div>
      <a href="/Cartlane-Clone-Frontend/">
        <div className="mask">
          <div className="d-flex justify-content-start align-items-end h-100"></div>
        </div>
        <div className="hover-overlay">
          <div className="mask"></div>
        </div>
      </a>
    </div>
    <div className="card-body">
      <h5 className="card-title mb-3">{props.name}</h5>
      <h6 className="mb-3"><i className="fa fa-rupee"></i>{props.price}/-</h6>
    </div>
  </div>
  )
}

export default Homecard