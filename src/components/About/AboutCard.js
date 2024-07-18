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
            <br /> I am a passionate DevOps Engineer with a Master's degree in Computer Science from the University at Buffalo.  
            {/* <br /> */}
            I specialize in Kubernetes, Terraform, cloud infrastructure management, and GoLang, with hands-on experience in configuring and optimizing complex environments.
            {/* <br /> */}
            My expertise includes implementing CI/CD pipelines, automating workflows, and enhancing application performance.
            {/* <br/> */}
            At Incalus Inc, I significantly reduced infrastructure costs and downtime, boosting deployment efficiency and scalability.
            {/* <br/> */}
            With a strong background in programming languages like Go, Python, and Bash, I thrive in dynamic environments, driving innovation and operational excellence.
            {/* <br/> */}
            Additionally, I am a <span className="purple">Certified Kubernetes Application Developer </span>.
            {/* <br /> */}
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
          <footer className="blockquote-footer">Kshitij</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
