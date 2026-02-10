import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

describe('Footer', () => {
  it('renders footer text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    expect(screen.getByText(/2026-YTT Dossier - Case Analysis & Timeline/i)).toBeInTheDocument();
  });

  it('renders current year', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`Copyright © ${currentYear}`))).toBeInTheDocument();
  });
});
