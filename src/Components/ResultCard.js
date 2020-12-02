import React from 'react';

//styles
import '../Styles/ResultCard.scss';

//images
import CompanyLogo from '../Assets/Result_logo.png';

//Svg
import { ReactComponent as Time } from '../Assets/time.svg';
import { ReactComponent as Office } from '../Assets/office.svg';
import { ReactComponent as Pin } from '../Assets/location.svg';
import { ReactComponent as Trunk } from '../Assets/trunk.svg';

function ResultCard(props) {
  return (
    <section className="resultcard">
      <h2>{props.heading}</h2>
      <div>
        <Time />
        <p>{props.date}</p>
      </div>
      <div>
        <div>
          <Office width="20px" height="20px" />
          <p>{props.company}</p>
        </div>
        <div>
          <Pin width="20px" height="20px" />
          <p>{props.location}</p>
        </div>
        <div>
          <Trunk width="20px" height="20px" />
          <p>{props.type}</p>
        </div>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <img src={CompanyLogo} alt="logo-compony" width="125px" />
      </div>
    </section>
  );
}

export default ResultCard;
