import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot, 
  TimelineOppositeContent 
} from '@mui/lab';
import { Typography, Paper, Button } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink } from 'react-router-dom';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  category: string;
  status: string;
  evidenceId?: string;
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

import { useTheme, useMediaQuery } from '@mui/material';

const TimelineView = ({ events }: TimelineViewProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Timeline position={isMobile ? 'right' : 'alternate'}>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          {!isMobile && (
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {event.date}
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color={getStatusColor(event.status) as any}>
              {getCategoryIcon(event.category)}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'left' }}>
              {isMobile && (
                <Typography variant="caption" color="text.secondary" display="block">
                  {event.date}
                </Typography>
              )}
              <Typography variant="h6" component="span">
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.category}
              </Typography>
              <Typography sx={{ mt: 1, mb: event.evidenceId ? 2 : 0 }}>{event.description}</Typography>
              {event.evidenceId && (
                <Button 
                  variant="outlined" 
                  size="small" 
                  startIcon={<VisibilityIcon />}
                  component={RouterLink}
                  to={`/evidence?id=${event.evidenceId}`}
                >
                  View Proof
                </Button>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineView;
