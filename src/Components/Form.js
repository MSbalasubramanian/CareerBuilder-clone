import React from 'react';

import { ReactComponent as Nav } from '../Assets/compass.svg';
import { ReactComponent as Circle } from '../Assets/circle.svg';
import { ReactComponent as Search } from '../Assets/search-mob.svg';

//Component
import Button from './Button.js';

function Form() {
  return (
    <form action="#" autoComplete="off" name="SearchForm">
      <fieldset>
        <Search className="search-form" width="24px" height="20px" />
        <input type="text" name="job-search" placeholder="eg.Programmer" />
      </fieldset>
      <fieldset>
        <Nav className="nav-form" width="24px" height="20px" />
        <input type="text" name="location" placeholder="eg.Mumbai" />
        <Circle
          className="circler-form"
          width="32px"
          height="32px"
          onClick={location}
        />
      </fieldset>
      <Button name="Find Jobs" bg={true} />
    </form>
  );

  function location() {
    navigator.geolocation.getCurrentPosition(console.log, console.log);
  }
}
export default Form;
