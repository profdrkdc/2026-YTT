import { render, screen, fireEvent } from '@testing-library/react';
import ImageLightbox from './ImageLightbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

describe('ImageLightbox', () => {
  const props = {
    src: '/evidence/test.png',
    title: 'Test Screenshot',
    description: 'A description'
  };

  it('renders the thumbnail image', () => {
    render(
      <ThemeProvider theme={theme}>
        <ImageLightbox {...props} />
      </ThemeProvider>
    );
    const img = screen.getByAltText(props.title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.src);
  });

  it('opens the dialog when clicked', async () => {
    render(
      <ThemeProvider theme={theme}>
        <ImageLightbox {...props} />
      </ThemeProvider>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getAllByAltText(props.title).length).toBeGreaterThan(1); // One in thumb, one in dialog
  });
});
