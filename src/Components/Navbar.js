import { React, useState } from 'react';

//styles
import '../Styles/Navbar.scss';

//Svg
import { ReactComponent as Menu } from '../Assets/menu.svg';

//Image
import Logo from '../Assets/logo.png';

//Components
import Sidebar from './Sidebar';

function Navbar() {
  const [openSide, setOpenSide] = useState(false);

  return (
    <nav className="nav">
      <Menu className="ham" onClick={Open_sideBar} />
      <img src={Logo} height="30px" width="160px" alt="logo" />
      {openSide && window.innerWidth <= 1000 && (
        <Sidebar openFn={Open_sideBar} openSide={openSide} />
      )}
      {window.innerWidth > 1000 && (
        <Sidebar openFn={Open_sideBar} openSide={openSide} />
      )}
    </nav>
  );
  function Open_sideBar() {
    setOpenSide(!openSide);
  }
}

export default Navbar;
