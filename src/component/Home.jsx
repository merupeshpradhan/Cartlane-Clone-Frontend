import React from "react";
import { NavLink } from 'react-router-dom';
import "./Home.css";
import DesignSlide from "../videos/DesignVideo.mp4"
import VideoSlide from "../videos/ved1.mp4"
import li1 from "../images/linkImage1.jpg";
import li2 from "../images/linkImage2.jpg";
import li3 from "../images/linkImage3.jpg";
import li4 from "../images/linkImage4.jpg";
import li5 from "../images/linkImage5.jpg";
import li6 from "../images/linkImage6.jpg";
import sec1 from "../images/sec10-1.png";
import sec2 from "../images/sec10-2.png";
import sec3 from "../images/sec10-3.png";
import sec4 from "../images/sec10-4.png";
import tagline from "../images/Tagline.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Homecard from "./Homecard";

const Home = () => {
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
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=bracelet" }}>
              <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/RakshaBandhan/02/Desktop_1920x694.webp" className="d-block w-100" alt="..." />
            </NavLink>
          </div>
          <div className="carousel-item">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=bangles" }}>
              <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/RBblog/Desktop_1920x694.webp" className="d-block w-100" alt="..." />
            </NavLink>
          </div>
          <div className="carousel-item">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=necklace" }}>
              <video className="img-fluid" autoPlay loop muted style={{ objectFit: 'cover', width: '100%' }}>
                <source src={VideoSlide} type="video/mp4" />
              </video>
            </NavLink>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ========================================================================================== */}
      <div style={{ margin: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="left-box-1">
              <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=rings" }}>
                <img src="https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/V4/2023/Shaya/08-AUGUST/RESPONSIVE/18/Responsive_03.jpg" className="img-fluid" alt="Left Image" />
              </NavLink>
            </div>
          </div>
          <div className="col-md-6" style={{ display: "flex", alignItems: "center" }}>
            <div className="right-box">
              <div className="row pb-1 pt-1">
                <div className="col-md-12">
                  <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=bangles" }}>
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/oge/2x.webp" className="img-fluid" alt="Right Image 1" />
                  </NavLink>
                </div>
              </div>
              <div className="row pb-1 pt-1">
                <div className="col-md-12">
                  <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=earrings" }}>
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/NewArrivals/03/1X.webp" className="img-fluid" alt="Right Image 2" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================================== */}

      <div className="row no-gutters" style={{ width: "100%", margin: "0", marginBottom: "10px", padding: "15px" }}>
        <div className="col-md-8 col-8" style={{ padding: "0" }}>
          <video className="img-fluid" autoPlay loop muted style={{ objectFit: 'cover', width: '100%', height: "100%" }}>
            <source src={DesignSlide} type="video/mp4" />
          </video>
        </div>
        <div className="col-md-4 col-4" style={{ background: "black", color: "white", display: 'flex', alignItems: 'center' }}>
          <div style={{ textAlign: "center" }} className="container">
            <h3>SWITCH</h3>
            <p>elitnima reiciendis, voluptate soluta a delectus iusto iure commodi!</p>
          </div>
        </div>
      </div>

      {/* ========================================================================================== */}
      <div className="row no-gutters" style={{ width: "100%", margin: "0", marginBottom: "10px" }}>
        <div className="col-md-4 col-6">
          <div className="left-box">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=bangles" }}>
              <img src={li1} className="img-fluid" alt="Image" />
            </NavLink>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="left-box">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=earrings" }}>
              <img src={li2} className="img-fluid" alt="Image" />
            </NavLink>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="left-box">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=necklace" }}>
              <img src={li3} className="img-fluid" alt="Image" />
            </NavLink>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="left-box">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=pendant" }}>
              <img src={li4} className="img-fluid" alt="Image" />
            </NavLink>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="left-box">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=pendant" }}>
              <img src={li5} className="img-fluid" alt="Image" />
            </NavLink>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="left-box">
            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/allproduct", search: "?cat=earrings"}}>
              <img src={li6} className="img-fluid" alt="Image" />
            </NavLink>
          </div>
        </div> 
      </div>

      {/* ========================================================================================== */}
      <div className="row" style={{ width: "100%", margin: "0", textAlign: "center", background: "rgb(35, 21, 53)" }}>
        <div className="col-md-6 col-6">
          <img src={sec1} className="img-fluid" alt="Image" />
        </div>
        <div className="col-md-6 col-6">
          <img src={sec2} className="img-fluid" alt="Image" />
        </div>
        <div className="col-md-6 col-6">
          <img src={sec3} className="img-fluid" alt="Image" />
        </div>
        <div className="col-md-6 col-6">
          <img src={sec4} className="img-fluid" alt="Image" />
        </div>
      </div>

      {/* ========================================================================================== */}
      <div>
        <h3 style={{ padding: "20px 0 5px 20px", color: "purple" }}>Best Products</h3>
        <Swiper modules={[Navigation, Scrollbar, Autoplay]} spaceBetween={0} slidesPerView={4} autoplay={true} navigation>
          {arr.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <Homecard  {...e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* ========================================================================================== */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" style={{ color: "black" }} className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" style={{ color: "black" }} aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" style={{ color: "black" }} aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

          <div className="carousel-item active" style={{ padding: "50px", textAlign: "center", background: "rgb(255, 70, 101)" }}>
            <i className="fab fa-instagram" style={{ fontSize: "25px" }}></i>
            <p style={{ padding: "10px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde eveniet suscipit, nesciunt asperiores doloribus ipsum minus consectetur perspiciatis numquam quibusdam voluptates sed delectus odio."</p>
            <h5>~ @_dream_hacker_</h5>
          </div>
          <div className="carousel-item" style={{ padding: "50px", textAlign: "center", background: "rgb(255, 70, 101)" }}>
            <i className="fab fa-instagram" style={{ fontSize: "25px" }}></i>
            <p style={{ padding: "10px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde eveniet suscipit, nesciunt asperiores doloribus ipsum minus consectetur perspiciatis numquam quibusdam voluptates sed delectus odio."</p>
            <h5>~ @_dream_hacker_</h5>
          </div>
          <div className="carousel-item" style={{ padding: "50px", textAlign: "center", background: "rgb(255, 70, 101)" }}>
            <i className="fab fa-instagram" style={{ fontSize: "25px" }}></i>
            <p style={{ padding: "10px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde eveniet suscipit, nesciunt asperiores doloribus ipsum minus consectetur perspiciatis numquam quibusdam voluptates sed delectus odio."</p>
            <h5>~ @_dream_hacker_</h5>
          </div>
        </div>
      </div>

      {/* ========================================================================================== */}


      <div className="row m-0 text-center" style={{ background: "rgb(35, 21, 53)" }}>
        <div className="col-12 py-4">
          <img src={tagline} className="img-fluid" alt="Image" /><br />
          <a type="button" target="new" className="btn btn-outline-danger" href="https://www.tanishq.co.in/homepage?lang=en_IN">check</a>
        </div>
      </div>

      {/* ========================================================================================== */}

    </>
  );
};
export default Home;
