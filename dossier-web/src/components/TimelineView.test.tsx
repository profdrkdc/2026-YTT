import { render, screen } from '@testing-library/react';
import TimelineView from './TimelineView';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const mockData = [
  {
    date: '2025-08-15',
    title: 'Test Termination',
    description: 'Description 1',
    category: 'Termination',
    status: 'Red'
  }
];

describe('TimelineView', () => {
  it('renders timeline items', () => {
    render(
      <ThemeProvider theme={theme}>
        <TimelineView events={mockData} />
      </ThemeProvider>
    );
    
    expect(screen.getByText(/2025-08-15/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Termination/i)).toBeInTheDocument();
    expect(screen.getByText(/Description 1/i)).toBeInTheDocument();
  });
});
