import React from 'react';

//Components
import Navbar from './Navbar';
import Search from './Search';

//styles
import '../Styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <Navbar />
      <Search />
    </header>
  );
}

export default Header;
