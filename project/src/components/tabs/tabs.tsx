import { ReactElement, useState, KeyboardEvent, useRef } from 'react';
import { normalizeTextToID } from '../../utils/utils';

import style from './tabs.module.scss';

type TabsType = {
  children: Array<ReactElement>;
  navigation: Array<string>;
  className?: string;
};

function Tabs({ children, navigation, className }: TabsType): JSX.Element {
  const normalizedNavItems = navigation.map(normalizeTextToID);
  const selectedPanel = useRef<HTMLElement | null>(null);

  const navigationRef = useRef<HTMLUListElement | null>(null);
  const [selected, setSelected] = useState(0);

  function handleTabKeydown(evt: KeyboardEvent) {
    switch (evt.key) {
      case 'ArrowLeft':
        if (selected !== 0) {
          const target: number = selected - 1;
          switchTab(target);
        }
        break;

      case 'ArrowRight':
        if (selected !== normalizedNavItems.length - 1) {
          const target: number = selected + 1;
          switchTab(target);
        }
        break;

      case 'ArrowDown':
        selectedPanel?.current?.focus();
        break;
      default:
        break;
    }
  }

  function switchTab(target: number) {
    setSelected(target);

    (
      navigationRef.current?.children[target].children[0] as HTMLElement
    ).focus();
  }

  return (
    <article className={className}>
      <ul role='tablist' ref={navigationRef} className={style.nav}>
        {normalizedNavItems.map((tab, index) => (
          <li key={tab} role='presentation'>
            <button
              type='button'
              id={tab}
              role='tab'
              aria-selected={index === selected}
              onClick={() => setSelected(index)}
              onKeyDown={handleTabKeydown}
              tabIndex={index === selected ? 0 : -1}
              className={style.link}
            >
              {navigation[index]}
            </button>
          </li>
        ))}
      </ul>
      {normalizedNavItems.map((tab, index) => (
        <section
          key={`${tab}_panel`}
          ref={index === selected ? selectedPanel : null}
          id={`${tab}_panel`}
          role='tabpanel'
          tabIndex={-1}
          aria-labelledby={tab}
          hidden={index !== selected}
        >
          {children[index]}
        </section>
      ))}
    </article>
  );
}

export default Tabs;
