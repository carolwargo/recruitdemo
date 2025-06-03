import {useState} from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { FaFileDownload} from "react-icons/fa";
import PlayerResume from "../assets/PDF/PlayerResume.pdf";
import PlayerPerformance from "../assets/PDF/Performance/Performance.pdf";
import Transcripts from "../assets/PDF/Transcripts/Transcripts.pdf";
import Calendar from "../assets/PDF/Schedules/Schedules.pdf";
import '../styles/PlayerFooter.css';

const PlayerFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div      id="player-footer">

 
<div className="page-container">
{/* Page Content */}
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`section-container   
            ${inView ? "animate-fade-in" : ""}`} 
   >
<footer style={{letterSpacing:'1px'}}>

         
                <div className="row justify-content-center align-items-center mt-3">
             
                  <div className="col-sm-12 col-md-5">
                    <div className=" w3-hide-small w3-hide-medium" >
                    <h6>THANK YOU FOR VIEWING</h6>
                    <p>
  Feedback is welcome. Feel free to reach out to me directly and connect with me on social media.
</p>

<p >
  To communicate with a third-party when necessary, contact  
  <i className="fas fa-address-book text-white" style={{marginRight:'4px'}}></i> 
  <Link 
    className="footer-links link-light small text-decoration-underline w3-hover-text-light-gray" 
    style={{ cursor: "pointer", color: "#797979"}} 
    onClick={handleOpen}
  >
    COACH JOE DOE
  </Link>.
</p>

                  </div>
                  </div>
 <div className="col-sm-12 col-md-1"></div>
      <div className="col-xs-6 col-md-3">
        <h6>Contact Info</h6>
        <ul className="footer-links">
          <li> 
           <a href="tel:1234567890">
           <i className="fas fa-phone text-decoration-none text-light" style={{marginRight:'5px'}}></i><span>(123) 456-7890</span>
              </a>
              </li>
          <li>  <a href="mailto:mail@gmail.com"> <i className="fas fa-envelope text-decoration-none text-light" style={{marginRight:'5px'}}></i><span>players-email@mail.com</span></a></li>
          <li> <a href="https://carolwargo.github.io/recruit-demos/demo1">  <i className="fas fa-globe text-decoration-none text-light" style={{marginRight:'5px'}}></i><span>joebaseball.com</span></a></li>
          <li> <a href="https://carolwargo.github.io/recruit-demos/demo1"> <i className="fas fa-location-pin text-decoration-none text-light" style={{marginRight:'5px'}}></i><span>YourTown, ST. 12345</span></a></li>
        </ul>
      </div>


      <div className="col-xs-6 col-md-3">
        <h6>Links & Loads</h6>
        <ul className="footer-links">
        <li> 
        <a 
                  id="download"
                  download
                 href={PlayerResume} >
                  < FaFileDownload className=" text-light"/>{""}
        <span className="text-decoration-none"
         style={{marginLeft:'5px'}}>Player Cheatsheet</span>
              </a>
              </li>
              <li> 
        <a 
                  id="download"
                  download
                 href={PlayerPerformance} >
                  < FaFileDownload className=" text-light"/>{""}
        <span className="text-decoration-none"
         style={{marginLeft:'5px'}}>Performance Download</span>
              </a>
              </li>
              <li>
        <a 
                  id="download"
                  download
                 href={Transcripts} >
                    < FaFileDownload className=" text-light"/>{""}
        <span className="text-decoration-none"
        style={{marginLeft:'5px'}}>Unofficial Transcripts</span>
              </a>
              </li>
              <li> 
        <a 
                  id="download"
                  download
                 href={Calendar} >
                    < FaFileDownload className=" text-light"/>{""}
        <span className="text-decoration-none"
        style={{marginLeft:'5px'}}>Game Schedules</span>
              </a>
              </li>
        </ul>
      </div>
  </div>






  {/**FOR SMALL SCREENS */}
  <div className="mt-5 text-center">
  <ul className="social-icons"
             >
        <li><Link to="https://www.facebook.com/" className="globe"><i className="fas fa-globe"></i></Link></li>
          <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="https://twitter.com/" className="twitter"><i className="fab fa-x-twitter"></i></Link></li>
          <li><Link to="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram-square"></i></Link></li>
        </ul>                     
</div>

<div className="py-3">
  <p className="copyright-text text-center small"
  style={{color:'#797979'}}>Copyright &copy; 2024 All Rights Reserved by
         {""} <Link to='/' className="text-light text-decoration-underline w3-hover-opacity" style={{color:'#797979'}}>CONSCRIBE.COM</Link>.
        </p>
</div>
</footer>
          </div>
    
          )}
    </InView>
    {showModal && (
  <div className="modal-overlay">
    <div className="modal-content bg-secondary-subtle">
      <button className="close-button" onClick={handleClose}>
        ×
      </button>
      <h2 className=" text-dark-emphasis fw-bold">Coach Joe Doe</h2>
      <h6 className=" text-dark-emphasis mb-0">Head Coach- Hilton High School</h6>
      <Link className=" text-dark-emphasis my-0">Email: joe.doe@example.com</Link>
      <Link className=" text-dark-emphasis mb-2">Phone: +1 (555) 123-4567</Link>
  <div>     <ul className="social-icons small">
        <li><Link to="https://www.facebook.com/" className="globe"><i className="fas fa-globe"></i></Link></li>
          <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="https://twitter.com/" className="twitter"><i className="fab fa-x-twitter"></i></Link></li>
          <li><Link to="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram-square"></i></Link></li>
        </ul>
        </div>
    </div>
  </div>
)}
</ div>
    </div>
  );
};

export default PlayerFooter;