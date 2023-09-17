import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import "./products.css";
import "./AllProduct.css";
import Products from "./Products";
import nodata from "../images/nodata.jpg";

const AllProduct = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const category = queryParams.cat; 
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //  =============================Sort and Filter data==========================
  const [sortingOrder, setSortingOrder] = useState("default");
  const sortedProducts = [...product];
  if (sortingOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortingOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortingOrder === "mostPopular") {
  }
  //  =============================Fetch data==========================
  useEffect(() => {
    if (category == undefined) fetchData1();
    else {
      fetchData2();
    }
  }, [category]);

  async function fetchData1() {
    let res = await fetch(`https://cartlaneclone.onrender.com/products`);
    let data = await res.json();
    setProduct(data);
    setIsLoading(false);
  }

  async function fetchData2() {
    let res = await fetch(
      `https://cartlaneclone.onrender.com/products?catagory=${category}`
    );
    let data = await res.json();
    setProduct(data);
    setIsLoading(false);
  }
  
  //===========================Add to cart=======================
  async function addtocart(e) {
    var username = localStorage.getItem("jewellsUserName");
    if (username == "null") alert("You need to login");
    else {
      var previd = 0;
      // =================Fetch last id from carts id===============
      const response = await fetch("https://cartlaneclone.onrender.com/cart");
      const data = await response.json();
      if (data.length > 0) {
        const lastObjectData = data[data.length - 1];
        previd = lastObjectData.id;
      }
      // =================Add 1 on Fetched last id from carts id===============
      const modifiedData = [e].map((item) => ({
        ...item,
        pid: item.id,
        id: previd + 1,
        username: username,
      }));
      // console.log(...modifiedData);

      const res = await fetch(`https://cartlaneclone.onrender.com/cart`, {
        method: "POST",
        body: JSON.stringify(...modifiedData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => console.log(res));
      alert("Product added successfully");
    }
  }

  //===========================Show Details:=======================
  async function showDetails(e) {
    navigate("/Cartlane-Clone-Frontend/singleproduct", { state: e });
  }

  return (
    <>
      <div
        className="d-flex "
        style={{
          backgroundColor: "#FFD1DA",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div className="btn-group placeholder-glow">
          <button
            type="button"
            className="btn"
            onClick={() => setSortingOrder("default")}
            style={{background:"#ff588d"}}
          >
            Category
          </button>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{background:"white"}}
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu btn-info">
            <li>
              <a className="dropdown-item" href="/Cartlane-Clone-Frontend/allproduct?cat=bracelet">
                BRACELET
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Cartlane-Clone-Frontend/allproduct?cat=necklace">
                NECKLACE
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Cartlane-Clone-Frontend/allproduct?cat=pendant">
                PENDENTS
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Cartlane-Clone-Frontend/allproduct?cat=earrings">
                RINGS
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Cartlane-Clone-Frontend/allproduct?cat=bangles">
                BANGLES
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Cartlane-Clone-Frontend/allproduct?cat=earrings">
                EAR-RINGS
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group placeholder-glow">
          <button
            type="button"
            className="btn"
            onClick={() => setSortingOrder("default")}
            style={{background:"#ff588d"}}
          >
            Sort by: Featured
          </button>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{background:"white"}}
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSortingOrder("highToLow")}
              >
                High to Low
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSortingOrder("lowToHigh")}
              >
                Low to High
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSortingOrder("mostPopular")}
              >
                Most Popular
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section style={{ backgroundColor: "white" }}>
        <div className="container py-5">
          {isLoading ? (
            <div className="center">
              <div className="loader"></div>
            </div>
          ) : sortedProducts.length === 0 ? (
            <div className="carousel-inner">
              <h2 style={{ textAlign: "center" }}>No Product Available</h2>
              <img src={nodata} className="d-block w-100" alt="..." />
            </div>
          ) : (
            sortedProducts.map((e) => {
              return (
                <Products
                  key={e.id}
                  {...e}
                  func={() => {
                    addtocart({
                      id: e.id,
                      title: e.title,
                      desc: e.desc,
                      price: e.price,
                      image: e.image,
                      rating: e.rating,
                    });
                  }}
                  funct={() => {
                    showDetails({
                      id: e.id,
                      title: e.title,
                      desc: e.desc,
                      price: e.price,
                      image: e.image,
                      rating: e.rating,
                    });
                  }}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default AllProduct;
