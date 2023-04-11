import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App component', () => {
  describe('When it is render', () => {
    test('Then the heading h1 should be in the document', () => {
      render(<App />);
      const headingApp = screen.getByRole('heading');
      expect(headingApp).toBeInTheDocument();
    });
  });
});
