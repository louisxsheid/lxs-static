import FadeIn from "react-fade-in";
import WhoAmI from "./WhoAmI";
import Skills from "./Skills";
import Experience from "./Experience";

const AboutMe = () => {
  return (
    <div style={{overflowX: 'hidden', width: '100%', display: "flex"}}>
      <FadeIn>
              <WhoAmI />
        {/* <div className="about-me-container"> */}
          {/* <div className="whoami-skills"> */}
            {/* <div> */}
            {/* </div> */}
            {/* <div>
              <Skills />
            </div> */}
          {/* </div> */}
          {/* <div className="section">
            <Experience />
          </div> */}
        {/* </div> */}
      </FadeIn>
    </div>
  );
};

export default AboutMe;
