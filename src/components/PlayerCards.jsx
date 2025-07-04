import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import DBWhite from "../assets/images/Round/DBWhite.png";
import UA from "../assets/images/Round/UA.png";
import Gatorade from "../assets/images/Round/Gadorade.png";
import Big26 from "../assets/images/Round/Big26.png";
import USALogo from "../assets/images/Round/USALogo.jpeg";
import "../styles/PlayerCards.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PlayerCards = () => {
  return (
    <div id="cards">
      <div className="justify-content-center align-items-center">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`section-container 
               ${inView ? "animate-fade-in" : ""}`}
            >
              <h1 className="w3-text-light-grey w3-margin-bottom w3-margin-top">
                Team Affiliations
              </h1>

              <div className="row d-flex justify-content-center align-items-center w3-padding-16">
                {/* High School Card */}
                <div className="col-sm-12 col-md-4 col-lg-4 text-center w3-padding-small">
                  <div>
                    <div
                      className="card"
                      style={{
                        backgroundImage: `url(${DBWhite})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "black",
                        height: "25rem",
                        border: "1px solid black",
                        filter: "grayscale(100%)", // Apply grayscale to the background
                        position: "relative", // Ensure text layers properly
                      }}
                    >
                      {/* Dark Mask */}
                      <div
                        className="mask"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "25rem",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          zIndex: 1, // Ensure mask is above background but below text
                        }}
                      ></div>

                      {/* Text Content */}
                      <div
                        className="container w3-padding-large text-white"
                        style={{
                          position: "relative", // Ensure this content isn't affected by grayscale
                          zIndex: 2,
                        }}
                      >
                        <div className="card-body w3-padding-24">
                          <h4
                            style={{
                              color: "#8ecdf8",
                              textShadow: "1px 1px 2px black",
                              lineHeight: "1",
                              fontSize: "32px",
                            }}
                          >
                            <b>ST. MARYS</b> <br />{" "}
                            <span
                              style={{ fontSize: "24px", marginTop: "0px" }}
                            >
                              High School
                            </span>
                          </h4>
                          <h6
                            className="fw-bold mt-3"
                            style={{
                              color: "#8ecdf8",
                              textShadow: "1px 1px 2px black",
                            }}
                          >
                            SMAACC <br />
                            State Ranking #1
                          </h6>
                          <h6
                            className="fw-bold mb-2"
                            style={{
                              color: "#8ecdf8",
                              textShadow: "1px 1px 2px black",
                            }}
                          >
                            <span
                              style={{ fontWeight: "400", marginTop: "2px" }}
                            >
                              <a
                                className="link-light text-decoration-underline w3-hover-opacity"
                                href="/"
                              >
                                Coach Joe Jock
                              </a>{" "}
                            </span>
                          </h6>
                          <div>
                            <p
                              className="small mb-1"
                              style={{
                                color: "#8ecdf8",
                                textShadow: "1px 1px 2px black",
                              }}
                            >
                              <i className="fas fa-location-pin"></i>{" "}
                              <Link
                                className="mt-1 text-decoration-underline w3-hover-opacity"
                                style={{
                                  color: "#8ecdf8",
                                  textShadow: "1px 1px 2px black",
                                  marginLeft: "5px",
                                }}
                              >
                                Annapolis, MD.
                              </Link>
                            </p>
                            <p
                              className="small mb-1"
                              style={{
                                color: "#8ecdf8",
                                textShadow: "1px 1px 2px black",
                              }}
                            >
                              <i className="fas fa-video-camera"></i>{" "}
                              <Link
                                className="mt-2 text-decoration-underline w3-hover-opacity"
                                style={{
                                  color: "#8ecdf8",
                                  textShadow: "1px 1px 2px black",
                                  marginLeft: "5px",
                                }}
                              >
                                Watch Games Live
                              </Link>
                            </p>

                            <p
                              className="small mb-1"
                              style={{
                                color: "#8ecdf8",
                                textShadow: "1px 1px 2px black",
                              }}
                            >
                              <i className="fas fa-globe mr-2"></i>{" "}
                              <Link
                                className="mt-2 text-decoration-underline w3-hover-opacity"
                                style={{
                                  color: "#8ecdf8",
                                  textShadow: "1px 1px 2px black",
                                  marginLeft: "5px",
                                }}
                              >
                                Program Highlights
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div className="tags mt-0 mb-2">
                          <footer className="tags-footer">
                            <Link to="https://www.facebook.com/S.Zain.Asif/">
                              <i className="fab fa-facebook w3-hover-opacity"></i>
                            </Link>
                            <Link to="https://www.instagram.com/zain._.asif/">
                              <i className="fab fa-instagram w3-hover-opacity"></i>
                            </Link>
                            <Link to="https://twitter.com/comeflywithme92">
                              <i className="fab fa-twitter w3-hover-opacity"></i>
                            </Link>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/**Summer Team */}
                <div className="col-sm-12 col-md-4 col-lg-4 text-center w3-padding-small">
                  <div>
                    <div
                      className="card"
                      style={{
                        backgroundImage: `url(${DBWhite})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "black",
                        height: "25rem",
                        border: "1px solid black",
                        filter: "grayscale(100%)", // Apply grayscale to the background
                        position: "relative", // Ensure text layers properly
                      }}
                    >
                      {/* Dark Mask */}
                      <div
                        className="mask"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "25rem",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          zIndex: 1, // Ensure mask is above background but below text
                        }}
                      ></div>

                      {/* Text Content */}
                      <div
                        className="container w3-padding-large text-white"
                        style={{
                          position: "relative", // Ensure this content isn't affected by grayscale
                          zIndex: 2,
                        }}
                      >
                        <div className="card-body w3-padding-24">
                          <h4
                            style={{
                              color: "#8ecdf8",
                              textShadow: "1px 1px 2px black",
                              lineHeight: "1",
                              fontSize: "32px",
                            }}
                          >
                            <b>DIRTBAGS</b> <br />{" "}
                            <span
                              style={{ fontSize: "24px", marginTop: "0px" }}
                            >
                              Baseball
                            </span>
                          </h4>
                          <h6
                            className="fw-bold mt-3"
                            style={{
                              color: "#8ecdf8",
                              textShadow: "1px 1px 2px black",
                            }}
                          >
                            All-Blacks <br />
                            National Ranking #1
                          </h6>
                          <h6
                            className="fw-bold mb-2"
                            style={{
                              color: "#8ecdf8",
                              textShadow: "1px 1px 2px black",
                            }}
                          >
                            <span
                              style={{ fontWeight: "400", marginTop: "2px" }}
                            >
                              <a
                                className="link-light text-decoration-underline w3-hover-opacity"
                                href="/"
                              >
                                Coach Joe Jock
                              </a>{" "}
                            </span>
                          </h6>

                          <div>
                            <p
                              className="small mb-1"
                              style={{
                                color: "#8ecdf8",
                                textShadow: "1px 1px 2px black",
                              }}
                            >
                              <i className="fas fa-location-pin"></i>{" "}
                              <Link
                                className="mt-1 text-decoration-underline w3-hover-opacity"
                                style={{
                                  color: "#8ecdf8",
                                  textShadow: "1px 1px 2px black",
                                  marginLeft: "5px",
                                }}
                              >
                                Burlington, N.C.
                              </Link>
                            </p>
                            <p
                              className="small mb-1"
                              style={{
                                color: "#8ecdf8",
                                textShadow: "1px 1px 2px black",
                              }}
                            >
                              <i className="fas fa-video-camera"></i>{" "}
                              <Link
                                className="mt-1 text-decoration-underline w3-hover-opacity"
                                style={{
                                  color: "#8ecdf8",
                                  textShadow: "1px 1px 2px black",
                                  marginLeft: "5px",
                                }}
                              >
                                Watch Games Live
                              </Link>
                            </p>

                            <p
                              className="small mb-1"
                              style={{
                                color: "#8ecdf8",
                                textShadow: "1px 1px 2px black",
                              }}
                            >
                              <i className="fas fa-globe"></i>{" "}
                              <Link
                                className="mt-1 text-decoration-underline w3-hover-opacity"
                                style={{
                                  color: "#8ecdf8",
                                  textShadow: "1px 1px 2px black",
                                  marginLeft: "5px",
                                }}
                              >
                                Program Highlights
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div className="tags mt-0 mb-2">
                          <footer className="tags-footer">
                            <Link to="https://www.facebook.com/S.Zain.Asif/">
                              <i className="fab fa-facebook w3-hover-opacity"></i>
                            </Link>
                            <Link to="https://www.instagram.com/zain._.asif/">
                              <i className="fab fa-instagram w3-hover-opacity"></i>
                            </Link>
                            <Link to="https://twitter.com/comeflywithme92">
                              <i className="fab fa-twitter w3-hover-opacity"></i>
                            </Link>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Select Team */}
                <div className="col-sm-12 col-md-4 col-lg-4 text-center w3-padding-small">
                  <div>
                    <div
                      className="card"
                      style={{
                        backgroundImage: `url(${DBWhite})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "black",
                        height: "25rem",
                        border: "1px solid black",
                        filter: "grayscale(100%)", // Apply grayscale to the background
                        position: "relative", // Ensure text layers properly
                      }}
                    >
                      {/* Dark Mask */}
                      <div
                        className="mask"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "25rem",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          zIndex: -4, // Ensure mask is above background but below text
                        }}
                      ></div>

                      {/* Text Content */}
                      <div
                        className="container-fluid text-white"
                        style={{
                          position: "relative", // Ensure this content isn't affected by grayscale
                          zIndex: 4,
                        }}
                      >
                        <div className="card-body w3-padding-24">
                          <h4
                            style={{
                              color: "#8ecdf8",
                              textShadow: "1px 1px 2px black",
                              lineHeight: "1",
                              fontSize: "32px",
                            }}
                          >
                            <b>SELECT</b> <br />{" "}
                            <span
                              style={{ fontSize: "24px", marginTop: "0px" }}
                            >
                              Teams
                            </span>
                          </h4>

                          <div className="container-fluid">
                            <div className="row row-cols-2 g-1 w3-margin-top">
                              <div className="col">
                                <img
                                  src={USALogo}
                                  alt="usa-logo"
                                  style={{ width: "55px", height: "auto" }}
                                />
                                <p
                                  className="small my-1"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-video-camera"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Highlights
                                  </Link>
                                </p>
                                <p
                                  className="small"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-globe mr-2"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Player Profile
                                  </Link>
                                </p>
                              </div>

                              <div className="col">
                                <img
                                  src={Big26}
                                  alt="26-logo"
                                  style={{ width: "55px", height: "auto" }}
                                />
                                <p
                                  className="small my-1"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-video-camera"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Highlights
                                  </Link>
                                </p>
                                <p
                                  className="small"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-globe mr-2"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Player Profile
                                  </Link>
                                </p>
                              </div>

                              <div className="col">
                                <img
                                  src={Gatorade}
                                  alt="tx-logo"
                                  style={{ width: "55px", height: "auto" }}
                                />
                                <p
                                  className="small my-1"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-video-camera"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Highlights
                                  </Link>
                                </p>
                                <p
                                  className="small"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-globe mr-2"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Player Profile
                                  </Link>
                                </p>
                              </div>

                              <div className="col">
                                <img
                                  src={UA}
                                  alt="ua"
                                  style={{ width: "55px", height: "auto" }}
                                />

                                <p
                                  className="small my-1"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-video-camera"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Highlights
                                  </Link>
                                </p>
                                <p
                                  className="small"
                                  style={{
                                    color: "#8ecdf8",
                                    textShadow: "1px 1px 2px black",
                                  }}
                                >
                                  <i className="fas fa-globe mr-2"></i>{" "}
                                  <Link
                                    className="mt-1 text-decoration-underline w3-hover-opacity"
                                    style={{
                                      color: "#8ecdf8",
                                      textShadow: "1px 1px 2px black",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    Player Profile
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default PlayerCards;
