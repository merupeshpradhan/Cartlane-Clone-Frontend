import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function SingleProduct() {
  const location = useLocation();
  const passedProps = location.state;

  //===========================Add to cart=======================
  async function addtocart() {
    var username = localStorage.getItem("jewellsUserName");
    if (username == "null") alert("You need to login");
    else {
      var previd = 0;
      // =================Fetch last id from carts id===============
      const response = await fetch("https:/cartlaneclone.onrender.com/cart");
      const data = await response.json();
      if (data.length > 0) {
        const lastObjectData = data[data.length - 1];
        previd = lastObjectData.id;
      }
      // =================Add 1 on Fetched last id from carts id===============
      const modifiedData = [passedProps].map((item) => ({
        ...passedProps,
        pid: item.id,
        id: previd + 1,
        username: username,
      }));

      const res = await fetch(`https:/cartlaneclone.onrender.com/cart`, {
        method: "POST",
        body: JSON.stringify(...modifiedData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => console.log(res));
      alert("Product added successfully");
    }
  }

  const arr = [
    {
      id: 1,
      name: "Exclusive Evil Eye Gold CharmCharm",
      price: 10000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/T/UT01087-1Y0000_11_listfront.jpg",
      category: "gold",
    },
    {
      id: 2,
      name: "Geometric Gleam Diamond Stud Earrings",
      price: 15000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06395-1RP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 3,
      name: "Ornate Om Baby Gold Bangle",
      price: 20500,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR02496-WGP4HA_11_listfront.jpg",
      category: "bangle",
    },
    {
      id: 4,
      name: "Classic Leaves Diamond Pendant",
      price: 55000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP03780-YGP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 5,
      name: "Diamond Pendants 18 Karat Yellow Gold",
      price: 13250,
      image:
        "https://cdn.caratlane.com/media/catalog/product/J/P/JP03871-YGP900_1_lar.jpg",
      category: "silver",
    },
    {
      id: 6,
      name: "Geometric Gleam Diamond Stud Earrings",
      price: 15000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07311-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 7,
      name: "Diamond,Gemstone Rings 14 Karat Yellow Gold",
      price: 20500,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07508-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 8,
      name: "Diamond,Gemstone Necklaces 14 Karat Yellow Gold",
      price: 55000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04408-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 9,
      name: "Diamond Necklaces 14 Karat Rose Gold Doris",
      price: 13250,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL03574-1RP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 10,
      name: "Swirl Pearl Drop Earrings",
      price: 15000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE07813-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 11,
      name: "Meghraa Pearl Drop Earrings",
      price: 20500,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE07604-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 12,
      name: "Glorious Orb Diamond Bangle",
      price: 55000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/B/JB01116-WYP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 13,
      name: "Swaying Pearl Bangle ",
      price: 13250,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/B/JB01204-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
  ];

  return (
    <>
      <div className="container mt-1 mb-2">
        <div
          className="row d-flex justify-content-center"
          style={{ margin: "25px 0 10px 0" }}
        >
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      {" "}
                      <img
                        id="main-image"
                        src={passedProps.image}
                        width="250"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="mt-4 mb-3">
                      <h5 className="text-uppercase">{passedProps.title}</h5>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio exceptoluptate debitis. Velit, tt,
                        totam!
                      </p>
                      <div className="price d-flex flex-row align-items-center">
                        <i className="fa fa-rupee"></i>
                        <span className="act-price">{passedProps.price}/-</span>
                      </div>
                    </div>
                    <p className="about">{passedProps.desc}</p>

                    <div className="cart mt-4 align-items-center">
                      {" "}
                      <button
                        className="btn btn-danger text-uppercase mr-2 px-4"
                        onClick={addtocart}
                      >
                        Add to cart
                      </button>{" "}
                      <i className="fa fa-heart text-muted"></i>{" "}
                      <i className="fa fa-share-alt text-muted"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ padding: "20px 0 5px 20px", color: "purple" }}>
          Related Products
        </h3>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          autoplay={true}
          navigation
        >
          {arr.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <section style={{ background: "#eee" }}>
                  <div class="row">
                    <div class="card">
                      <img src={e.image} class="card-img-top" alt="Laptop" />
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <p class="small">
                            <a href="#!" class="text-muted"></a>
                          </p>
                          <p class="small text-danger">
                            <s>455$</s>
                          </p>
                        </div>

                        <div class="d-flex justify-content-between mb-3">
                          <h5 class="mb-0">{e.name}</h5>
                          <h5 class="text-dark mb-0">{e.price}</h5>
                        </div>

                        <div class="d-flex justify-content-between mb-2">
                          <p class="text-muted mb-0">
                            Available: <span class="fw-bold">6</span>
                          </p>
                          <div class="ms-auto text-warning">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              //   </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default SingleProduct;
