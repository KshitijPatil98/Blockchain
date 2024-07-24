import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FabriQuik"
              description="Developed an intuitive CLI tool using Golang that simplifies the setup of permissioned blockchain networks. This tool automates the generation of all necessary scripts for deploying a Hyperledger Fabric network, including Docker configurations and other setup components. It streamlines the deployment process, reducing manual configuration efforts."
              ghLink="https://github.com/KshitijPatil98/fabriquik"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blockchain Network Deployment on Kubernetes"
              description="Deployed a robust Hyperledger Fabric Permissioned Blockchain Network on a Kubernetes cluster, leveraging Kubernetes resources such as Deployments, Jobs, and ConfigMaps for configuration management. Integrated Secrets for secure credential handling and Persistent Volumes with NFS for reliable data storage."
              ghLink="https://github.com/KshitijPatil98/Hyperledger-Fabric-K8"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Electronic Data Interchange(EDI) Workflow Enhancement"
              description="Led the development of a Blockchain-based Electronic Data Interchange (EDI) solution, enabling real-time data exchange and document synchronization across the supply chain. This solution integrated blockchain technology for immutable records and smart contracts, improving data accuracy and reducing reconciliation efforts."
              ghLink="https://github.com/KshitijPatil98/EDI_Blockchain"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="End-to-End Jenkins CI Pipeline with SonarQube Integration"
              description="Built a Jenkins CI pipeline with stages for cloning, installing dependencies, linting, unit testing, generating
              coverage reports, SonarQube analysis, and pushing Docker images to Docker Hub with commit ID tags"
              ghLink="https://github.com/KshitijPatil98/Jenkins_CI_Project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Infrastructure Management with Terraform"
              description="Implemented Terraform projects including AWS EC2 remote provisioning, DynamoDB creation, S3 remote
              backend setup, secret management, and Terraform Workspaces for environment isolation."
              ghLink="https://github.com/KshitijPatil98/Terraform_Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Decentralized Pharmaceutical Supply Chain Management"
              description="Led the design, development, and implementation of a pioneering pharmaceutical supply chain solution using blockchain, Ethereum, and Solidity smart contracts."
              // ghLink="https://github.com/shalmalee98/PharmaSupplyChain-SmartContract"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
