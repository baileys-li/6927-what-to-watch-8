import { render, screen } from '@testing-library/react';
import GenresList from './genres-list';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Genre } from '../../const';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe('Component: Genres', () => {
  it('should render genres list', () => {
    const store = mockStore({
      movies: {
        filter: Genre.Initial, genres: [Genre.Initial, '🧛', '😍', '👾'],
      },
    });

    render(
      <Provider store={store}>
        <GenresList />
      </Provider>,
    );
    expect(screen.getByText(Genre.Initial)).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toBeInstanceOf(Array);
    expect(screen.getByRole('tab', { selected: true })).toContainHTML(Genre.Initial);
    expect(screen.getByText('👾')).toBeInTheDocument();
  });
});
