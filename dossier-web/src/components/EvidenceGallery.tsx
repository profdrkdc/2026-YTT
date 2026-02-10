import { useState, useMemo } from 'react';
import { Box, Typography, Grid, Chip, Stack, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VideoPlayer from './VideoPlayer';
import ImageLightbox from './ImageLightbox';
import CSVTable from './CSVTable';

export interface EvidenceItem {
  id: string;
  title: string;
  category: string;
  type: string;
  path: string;
  description: string;
}

interface EvidenceGalleryProps {
  evidence: EvidenceItem[];
}

const EvidenceGallery = ({ evidence }: EvidenceGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(evidence.map(item => item.category));
    return Array.from(cats);
  }, [evidence]);

  const filteredEvidence = useMemo(() => {
    if (!selectedCategory) return evidence;
    return evidence.filter(item => item.category === selectedCategory);
  }, [evidence, selectedCategory]);

  const renderEvidenceItem = (item: EvidenceItem) => {
    switch (item.type) {
      case 'video':
        return <VideoPlayer src={item.path} title={item.title} description={item.description} />;
      case 'image':
        return <ImageLightbox src={item.path} title={item.title} description={item.description} />;
      case 'csv':
        return <CSVTable src={item.path} title={item.title} description={item.description} />;
      case 'pdf':
      case 'html':
        return (
          <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1, height: '100%' }}>
            <Typography variant="h6" gutterBottom>{item.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{item.description}</Typography>
            <Button 
              variant="outlined" 
              startIcon={<OpenInNewIcon />}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Document
            </Button>
          </Box>
        );
      default:
        return <Typography color="error">Unknown media type: {item.type}</Typography>;
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
        <Chip 
          label="All" 
          onClick={() => setSelectedCategory(null)} 
          color={selectedCategory === null ? 'primary' : 'default'}
          clickable
        />
        {categories.map(cat => (
          <Chip 
            key={cat}
            label={cat} 
            onClick={() => setSelectedCategory(cat)} 
            color={selectedCategory === cat ? 'primary' : 'default'}
            clickable
          />
        ))}
      </Stack>

      <Grid container spacing={3}>
        {filteredEvidence.map(item => (
          <Grid item xs={12} md={item.type === 'csv' ? 12 : 6} key={item.id}>
            {renderEvidenceItem(item)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EvidenceGallery;
