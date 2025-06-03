import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InView } from "react-intersection-observer";
import Offense from '../../assets/images/Video/Offense.png';
import Defense from '../../assets/images/Video/Defense.png';
import MLB from '../../assets/images/Video/MLB.png';
import { Link } from 'react-router-dom';
import '../../styles/media.css';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export default function FloatingActionButtonZoom() {
  const [videoSrc, setVideoSrc] = React.useState(null);



  return (
    <div className='bg-black'>
     
{/**LARGE SCREENS */}
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-top-24 
            ${inView ? "animate-fade-in" : ""}`}
              id="Media"
            >
               <hr className="w3-opacity w3-text-white w3-padding-24 mt-4" />
                           <h1 className="w3-text-light-grey w3-margin-bottom text-start w3-animate-zoom ">Video Library</h1>
           
        <div className="row g-0 w3-padding-16"
        style={{ 
          boxShadow: '2px 2px 2px rgba(105, 105, 105), -2px 2px 2px rgba(65, 65, 65), 2px -2px 2px rgba(65, 65, 65), 2px 2px -2px 2px rgba(65, 65, 65)'}}>
     <div className="col-sm-12 col-md-8 col-lg-8 video-container border-black">
  <video src={videoSrc} controls className="w-100 border-black">
    <div className="play-icon">
      <i className="fa fa-play"></i>
    </div>
  </video>
</div>

          
            <div className="col-sm-12 col-md-4 col-lg-4 border-black">
             
            <Box
         className="text-white"
            style={{  
              boxShadow: '2px 2px 2px 4px rgba(0, 0, 0, 0.6)',
              background: 'linear-gradient(to bottom, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #323334, #222222, #181818, #0000,   #000 )'}}
      sx={{
        position: 'relative',
      }}
    >
<AppBar
  position="static"
  className="w3-text-white"
  style={{ backgroundColor: '#323334',
  boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.5)',
   }}
>


  <div className="container pt-2 pb-0 mt-2 mb-0">
    <p className='small opacity-80' style={{marginLeft:'5px', textShadow:'1px 1px 1px black'}}>VIDEO LIBRARY MENU</p>
  </div>
</AppBar>


      <div className="options-container">
  {/* HITTING IMAGE 1 */}
  <div className="row d-flex justify-content-between align-items-center container mt-3 mb-0">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
            <div className="image-container"  onClick={() => setVideoSrc(Offense)}>
            <img src={Offense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo1"}>
            <p className="py-0 mb-0 text-white opacity-65" style={{ textShadow: ".5px .5px 1px #eee" }}>
           OFFENSE
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>

      <hr
  className="d-block rounded mt-1"
  style={{
    height: "3px", // Adjust thickness
    backgroundColor: "black", // Change to solid black
    border: "none", // Remove default styling
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Darker shadow
  }}
/>

      {/* HITTING IMAGE 2 */}
      <div className="row d-flex justify-content-between align-items-center container mt-2 mb-0">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
            <div className="image-container"  onClick={() => setVideoSrc(Defense)}>
            <img src={Defense} alt="small" className="img-fluid shadow w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo2"}>
            <p className="py-0 mb-0 text-white opacity-65" style={{ textShadow: ".5px .5px 1px #eee" }}>
          DEFENSE <span className="fw-light"> </span>
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
      <hr
  className="d-block rounded mt-1"
  style={{
    height: "3px", // Adjust thickness
    backgroundColor: "black", // Change to solid black
    border: "none", // Remove default styling
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Darker shadow
  }}
/>

      {/* HITTING IMAGE 3 */}
      <div className="row d-flex justify-content-between align-items-center container mt-2 mb-0">
        <div className="col-6 col-md-6 col-lg-6 position-relative">
          <div className="image-container" onClick={() => setVideoSrc(MLB)}>
            <img src={MLB} alt="small" className="img-fluid shadow-lg w3-grayscale-max" />
            <div className="image-mask"></div>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
            </div>
        </div>
        <div className="col-6 col-md-6 col-lg-6 text-start">
          <Link className="link-light link-offset-2-hover small" to={"/demo3"}>
            <p className="py-0 mb-0 text-white opacity-65" style={{ textShadow: ".5px .5px 1px #eeeeee" }}>
            BULLPENS (MLB)
            </p>
          </Link>
          <p className="small text-white-50" style={{ lineHeight: "18px" }}>
            Lorem ipsum dolor. <br />
            <span className="w3-text-grey small">Jan.1,2025</span>
          </p>
        </div>
      </div>
</div>


    </Box>
            </div>
        </div>
   
    </div>
   
)}
</InView>




    </div>

  );
}


