import React, { useState, useEffect } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom';
import jewellsLogo from "../images/Logo.png";
import "./navbar.css";

// ==============checking if logged in or not before navigate to cart page=================
const checkIfAllowedToNavigate = () => {
    // Perform your checks here and return true or false accordingly
    const username = localStorage.getItem("jewellsUserName");
    return username !== "null";
};

const handleNavigation = (event) => {
    console.log(event);
    if (!checkIfAllowedToNavigate()) {
        alert("You need to Login");
        event.preventDefault();
    }
};

function Navbar() {
    
  const navigate = useNavigate();
    // =========================Search data===================================
    const [sdata, setSdata] = useState("");
    const navigateWithQuery = () => {
        navigate(`/Cartlane-Clone-Frontend/allproduct?cat=${sdata}`);
    };

    // ===================Storing data of user in local storege==================
    const [togglelogin, setTogglelogin] = useState(false);

    useEffect(() => {
        const item = localStorage.getItem('jewellslogin');
        setTogglelogin(item === 'true');
    }, []);

    // ================Removing data of user in local storege in logout=========================
    const logout = () => {
        if (confirm("Sure you want to logout!")) {
            localStorage.setItem('jewellslogin', false);
            localStorage.setItem('jewellsUserName', null);
            setTogglelogin(false);
        }
    }

    // ==============checking if logged in or not before navigate=============Go to line-6====
    const isAllowedToNavigate = checkIfAllowedToNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ background: "#FFE1F0" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/Cartlane-Clone-Frontend/" style={{ padding: "0" }}>
                        <img src={jewellsLogo} alt="" style={{ width: "175px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink id='navbtn' className="nav-link active" to="/Cartlane-Clone-Frontend/plan">PLAN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='navbtn' className="nav-link active" to="/Cartlane-Clone-Frontend/findstore">FINDSTORE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='navbtn' className="nav-link active" to="/Cartlane-Clone-Frontend/trial">TRIAL</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='navbtn' className="nav-link active" to="/Cartlane-Clone-Frontend/allproduct" onClick={()=>setSdata("")}>PRODUCTS</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-lg-0">

                            <li className="nav-item" style={{paddingRight:"15px"}}>
                                <div className="input-group">
                                    <div className="form-outline">
                                        <input type="search" className="form-control" placeholder='Enter Product' style={{boxShadow:"none",outline:"none",border:"none"}} value={sdata} onChange={(e)=>setSdata(e.target.value)}/>
                                    </div>
                                    <button type="button" className="btn" onClick={navigateWithQuery} style={{background:"pink"}}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                    
                                </div>
                            </li>

                            <li className="nav-item">
                                {togglelogin
                                    ? <button type="button" className="btn btn-sm btn-outline-danger" style={{ margin: "4px" }} onClick={logout}>logout</button>
                                    : <NavLink id='navbtn' className="nav-link active" to="/Cartlane-Clone-Frontend/login">LOGIN</NavLink>
                                }
                            </li>

                            <li className="nav-item">
                                <NavLink id='navbtn' className="nav-link active" to="/Cartlane-Clone-Frontend/">
                                    <span id='icons' className="material-symbols-outlined">favorite</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='navbtn' className="nav-link active" to={isAllowedToNavigate ? '/Cartlane-Clone-Frontend/mycart' : '/Cartlane-Clone-Frontend/'} onClick={handleNavigation}>
                                    <span id='icons' className="material-symbols-outlined">shopping_cart</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

