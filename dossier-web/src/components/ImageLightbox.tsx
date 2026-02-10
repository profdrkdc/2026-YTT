import { useState } from 'react';
import { Box, Typography, Paper, Dialog, DialogContent, DialogTitle, IconButton, ButtonBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ImageLightboxProps {
  src: string;
  title: string;
  description?: string;
}

const ImageLightbox = ({ src, title, description }: ImageLightboxProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ButtonBase
        onClick={handleOpen}
        sx={{ width: '100%', borderRadius: 1, overflow: 'hidden', border: '1px solid #ddd' }}
        aria-label={`Open ${title} in full screen`}
      >
        <Box
          component="img"
          src={src}
          alt={title}
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: 300,
            objectFit: 'contain',
            bgcolor: '#f0f0f0'
          }}
        />
      </ButtonBase>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {description}
        </Typography>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {title}
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ bgcolor: '#1a1a1a', textAlign: 'center', p: 0 }}>
          <Box
            component="img"
            src={src}
            alt={title}
            sx={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '80vh',
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
          />
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default ImageLightbox;
