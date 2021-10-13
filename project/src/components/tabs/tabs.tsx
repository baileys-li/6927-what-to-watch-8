import { ReactElement, useState, KeyboardEvent } from 'react';

import './tabs.scss';

type TabsType = {
  children: Array<ReactElement>;
  navigation: Array<string>;
};

function Tabs({ children, navigation }: TabsType): JSX.Element {
  const normalizedNav = navigation.map((text) =>
    text.toLowerCase().replace(' ', '_'),
  );

  const [selected, setSelected] = useState(0);

  function navigateByKeys(evt: KeyboardEvent) {
    switch (evt.key) {
      case 'ArrowLeft':
        selected !== 0 && setSelected(selected - 1);
        break;

      case 'ArrowRight':
        selected !== normalizedNav.length - 1 && setSelected(selected + 1);
        break;

      case 'ArrowDown':
        focusSelectedPanel();
        break;
      default:
        break;
    }
  }

  function focusSelectedPanel() {
    const panel: null | HTMLElement = document.querySelector(
      `#${normalizedNav[selected]}_panel`,
    );
    panel && panel.focus();
  }

  return (
    <article className='tabs'>
      <ul role='tablist'>
        {normalizedNav.map((tab, index) => (
          <li key={tab} role='presentation' tabIndex={-1}>
            <button
              type='button'
              id={tab}
              role='tab'
              aria-selected={index === selected}
              onClick={() => setSelected(index)}
              onKeyDown={navigateByKeys}
            >
              {navigation[index]}
            </button>
          </li>
        ))}
      </ul>
      {normalizedNav.map((tab, index) => (
        <section
          key={`${tab}_panel`}
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
/*

(function() {
  // Get relevant elements and collections
  const tabbed = document.querySelector('.tabbed');
  const tablist = tabbed.querySelector('ul');
  const tabs = tablist.querySelectorAll('a');
  const panels = tabbed.querySelectorAll('[id^="section"]');

  // The tab switching function
  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide
    let index = Array.prototype.indexOf.call(tabs, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  }

  // Add the tablist role to the first <ul> in the .tabbed container
  tablist.setAttribute('role', 'tablist');

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {

    tab.setAttribute('id', 'tab' + (i + 1));
    tab.parentNode.setAttribute('role', 'presentation');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
      e.preventDefault();
      let currentTab = tablist.querySelector('[aria-selected]');
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    });

    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    let id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  });

  // Initially activate the first tab and reveal the first tab panel
  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
})(); */
