import React, { useState, useEffect } from 'react'
import './login.css';
import { NavLink } from 'react-router-dom';

function Admin() {
    // ============================Store Input data=============================
  const [allValues, setAllValues] = useState({
    title: "",
    desc: "",
    price: "",    
    image: "",
    rating: "",
    catagory: ""
  });

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  
// ============================Fetch data==================================

  useEffect(() => {
    fetchData();
  }, []);

  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  const [n3, setn3] = useState(0);
  async function fetchData() {
    let res1 = await fetch(`https://cartlaneclone.onrender.com/users`);
    let res2 = await fetch(`https://cartlaneclone.onrender.com/products`);
    let res3 = await fetch(`https://cartlaneclone.onrender.com/stores`);
    let data1 = await res1.json();
    let data2 = await res2.json();
    let data3 = await res3.json();
    setn1(data1.length);  setn2(data2.length);  setn3(data3.length);
  }
// ==============================Add Product=================================
function isValidImageLink(link) {
  const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
  return imageExtensions.test(link);
}

const addProduct=async(e)=>{
    e.preventDefault();
    console.log(allValues);
    if(allValues.title===""||allValues.desc===""||allValues.price===""||allValues.image===""||allValues.rating===""||allValues.catagory==="")alert("You need to fill all data");
    else if(allValues.rating < 1 || allValues.rating > 5)alert("Invalid Rating");
    else if(allValues.desc.length<10)alert("Small Description");
    else if(!isValidImageLink(allValues.image))alert("Invalid Image link");   //----Line 38 function is checked------->
    else{
       // =================Fetch last id from product id===============
       var previd = 0;
       const response = await fetch("https://cartlaneclone.onrender.com/products");
       const data = await response.json();
       if (data.length > 0) {
         const lastObjectData = data[data.length - 1];
         previd = lastObjectData.id;
       }
       // =================Add 1 on Fetched last id from product id===============
       const newObject = {
         id: previd + 1,
         ...allValues
       };
       console.log(newObject);
 
       const res = await fetch(`https://cartlaneclone.onrender.com/products`, {
         method: "POST",
         body: JSON.stringify(newObject),
         headers: {
           "Content-Type": "application/json",
         },
       }).then((res) => console.log(res));
       alert("Product added successfully");   
    }   
}

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="p-4 mb-3" style={{ background: "#ff002d2b", borderRadius: "10px" }}>
                            <h4>{n1}</h4>
                            <p style={{margin:"5px 0 9px 0"}}>Current Users</p>
                            <NavLink to={{ pathname: "/seeadmin", search: "?cat=users" }}>
                            <button type="button" className="btn btn-sm btn-light">See users</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 mb-3" style={{ background: "#ff002d2b", borderRadius: "10px" }}>
                            <h4>{n2}</h4>
                            <p style={{margin:"5px 0 9px 0"}}>Current Products</p>
                            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/seeadmin", search: "?cat=products" }}>
                            <button type="button" className="btn btn-sm btn-light">See Products</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 mb-3" style={{ background: "#ff002d2b", borderRadius: "10px" }}>
                            <h4>{n3}</h4>
                            <p style={{margin:"5px 0 9px 0"}}>Current Stores</p>
                            <NavLink to={{ pathname: "/Cartlane-Clone-Frontend/seeadmin", search: "?cat=stores" }}>
                            <button type="button" className="btn btn-sm btn-light">See Stores</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <br/><br/>
                <div className="row">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Add Product</h2>
                        <div className="input-field">
                            <i className="far fa-hand-point-right"></i>
                            <input type="text" placeholder="Product Title" value={allValues.title} name='title' onChange={changeHandler}/>
                        </div>
                        <div className="input-field">
                            <i className="far fa-hand-point-right"></i>
                            <input type="text" placeholder="Description" value={allValues.desc} name='desc' onChange={changeHandler}/>
                        </div>
                        <div className="input-field">
                            <i className="far fa-hand-point-right"></i>
                            <input type="number" placeholder="Price" value={allValues.price} name='price' onChange={changeHandler}/>
                        </div>
                        <div className="input-field">
                            <i className="far fa-hand-point-right"></i>
                            <input type="text" placeholder="Category" value={allValues.catagory} name='catagory' onChange={changeHandler}/>
                        </div>
                        <div className="input-field">
                            <i className="far fa-hand-point-right"></i>
                            <input type="number" placeholder="Initial Rating" value={allValues.rating} name='rating' onChange={changeHandler}/>
                        </div>                            
                        <div className="input-field">
                            <i className="far fa-hand-point-right"></i>
                            <input type="text" placeholder="Image of product" value={allValues.image} name='image' onChange={changeHandler}/>
                        </div>  
                        <input type="submit" value="Add" className="btn solid" id='logbtn' onClick={addProduct}/>
                        <p className="social-text">Give Proper details of product</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Admin