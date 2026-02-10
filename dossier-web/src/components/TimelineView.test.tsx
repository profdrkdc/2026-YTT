import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TimelineView from './TimelineView';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const mockData = [
  {
    date: '2025-08-15',
    title: 'Test Termination',
    description: 'Description 1',
    category: 'Termination',
    status: 'Red',
    evidenceId: 'termination-email'
  }
];

describe('TimelineView', () => {
  it('renders timeline items and View Proof button', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <TimelineView events={mockData} />
        </ThemeProvider>
      </MemoryRouter>
    );
    
    expect(screen.getByText(/2025-08-15/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Termination/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view proof/i })).toHaveAttribute('href', '/evidence?id=termination-email');
  });
});
