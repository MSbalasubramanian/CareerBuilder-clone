import { React, useState } from 'react';

//Styles
import '../Styles/PaginationCard.scss';

function PaginationCard(props) {
  const [childPage, setChildPage] = useState(0);

  return (
    <section className="paginationcard" onClick={BoomPage}>
      <small>{props.pageNum}</small>
    </section>
  );

  function BoomPage() {
    setChildPage(props.pageNum);
    props.pageB(childPage);
  }
}

export default PaginationCard;
