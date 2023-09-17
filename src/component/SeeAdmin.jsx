import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./seeadmin.css"

function SeeAdmin() {
  const [alldata, setAlldata] = useState([]);

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const category = queryParams.cat;

  async function fetchData() {
    let res = await fetch(`https://cartlaneclone.onrender.com//${category}`);
    let data = await res.json();
    // console.log(data);
    setAlldata(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <br/><br/>
      <div className="container">
      {category === 'users' && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>******</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {category === 'products' && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.catagory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {category === 'stores' && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>{e.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>      
    <br/><br/><br/><br/>
    </>
  );
}

export default SeeAdmin;
