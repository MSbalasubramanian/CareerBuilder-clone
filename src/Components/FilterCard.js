import { React, useState } from 'react';

//Styles
import '../Styles/FilterCard.scss';

//Components
import FilterList from './FilterList';
import Button from './Button';

function FilterCard(props) {
  const [update, setUpdate] = useState(false);
  return (
    <section className="filterCard">
      <FilterList />
      <Button name="Filter jobs" bg={true} />
      <Button
        name="Cancel"
        bg={true}
        cancleOnClick={true}
        cancelFilter={Cancel}
      />
    </section>
  );

  function Cancel() {
    props.showfilterfn(update);
  }
}

export default FilterCard;

{
  /* <Plus width="10px" />
      <Minus width="10px" /> */
}
