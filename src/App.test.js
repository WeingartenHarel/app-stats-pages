import { render, screen } from '@testing-library/react';
import App from './App';

import Default from '@bit/joshk.react-spinners-css.default';

export default <Default color="#be97e8" />

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
