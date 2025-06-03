import { Link } from "react-router-dom";
import StatsBW from "../assets/images/Metrics/StatsBW.png";
import { InView } from "react-intersection-observer";

const PlayerPerformance = () => {
  return (
    <div id="performance">
      <div className="container">
        {/* Performance Section */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`section-container
               ${inView ? "animate-fade-in" : ""}`}
            >
              <h1 className="light-grey mt-5 mb-3">Performance</h1>

              <p className="w3-text-grey mb-1" style={{ fontSize: "14px" }}>
                Performance numbers through Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur qui reiciendis dolor
                quasi aperiam ut repellendus sint in vel vero, cupiditate
                tempore et nam repudiandae dolore, iste aliquid? Voluptatum,
                expedita.{" "}
              </p>
              <br />
              <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                <div className="w3-col m4 mb-3">
                  <h5 className="w3-margin-top w3-text-white">
                    EVALUATION SUMMARY
                  </h5>
                  <hr style={{ width: "180px" }} className="w3-opacity" />
                  <p
                    className="w3-wide fw-bold mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    DEFENSE
                  </p>
                  <p className="w3-text-grey mb-1" style={{ fontSize: "12px" }}>
                    Top-tier hands and ability to muscle the ball into the zone
                    with subtlty- In-game pop-time average of 1.91 in 2023.
                  </p>
                  <div className="w3-white">
                    <div
                      className="w3-dark-grey"
                      style={{ height: "25px", width: "85%" }}
                    ></div>
                  </div>

                  <p
                    className="w3-wide fw-bold mt-3 mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    OFFENSE
                  </p>
                  <p className="w3-text-grey mb-1" style={{ fontSize: "14px" }}>
                    Disciplined hitter, that stands in with intent, swings at
                    strikes and works the count.
                  </p>
                  <div className="w3-white">
                    <div
                      className="w3-dark-grey"
                      style={{ height: "25px", width: "85%" }}
                    ></div>
                  </div>
                  <p
                    className="w3-wide fw-bold mt-3 mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    SPEED
                  </p>
                  <p className="w3-text-grey mb-1" style={{ fontSize: "12px" }}>
                    <b>60-</b> Infield speed: In-game avg 6.9 | Practice avg 6.8{" "}
                    <br />
                    <b>BASE PATH-</b> Good reads: quick, wild & ambitious.
                  </p>
                  <div className="w3-white">
                    <div
                      className="w3-dark-grey"
                      style={{ height: "25px", width: "80%" }}
                    ></div>
                  </div>
                  <p
                    className="w3-wide fw-bold mt-3 mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    DURABILITY
                  </p>
                  <p className="w3-text-grey mb-1" style={{ fontSize: "12px" }}>
                    <b>2023 HIGH SCHOOL:</b> Caught 298 2/3 innings <br />
                    <b>2023 SUMMER BALL:</b> Caught 342 2/3 innings{" "}
                  </p>
                  <div className="w3-white">
                    <div
                      className="w3-dark-grey"
                      style={{ height: "25px", width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="w3-col m1 mb-3"></div>
                <div className="w3-col m7 mb-3">
                  <h5 className="w3-margin-top w3-text-white">
                    PERFORMANCE METRICS
                  </h5>
                  <hr style={{ width: "225px" }} className="w3-opacity" />
                  <img
                    src={StatsBW}
                    alt="stats"
                    className="w-100 rounded shadow-sm"
                  />
                  <p
                    className="text-reset text-center w3-margin-top"
                    style={{ fontSize: "14px" }}
                  >
                    <i>
                      *Stats gathered using{" "}
                      <Link className=" link-light text-decoration-underline">
                        Trackman
                      </Link>{" "}
                      data and actionable insights. <br />
                      **Stats recorded 1/1/2024 at -{" "}
                      <Link className=" link-light text-decoration-underline">
                        Event Link
                      </Link>
                      .
                    </i>
                  </p>
                </div>
              </div>
            </div>
          )}
        </InView>

        {/* Quick Stats Section */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`section-container
            ${inView ? "animate-fade-in" : ""}`}
              id="quick-stats"
            >
              <h1 className="mb-3 mt-3">Quick Stats</h1>
              <h6 className="text-gray fw-light opacity-75 mb-4">
                Quick Stats provide a weekly updated snapshot of four key
                performance metrics. Batting Average, On Base Percentage,
                Pop-Time, and Put-Outs broadly highlighting important aspects of
                play.
              </h6>
              <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
                <div
                  className="w3-quarter w3-section"
                  style={{ fontFamily: "Raleway" }}
                >
                  <span
                    className="w3-xxxlarge fw-bolder"
                    style={{ fontFamily: "monospace", fontWeight: "bolder" }}
                  >
                    1.93
                  </span>
                  <br />
                  Pop-Time
                </div>
                <div
                  className="w3-quarter w3-section"
                  style={{ fontFamily: "Raleway" }}
                >
                  <span
                    className="w3-xxxlarge fw-bold"
                    style={{ fontFamily: "monospace", fontWeight: "bolder" }}
                  >
                    10.4
                  </span>
                  <br />
                  Put-Outs
                </div>
                <div
                  className="w3-quarter w3-section"
                  style={{ fontFamily: "Raleway" }}
                >
                  <span
                    className="w3-xxxlarge fw-bold"
                    style={{ fontFamily: "monospace", fontWeight: "bolder" }}
                  >
                    .723
                  </span>
                  <br />
                  On Base%
                </div>
                <div
                  className="w3-quarter w3-section"
                  style={{ fontFamily: "Raleway" }}
                >
                  <span
                    className="w3-xxxlarge fw-bold"
                    style={{ fontFamily: "monospace", fontWeight: "bolder" }}
                  >
                    .410
                  </span>
                  <br />
                  Batting Avg.
                </div>
              </div>
            </div>
          )}
        </InView>
        {/* END PAGE CONTENT */}

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

export default PlayerPerformance;
