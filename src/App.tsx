import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from '@mui/system'
import { Button, Paper, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box mt={2} pt={5}>
        <Button variant="contained" onClick={() => setCount(count => count + 1)}>Click me</Button>
        <Box component="div" mt={2}  p={5}>
        <Paper >
          <Box p={5}>
          <Typography>Counter: {count}</Typography>
          </Box>
        </Paper>
        </Box>
      
      </Box>
    </div>
  )
}

export default App
