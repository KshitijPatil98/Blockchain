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
                contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="May 2023 - Present"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Incalus Inc.</h3>
                <h4 className="vertical-timeline-element-title">DevOps Engineer</h4>
                <h5 style={{color: 'darkblue'}}>Fremont, CA</h5>
                <h6>
                • Configured a Kubernetes cluster from scratch using Kubeadm, including setting up the control plane and
worker nodes, resulting in a 30% reduction in infrastructure costs.
                </h6>
                <h6>
                • Leveraged Terraform- to provision new environments on AWS (VPCs, subnets, NAT Gateways, ELB, EC2 etc.)
in less than 10 minutes, resulting in 27% increase in deployment frequency. </h6>
                <h6>
                • Implemented Nginx Ingress Controller in Kubernetes, refining routing strategies and delivering a substantial
20% boost in application scalability for improved performance.
 </h6>
                <h6>
                • Spearheaded ArgoCD-driven GitOps workflows, optimizing deployment efficiency by 50%. </h6>
                <h6>
              • Integrated Prometheus and Grafana for monitoring and alerting, reducing downtime by 60%. </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="December 2021 - April 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Mckinley Rice</h3>
                <h4 className="vertical-timeline-element-title">DevOps Engineer</h4>
                <h5 style={{color: 'darkblue'}}>Pune, India</h5>
                <h6>
                • Led optimization of production deployments, achieved a 35% speed increase, maintained 99.9% application
uptime using Kubernetes, and contributed to the team’s success.
                </h6>
                <h6>
                • Engineered CI/CD pipelines with GitLab CI/CD, accelerating deployment cycles by 46% . </h6>
                <h6>
                • Achieved a 63% reduction in Mean Time to Recovery (MTTR) by monitoring system logs and utilizing Python
scripts to identify and resolve potential issues preemptively, preventing outages.
 </h6>
                <h6>
                • Automated system tasks and optimized workflows using Bash scripts, boosting operational efficiency by 30%. </h6>
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="November 2020 - December 2021"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Cognizant </h3>
                <h4 className="vertical-timeline-element-title">Platform Engineer </h4>
                <h5 style={{color: 'darkblue'}}>Pune, India</h5>
                <h6>
                • Reduced deployment time of new microservices by 45% through the implementation of testing and deployment
processes using Jenkins, Git, SonarQube, AWS ECR, AWS ECS, and Docker.
                </h6>
                <h6>
                • Devised automation tools using Terraform, and AWS CloudFormation, reducing manual effort by 43%.
                </h6>
                <h6>
                • Employed Ansible for streamlined software provisioning, leading to a 40% reduction in deployment time.
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