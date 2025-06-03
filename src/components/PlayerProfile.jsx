import { InView } from "react-intersection-observer";
import ClaySmall from "../../assets/images/ClaySmall.png";
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { GiTiedScroll } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import PlayerResume from "../../assets/PDF/PlayerResume.pdf";

const PlayerProfile = () => {
  return (
    <div>
            <style>
                {`
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}
`}</style>
      <div className="page-container justify-content-center"> 
        {/* Page Content */}

        {/* Performance Section */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
            id="profile"
        >


              <div className="row d-flex justify-content-center align-items-center g-3 w3-margin-bottom">
         
  {/* Main row with column 4 and nested columns in column 8 */}
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="w3-hide-small w3-hide-medium">
                    <img src={ClaySmall} alt="clay" style={{ width: "90%" }} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="row d-flex justify-content-center align-items-center g-2">
                  <div className="w3-text-white">
                      <h1 className="w3-text-light-grey">
                        <i className="fas fa-user small w3-margin-right w3-hide-large"></i>Player Profile</h1>
                      <hr className="w3-opacity" />
                    </div>



                    <div className="col-sm-12 col-md-6 col-lg-6">

                   {/*start col-1 for large*/}
                      <div className="w3-hide-small w3-hide-medium">
                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px",
                            fontSize: ".9rem" 
                           }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="personal-icon text-white-50"
                              style={{ fontSize: "1.1rem" }}
                            >
                              <RiHome6Line />
                            </b>{" "}
                          </span>
                          <span
                            className="text-white"
                          >
                            {" "}
                            CATCHER
                          </span>
                          <br />
                        </p>


                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px",
                            fontSize: ".9rem" 
                           }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="personal-icon text-white-50"
                              style={{ fontSize: "1.1rem" }}
                            ><HiAcademicCap /></b>{" "}
                          </span>
                          <span className="text-white">
                            {" "} 2024</span>
                          <br />
                        </p>

                    
                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px",
                            fontSize: ".9rem" 
                           }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="personal-icon text-white-50"
                              style={{ fontSize: "1.1rem" }}>
                                <GiTiedScroll /></b>{" "}
                          </span>
                          <span className="text-white">
                            {" "}   SAT-9000 | GPA- 5.0</span>
                          <br />
                        </p>
                   
 
                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px",
                            fontSize: ".9rem" 
                           }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="personal-icon text-white-50"
                              style={{ fontSize: "1.1rem" }}>
                                <GiRotaryPhone /></b>{" "}
                          </span>
                          <span className="text-white">
                            {" "}    (123) 456-7890</span>
                          <br />
                        </p>
                       

                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px",
                            fontSize: ".9rem" 
                           }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="personal-icon text-white-50"
                              style={{ fontSize: "1.1rem" }}>
                                   <MdOutlineEmail /></b>{" "}
                          </span>
                          <span className="text-white">
                            {" "}   EMAIL@MAIL.COM</span>
                          <br />
                        </p>

                      
                        <p
                          className="my-0 py-0 text-white"
                          style={{ marginBottom: "4px",
                            fontSize: ".9rem" 
                           }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="personal-icon text-white-50"
                              style={{ fontSize: "1.1rem" }}>
                                   <FaRegEye /></b>{" "}
                          </span>
                          <span className="text-white">
                            {" "}  PBR PROFILE</span>
                          <br />
                        </p>
                 
                 
                        <div
                          className="py-2 text-white">
                            <span className="text-white-50" style={{fontSize:'.8'}}>FOLLOW ME: </span>
     <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-x-twitter" style={{fontSize:'1.35rem', marginRight:'5px'}}></i>
     </a>   
   <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-instagram" style={{fontSize:'1.35rem', marginRight:'5px'}}></i>
     </a>
     <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-facebook" style={{fontSize:'1.35rem', marginRight:'5px'}}></i>
     </a>  
     <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-snapchat"  style={{fontSize:'1.35rem', marginRight:'5px'}}></i>
        </a>
  

                        </div>   
                      </div>
{/*end col-1 for small and medium*/}



{/*start col-1 for small and medium*/}
                                 <div className=" w3-hide-large py-2">
                                       <h3 className="text-white-50 fw-bold">
                        <i className=" fas fa-user small w3-margin-right"></i>Player Profile</h3>
                        <hr className="w3-opacity mb-4" />
                        <p
                            className="my-1 text-white"
                          
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              <RiHome6Line />
                            </b>{" "}
                          </span>
                          <span
                            className="text-white"
                           style={{letterSpacing:'3px'}}
                          >
                            {" "}
                            CATCHER
                          </span>
                          <br />
                        </p>

                        <p
                            className="my-1 text-white"
                         
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              {" "}
                              <HiAcademicCap />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                              style={{letterSpacing:'3px'}}
                          >
                            {" "}
                            2024
                          </span>
                          <br />
                        </p>

                        
                        <p
                             className="my-1 text-white"
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              {" "}
                              < GiTiedScroll />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                            style={{letterSpacing:'3px'}}
                          >
                            {" "}
                            SAT-9000 | GPA- 5.0
                          </span>
                          <br />
                        </p>


                        <p
                             className="my-1 text-white"
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                                 <GiRotaryPhone />{" "}
                            </b>
                          </span>{" "}
                          <a href="tel:1234567890"
                            className="text-white text-decoration-underline"
                            style={{letterSpacing:'3px'}}
                          >
                            (123) 456-7890
                          </a>
                          <br />
                        </p>


                        <p
                           className="my-1 text-white"
                        >
    <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              <MdOutlineEmail />{" "}
                            </b>
                          </span>{" "}
                     
                          <a href="mailto:mail@gmail.com"
                             className="text-white text-decoration-underline"
                             style={{letterSpacing:'3px'}}
                          >
                            EMAIL@MAIL.COM
                          </a>
                          <br />
                        </p>




                        <p
                           className="my-1 text-white"
                        >
    <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              < FaRegEye />{" "}
                            </b>
                          </span>{" "}
                     
                        
                          <a href="https://www.prepbaseballreport.com/"
                           className="text-white text-decoration-underline"
                           style={{letterSpacing:'3px'}}
                          >
                            
                         PBR PROFILE{" "}
                          </a>
                        
                        </p>
                   
                        <div
                          className="py-2 text-white">
                            <span className="text-white-50" style={{fontSize:'.8'}}>FOLLOW ME: </span>
     <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-x-twitter" style={{fontSize:'1.35rem', marginRight:'7px'}}></i>
     </a>   
   <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-instagram" style={{fontSize:'1.35rem', marginRight:'7px'}}></i>
     </a>
     <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-facebook" style={{fontSize:'1.35rem', marginRight:'7px'}}></i>
     </a>  
     <a href='/' className=" link-light w3-hover-opacity">
     <i className="fab fa-square-snapchat"  style={{fontSize:'1.35rem', marginRight:'7px'}}></i>
        </a>
  

                        </div>   
                      </div>
                    </div>
{/*end col-1 for small and medium*/}



    {/*col 2 for large*/}
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className=" w3-hide-small w3-hide-medium py-2">
                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px", fontSize: "1rem" }}
                        >
                          {" "}
                          Bats:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R/L
                          </span>
                          Throws:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R
                          </span>
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px", fontSize: "1rem" }}
                        >
                          {" "}
                          Height:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            6&apos;0
                          </span>{" "}
                          Weight:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            335 lbs
                          </span>
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px", fontSize: "1rem" }}
                        >
                          {" "}
                          Born:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            11-01-2006, <i>ST.</i>
                          </span>
                        </p>

                        <div className="py-2">
                          <p
                            className="mt-0 py-0 text-white"
                            style={{ marginBottom: "4px", fontSize: ".9rem" }}
                          >
                            {" "}
                            <span style={{ color: "#9ad7ff" }}>
                              NCAA STATUS:
                            </span>{" "}
                            Registered{" "}
                            <i
                              className="fas fa-check-circle"
                              style={{ color: "#9ad7ff" }}
                            ></i>
                          </p>
                          <p
                            className="mt-0 py-0 text-white"
                            style={{ marginBottom: "4px", fontSize: ".9rem" }}
                          >
                            {" "}
                            <span style={{ color: "#9ad7ff" }}>
                              NCAA ID:{" "}
                            </span>{" "}
                            #81238765
                          </p>
                        </div>
                        <a id="download" download href={PlayerResume}>
                          <button className="w3-button px-5 rounded text-decoration-none small w3-white w3-padding mt-1">
                            Download Resume
                          </button>
                        </a>
                        <br /> 
                      </div>

{/* for small and medium*/}
                         <div className=" w3-hide-large py-2">
                         <div className="w3-text-white mt-3 w3-hide-large">
                      <h3 className="text-white-50 fw-bold">
                        <i className="fas fa-dumbbell small w3-margin-right"></i>Physical Metrics</h3>
                      <hr className="w3-opacity mb-4" />
                    </div>
                    
                        <h6
                          className="py-1 text-white"
                        >
                          {" "}
                          BATS:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R/L
                          </span>
                          THROWS:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R
                          </span>
                        </h6>

                        <h6
                          className="py-1 text-white"
                        >
                          {" "}
                          HEIGHT:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            6&apos;0
                          </span>{" "}
                           WEIGHT:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            335 lbs
                          </span>
                        </h6>

                        <h6
                          className="py-1 text-white mt-2 mb-5"
                        >
                          {" "}
                          BORN:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            11-01-2006, <i>ST.</i>
                          </span>
                        </h6>
                        <div className="w3-text-white">
                        <h3 className="text-white-50 fw-bold">
                        <i className=" fas fa-book-open small w3-margin-right"></i>Eligibility Status</h3>
                     <hr className="w3-opacity" />
                    </div>
                        <div className="mt-4">
                        <p
                          className="my-1 text-white"
                        > <span style={{ color:'#9ad7ff'}}>NCAA STATUS:</span>
                          {" "} Registered <i className="fas fa-check-circle" style={{ color:'#9ad7ff'}}></i> 
                        </p>
                        <p  
                          className="my-1 text-white"
                        > <span style={{ color:'#9ad7ff'}}>NCAA ID: </span>
                          {" "} #81238765 
                        </p>
                        </div>
                        <a id="download" download href={PlayerResume}>
                          <button className="w3-button w-100 px-5 rounded text-decoration-none w3-white mt-2"
                          style={{ fontSize: "1rem", fontWeight: "light", textShadow:'1px 1px 3px black ', boxShadow: "1px 1px 6px rgba(104, 106, 107, 0.75)" }}>  
                          DOWNLOAD CHEATSHEET
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/**START TEAMS
                <div className="row w3-padding-16 d-flex justify-content-center align-items-center g-3">
                <div className="w3-text-white">
                <h4 className="w3-text-light-grey">Team Affiliations</h4>
          
                </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="w3-text-white">
              <h5 className="fw-bold text-white mt-2">HIGH SCHOOL</h5>
           
            </div>

            <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Hometown High <span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}> <i className='text-white opacity-70 fw-light'> Anytown, ST.</i>
                      </span>
                    </p>
                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Head Coach <span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}>
              <i className="text-white opacity-70 fw-light">Coach Joe Athlete</i>
                      </span>
                    </p>
                 
                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Coach Cell <span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}>
              <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'> <i>(123)456-7890</i></NavLink>
                      </span>
                    </p>

                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}>Coach Email<span 
            className=" text-white-50"
            style={{ marginRight: "4px" }}>  <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'><i>coachemail@mail.com</i></NavLink>
                       
                      </span>
                    </p>

                  </div>
         
                  <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="w3-text-white">
                  <h5 className="fw-bold text-white mt-2">SUMMER TEAM</h5>
               
                </div>

                <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>
                  Dirtbags Baseball<span 
                style={{ marginRight: "4px" }}> 
                <i className=" text-white opacity-70 fw-light"> Anytown, ST.</i>
                          </span>
                        </p>
                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>Head Coach <span 
                className=" text-white-50"
                
                style={{ marginRight: "4px" }}>  
               <i className=" text-white opacity-70 fw-light">Coach Joe Dirtbag</i>
                          </span>
                        </p>
                     
                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>Coach Cell <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 
                  <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'> <i>(123)456-7890</i></NavLink>
                          </span>
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}>Coach Email <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 
                 <NavLink href="#/link" className=' link-light opacity-70 fw-light link-offset-3-hover'><i>coachemail@mail.com</i></NavLink>
                          </span>
                         
                      
                        </p>
                      </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="w3-text-white">
              <h5 className="fw-bold text-white mt-2">SPECIAL TEAMS</h5>
           
            </div>

            <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b className="text-danger">U</b><b>S</b><b style={{color:'#81cefa'}}>A</b>BASEBALL <span><i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px" }}>18U National</Link></i>
                      </span>
                    </p>
                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b>THE</b><b className="text-danger">BIG26</b> <span> <i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px"}}>Team Maryland</Link></i>
                      </span>
                    </p>

                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b>WWBA</b> <span> <i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px"}}>Perfect Game</Link></i>
                      </span>
                    </p>

                    <p className="mt-0 py-0 text-white"
            style={{ marginBottom: "4px" }}><b>ALL-METROPOLITAN</b><b className="text-danger"></b> <span> <i><Link className=' link-light opacity-70 fw-light link-offset-3-hover'  style={{ marginRight: "6px"}}>First Team</Link></i>
                      </span>
                    </p>
                  </div>
            </div>
*/}
            </div>
          )}
        </InView>

        <script>
          {`
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
  `}
        </script>
      </div>
    </div>
  );
};

