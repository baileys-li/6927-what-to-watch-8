import { render, screen } from '@testing-library/react';
import SmallFilmCard from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import generateMockMovie from '../../mock/movie-mock';
import userEvent from '@testing-library/user-event';

describe('Component: SmallCard', () => {
  it('should render correctly and redirect to movie page', () => {

    const fakeMovie = generateMockMovie();

    render(
      <MemoryRouter initialEntries={['/']} >
        <Routes>
          <Route path='/' element={<SmallFilmCard movie={fakeMovie} />} />
          <Route path={`/films/${fakeMovie.id}`} element={<p>{fakeMovie.description}</p>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toContainHTML(fakeMovie.name);

    userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(fakeMovie.description)).toBeInTheDocument();
  });
});
