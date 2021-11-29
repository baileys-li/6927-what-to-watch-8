import { render, screen } from '@testing-library/react';
import Overview from './overview';
import generateMockMovie from '../../mock/movie-mock';

describe('Component: Movie Overview', () => {
  it('should render correctly', () => {
    const {director, description, starring} = generateMockMovie();
    render(
      <Overview description={description} director={director} starring={starring} />,
    );
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
