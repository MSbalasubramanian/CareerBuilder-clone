import { React, useState } from 'react';

//Styles
import '../Styles/Search.scss';

//Svg
import { ReactComponent as SearchMob } from '../Assets/search-mob.svg';

//Components
import Form from './Form';

function Search() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="search">
      <h1>Jobs and Vacancies</h1>
      <div className={`wrapper `} onClick={Open}>
        <SearchMob className={`search-mob `} />
      </div>
      {toggle && window.innerWidth <= 1000 && <Form />}
      <Form />
    </section>
  );

  function Open() {
    setToggle(!toggle);
  }
}

export default Search;
