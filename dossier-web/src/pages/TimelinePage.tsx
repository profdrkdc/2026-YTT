import { Container, Typography, Box } from '@mui/material';
import TimelineView from '../components/TimelineView';
import timelineData from '../data/timeline.json';

const TimelinePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Interactive Timeline
        </Typography>
        <Typography variant="body1" paragraph align="center">
          A chronological overview of the events surrounding the YouTube channel termination and subsequent escalation efforts.
        </Typography>
        <TimelineView events={timelineData} />
      </Box>
    </Container>
  );
};

export default TimelinePage;
