import * as React from 'react';
import pop from "../images/pop.png";
import pop2 from "../images/pop-2.png";
import pop3 from "../images/pop3.png";
import pop4 from "../images/pop4.png";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./plan.css";

function Plan() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className="carousel-inner">
                <img src={pop} className="d-block w-100" alt="..." />
            </div>

            {/* ========================================================================== */}
            <div style={{textAlign: "center", padding: "20px" }}>
                <h1 style={{ color: 'purple' }}>CheckOut</h1>
            </div>

            {/* ========================================================================== */}
            <div className="row no-gutters" style={{ width: "100%", padding: "35px", margin: "0" }}>
                <div className="col-md-6 col-12" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px 10px" }}>
                    <div className="container">
                        <h2 style={{ color: "purple" }}>Plan</h2>
                        <h3>It's such a hassle-free process that the only thing you need to worry about is choosing the outfit you'll be wearing with your favourite jewellery.</h3>
                    </div>
                </div>
                <div className="col-md-6 col-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={pop2} alt="" className="img-fluid" />
                </div>
            </div>

            {/* ========================================================================== */}
            <div className="row no-gutters" style={{ width: "100%", padding: "35px", margin: "0", background: "#f7f9fb" }}>
                <div className="col-md-6 col-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={pop3} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px 10px" }}>
                    <div className="container">
                        <h2 style={{ color: "purple" }}>Example</h2>
                        <h3>A plan for you to keep adding to your jewellery collection every 6 months! Here’s how you can calculate your purchase better. Enter the amount you want to set aside with us for 6 months to see the value of our gift*</h3>
                    </div>
                </div>
            </div>

            {/* ========================================================================== */}
            <div className="carousel-inner">
                <img src={pop4} className="d-block w-100" alt="..." />
            </div>

            {/* ========================================================================== */}
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
                                What is Try at Home?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Try at Home is a service that you can avail to try our designs in the comfort of your home. It is a free service, with absolutely no obligation to buy. All you have to do is pick your favourite designs, and schedule an appointment as per your convenience.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Is the Try at Home service free?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, there are absolutely no charges for Try at Home.
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
                                After trying on the products at home, can I place the order immediately?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, if you would like to purchase any of the designs you tried, you can place an order on the spot with our Try at Home consultant.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Are all the jewellery sent for the Try at Home appointment made of real gold?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, the jewellery we send to your home for trial is crafted with real gold and diamonds. If you place an order after the trial, you will receive the certificate of authenticity too.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>How will you send me the products for trial?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Our Try at Home consultant will visit your location to show you the designs, at a time and place that is convenient to you.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default Plan;
