import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  const { unmount } = render(<App />);
  expect(screen.getByRole('heading', { name: /deyvison amorim/i })).toBeInTheDocument();
  unmount();
});
