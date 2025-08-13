import React from 'react';
import Logo from '../../../assets/Logo.svg';
import { Button } from '../Button/Button';
import './Header.scss';
import type { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ variant = 'desktop' }) => {
  return (
    <header className={`header header--${variant}`}>
      <div className="container header__container">
        <div className="header__logo">
          <img src={Logo} alt="TestTask Logo" />
        </div>
        <nav className="header__nav">
          <Button variant="normal">Users</Button>
          <Button variant="normal">Sign up</Button>
        </nav>
      </div>
    </header>
  );
};
