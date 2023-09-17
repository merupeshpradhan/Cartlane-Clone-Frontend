import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import nodata from "../images/nodata.jpg"
import SingleStore from './SingleStore';

function Findcity() {
    const location = useLocation();
    const passedProps = location.state;
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() { 
        let res = await fetch(`https://cartlaneclone.onrender.com/stores?city=${passedProps}`);
        let data = await res.json();
        setStores(data);
    }

    return (
        <>
            <section style={{ backgroundColor: "white"}}>
                
            <h3 style={{padding:"30px 0 5px 50px"}}>Related Stores</h3>
                <div className="container py-2">
                    {stores.length == 0 ?
                        <div className="carousel-inner">
                            <h2 style={{ textAlign: "center" }}>No Stores Available or May be City Spelling is wrong</h2>
                            <img src={nodata} className="d-block w-100" alt="..." />
                        </div> :
                        stores.map((e) => {
                            return (
                                <SingleStore key={e.id}  {...e} />
                            );
                        })}
                </div>
            </section>
        </>
    )
}

export default Findcity