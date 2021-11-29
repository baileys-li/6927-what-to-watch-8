import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { MemoryRouter } from 'react-router-dom';

describe('Component: Footer', () => {
  it('should render footer', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText(/What to watch Ltd/i)).toBeInTheDocument();
  });
});
