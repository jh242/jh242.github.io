import React, { Component } from 'react'
import { Grommet, Box, Text, Image } from 'grommet'
import { back } from './assets/back.png'

class App extends Component {
  render () {
    const theme = {

    }

    return (
      <Grommet theme={theme}>
        <Box height='100vh' align='center' justify='center'>
          <Text>This site is under construction. Check back soon!</Text>
        </Box>
      </Grommet>
    )
  }
}

export default App
