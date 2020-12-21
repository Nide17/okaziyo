import { render, screen } from '@testing-library/react';
import Categories from './Categories';

test('renders learn react link', () => {
  render(<Categories />);
  const linkElement = screen.getByText(/Electronics/);
  expect(linkElement).toBeInTheDocument();
});
