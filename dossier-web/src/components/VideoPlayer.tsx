import { Box, Typography, Paper } from '@mui/material';

interface VideoPlayerProps {
  src: string;
  title: string;
  description?: string;
}

const VideoPlayer = ({ src, title, description }: VideoPlayerProps) => {
  return (
    <Paper elevation={2} sx={{ p: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ width: '100%', position: 'relative', pt: '56.25%', bgcolor: 'black', borderRadius: 1, overflow: 'hidden' }}>
        <video
          title={title}
          controls
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Box>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {description}
        </Typography>
      )}
    </Paper>
  );
};

export default VideoPlayer;
