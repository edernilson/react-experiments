import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header content', () => {
  render(<App />);
  const linkElement = screen.getByText(/Skillsoft Weight Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
