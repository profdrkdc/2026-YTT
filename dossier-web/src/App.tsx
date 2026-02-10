import { Box, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={
            <Container sx={{ mt: 4, mb: 4 }} maxWidth="lg">
              <h1>Home</h1>
              <p>Welcome to the 2026-YTT Dossier.</p>
            </Container>
          } />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
