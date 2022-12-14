/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Contact.css";

import cv1 from "../../assets/CV1.png";
import cv2 from "../../assets/CV2.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  
  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
        <div
            className="_img"
            style={{
              background: "url(" + cv1 + ")",
              backgroundSize: "115%",
              backgroundPosition: "center",
              backgroundPositionY:"0",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="_content_wrapper">
          </div>
        </div>
      </Container>
    </section>
  );
};
