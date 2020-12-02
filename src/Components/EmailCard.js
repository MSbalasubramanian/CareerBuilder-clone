import React from 'react';

//styles
import '../Styles/EmailCard.scss';

//Svg
import { ReactComponent as Info } from '../Assets/info.svg';

//Components
import Button from './Button';

function EmailCard() {
  return (
    <section className="emailcard">
      <h1>
        <strong>Email me jobs like these</strong>
      </h1>
      <form>
        <input type="email" placeholder="e.g user@email.com" required />
      </form>
      <Button name="Subscribe" bg={true} />
      <div>
        <span>
          <Info />
        </span>
        <p>
          If you click this button, we will send daily emails featuring similar
          jobs.
        </p>
        <p> You can unsubscribe at any time.</p>
      </div>
    </section>
  );
}

export default EmailCard;
