import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

import mongodbLogo from './assets/mongodb-logo.png';
import expressLogo from './assets/express-logo.png';
import reactLogo from './assets/react-logo.png';
import nodeLogo from './assets/node-logo.png';
import geminyLogo from './assets/geminy-logo.png';
import bcryptLogo from './assets/bcrypt-logo.png';
import axiosLogo from './assets/axios-logo.png';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url('https://unbounce.com/photos/Gradient-Background.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minWidth: '80vw',
    minHeight: '100vh',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    position: 'relative',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    zIndex: -1,
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  techGrid: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    padding: '1.5rem', 
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px', 
  },
  githubButton: {
    marginTop: '20px',
    textAlign: 'center',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h3" gutterBottom align="center" color="inherit">
            About This Chatbot
          </Typography>
          <Typography variant="h6" align="center" color="inherit" paragraph>
            This chatbot is a mini-project developed in Semester 5, integrating modern web technologies and AI to enhance user interaction.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Technologies Used
                  </Typography>
                  <Typography variant="body1" paragraph>
                    This chatbot was developed using the MERN stack and other modern technologies to provide a scalable, efficient, and user-friendly application:
                  </Typography>
                  <Box className={classes.techGrid} mt={2}>
                    <img src={mongodbLogo} alt="MongoDB" className={classes.logo} />
                    <Typography variant="body1">
                      <strong>MongoDB</strong> - A NoSQL database used for storing chatbot data, user interactions, and session information in a flexible, JSON-like structure.
                    </Typography>
                  </Box>
                  <Box className={classes.techGrid} mt={2}>
                    <img src={expressLogo} alt="Express" className={classes.logo} />
                    <Typography variant="body1">
                      <strong>Express.js</strong> - A fast and minimal web framework for Node.js, handling server-side logic and API routes.
                    </Typography>
                  </Box>
                  <Box className={classes.techGrid} mt={2}>
                    <img src={reactLogo} alt="React" className={classes.logo} />
                    <Typography variant="body1">
                      <strong>React.js</strong> - A JavaScript library for building dynamic user interfaces, enabling fast rendering and an interactive experience.
                    </Typography>
                  </Box>
                  <Box className={classes.techGrid} mt={2}>
                    <img src={nodeLogo} alt="Node.js" className={classes.logo} />
                    <Typography variant="body1">
                      <strong>Node.js</strong> - JavaScript runtime environment for executing backend code and managing server-side tasks efficiently.
                    </Typography>
                  </Box>
                  <Box className={classes.techGrid} mt={2}>
                    <img src={geminyLogo} alt="Geminy API" className={classes.logo} />
                    <Typography variant="body1">
                      <strong>Geminy API</strong> - An AI-powered API for processing conversations and generating responses based on machine learning models.
                    </Typography>
                  </Box>
                  <Box className={classes.techGrid} mt={2}>
                    <img src={axiosLogo} alt="Axios" className={classes.logo} />
                    <Typography variant="body1">
                      <strong>Axios</strong> - A promise-based HTTP client used to fetch data from APIs and interact with backend services asynchronously.
                    </Typography>
                  </Box>
                  <Box className={classes.techGrid} mt={2}>
                    <img src={bcryptLogo} alt="Bcrypt" className={classes.logo} />
                    <Typography variant="body1">
                      <strong>Bcrypt</strong> - A library used for hashing passwords, ensuring secure user authentication.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    AI and User Experience
                  </Typography>
                  <Typography variant="body1" paragraph>
                    The chatbot leverages AI to provide intelligent and adaptive user interactions. By analyzing user input and providing relevant responses, it makes the conversation intuitive and efficient.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    The interface is designed using Material-UI, which ensures a modern, responsive, and accessible layout across different devices.
                  </Typography>
                  <Typography variant="body1">
                    Material-UI components have been customized to match the overall theme, ensuring a seamless user experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box my={4} textAlign="center">
            <Typography variant="h6" color="inherit">
              Developed by Ashish - Semester 5 Mini-Project
            </Typography>
            <Box className={classes.githubButton}>
              <IconButton
                color="inherit"
                href="https://github.com/Anticoder03/" 
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2" color="inherit">
                Check the project on GitHub
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default About;
