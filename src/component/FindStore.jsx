import React,{useState} from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import mapimg from "../images/mapimg.jpg";
import phonfs from "../images/phonefs.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./plan.css";
import "./fiindstore.css";

const FindStore = () => {
  const navigate = useNavigate();
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // ===================================================================
  const [city, setCity] = useState("");
  const searchCity = () => {
    if (city == null) alert("invalid data");
    else { 
      const propsToPass = city;
      navigate('/Cartlane-Clone-Frontend/findcity',{state: propsToPass })
    }
  }

  return (
    <>
      <div
        className="row m-0 text-center"
        style={{
          backgroundImage: `url(${mapimg}) `,
          backgroundSize: "cover",
          height: "50vh",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(1px)",
          }}
        >
          <div>
            <h2 style={{ color: "white", fontSize: "24px" }}>
              Find a Store near You
            </h2>
            <h2 style={{ color: "white", fontSize: "15px", padding: "10px" }}>
              Find a Jewells store in your Locality,the Jewells family is
              growing everyday
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input className="form-control me-2" type="search" placeholder="Enter City..." aria-label="Search" value={city} onChange={(e) => { setCity(e.target.value) }} />
              <button className="btn btn-light" type="submit" onClick={searchCity}>Search</button>
            </div>
          </div>
          <div
            style={{
              marginTop: "5vh",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          ></div>
        </div>
      </div>

      {/* ========================================================================== */}
      <div className="row" style={{ margin: "auto", alignItems: "center" }}>
        <div className="col-md-2 col-6 d-flex flex-column align-items-center">
          <img
            src="https://cdn.caratlane.com/media/static/images/Find_In_Store/city_5.svg"
            className="img-fluid"
            alt="Image"
          />
          <h5 className="mt-auto">Mumbai</h5>
          <p>lorem lipbhc edgcuhc bu</p>
        </div>
        <div className="col-md-2 col-6 d-flex flex-column align-items-center">
          <img
            src="https://cdn.caratlane.com/media/static/images/Find_In_Store/city_3.svg"
            className="img-fluid"
            alt="Image"
          />
          <h5 className="mt-auto">Delhi</h5>
          <p>lorem lipbhc edgcuhc bu</p>
        </div>
        <div className="col-md-2 col-6 d-flex flex-column align-items-center">
          <img
            src="https://cdn.caratlane.com/media/static/images/Find_In_Store/city_2.svg"
            className="img-fluid"
            alt="Image"
          />
          <h5 className="mt-auto">Bangalore</h5>
          <p>lorem lipbhc edgcuhc bu</p>
        </div>
        <div className="col-md-2 col-6 d-flex flex-column align-items-center">
          <img
            src="https://cdn.caratlane.com/media/static/images/Find_In_Store/city_4.svg"
            className="img-fluid"
            alt="Image"
          />
          <h5 className="mt-auto">Pune</h5>
          <p>lorem lipbhc edgcuhc bu</p>
        </div>
        <div className="col-md-2 col-6 d-flex flex-column align-items-center">
          <img
            src="https://cdn.caratlane.com/media/static/images/Find_In_Store/city_1.svg"
            className="img-fluid"
            alt="Image"
          />
          <h5 className="mt-auto">Kolkata</h5>
          <p>lorem lipbhc edgcuhc bu</p>
        </div>
        <div className="col-md-2 col-6 d-flex flex-column align-items-center">
          <img
            src="https://cdn.caratlane.com/media/static/images/Find_In_Store/city_6.svg"
            className="img-fluid"
            alt="Image"
          />
          <h5 className="mt-auto">Chennai</h5>
          <p>lorem lipbhc edgcuhc bu</p>
        </div>
      </div>

      {/* ========================================================================== */}

      <div style={{ margin: "5vh", alignItems: "center" }}>
        <h1 style={{ color: "rgba(79,50,103,1)", textAlign: "center", margin: "auto" }}>
          Jewells Special In-Store Services
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around", flexDirection: 'column', alignItems: "center", margin: "2vh" }}>
            <div >
              <img
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/07-JULY/Others/Store/01/OLDGOLD_Desktop.png"
                className="rounded "
                alt="..."
              />
            </div>
            <div>
              <h4 style={{ color: "rgba(79,50,103,1)", marginTop: "2vh" }}>Old Gold Exchange</h4>
            </div>
            <div>
              <h5 style={{ color: "rgba(79,50,103,1)" }}>
                It can be any gold jewellery
              </h5>
            </div>
            <div>
              <button className="button-34" role="button">
                Find Store
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", flexDirection: 'column', alignItems: "center", margin: "2vh" }}>
            <div>
              <img
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/07-JULY/Others/Store/01/BUYONLINE_Desktop.png"
                className="rounded "
                alt="..."
              ></img>
            </div>
            <div>
              <h4 style={{ color: "rgba(79,50,103,1)", marginTop: "2vh" }}>Old Gold Exchange</h4>
            </div>
            <div>
              <h5 style={{ color: "rgba(79,50,103,1)" }}>
                It can be any gold jewellery
              </h5>
            </div>
            <div>
              <button className="button-34" role="button">
                Find Store
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", flexDirection: 'column', alignItems: "center", margin: "2vh" }}>
            <div>
              <img
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/07-JULY/Others/Store/01/INSTORE_Desktop.png"
                className="rounded "
                alt="..."
              ></img>
            </div>
            <div>
              <h4 style={{ color: "rgba(79,50,103,1)", marginTop: "2vh" }}>Old Gold Exchange</h4>
            </div>
            <div>
              <h5 style={{ color: "rgba(79,50,103,1)" }}>
                It can be any gold jewellery
              </h5>
            </div>
            <div>
              <button className="button-34" role="button">
                Find Store
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================== */}

      <div
        className="row no-gutters"
        style={{ width: "100%", padding: "20px" }}
      >
        <div
          className="col-md-6 col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0",
          }}
        >
          <div style={{ textAlign: "center" }} className="container">
            <h3>Have some Questions?</h3>
            <img className="image-fluid" src={phonfs} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="container" style={{ padding: "20px 0" }}>
            <h2>Questions??</h2>
            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Is there any difference in the prices online and in store?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our prices and offers are consistent across the Jewells
                    website, app, and stores. So, you get the best deal every
                    time you shop, online or offline.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    How will I know if the designs I like are available in a
                    store near me?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    You can simply click on the ‘Find In Store’ button on the
                    product page and view the list of stores in your city that
                    currently have the design available. You can also request
                    for the design to be tried at a store near you by clicking
                    on the ‘Request Design’ button.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Can I exchange my gold jewellery at any Jewells store?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, you can walk into any Jewells store and get your gold
                    jewellery exchanged for a trendy new design.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Is Jewells jewellery made of real gold and diamonds?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, all Jewells jewellery is crafted with real diamonds in
                    14kt and 18kt gold. On completing your purchase you will
                    receive a certificate of authenticity along with the
                    invoice.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FindStore;
