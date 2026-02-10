import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box, Typography } from '@mui/material';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <Box sx={{ '& table': { borderCollapse: 'collapse', width: '100%', mb: 2 }, '& th, & td': { border: '1px solid #ddd', p: 1 } }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <Typography variant="h4" gutterBottom>{children}</Typography>,
          h2: ({ children }) => <Typography variant="h5" gutterBottom>{children}</Typography>,
          h3: ({ children }) => <Typography variant="h6" gutterBottom>{children}</Typography>,
          p: ({ children }) => <Typography variant="body1" paragraph>{children}</Typography>,
          li: ({ children }) => <Typography component="li" variant="body1">{children}</Typography>,
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
