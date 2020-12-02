import { React, useState } from 'react';

//Styles
import '../Styles/Filter.scss';

//Components
import Button from './Button';
import FilterCard from './FilterCard';

function Filter() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <section className="filter">
      {!showFilter && window.innerWidth <= 1000 && (
        <Button
          openFilter={openFilter}
          name="Show filters"
          bg={true}
          formOnClick={true}
        />
      )}

      {showFilter && (
        <FilterCard
          showfilter={showFilter}
          showfilterfn={(value) => setShowFilter(value)}
        />
      )}

      <FilterCard
        showfilter={showFilter}
        showfilterfn={(value) => setShowFilter(value)}
      />
    </section>
  );

  function openFilter() {
    setShowFilter(true);
  }
}

export default Filter;
