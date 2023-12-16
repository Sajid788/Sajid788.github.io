import { Box, Button, Typography, Zoom } from "@mui/material";
import React, { useState } from "react";
import { details } from "../../details";
import "./Contact.css";

const Contact = () => {
  const [checked1, setChecked1] = useState(false);

  const [scrolled, setScrolled] = useState(0);

  window.addEventListener("scroll", () => {
    setScrolled(document.documentElement.scrollTop);
  });

  if (scrolled >= 2700) {
    setTimeout(() => {
      setChecked1(true);
    }, 500);
  }

  const mailTo = () => {
    window.open("mailto:mdsajidalam8340@gmail.com", "_blank");
  };
  return (
    <Zoom className="contactDiv" in={checked1}>
      <Box
        id="contact"
        sx={{ width: "80%", margin: "10% auto", padding: "0% 10px" }}
      >
        <Typography
          className="contactheading"
          sx={{
            textAlign: "center",
            fontWeight: "600",
            color: "rgb(204,214,246)",
          }}
          variant="h2"
        >
          Get In Touch
        </Typography>
        <Typography
          className="contactSubHeading"
          sx={{
            textAlign: "center",
            width: "70%",
            margin: "auto",
            color: "rgb(124,134,164)",
          }}
          variant="h5"
        >
          

          I'm actively exploring new opportunities, and my inbox is open for any inquiries or messages. 
          Feel free to reach out with questions or just to say hello—I'll do my best to respond promptly!
        </Typography>

        <Button
          className="contactButton"
          onClick={mailTo}
          variant="outlined"
          sx={{
            border: "1px solid black",
            boxShadow: "0 0 10px green",
            color: "white",
            fontSize: "0.9rem",
            margin: "auto",
            padding: "1% 3%",
            display: "block",
            marginTop: "2%",
          }}
        >
          Say Hello
        </Button>
        <Box
          sx={{
            marginTop: "2%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            gap: "15px",
            flexDirection: "column",
          }}
        >
          <a
            id="contact-github"
            className="socialLogo"
            target={"_blank"}
            href={details.githubLink}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            <i className="fa-brands fa-github"></i> Md Sajid Ansari
          </a>
          <a
            id="contact-linkedin"
            className="socialLogo"
            target={"_blank"}
            href={details.linkedInLink}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            <i className="fa-brands fa-linkedin"></i> Md Sajid Ansari
          </a>
          <a
            id="contact-phone"
            className="socialLogo"
            target={"_blank"}
            href={"#"}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            <i className="fa-solid fa-phone"></i> +91-7061541556
          </a>
          <a
            id="contact-email"
            className="socialLogo"
            target={"_blank"}
            href={details.mailLink}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.1rem",
            }}
          >
            <i className="fa-regular fa-envelope"></i>mdsajidalam8340@gmail.com
          </a>
        </Box>
      </Box>
    </Zoom>
  );
};

export default Contact;
