import React from 'react';
import style from './style.css';
import { Header, SignDropdown } from 'app/components';

export const App = () => {
  return (
    <div className={style.normal}>
      <Header />
      <SignDropdown />
    </div>
  );
};
