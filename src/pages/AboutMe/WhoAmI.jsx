import React from "react";
import { me, githubIcon, linkedIn } from "./iconindex";

const description =
  "New website under construction!";

const WhoAmI = () => {
  return (
    <div className="whoami-container"style={{overflowX: 'hidden', width: '100%', display: "flex", justifyContent: 'center'}} >
      <div className="whoami-title">Louis Xavier Sheid III</div>
      {/* <div style={{maxWidth: "2rem"}}> */}
      <img className="whoami-pic" src={"https://louisxsheid.s3.us-west-1.amazonaws.com/me.jpg"} width={"300px"}/>
      {/* </div> */}
      {/* <div style={{fontSize: "10rem"}}>?!</div> */}
      <div style={{paddingTop: '0.5rem'}}/>
      <div className="icon-container">
        <div className="emoji">💻</div> <div className="emoji-title" id="soft-dev">Software Engineer</div>
      </div>
      <div className="icon-container">
        <div className="emoji">🌴</div> <div className="emoji-title" id="san-diego">San Diego, California</div>
      </div>
      <div style={{ padding: "0.5rem" }} />
      <div style={{ width: "15rem" }}>{description}</div>
      {/* <div style={{ paddingTop: "1rem" }}>@louisxsheid</div> */}
      <div className="icon-container">
        {/* <div>
          <a
            href="https://www.github.com/louisxsheid"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={githubIcon} />
          </a>
        </div> */}
        <div>
          <a
            href="https://www.linkedin.com/in/louisxsheid/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={linkedIn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;

