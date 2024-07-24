import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{marginTop: '100px'}}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", lineHeight: 1.75 }}>
            Hi Everyone, I am <span className="purple">Kshitij Patil </span>
            from <span className="purple"> Sunnyvale, CA.</span>
            <br /> I am a passionate <span className="purple">Blockchain Developer</span> with a <span className="purple">Master's degree in Computer Science</span> from the <span className="purple">University at Buffalo, SUNY</span>. I specialize in <span className="purple">Hyperledger Fabric, smart contracts,</span> and <span className="purple"> blockchain infrastructure management, </span>with hands-on experience in developing and deploying <span className="purple"> secure, scalable blockchain solutions.</span>
             { <br /> }
            At Incalus Inc, I architected a <span className="purple">Go SDK</span> for <span className="purple">RESTful API</span> access to <span className="purple">blockchain smart contracts</span>, significantly enhancing transaction handling and security.
             { <br /> }
            
            I led a team to build <span className="purple">secure blockchain solutions</span> for <span className="purple">medical records</span> and <span className="purple">supply chains</span>, leveraging <span className="purple">Kubernetes</span> to boost scalability. With a strong background in DevOps practices like <span className="purple">CI/CD, containerization,</span> and <span className="purple">cloud infrastructure management</span>, I thrive in dynamic environments, driving innovation and operational excellence.
            { <br /> }
            Additionally, I am a <span className="purple">Certified Kubernetes Application Developer</span> and a <span className="purple">Hyperledger Fabric Certified Practitioner</span>.
            { <br /> }
            In my free time, I love playing tennis, working out, and cooking.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "If someone has to do it, why not you?"{" "}
          </p>
          <footer style={{marginBottom: '380px'}} className="blockquote-footer">Kshitij</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
