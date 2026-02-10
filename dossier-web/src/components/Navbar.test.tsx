import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.getByText(/2026-YTT Dossier/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /timeline/i })).toBeInTheDocument();
  });
});
