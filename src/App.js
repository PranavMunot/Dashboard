import './App.css';
import { Box, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { poppinsFont, customTheme } from './utils/Theme';
import Application from './Application/Application';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ width: '100vw', height: '100vh', backgroundColor: '#000000', overflow: 'hidden ' }}>
        <Box sx={{ width: '100%', backgroundColor: 'primary.main', textAlign: 'center' }}>
          <Typography variant='h6' fontFamily={poppinsFont} sx={{ fontWeight: 600, fontSize: '14px', color: 'text.primary', py: 0.5 }} >
            Lorem Ipsum is simply dummy text of the printing
          </Typography>
        </Box>

        <Application />

      </Box>
    </ThemeProvider>
  );
}

export default App;
