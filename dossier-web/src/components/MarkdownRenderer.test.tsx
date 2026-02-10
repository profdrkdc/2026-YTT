import { render, screen } from '@testing-library/react';
import MarkdownRenderer from './MarkdownRenderer';

describe('MarkdownRenderer', () => {
  it('renders markdown text correctly', () => {
    const markdown = `# Hello World
This is **bold** text.`;
    render(<MarkdownRenderer content={markdown} />);
    
    expect(screen.getByRole('heading', { name: /hello world/i })).toBeInTheDocument();
    expect(screen.getByText(/this is/i)).toBeInTheDocument();
    expect(screen.getByText(/bold/i).tagName).toBe('STRONG');
  });

  it('renders GFM (GitHub Flavored Markdown) such as tables', () => {
    const markdown = `| Col 1 | Col 2 |
|-------|-------|
| Val 1 | Val 2 |`;
    render(<MarkdownRenderer content={markdown} />);
    
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText(/val 1/i)).toBeInTheDocument();
  });
});