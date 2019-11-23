import React, { Component } from 'react'
import { Grommet, Stack, Box, Heading, Text, Anchor } from 'grommet'
import { LinkedinOption, Github, DocumentText } from 'grommet-icons';
import Particles from 'react-particles-js';
import resume from './assets/JackHuResume.pdf';

class App extends Component {
  render() {
    const theme = {

      global: {
        font: {
          family: 'Poppins',
          size: '18px',
          height: '20px',
          color: 'white'
        }
      }

    }

    return (
      <Grommet theme={theme}>
        <Box overflow="hidden">
          <Stack anchor="top-left">

            <Box height='100vh' align='center' justify='center' background="#0f2026">
              <Particles params={{
                "particles": {
                  "number": {
                    "value": 50
                  },
                  "size": {
                    "value": 3
                  }
                },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    }
                  }
                }
              }} width="100vw" height="100vh" />
            </Box>
            <Box>
              <Heading color="white" size="100px" margin={{ left: "medium", top: "medium", bottom: "0px" }}>Jack Hu</Heading>
              <Text color="white" margin={{ left: "medium" }}>This page is a work in progress. Scroll down for some important links!</Text>
            </Box>
          </Stack>
          <Box elevation="large" direction="row" justify="center" gap="large" pad="medium">
            <Anchor href="https://www.linkedin.com/in/jackhu242/" target="_blank">
              <LinkedinOption size="xlarge" />
            </Anchor>
            <Anchor href="https://www.github.com/jh242/" target="_blank">
              <Github size="xlarge" />
            </Anchor>
            <Anchor href={resume} target="_blank">
              <DocumentText size="xlarge" />
            </Anchor>
          </Box>
        </Box>
      </Grommet>
    )
  }
}

export default App;
