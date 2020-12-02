import { React, useState } from 'react';

import '../Styles/Email.scss';

//Components
import Button from './Button';
import EmailCard from './EmailCard';

function Email() {
  const [openEmail, setOpenEmail] = useState(false);
  return (
    <section className="email">
      <div onClick={OpenMailBox}>
        <Button name="Email me jobs like these" bg={false} />
      </div>
      {openEmail && <EmailCard />}
    </section>
  );

  function OpenMailBox() {
    setOpenEmail(!openEmail);
  }
}

export default Email;
