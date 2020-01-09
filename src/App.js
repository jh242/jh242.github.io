import React, { Component } from 'react'
import { Grommet, Stack, Box, Heading, Text, Anchor } from 'grommet'
import { LinkedinOption, Github, DocumentText } from 'grommet-icons';
import Particles from 'react-particles-js';
import resume from './assets/JackHuResume.pdf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const theme = {

      global: {
        font: {
          family: 'Assistant',
          size: '18px',
          height: '20px',
          color: 'white'
        }
      }

    }

    const particlesParams = {
      "particles": {
        "number": {
          "value": ((this.state.width * this.state.height) / 13824)
        },
        "size": {
          "value": 0
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
    }

    return (
      <Grommet theme={theme}>
        <Box overflow="hidden">
          <Stack anchor="top-left">

            <Box height='100vh' align='center' justify='center' background="#0f2026">
              <Particles params={particlesParams} width="100vw" height="100vh" />
            </Box>
            <Box>
              <Heading color="white" size="100px" margin={{ left: "medium", top: "medium", bottom: "0px" }}>Jack Hu</Heading>
              <Text color="white" margin={{ left: "medium", right: "medium" }}>Professional. Fun-loving. At the same time.</Text>
            </Box>
          </Stack>
          <Box elevation="medium" direction="row" justify="center" gap="large" pad="medium">
            <Anchor href="https://www.linkedin.com/in/jackhu242/" target="_blank">
              <LinkedinOption size="large" />
            </Anchor>
            <Anchor href="https://www.github.com/jh242/" target="_blank">
              <Github size="large" />
            </Anchor>
            <Anchor href={resume} target="_blank">
              <DocumentText size="large" />
            </Anchor>
          </Box>
          <Box margin={{ left: "xlarge", right: "xlarge" }}>
            <Heading>A bit more about me.</Heading>
            <Box>
              <Text margin={{ bottom: "xlarge" }}>
                Hi! Thanks for checking out my personal page.
                I'm currently a student studying Software Engineering at the University of Waterloo.
                In my spare time, I like to cook, play the piano, or play a few rounds of whatever game I'm into at the time.
                I'm interested in machine learning and data analysis, along with full stack web/mobile development.
                Check out what I've been working on at my GitHub! This page is still a work in progress.
            </Text>
            </Box>
          </Box>
        </Box>
      </Grommet>
    )
  }
}

export default App;
