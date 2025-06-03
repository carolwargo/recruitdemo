//src/components/PlayerTestimonials.jsx
import { useState } from "react";
import { InView } from "react-intersection-observer";
import Teacher from "../assets/images/Testiminals/Teacher.png";
import Principal from "../assets/images/Testiminals/Principal.png";
import Virginia from "../assets/images/Testiminals/Virginia.png";
import Wake from "../assets/images/Testiminals/Wake.png";

import "../styles/PlayerTestimonials.css"; // Import your custom styles
import Letters from '../data/lettersData.jsx';

const PlayerTestimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div id="testimonials">
      {/* Testimonial Sections */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`section-container
               ${inView ? "animate-fade-in" : ""}`}
          >
    <h1 className="text-grey mt-5">Reputation</h1>
            <div className="row g-5 mt-4">
              {/**Letter1 */}
              <div className="col-sm-12 col-md-6 col-lg-6 mt-2 text-center">  
                <div className="testimonial-card">
                <div className="testimonial-card-container">
                  <img
                    src={Teacher}
                    alt="teacher"
                  className="w3-left mb-2 w3-circle w3-grayscale-max w3-image shadow border border border-primary" 
                    style={{ width: "100px" }}
                  />
                                              <h5>
                    <b className="text-primary mb-0">JANE DOUGH</b>
                    <br /><span className="text-secondary small">-Teacher American High School.</span>
                  </h5>
                       <span className="fade-text">
                            Joe Baseball is the best Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Similique, ut blanditiis
                    possimus voluptate quam incidunt ipsum in error molestias,
                    alias recusandae temporibus maiores quos odio saepe totam
                    enim fugiat voluptatum.
                      </span>
                    <p
                       className="text-decoration-underline mt-3 ms-2 continue-link w3-hover-opacity"
                      onClick={() => {
                        setSelectedLetter(
                          Letters.find((letter) => letter.id === 3)
                        ); // Select Letter4 (update as needed)
                        setIsModalOpen(true);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "#007bff",
                      }}
                    >
                      View Statement
                  </p>
                </div>
                </div>
              </div>
              {/**Letter2 */}
              <div className="col-sm-12 col-md-6 col-lg-6 mt-2 text-center">
                               <div className="testimonial-card">
                <div className="testimonial-card-container">
                  <img
                    src={Principal}
                    alt="principal"
                     className="w3-left mb-2 w3-circle w3-grayscale-max w3-image shadow border border-primary"
                    style={{ width: "100px" }}
                  />
                            <h5>
                    <b className="text-primary mb-0">JOHN DOUGH</b>
                    <br /><span className="text-secondary small">-Principal American High School.</span>
                  </h5>
                   
                         <span className="fade-text">
                            Joe Baseball is the best Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Similique, ut blanditiis
                    possimus voluptate quam incidunt ipsum in error molestias,
                    alias recusandae temporibus maiores quos odio saepe totam
                    enim fugiat voluptatum.
                      </span>
                    <p
                         className="text-decoration-underline mt-3 ms-2 continue-link w3-hover-opacity"
                      onClick={() => {
                        setSelectedLetter(
                          Letters.find((letter) => letter.id === 4)
                        ); // Select Letter4 (update as needed)
                        setIsModalOpen(true);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "#007bff",
                      }}
                    >
                      View Statement
               
                  </p>
                </div>
              </div>
              </div>
              {/**Letter3 */}
              <div className="col-sm-12 col-md-6 col-lg-6 mt-2">
                                <div className="testimonial-card">
                <div className="testimonial-card-container text-center">
                  <img
                    src={Virginia}
                    alt="va coach"
                       className="w3-left mb-2 w3-circle w3-grayscale-max w3-image shadow border border-primary"
                    style={{ width: "100px" }}
                  />
                  <h5>
                    <b className="text-primary mb-0">JAX DOUGH </b>
                    <br /><span className="text-secondary small">-Coach American High School.</span>
                  </h5>
                    <p> 
                         <span className="fade-text">
                            Joe Baseball is the best Lorem ipsum dolor sit amet
                    consectetur elit. Similique, ut blanditiis
                    possimus voluptate quam in error molestias,
                    alias recusandae temporibus maiores quos odio saepe totam
                    enim  voluptatum.
                      </span>
              </p>
                    <p
                        className="text-decoration-underline ms-2 continue-link w3-hover-opacity"
                      onClick={() => {
                        setSelectedLetter(
                          Letters.find((letter) => letter.id === 1)
                        ); // Select Letter4 (update as needed)
                        setIsModalOpen(true);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "#007bff",
                      }}
                    >
                      View Statement
                    </p>
                 
                </div>
              </div>
              </div>
              {/**Letter4 */}
              <div className="col-sm-12 col-md-6 col-lg-6 mt-2 text-center">  
                              <div className="testimonial-card">
                <div className="testimonial-card-container">
                  <img
                    src={Wake}
                    alt="wake coach"
                   className="w3-left mb-2 w3-circle w3-grayscale-max w3-image shadow border border-primary"
                    style={{ width: "100px" }}
                  />
          
                        <h5>
                    <b className="text-primary mb-0">JOE COACH </b>
                    <br /><span className="text-secondary small">-Coach American High School.</span>
                  </h5>
          
              
            <span className="fade-text">
                            Joe Baseball is the best Lorem ipsum dolor sit amet
                    consectetur elit. Similique, ut blanditiis
                    possimus voluptate quam in error molestias,
                    alias recusandae temporibus maiores quos odio saepe totam
                    enim  voluptatum.
                      </span>
            
                    <p
                      className="text-decoration-underline mt-3 ms-2 continue-link w3-hover-opacity"
                      onClick={() => {
                        setSelectedLetter(
                          Letters.find((letter) => letter.id === 2)
                        ); // Select Letter4 (update as needed)
                        setIsModalOpen(true);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "#007bff",
                      }}
                    >
                      View Statement
                 
                  </p>
                </div>
                </div>
              </div>
            </div>
            {/* Modal */}

            {isModalOpen && selectedLetter && (
              <div>
                <div
                  className="modal-overlay w3-padding-large w3-padding-top-32"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div
                    className="modal-content scrollable-modal bg-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="bg-white">
                      <div className="modal-header">
                        <p className=" small"></p>
                        <button
                          className="close-btn text-black py-0 hover-opacity"
                          onClick={() => setIsModalOpen(false)}
                          style={{
                            textShadow: ".5px .5px 1px",
                            fontSize: "12px",
                          }}
                        >
                          X
                        </button>
                      </div>
                      <img
                        src={selectedLetter.image}
                        alt={selectedLetter.name}
                        className="w3-image shadow border"
                      />

                      <div className="modal-footer d-flex justify-content-between">
                        <div
                          className="w3-round w3-white mt-2"
                          style={{
                            fontFamily: "Raleway",
                            textAlign: "left", // Ensures all text aligns left
                            marginLeft: "0", // Moves the div to the left margin
                            padding: "10px", // Adds spacing inside the card
                            maxWidth: "320px", // Keeps it compact like a business card
                          }}
                        >
                          <p className="fw-light small mb-2">
                            <i>
                              Feel free to contact me with questions, or reach
                              out if I can be of assistance.
                            </i>
                          </p>
                          <p className="fw-bold text-emphasis-primary mb-1">
                            {selectedLetter.name}
                          </p>

                          <div className="small text-dark">
                            <p className="mb-1">
                              📞{" "}
                              <a
                                href={`tel:${selectedLetter.phone}`}
                                className="text-decoration-none text-dark"
                              >
                                {selectedLetter.phone}
                              </a>
                            </p>
                            <p className="mb-0">
                              ✉️{" "}
                              <a
                                href={`mailto:${selectedLetter.email}`}
                                className="text-decoration-none text-dark"
                              >
                                {selectedLetter.email}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default PlayerTestimonials;
