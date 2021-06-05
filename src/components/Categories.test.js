import { render, screen } from '@testing-library/react';
import Categories from './Categories';

it('renders categories component', () => {
  render(<Categories />);
  
  const linkElement = screen.getByText(/electronics/i);
  expect(linkElement).toBeInTheDocument();
});
