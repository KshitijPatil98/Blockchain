import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiWorkplace } from "react-icons/si";

function Experience() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
        <h1 className="project-heading" style={{textAlign: 'center'}}>
          <strong className="purple">Experience</strong>
        </h1>
          <VerticalTimeline>
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(153, 50, 204)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(153, 50, 2043)' }}
                date="May 2023 - Present"
                iconStyle={{ background: 'rgb(153, 50, 204)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Incalus Inc.</h3>
                <h4 className="vertical-timeline-element-title">DevOps Engineer</h4>
                <h5 style={{color: 'black'}}>Fremont, CA</h5>
                <h6>
                • Architected a Go SDK for RESTful API access to Blockchain smart contracts, handling 1,000+ transactions/sec.
                </h6>
                <h6>
                • Developed and deployed Go smart contracts on Hyperledger Fabric Network, enhancing security by 15%.</h6>
                <h6>
                • Collaborated with cross-functional teams to implement a Blockchain-Based supply chain solution, delivering
a 18% improvement in transparency and a 39% reduction in operational inefficiencies.
               </h6>
               <h6>
               • Led a team of 5 developers to build a Blockchain solution for securely storing 10,000+ medical records.
               </h6>
                <h6>
                • Incorporated Kubernetes for deploying a Permissioned Blockchain Network, boosting scalability by 28%. </h6>
    
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(153, 50, 204)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(153, 50, 204)' }}
                date="December 2021 - April 2022"
                iconStyle={{ background: 'rgb(153, 50, 204)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Mckinley Rice</h3>
                <h4 className="vertical-timeline-element-title">DevOps Engineer</h4>
                <h5 style={{color: 'black'}}>Pune, India</h5>
                <h6>
                • Built REST and gRPC APIs in Golang for blockchain interaction, reducing transaction times by 25%.
               </h6>
               <h6>
                • Optimized Blockchain transaction throughput by 40% through careful network and protocol enhancements.
 </h6>
 <h6>
                • Deployed a multi-host Docker Swarm network for Hyperledger Fabric, enhancing scalability across 5 hosts.
 </h6>
                <h6>
                • Automated infrastructure provisioning with Terraform, streamlining setup and reducing time by 37%.
                </h6>
              
               
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(153, 50, 204)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(153, 50, 204)' }}
                date="November 2020 - December 2021"
                iconStyle={{ background: 'rgb(153, 50, 204)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Cognizant </h3>
                <h4 className="vertical-timeline-element-title">Platform Engineer </h4>
                <h5 style={{color: 'black'}}>Pune, India</h5>
                <h6>
                • Leveraged Hyperledger Fabric to develop a DLT solution for India’s largest depository, enhancing asset cover
accuracy by 30% and handling 3,000+ transactions per second for $5 million in financial assets.
                </h6>
                <h6>
                • Implemented and deployed over 10 secure and immutable Go chain codes on the Hyperledger Fabric Network.
                </h6>
                <h6>
                • Automated system tasks and optimized workflows using Bash scripts, boosting operational efficiency by 30%. </h6>
                <h6>
                • Engineered CI/CD pipelines with GitLab CI/CD and GitHub Actions, accelerating deployment cycles by 46% .
                </h6>
            </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>

        </Container>
      </Container>
    </section>
  );
}

export default Experience;