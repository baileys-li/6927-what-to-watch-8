import { render, screen } from '@testing-library/react';
import Breadcrumbs from './breadcrumbs';
import { MemoryRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import generateFakeLink from '../../mock/mock-link';
import { Provider } from 'react-redux';


const mockStore = configureMockStore();
describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {

    const fakeLinks = [generateFakeLink(), generateFakeLink()];

    const store = mockStore({
      breadcrumbs: {
        list: fakeLinks,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Breadcrumbs />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTitle('What to Watch')).toBeInTheDocument();
    expect(screen.getByLabelText('Logotype')).toBeInTheDocument();

    expect(screen.getByText(fakeLinks[0].text)).toBeInTheDocument();
    expect(screen.getByText(fakeLinks[1].text)).toBeInTheDocument();
  });
});
