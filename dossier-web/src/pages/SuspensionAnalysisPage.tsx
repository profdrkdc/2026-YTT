import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MarkdownFetcher from '../components/MarkdownFetcher';

const SuspensionAnalysisPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Analysis of Possible Suspension Grounds
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Examining potential reasons for the channel's suspension, from both the user's and YouTube's perspective,
          along with supporting and counter arguments.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" component="h2">Possible Faults (User Perspective)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MarkdownFetcher src="evidence/2-YouTube-Policy/2.1-Possible-Faults-(me)/1-PossibleFaults_by.me.md" />
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" component="h2">Possible Faults (YouTube's Perspective)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MarkdownFetcher src="evidence/2-YouTube-Policy/2.2-Possible-Faults-(YT)/1-PossibleFaults_by.Google.md" />
            </AccordionDetails>
          </Accordion>
        </Box>

      </Box>
    </Container>
  );
};

export default SuspensionAnalysisPage;
