import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import olx from "../../Assets/Projects/olx.png";
import shadownetwork from "../../Assets/Projects/shadow-network.png";
import meme from "../../Assets/Projects/meme.png";
import foodpanda from "../../Assets/Projects/foodpanda.png";
import canvas from "../../Assets/Projects/canvas.png"
import foods from "../../Assets/Projects/foods.png"

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
              imgPath={shadownetwork}
              isBlog={false}
              title="Shadow Network"
              description="Discover a revolutionary decentralized social media hub, powered by MetaMask for ultimate security. Dive into vibrant communities, forge meaningful connections, and share files effortlessly. Experience the future of social networking, where privacy meets seamless interaction."
              ghLink="https://github.com/merrygold/Free-Voice"
              demoLink="https://shadownetwork-d27ag6atw-merrygold1.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Meme Generator"
              description="An innovative meme generator application that seamlessly integrates with a dynamic memeAPI, enabling users to easily customize meme templates with their own text and promptly download thepersonalized memes to their local devices. A user-friendly tool for creating and sharing humor in a fewsimple clicks."
              ghLink="https://github.com/rabeahmed2002/meme-generator-pt2"
              demoLink="https://meme-generator82.netlify.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canvas}
              isBlog={false}
              title="Canvas Dashboard App"
              description="A GenAI SaaS application that generates interactive visualizations (bar, pie, line charts) fromuser-uploadeddata and natural language prompts"
              ghLink="https://github.com/Canvas-Dash-AI/Canvas-frontend"
              demoLink="https://canvas-website-six.vercel.app/app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foods}
              isBlog={false}
              title="Assarain Oman"
              description="This project utilizes Firebase for user authentication and securely stores user signupcredentials in a Firestore database, ensuring seamless user management and data persistence."
              ghLink="https://github.com/rabeahmed2002/assarain-food-app"
              demoLink="https://assarain-foods.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
