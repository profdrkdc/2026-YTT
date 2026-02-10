import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot, 
  TimelineOppositeContent 
} from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  category: string;
  status: string;
}

interface TimelineViewProps {
  events: TimelineEvent[];
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'red': return 'error';
    case 'yellow': return 'warning';
    case 'blue': return 'primary';
    case 'green': return 'success';
    default: return 'grey';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'termination': return <ErrorIcon />;
    case 'legal': return <GavelIcon />;
    case 'appeal': return <WarningIcon />;
    case 'decision': return <GavelIcon />;
    default: return <InfoIcon />;
  }
};

const TimelineView = ({ events }: TimelineViewProps) => {
  return (
    <Timeline position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {event.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color={getStatusColor(event.status) as any}>
              {getCategoryIcon(event.category)}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'left' }}>
              <Typography variant="h6" component="span">
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.category}
              </Typography>
              <Typography sx={{ mt: 1 }}>{event.description}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineView;
