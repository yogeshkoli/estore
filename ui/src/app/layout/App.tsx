import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light'; 

  const theme = createTheme({
    palette: {
     mode: paletteType,
     background: {
      default: (paletteType === 'light' ? "#eaeaea" : '#121212')
     }
    },
  }); 
 
  function handleThemeChange(){
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
       <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
       <Container sx={{mt: '24px'}} >
          <Outlet/>
       </Container>
    </ThemeProvider>
  );
}

export default App;
