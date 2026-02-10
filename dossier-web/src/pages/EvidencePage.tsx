import { Container, Typography, Box } from '@mui/material';
import EvidenceGallery from '../components/EvidenceGallery';
import evidenceData from '../data/evidence.json';

const EvidencePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Forensic Evidence Repository
        </Typography>
        <Typography variant="body1" paragraph align="center">
          A collection of videos, data logs, and documentation serving as proof of legitimate activity and account history.
        </Typography>
        <EvidenceGallery evidence={evidenceData} />
      </Box>
    </Container>
  );
};

export default EvidencePage;
