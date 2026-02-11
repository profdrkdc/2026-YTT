import { Container, Typography, Box } from '@mui/material';
import MarkdownFetcher from '../components/MarkdownFetcher';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Overview of the YouTube Channel Termination Dossier
        </Typography>
        <MarkdownFetcher src="home-summary.md" />
      </Box>
    </Container>
  );
};

export default HomePage;
