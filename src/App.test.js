import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Addition 1', () => {
  expect(3 + 2).toBe(5);
});

test('Addition 2', () => {
  expect(3 + 2).toBe(6);
});
