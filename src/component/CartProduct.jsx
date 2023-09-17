import React from "react";
import "./products.css";

const CartProduct = (props) => {
  const { id, title, price, desc, image, rating, category ,func} = props;

  return (
    <>
      <div className="row justify-content-center mb-3">
        <div className="col-md-12 col-xl-10">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body" style={{ padding: "20px" }}>
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0" style={{ width: "200px" }}>
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src={image} className="image-fluid w-100" />
                    <a href="/Cartlane-Clone-Frontend/">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6"> 
                  <h5>{title}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      {(() => {
                        const stars = [];
                        for (let i = 0; i < rating; i++) {
                          stars.push(<i key={i} className="fa fa-star"></i>);
                        }
                        return stars;
                      })()}
                    </div>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">{desc}</p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start" style={{display:"flex",alignItems:"center"}}>
                  <div>
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">{price}/-</h4>
                    <span className="text-danger">
                      <s>{price * 2}/-</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <button className="btn btn-pink btn-sm mt-2" type="button" onClick={func}>Remove</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
