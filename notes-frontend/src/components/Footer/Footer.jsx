import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.toolbar}>
      <IconButton disableRipple color='inherit' aria-label='LinkedIn' href='https://www.linkedin.com/in/marianoluisvargas/' target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon sx={{ fontSize: "60px", transition: "0.1s linear", "&:hover": { color: "#880b62e6" } }} />
      </IconButton>
      <IconButton disableRipple color='inherit' aria-label='GitHub' href='https://github.com/Rayvony/' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon sx={{ fontSize: "60px", transition: "0.1s linear", "&:hover": { color: "#880b62e6" } }} />
      </IconButton>
    </div>
  );
};

export default Footer;
