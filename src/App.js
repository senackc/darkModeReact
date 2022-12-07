import { useState } from 'react';
import './App.css';
import ButtonAppBar from './AppBar';
import SimpleCard from './Card';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { Paper } from '@mui/material';
import {Button} from '@mui/material';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode?'dark':'light'

    },

  })



  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height: "250vh"}}>
      <div className="App">
       <Button onClick={()=>setDarkMode(!darkMode)}>Dark Mode</Button>

        <ButtonAppBar check={darkMode} change= {()=>setDarkMode(!darkMode)}>
      <h1>Dark Mode</h1>
      </ButtonAppBar>
        <SimpleCard></SimpleCard>

    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
