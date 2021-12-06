import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator header', () => {
  render(<App />);
  const linkElement = screen.getByText(/CODI-MASTER/i);
  expect(linkElement).toBeInTheDocument();
});
