import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer';

describe('VideoPlayer', () => {
  it('renders a video element with the correct source', () => {
    const src = '/evidence/test.webm';
    render(<VideoPlayer src={src} title="Test Video" />);
    
    const videoElement = screen.getByTitle('Test Video') as HTMLVideoElement;
    expect(videoElement).toBeInTheDocument();
    expect(videoElement.querySelector('source')).toHaveAttribute('src', src);
  });

  it('displays the title', () => {
    render(<VideoPlayer src="/test.webm" title="Specific Evidence" />);
    expect(screen.getByText(/Specific Evidence/i)).toBeInTheDocument();
  });
});
