import React, { Component } from "react";
import { Box, Image, Text, Heading } from "grommet";
import ReactPlayer from 'react-player';


export default class ProjectCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            width: 0,
            height: 0,
        };
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
        let { align, project, width } = this.state;
        let playerwidth = 640;
        if (width < 1000) {
            align = "column";
            playerwidth = width - 20;
        }

        let playerheight = (playerwidth * 3) / 4;

        return (
            <Box elevation={align == "row" ? "medium" : "none"} align="center" justify="center" direction={align} background="#0f2026" pad="large">
                <div>
                    {
                        project.media.type === "video" ?
                            <ReactPlayer width={playerwidth} height={playerheight} url={project.media.uri} controls volume={1} muted playing />
                            :
                            <Image src={project.media.uri} />
                    }
                </div>
                <Box pad="medium">
                    <Heading>{project.title}</Heading>
                    <Text>{project.desc}</Text>
                </Box>
            </Box>
        );
    }
}