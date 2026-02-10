import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

describe('App', () => {
  it('renders navbar and footer', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
    // Check for Navbar brand
    expect(screen.getByRole('link', { name: /2026-YTT Dossier/i })).toBeInTheDocument();
    // Check for Footer text
    expect(screen.getByText(/2026-YTT Dossier - Case Analysis & Timeline/i)).toBeInTheDocument();
  });

  it('renders home content by default', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });
});
