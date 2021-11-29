import { render, screen } from '@testing-library/react';
import Tabs from './tabs';
import faker from 'faker';
import userEvent from '@testing-library/user-event';

describe('Component: Tabs', () => {
  it('should render correctly and test functionality', () => {
    const fakeTexts = [faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph()];
    render(
      <Tabs navigation={['👾', '🐻', '🥶']}>
        {fakeTexts.map((text) => <p key={text}>{text}</p>)}
      </Tabs>,
    );

    const foundTabs = screen.getAllByRole('tab');
    expect(foundTabs).toBeInstanceOf(Array);
    expect(foundTabs).toHaveLength(3);

    expect(screen.getByText(fakeTexts[0])).toBeInTheDocument();
    userEvent.click(foundTabs[1]);
    expect(screen.getByText(fakeTexts[1])).toBeInTheDocument();
    userEvent.keyboard('ArrowRight');
    expect(screen.getByText(fakeTexts[2])).toBeInTheDocument();
  });
});
