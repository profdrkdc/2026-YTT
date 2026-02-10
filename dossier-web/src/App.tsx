import { Box, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }} maxWidth="lg">
        <Routes>
          <Route path="/" element={<div><h1>Home</h1><p>Welcome to the 2026-YTT Dossier.</p></div>} />
          <Route path="/timeline" element={<div><h1>Timeline</h1><p>Interactive timeline coming soon.</p></div>} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;