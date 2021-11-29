import { render, screen } from '@testing-library/react';
import Button from './button';
import { MemoryRouter } from 'react-router-dom';
import generateFakeLink from '../../mock/mock-link';

describe('Component: Button', () => {
  it('should render link correctly', () => {
    const fakeLink = generateFakeLink();
    render(
      <MemoryRouter>
        <Button href={fakeLink.href}>{fakeLink.text}</Button>
      </MemoryRouter>,
    );

    expect(screen.getByText(fakeLink.text)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render button correctly', () => {

    render(<Button>Lorem</Button>);

    expect(screen.getByText('Lorem')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
