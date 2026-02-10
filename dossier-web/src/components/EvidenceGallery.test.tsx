import { render, screen, fireEvent } from '@testing-library/react';
import EvidenceGallery from './EvidenceGallery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MemoryRouter } from 'react-router-dom';

const theme = createTheme();

const mockEvidence = [
  {
    id: '1',
    title: 'Video Proof',
    category: 'Video',
    type: 'video',
    path: '/evidence/video.webm',
    description: 'A video description'
  },
  {
    id: '2',
    title: 'Image Proof',
    category: 'Screenshot',
    type: 'image',
    path: '/evidence/image.png',
    description: 'An image description'
  }
];

describe('EvidenceGallery', () => {
  it('renders evidence items', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <EvidenceGallery evidence={mockEvidence} />
        </ThemeProvider>
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Video Proof/i)).toBeInTheDocument();
    expect(screen.getByText(/Image Proof/i)).toBeInTheDocument();
  });

  it('filters by category', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <EvidenceGallery evidence={mockEvidence} />
        </ThemeProvider>
      </MemoryRouter>
    );
    
    // Find the 'Screenshot' filter chip/button
    const screenshotFilter = screen.getByRole('button', { name: /screenshot/i });
    fireEvent.click(screenshotFilter);
    
    expect(screen.getByText(/Image Proof/i)).toBeInTheDocument();
    expect(screen.queryByText(/Video Proof/i)).not.toBeInTheDocument();
  });
});
