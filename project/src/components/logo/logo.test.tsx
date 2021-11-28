import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import userEvent from '@testing-library/user-event';
describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );

    expect(screen.getByTitle('What to Watch')).toBeInTheDocument();
    expect(screen.getByLabelText('Logotype')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', () => {
    render(
      <MemoryRouter initialEntries={['/fake']}>
        <Logo />
        <Routes>
          <Route path={AppRoute.Main} element={<h1>Main Page</h1>} />
          <Route path={'/fake'}  element={<h1>Not main page</h1>} />
        </Routes>
      </MemoryRouter>,
    );

    const logoLink = screen.getByRole('link');
    expect(logoLink).toBeInTheDocument();
    userEvent.click(logoLink);
    expect(screen.getByTitle('What to Watch')).toBeInTheDocument();
    expect(screen.getByLabelText('Logotype')).toBeInTheDocument();
  });
});
