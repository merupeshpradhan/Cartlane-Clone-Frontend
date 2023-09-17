import React, { useState, useEffect } from 'react';
import "./products.css";
import nodata from "../images/nodata.jpg";
import CartProduct from './CartProduct';

function MyCart() {    
    const [price, setPrice] = useState(0);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const username = localStorage.getItem("jewellsUserName");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let res = await fetch(`https://cartlaneclone.onrender.com/cart?username=${username}`);
        let data = await res.json();
        var tot=0;
        for(var i=0;i<data.length;i++){
            tot+= parseInt(data[i].price);
        }
        setPrice(tot);
        setProduct(data);
        setIsLoading(false);
    }

    // ============================Remove data Function===========================
    async function removeProduct(e) {
        console.log(e.id);
        let res = await fetch(`https://cartlaneclone.onrender.com/cart/${e.id}`, {
            method: "DELETE"
        });
        setPrice(0);
        fetchData();
    }

    return (
        <>
            <section style={{ backgroundColor: "white" }}>
                <div className="container py-5">
                    <h2>Your Cart:</h2><br />
                    {isLoading ? (<div className="center">
                        <div className="loader"></div>
                    </div>)
                        : product.length == 0 ?
                            <div className="carousel-inner">
                                <h2 style={{ textAlign: "center" }}>No Product Available</h2>
                                <img src={nodata} className="d-block w-100" alt="..." />
                            </div> :
                            product.map((e) => {
                                return (
                                    <CartProduct key={e.id}  {...e} func={() => { removeProduct({ id: e.id }) }} />
                                );
                            })}
                </div>
                <div style={{ background: "rgb(255, 70, 101)", color: "white", padding: '20px', display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h3 style={{ margin: "0" }}>Total:<span style={{ color: "black", padding: "0 10px" }}><i class="fa fa-rupee"></i>{price}/-</span><span /></h3>
                    <h5 style={{ margin: "0", color: "purple" }}>free Shipping</h5>
                </div>
            </section>
        </>
    )
}

export default MyCart