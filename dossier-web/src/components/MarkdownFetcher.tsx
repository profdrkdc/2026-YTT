import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';

interface MarkdownFetcherProps {
  src: string;
  title: string;
  description: string;
}

const MarkdownFetcher = ({ src, title, description }: MarkdownFetcherProps) => {
  const [content, setContent] = useState<string>('Loading markdown content...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(src)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => setContent(text))
      .catch(e => {
        console.error("Failed to fetch markdown:", e);
        setError(`Failed to load markdown content: ${e.message}`);
        setContent(''); // Clear loading message on error
      });
  }, [src]);

  return (
    <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1, height: '100%', overflowY: 'auto' }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <MarkdownRenderer content={content} />
      )}
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>{description}</Typography>
    </Box>
  );
};

export default MarkdownFetcher;
