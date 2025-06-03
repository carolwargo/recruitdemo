import {useState} from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { FaFileDownload} from "react-icons/fa";
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";
import PlayerPerformance from "../../assets/PDF/Performance/Performance.pdf";
import Transcripts from "../../assets/PDF/Transcripts/Transcripts.pdf";
import Calendar from "../../assets/PDF/Schedules/Schedules.pdf";

const PlayerFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div>
<style>
  {`
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
  color: black;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}




footer h6 {
    color: #ffffff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 1.5px
}

footer a {
    color: #737373;
}

footer a:hover {
    color: #3366cc;
    text-decoration: none;
}

.footer-links {
    padding-left: 0;
    list-style: none
}

.footer-links li {
    display: block
}

.footer-links a {
    color: #797979;
    text-decoration: underline;
}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
    color:  #e6e5e5;
    text-decoration: none;
}

.footer-links.inline li {
    display: inline-block
}


footer .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
text-align: center; 
    border-radius: 100%;
    background-color: #797979

}




.social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
     
}

.social-icons li {
    display: inline-block;
    margin-bottom: 4px
}



.social-icons a {
    background-color: #545454;
    color: white;
    font-size: 14px;
    display: inline-block;
    line-height: 44px;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
    color: #ffffff;
    background-color: #29aafe
}

.social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px
}
//C
.social-icons a.facebook:hover {
    background-color: #3b5998
}

.social-icons a.twitter:hover {
    background-color: #323232
}

.social-icons a.globe:hover {
    background-color: green
}

.social-icons a.instagram:hover {
    background-color: #ea4c89
}
//C
@media (max-width:767px) {
    .social-icons li.title {
        display: block;
        margin-right: 0;
        font-weight: 600
    }
`}
</style>


 
<div className="page-container">
{/* Page Content */}
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-padding-16 w3-margin-top  
            ${inView ? "animate-fade-in" : ""}`} 
        id="player-footer">
          <div className="">
<footer>

         
                <div className="row justify-content-center align-items-center mt-3">
             
                  <div className="col-sm-12 col-md-6">
                    <div style={{}} >
                    <h6 className="fw-bolder">THANK YOU FOR VIEWING</h6>
                    <p className="" style={{ color: "#797979", paddingRight: "50px" }}>
  Feedback is welcome. Feel free to reach out to me directly and connect with me on social media.
</p>

<p className="" style={{ color: "#797979", paddingRight: "50px" }}>
  To communicate with a third-party when necessary, contact  
  <i className="fas fa-address-book text-white mx-1"></i> 
  <Link 
    className="footer-links link-light small text-decoration-underline w3-hover-text-light-gray" 
    style={{ cursor: "pointer", color: "#797979" }} 
    onClick={handleOpen}
  >
    COACH JOE DOE
  </Link>.
</p>

                  </div>
                  </div>

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


 {/**FOR LARGE SCREENS */}
      <div className="container-fluid w3-hide-small w3-hide-medium w3-padding-16 w3-margin-top w3-margin-bottom">
      <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-lg-8 col-md-8 col-sm-12 small">
  <h6>CONNECT THROUGH: </h6>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12"> 
             <ul className="social-icons"
             style={{marginLeft:'5rem'}}>
        <li><Link to="https://www.facebook.com/" className="globe"><i className="fas fa-globe"></i></Link></li>
          <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="https://twitter.com/" className="twitter"><i className="fab fa-x-twitter"></i></Link></li>
          <li><Link to="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram-square"></i></Link></li>
        </ul>             
      </div>
      </div>
  </div>


  {/**FOR SMALL SCREENS */}
  <div className="mt-2 w3-hide-large">
  <p className=" text-white">Connect on Social Media:</p>
  <ul className="social-icons"
             >
        <li><Link to="https://www.facebook.com/" className="globe"><i className="fas fa-globe"></i></Link></li>
          <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="https://twitter.com/" className="twitter"><i className="fab fa-x-twitter"></i></Link></li>
          <li><Link to="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram-square"></i></Link></li>
        </ul>                     
</div>

<div className="container w3-padding-top-48 w3-margin-top w3-margin-bottom">
  <p className="copyright-text text-center small"
  style={{color:'#797979'}}>Copyright &copy; 2024 All Rights Reserved by
         {""} <Link to='/' className="text-light text-decoration-underline w3-hover-opacity" style={{color:'#797979'}}>CONSCRIBE.COM</Link>.
        </p>
</div>
</footer>
          </div>
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