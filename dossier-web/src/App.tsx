import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TimelinePage from './pages/TimelinePage';
import EvidencePage from './pages/EvidencePage';
import HomePage from './pages/HomePage';

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
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/evidence" element={<EvidencePage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
