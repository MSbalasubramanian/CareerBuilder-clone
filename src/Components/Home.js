import React from 'react';

//Componets
import Filter from './Filter';
import Email from './Email';
import Result from './Result';

//Styles
import '../Styles/Home.scss';

function Home() {
  return (
    <section className="home">
      <Filter />
      <Email />
      <Result />
    </section>
  );
}

export default Home;
