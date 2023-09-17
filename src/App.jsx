import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Footer from './component/footer';
import Trail from "./component/FreeTrial";
import Plan from './component/Plan';
import FindStore from './component/FindStore';
import AllProduct from './component/AllProduct';
import Findcity from './component/Findcity';
import MyCart from './component/MyCart';
import SingleProduct from './component/SingleProduct';
import ErrorPage from './component/ErrorPage';
import Admin from './component/Admin';
import SeeAdmin from './component/SeeAdmin';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/Cartlane-Clone-Frontend/" element={<Home/>}/>
        <Route path="/Cartlane-Clone-Frontend/plan" element={<Plan/>}/>  
        <Route path="/Cartlane-Clone-Frontend/trial" element={<Trail/>}/>
        <Route path="/Cartlane-Clone-Frontend/findstore" element={<FindStore/>}/>   
        <Route path="/Cartlane-Clone-Frontend/login" element={<Login/>}/>
        <Route path="/Cartlane-Clone-Frontend/allproduct" element={<AllProduct/>}/>           
        <Route path="/Cartlane-Clone-Frontend/singleproduct" element={<SingleProduct/>}/>       
        <Route path="/Cartlane-Clone-Frontend/findcity" element={<Findcity/>}/>         
        <Route path="/Cartlane-Clone-Frontend/mycart" element={<MyCart/>}/>
        <Route path="/Cartlane-Clone-Frontend/admin" element={<Admin/>}/>        
        <Route path="/Cartlane-Clone-Frontend/seeadmin" element={<SeeAdmin/>}/>
        <Route path="/Cartlane-Clone-Frontend/*" element={<ErrorPage/>}/>     
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
