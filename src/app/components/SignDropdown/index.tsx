import React from 'react';
import classNames from 'classnames';

import { SIGNS, SignInfo } from 'app/constants/signs';

import style from './style.css';

const DropdownOption = ({ name, start, end, element, planet, quality }: SignInfo): JSX.Element => {
  console.log({ name, start, end, element, planet, quality });
  return (
    <li>
      <span>{name.toUpperCase()}</span>
      <span>(date)</span>
    </li>
  );
};

export const SignDropdown = (): JSX.Element => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => setIsActive(!isActive);

  React.useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (dropdownRef.current === null) {
        // TODO: re-enable strictNullChecks in tsconfig and
        // figure out why this has ts error, refactor to same line
        return;
      } else if (!dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  console.log(SIGNS);

  return (
    <div className={style.menuContainer}>
      <button className={style.menuTrigger} onClick={onClick}>
        <span>Select a Sign...</span>
      </button>
      <nav
        ref={dropdownRef}
        className={classNames(style.menu, {
          [style.active]: isActive
        })}
      >
        <ul>{Object.values(SIGNS).map((sign: SignInfo) => DropdownOption(sign))}</ul>
      </nav>
    </div>
  );
};
