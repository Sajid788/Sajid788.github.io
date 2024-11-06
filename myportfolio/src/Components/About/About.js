import { Box, Button, Slide, Typography, Zoom, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./About.css";
import sajid from "../../media/sajid.jpg"
import LinearDeterminate from "../MiniComponent/ProgressComp";
import Sajid_Ansari from "../../media/Sajid_Ansari.pdf";

const About = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  window.addEventListener("scroll", () => {
    setScrolled(document.documentElement.scrollTop);
  });

  if (scrolled >= 56) {
    setTimeout(() => {
      setChecked1(true);
    }, 600);
    setTimeout(() => {
      setChecked2(true);
    }, 800);
  }

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1vrdQ8hWnfHSkcvuswpuEd6TIA9a2IF97/view?usp=sharing",//resume link
      "_blank"
    );
  };

  return (
    <Grid
      container
      id="about"
      className="about section"
      sx={{ width: "80%", margin: "10% auto", padding: "0% 10px" }}
      spacing={2}
    >
      <Grid item xs={12} sm={6} md={6} sx={{ margin: "auto" }}>
        <Box
          sx={{ borderTop: "2px solid rgb(35, 53, 84)", position: "relative" }}
        >
          <Typography
            className="aboutHeading"
            variant="h4"
            sx={{
              backgroundColor: "rgb(11, 24, 47)",
              position: "absolute",
              top: "-25px",
              padding: "0% 5% 0% 0%",
              fontFamily: "Poppins",
              color: "white",
            }}
          >
            About Me
          </Typography>
          <Typography
            id="user-detail-intro"
            className="aboutText"
            sx={{
              marginTop: "8%",
              color: "rgb(136,146,176)",
              fontFamily: "Poppins",
            }}
          >
            A motivated and thrive on bringing digital creations to life. The vast possibilities of the internet have always fascinated me, 
            and my passion is centered around crafting websites that not only impress visually but also bring joy to users.
            <br />
            <br />
            Since graduating I ventured into{" "}
            <span style={{ color: "white" }}>Web Development</span> working with tech stacks like html, css,JavaScript,react, Node.js, Express.js, 
            and MongoDB on diverse projects. Currently, my focus is on developing products that are accessible and inclusive. 
            As an enthusiastic Full Stack Developer, I am a perpetual learner,
            specializing in front-end Web Development with a keen eye for detail and a high adaptability to 
            emerging technologies. Let's collaborate to create exceptional online experiences!
          </Typography>
          <Box
            id="resumeBtn"
            onClick={openResume}
            marginTop="1.5rem"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outlined"
               href={Sajid_Ansari}//resume
              download="Sajid-Ansari-Resume"
              id="resume-button-2"
              sx={{
                border: "1px solid #008F11",
                color: "white",
                fontSize: "0.8rem",
                fontFamily: "Poppins",
                margin: "auto",
              }}
            >
              Resume
            </Button>
            <LinearDeterminate color={"transparent"} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
        <Box
          className="imageContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="home-img"
            style={{ display: "block", margin: "auto", borderRadius: "5px" }}
            width={"60%"}
             src={sajid} //image of portfolio
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
