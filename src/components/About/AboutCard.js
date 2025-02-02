import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rabe Ahmed </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />A Computer Science graduate from the University of Karachi.
            <br />
            <br />
            With a strong foundation in software development. My journey in technology has been exciting, and I'm eager to share it with you.
            <br />
            <br />

            <h3>👨‍💻 About Me:</h3>
              📚 A BS-Computer Science graduate from the University of Karachi.
              <br />
              💼 Experienced in full-stack software engineering.
              <br />
              🌟 Skills in DevOps and Cloud Computing.
              <br />
              💡 Always in pursuit of the latest technological advancements.
              <br />
            <br />

            <h3>🌐 My Journey:</h3>
            Experienced in web development, I'm on a mission to blend technology with creativity. Exploring DevOps and Cloud Computing, I believe these fields hold the keys to the future of tech.
            <br />
            <br />

            <h3>🚀 My Vision:</h3>
            I thrive on innovation and aim to contribute my skills to groundbreaking tech projects. Eager to collaborate with like-minded individuals and organizations, I bring a keen eye for detail and a thirst for knowledge to every opportunity.
            <br />
            <br />
            Apart from coding, here is what I love to do:
          </p>


          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
