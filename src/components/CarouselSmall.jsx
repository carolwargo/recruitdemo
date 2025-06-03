import { Carousel } from "react-bootstrap";
import State from "../assets/images/Expand/State.png";
import Conf from "../assets/images/Expand/Conf.png";
import Preseason from "../assets/images/Expand/Preseason.png";
import TeamMD from "../assets/images/Expand/TeamMD.png";
import B26 from "../assets/images/Expand/B26.png";
import NCAA from "../assets/images/Expand/NCAA.png";
import { InView } from "react-intersection-observer"; // Import InView for animations
import '../styles/CarouselSmall.css'; // Import your custom styles for the carousel
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import cards from '../data/carouselData';


const CarouselSmall = () => {
  return (
    <div>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={`section-container
               ${inView ? "animate-fade-in" : ""}`}
    
        >

      <h2>Carousel Example</h2>
      <Carousel interval={3000} fade>
        {cards.map((card) => (
          <Carousel.Item key={card.id}>
              <div className="carousel-image-wrapper">
              <img src={card.img} alt={card.title} className="d-block w-100 carousel-image" />
            </div> 
            <Carousel.Caption>
              <h3 className="carousel-title">{card.title}</h3>
              <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="carousel-link w3-text-gray hover-zoom"
    > View Post On  <b>
      <i className="fab fa-x-twitter" 
      style={{ 
        color:'black', 
        fontWeight:'bold', 
        textShadow: "1px 1px 2px rgb(237, 235, 235), 0 0 25px rgb(237, 235, 235), 0 0 5px rgb(237, 235, 235), 0 0 5px rgb(237, 235, 235) "}}>
          </i>
          </b>
  
    </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
            </div>
          )}
        </InView>
    </div>

  );
};

export default CarouselSmall;
