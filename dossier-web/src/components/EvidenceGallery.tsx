import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography, Grid, Chip, Stack, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoPlayer from './VideoPlayer';
import ImageLightbox from './ImageLightbox';
import CSVTable from './CSVTable';
import MarkdownFetcher from './MarkdownFetcher';

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

const JSONRenderer = ({ src }: { src: string }) => {
  const [content, setContent] = useState<string>('');
  useEffect(() => {
    fetch(src).then(r => r.text()).then(setContent);
  }, [src]);
  return (
    <Box sx={{ p: 2, bgcolor: '#ffffff', maxHeight: 400, overflow: 'auto', borderTop: '1px solid #eee' }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

const EvidenceGallery = ({ evidence }: EvidenceGalleryProps) => {
  const [searchParams] = useSearchParams();
  const highlightId = searchParams.get('id');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (highlightId && itemRefs.current[highlightId]) {
      // Clear category filter if the highlighted item is in a different category
      const item = evidence.find(e => e.id === highlightId);
      if (item && selectedCategory && item.category !== selectedCategory) {
        setSelectedCategory(null);
      }
      
      // Delay slightly to allow filtering to resolve
      setTimeout(() => {
        itemRefs.current[highlightId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [highlightId, evidence, selectedCategory]);

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
      case 'json':
        return (
          <Box sx={{ height: '100%' }}>
            <Typography variant="h6" gutterBottom>{item.title}</Typography>
            <Accordion variant="outlined" sx={{ bgcolor: '#fdfdfd' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2" color="primary">View Interaction Details</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <JSONRenderer src={item.path} />
              </AccordionDetails>
            </Accordion>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>{item.description}</Typography>
          </Box>
        );
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
                        {item.id === 'verification-requirements' && (
                          <Box sx={{ mt: 2 }}>
                            <Accordion variant="outlined" sx={{ bgcolor: '#fdfdfd' }}>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="subtitle2" color="primary">View Relevant Excerpt</Typography>
                              </AccordionSummary>
                              <AccordionDetails sx={{ p: 0 }}>
                                <MarkdownFetcher src="evidence/2-YouTube-Policy/google-cloud-verification-requirements-excerpt.md" />
                              </AccordionDetails>
                            </Accordion>
                          </Box>
                        )}
                      </Box>
                    );                  case 'markdown':
                    return (
                      <Box sx={{ height: '100%' }}>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Accordion variant="outlined" sx={{ bgcolor: '#fdfdfd' }}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2" color="primary">View Document Content</Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{ p: 0 }}>
                            <MarkdownFetcher src={item.path} />
                          </AccordionDetails>
                        </Accordion>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>{item.description}</Typography>
                      </Box>
                    );
                  default:        return <Typography color="error">Unknown media type: {item.type}</Typography>;
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
          <Grid size={{ xs: 12, sm: item.type === 'csv' ? 12 : 6, md: item.type === 'csv' ? 12 : 6 }} key={item.id}>
            <Box 
              ref={(el: HTMLDivElement | null) => { itemRefs.current[item.id] = el; }}
              sx={{ 
                height: '100%',
                border: item.id === highlightId ? '2px solid #1976d2' : '2px solid transparent',
                backgroundColor: item.id === highlightId ? 'rgba(25, 118, 210, 0.04)' : 'transparent',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                p: item.id === highlightId ? 1 : 0
              }}
            >
              {renderEvidenceItem(item)}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EvidenceGallery;