export default PlayerProfile;

/*****************************/
/**
                <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Bats: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> R/L
                          </span>
                          Throws: 
                          <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> R
                          </span>
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Height: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 6'0
                          </span> Weight: 
                          <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 335 lbs
                          </span>
                        </p>
                     
                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Born: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 11-01-2006, <i>ST.</i>
                          </span> 
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Home: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}><i>1234 Anywhere St. ST. 12345</i>
                          </span> 
                        </p>
                         */

/*****************************/
/*{/**small screens 
<div className=" w3-hide-large col-sm-12 col-md-6 col-lg-6">
                      <div className="py-2">
                        <h4
                           className="py-1 text-white"
                          
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.4rem" }}
                            >
                              <RiHome6Line />
                            </b>{" "}
                          </span>
                          <span
                            className="text-white"
                           
                          >
                            {" "}
                            CATCHER
                          </span>
                          <br />
                        </h4>

                        <h4
                           className="py-1 text-white"
                         
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.4rem" }}
                            >
                              {" "}
                              <HiAcademicCap />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                          >
                            {" "}
                            2024
                          </span>
                          <br />
                        </h4>

                        
                        <h4
                           className="py-1 text-white"
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="text-white-50"
                              style={{ fontSize: "1.4rem" }}
                            >
                              {" "}
                              < GiTiedScroll />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                          >
                            {" "}
                            SAT-9000 | GPA- 5.0
                          </span>
                          <br />
                        </h4>


                        <h4
                           className="py-1 text-white"
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.4rem" }}
                            >
                                 <GiRotaryPhone />{" "}
                            </b>
                          </span>{" "}
                          <a href="tel:1234567890"
                            className="text-white"
                          >
                            (123) 456-7890
                          </a>
                          <br />
                        </h4>


                        <h4
                           className="py-1 text-white"
                        >
    <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.4rem" }}
                            >
                              <MdOutlineEmail />{" "}
                            </b>
                          </span>{" "}
                     
                          <a href="mailto:mail@gmail.com"
                            className="text-white"
                            style={{ marginRight:'4px' }}
                          >
                            EMAIL@MAIL.COM
                          </a>
                          <br />
                        </h4>




                        <h4
                           className="py-2 text-white"
                        >
    <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.4rem" }}
                            >
                              < FaRegEye />{" "}
                            </b>
                          </span>{" "}
                     
                        
                          <a href="https://www.prepbaseballreport.com/"
                            className=" text-white"
                            style={{ marginRight: "4px" }}
                          >
                            
                         PBR PROFILE{" "}
                          </a>
                          <br />
                        </h4>

                 
                      </div>
                    </div>
                   
                    <div className="w3-hide-large mt-5 col-sm-12 col-md-6 col-lg-6">
                    <div className="w3-text-white">
                      <h1 className="w3-text-light-grey">Physical Profile</h1>
                      <hr className="w3-opacity" />
                    </div>
                      <div className="py-1">
                        <h3
                          className="py-1 text-white mt-2"
                        >
                          {" "}
                          BATS:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R/L
                          </span>
                          THROWS:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            R
                          </span>
                        </h3>

                        <h3
                          className="py-1 text-white"
                        >
                          {" "}
                          HEIGHT:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            6'0
                          </span>{" "}
                          WEIGHT:
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            335 lbs
                          </span>
                        </h3>

                        <h3
                          className="py-1 text-white mt-2 mb-5"
                        >
                          {" "}
                          BORN:{" "}
                          <span
                            className=" text-white-50"
                            style={{ marginRight: "4px" }}
                          >
                            {" "}
                            11-01-2006, <i>ST.</i>
                          </span>
                        </h3>
                        <div className="w3-text-white">
                      <h1 className="w3-text-light-grey">Eligibility Status</h1>
                      <hr className="w3-opacity" />
                    </div>
                        <div className="py-1 mt-4">
                        <h3
                          className="text-white"
                        > <span style={{ color:'#9ad7ff'}}>NCAA STATUS:</span>
                          {" "} Registered <i className="fas fa-check-circle" style={{ color:'#9ad7ff'}}></i> 
                        </h3>
                        <h3  
                          className="py-1 text-white"
                        > <span style={{ color:'#9ad7ff'}}>NCAA ID: </span>
                          {" "} #81238765 
                        </h3>
                        </div>
                        <a id="download" download href={PlayerResume}>
                          <button className="w3-button w-100 px-5 rounded text-decoration-none w3-white mt-3"
                          style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                            Download Cheatsheet
                          </button>
                        </a>
                      </div>
                    </div>
*/
