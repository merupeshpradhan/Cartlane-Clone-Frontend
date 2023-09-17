import React, { useEffect } from 'react';
import phonfs from "../images/phonefs.png";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import tat1 from "../images/tat-1.png";
import tat2 from "../images/tat2.png";
import tat3 from "../images/freet-1.png";
import "./freetrial.css";
import DesignSlide from "../videos/DesignVideo.mp4"

function FreeTrial() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const lightBoxVideo = React.useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        lightbox_close();
      }
    };

    window.document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const lightbox_open = () => {
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.current.play();
  };

  const lightbox_close = () => {
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.current.pause();
  };
  return (
    <>
    {/* ===============================Video pop up code=============================== */}
      <div id="light">
        <i class="fa fa-close" id="boxclose" onClick={lightbox_close}></i>
        <video className="img-fluid" id="VisaChipCardVideo" width="600" controls>
          <source src={DesignSlide} type="video/mp4" />
        </video>
      </div>
      <div id="fade" onClick={lightbox_close}></div>

      {/* ========================================================================================== */}
      <div
        className="row m-0 text-center" style={{ height: "70vh", position: "relative", }}>
        <video autoPlay loop muted style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", padding: "0", zIndex: -1, }}>
          <source src="https://assets.cltstatic.com/images/responsive/TAH-Desktop-Snippet.mp4" type="video/mp4" />
        </video>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", }}>
          <div>
            <h2 style={{ fontSize: "40px", color: "white" }}>
              Your Favourite Designs at Your Doorstep!
            </h2>
            <h2 style={{ fontSize: "15px", padding: "5px", color: "white" }}>
              Find a Jewells store in your Locality, the Jewells family is
              growing every day
            </h2>
            <i className='fa fa-play' onClick={lightbox_open} style={{ padding: "10px 11px 10px 20px", fontSize: "40px", color: "#ff91a4", background: "white", borderRadius: "50%" }}></i>
          </div>
        </div>
      </div>
      {/* ================================================================= */}

      <div style={{ margin: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="left-box-1">
              <img src={tat1} className="img-fluid" alt="Left Image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-box-1">
              <img src={tat2} className="img-fluid" alt="Left Image" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================================== */}

      <div className="carousel-inner">
        <img src={tat3} className="d-block w-100" alt="..." />
      </div>

      {/* ========================================================================== */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" style={{ color: "black" }} className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" style={{ color: "black" }} aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" style={{ color: "black" }} aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

          <div className="carousel-item active" style={{ padding: "50px", textAlign: "center", background: "rgb(255, 70, 101)" }}>
            <h2>Hear it from Our Customers</h2>
            <i className='fa fa-quote-left' style={{ padding: "20px", fontSize: "40px", color: "purple" }}></i>
            <h5>~ @_dream_hacker_</h5>
            <p style={{ padding: "10px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde eveniet suscipit, nesciunt asperiores doloribus ipsum minus consectetur perspiciatis numquam quibusdam voluptates sed delectus odio."</p>
          </div>
          <div className="carousel-item" style={{ padding: "50px", textAlign: "center", background: "rgb(255, 70, 101)" }}>
            <h2>Hear it from Our Customers</h2>
            <i className='fa fa-quote-left' style={{ padding: "20px", fontSize: "40px", color: "purple" }}></i>
            <h5>~ @_dream_hacker_</h5>
            <p style={{ padding: "10px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde eveniet suscipit, nesciunt asperiores doloribus ipsum minus consectetur perspiciatis numquam quibusdam voluptates sed delectus odio."</p>
          </div>
          <div className="carousel-item" style={{ padding: "50px", textAlign: "center", background: "rgb(255, 70, 101)" }}>
            <h2>Hear it from Our Customers</h2>
            <i className='fa fa-quote-left' style={{ padding: "20px", fontSize: "40px", color: "purple" }}></i>
            <h5>~ @_dream_hacker_</h5>
            <p style={{ padding: "10px" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde eveniet suscipit, nesciunt asperiores doloribus ipsum minus consectetur perspiciatis numquam quibusdam voluptates sed delectus odio."</p>
          </div>
        </div>
      </div>
      {/* ========================================================================== */}

      <div className="row no-gutters" style={{ width: "100%", padding: "20px" }}>
        <div className="col-md-6 col-12" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px 0" }}>
          <div style={{ textAlign: "center" }} className="container">
            <h3>Have some Questions?</h3>
            <img className="image-fluid" src={phonfs} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="container" style={{ padding: "20px 0" }}>
            <h2>Questions??</h2>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Is there any difference in the prices online and in store?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our prices and offers are consistent across the Jewells website, app, and stores. So, you get the best deal every time you shop, online or offline.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>How will I know if the designs I like are available in a store near me?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    You can simply click on the ‘Find In Store’ button on the product page and view the list of stores in your city that currently have the design available. You can also request for the design to be tried at a store near you by clicking on the ‘Request Design’ button.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Can I exchange my gold jewellery at any Jewells store?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, you can walk into any Jewells store and get your gold jewellery exchanged for a trendy new design.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Is Jewells jewellery made of real gold and diamonds?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, all Jewells jewellery is crafted with real diamonds in 14kt and 18kt gold. On completing your purchase you will receive a certificate of authenticity along with the invoice.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeTrial;
