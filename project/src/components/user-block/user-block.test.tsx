import { render, screen } from '@testing-library/react';
import UserBlock from './user-block';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import generateMockUser from '../../mock/generate-user';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();

describe('Component: User Block', () => {
  it('should render user block with link to my list', () => {
    const store = mockStore({
      user: generateMockUser(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserBlock />
          <Routes>
            <Route path={AppRoute.MyList} element={<h1>My List</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
    userEvent.click(avatar);

    expect(screen.getByText(/My List/i)).toBeInTheDocument();

  });


  it('should render bot logged block with link to login page', () => {
    const store = mockStore({
      user: {
        status: AuthorizationStatus.NoAuth,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserBlock />
          <Routes>
            <Route path={AppRoute.SignIn} element={<h1>Login</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    userEvent.click(link);

    expect(screen.getByText(/Login/i)).toBeInTheDocument();

  });
});
