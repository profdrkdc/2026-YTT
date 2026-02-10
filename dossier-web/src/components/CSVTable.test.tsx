import { render, screen, waitFor } from '@testing-library/react';
import CSVTable from './CSVTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

describe('CSVTable', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('fetches and renders CSV data', async () => {
    const mockCsv = `Date,Event
2025-06-21,Created
2025-08-15,Terminated`;
    (global.fetch as any).mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(mockCsv),
    });

    render(
      <ThemeProvider theme={theme}>
        <CSVTable src="/evidence/test.csv" title="Test Data" />
      </ThemeProvider>
    );

    // Wait for the data to load and render
    expect(await screen.findByText(/Test Data/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('2025-06-21')).toBeInTheDocument();
      expect(screen.getByText('Created')).toBeInTheDocument();
      expect(screen.getByText('2025-08-15')).toBeInTheDocument();
    });
  });

  it('displays error message on fetch failure', async () => {
    (global.fetch as any).mockResolvedValue({
      ok: false,
      statusText: 'Not Found'
    });

    render(
      <ThemeProvider theme={theme}>
        <CSVTable src="/evidence/fail.csv" title="Fail Data" />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Failed to load CSV data/i)).toBeInTheDocument();
    });
  });
});
