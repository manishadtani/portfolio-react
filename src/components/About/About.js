  import React from "react";
  import {
    AboutContent,
    AboutDetailsContainer,
    AboutImage,
    AboutImageContainer,
    Resume,
    ResumeLink,
    StyledAbout,
  } from "../styles/About.styled";
  import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
  import { StyledParagraph } from "../styles/Typography.styled";
  import myImage from "../../assets/manishpp.jpg";
  import downloadIcon from "../../assets/icons/download-icon.svg";
  import resume from "../../assets/ManishResume.pdf";

  const About = () => {
    return (
      <StyledAbout id="about">
        <SectionHeading dark="true" mb="3rem">
          <SectionTitle dark="true" number="02">
            About Me
          </SectionTitle>
        </SectionHeading>
        <AboutContent>
          <AboutImageContainer>
            <AboutImage src={myImage} />
          </AboutImageContainer>
          <AboutDetailsContainer>
            <StyledParagraph>
              I’m a MERN Stack Developer who enjoys building full-stack web applications that are clean, fast, and useful. I’ve
              worked with React.js for frontend, and Node.js with Express for backend, along with MongoDB for database
              management. I like writing code that’s simple, readable, and does the job well. Always open to learning new
              things and improving through real project work.
            </StyledParagraph>
            <StyledParagraph>
              I have eagerness to learn something new every day and I love to
              share my knowledge to my fellow students and developers. And I am
              looking forward to talk with you!
            </StyledParagraph>
            <Resume>
              <ResumeLink
                href={resume}
                icon={downloadIcon}
                download="Manish_Adtani_Resume"
              >
                Download Resume
              </ResumeLink>
            </Resume>
          </AboutDetailsContainer>
        </AboutContent>
      </StyledAbout>
    );
  };

  export default About;
