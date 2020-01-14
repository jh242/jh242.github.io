import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import ProjectCard from './ProjectCard';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        let projects = [{
            title: "Flex Mirror",
            desc: "Used React with ElectronJS to design a full-featured interface which would appear in a mirror, powered by a Raspberry Pi. Also, integrated smart mirror software with an OpenCV-based facial recognition system. Finally, implemented the IBM Watson API to create an assistant with a trigger word.",
            media: { type: "video", uri: "https://youtu.be/cZ8H2EFwmOU" }
        }]

        this.setState({
            projects: projects
        })
    }

    render() {
        let { projects } = this.state;
        let align = "row-reverse";
        return (
            <Grommet>
                <Box>
                    {projects.map((project) => {
                        align = align === "row-reverse" ? "row" : "row-reverse";
                        return (
                            <ProjectCard align={align} project={project}
                            />
                        );
                    }
                    )}
                </Box>
            </Grommet>
        );
    }
}