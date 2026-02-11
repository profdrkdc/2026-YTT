import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';

interface MarkdownFetcherProps {
  src: string;
}

const MarkdownFetcher = ({ src }: MarkdownFetcherProps) => {
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
    <>
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <MarkdownRenderer content={content} />
      )}
    </>
  );
};

export default MarkdownFetcher;
