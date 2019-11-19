import React, { Component } from 'react';
import { Grommet, Box, Text } from 'grommet';

class App extends Component {

  render() {

    const theme = {

    }

    return (
      <Grommet theme={theme}>
        <Box align="center" justify="center" height="100vh">
          <Text>This page isn't ready yet! Check back soon.</Text>
        </Box>
      </Grommet>
    );
  }
}

export default App;
