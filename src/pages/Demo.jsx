import PlayerProfile from "../components/PlayerProfile";
import PlayerPerformance from "../components/PlayerPerformance";
import PlayerCards from "../components/PlayerCards";
import PlayerFooter from "../components/PlayerFooter";
import Media3 from "../components/PlayerMedia3";
import PlayerTestimonials from "../components/PlayerTestimonials";
import CarouselSmall from "../components/CarouselSmall";
import ExpandCards from "../components/ExpandCards";
import ClaySmall from "../assets/images/ClaySmall.png";
import SMALLCLAY from "../assets/images/SMALLCLAY.png";
import ClayBG from "../assets/images/ClayBG.png";
//import { RiHome6Line } from "react-icons/ri";
import "../styles/Demo.css"; // Import your CSS file for styles

const Demo = () => {
  return (
    <div>
  
      <div className="body w3-black">
        {/**LARGE NAV */}
        <nav
          className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center"
          style={{ marginTop: "1rem" }}
        >
          {/* Avatar image in top left corner */}
          <img src={ClaySmall} alt="pic" style={{ width: "100%" }} />
          <a href="/demo" className="w3-bar-item w3-buttonp-2 w3-black">
            <i className="fa fa-user w3-xxlarge mt-2"></i>
            <p>PLAYER PROFILE</p>
          </a>

          <a
            href="#demo1-player-performance"
            className="w3-bar-item w3-button p-3 w3-hover-black"
          >
            <i className=" fa fa-chart-bar w3-xxlarge mt-2"></i>
            <p className="mb-2">PLAYER METRICS</p>
          </a>

          <a
            href="#demo1-player-performance"
            className="w3-bar-item w3-button p-3 w3-hover-black"
          >
            <i className="fa fa-handshake w3-xxlarge mt-2"></i>
            <p className="mb-2">PLAYER AFFILIATES</p>
          </a>

          <a
            href="#demo1-player-media"
            className="w3-bar-item w3-button p-3 w3-hover-black"
          >
            <i className="fa fa-film w3-xxlarge mt-2"></i>
            <p className="mb-2">MEDIA & UPDATES </p>
          </a>
          <a
            href="#demo1-player-media"
            className="w3-bar-item w3-button p-3 w3-hover-black"
          >
            <i className="fa fa-link w3-xxlarge mt-2"></i>
            <p className="mb-2">LINKS & LOADS</p>
          </a>
        </nav>
        {/**SMALL NAV */}
        <div
          className="w3-top w3-black w3-hide-large w3-hide-medium py-2"
          id="myNavbar"
          style={{ boxShadow: "0 4px 8px 0 rgba(90, 90, 90, 0.4)" }}
        >
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off">
            <a
              href=""
              className="w3-bar-item w3-button  w3-small w3-margin-left"
            >
              PROFILE
            </a>
            <a href="" className="w3-bar-item w3-button  w3-small">
              METRICS
            </a>
            <a href="" className="w3-bar-item w3-button  w3-small">
              MEDIA
            </a>
            <a href="" className="w3-bar-item w3-button  w3-small">
              RESOURCES
            </a>
          </div>
        </div>

        <div id="main">
          <header className=" w3-center w3-black" id="home">
            <h1
              className="w3-jumbo w3-animate-left"
              style={{ marginTop: "4rem" }}
            >
              <span className="w3-hide-small">I&apos;m</span> Joe Athlete.
            </h1>
         <p
              style={{ letterSpacing: "6px" }}
              className="text-gray w3-animate-zoom w3-hide-small w3-hide-medium"
            >
              STUDENT-ATHLETE | CLASS OF 2024 | BASEBALL RECRUIT
            </p>
              <p
              style={{ letterSpacing: "4px" }}
              className="text-gray w3-animate-zoom w3-hide-large small"
            >
              STUDENT-ATHLETE <br /> CLASS OF 2024 <br /> BASEBALL RECRUIT
            </p>
            <img
              src={SMALLCLAY}
              alt="boy"
              className="w3-image w3-hide-large mb-2"
              width="100%"
            />

            <img
              src={ClayBG}
              alt="boy"
              className="w3-image w3-hide-small w3-hide-medium"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </header>

          <div className="">
            {/* Profile Section  */}
            <div className="demo1-player-profile" id="demo1-player-profile">
              <PlayerProfile />
            </div>
            {/* Performance Section     */}
            <div
              className="demo1-player-performance"
              id="demo1-player-performance"
            >
              <PlayerPerformance />
            </div>
            {/* testimonials*/}
            <div
              className="demo1-player-testimonial"
              id="demo1-player-testimonial"
            >
              <PlayerTestimonials />
            </div>
            {/* Cards Contact Section*/}
            <div className="demo1-player-cards" id="demo1-player-cards">
              <PlayerCards />
            </div>
            {/* Media Section */}
            <div className="demo1-media-component" id="demo1-media-component">
              <Media3 />
            </div>
            {/* Cards Contact Section*/}
            <div
              className="demo1-player-cards w3-hide-small"
              id="demo1-player-cards"
            >
              <ExpandCards />
            </div>
    
            <div
              className="demo1-player-cards w3-hide-large"
              id="demo1-player-cards"
            >
              <CarouselSmall />
            </div>
          </div>
        </div>
        <div
          className="demo1-player-downloads"
          id="demo1-player-downloads"
          style={{ background: "linear-gradient(to bottom,  #121212, black)" }}
        >
          <div className="w3-padding-large" id="main">
            <div className="container">
              <PlayerFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
