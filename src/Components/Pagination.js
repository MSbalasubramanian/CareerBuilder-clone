import React from 'react';

//styles
import '../Styles/Pagination.scss';

//components
import PaginationCard from './PaginationCard';

function Pagination(props) {
  return (
    <section className="pagination">
      {props.pageArr.map((_, index) => (
        <PaginationCard
          pageNum={index + 1}
          pageB={(value) => props.click(value)}
        />
      ))}
    </section>
  );
}

export default Pagination;
