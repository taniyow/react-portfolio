/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Dashboard Customer Behavior', 
      description: `This analysis is based on a dataset of people interested in buying
       a car and whether or not they have bought it. The data is used to train a model 
       to help predict behavior of future customers.`,
      alter: 'Dashboard Customer Behavior',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Dashboard Media Ads', 
      description: `Data Analysis of Social Media Ads on whether users
       have purchased a product after clicking on the advertisements shown to them.`,
      alter: 'Dashboard Media Ads.',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Dashboard Startups', 
      description: `Analysis of the relationship between profit, R&D spending,
       administration spending, and marketing spending of 50 start-ups in New York, 
       California and Florida.`,
      alter: 'Dashboard Startups',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Country Clusters', 
      description: `In this model the method KMeans is used to cluster all countries of the 
      world by its latitude and longitude`,
      alter: 'Country Clusters',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'Settlement Growth', 
      description: `An analysis and prediction of the population size of Israeli Settlements, assuming 
      the regression is (more or less) linear.`,
      alter: 'Settlement Growth',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
