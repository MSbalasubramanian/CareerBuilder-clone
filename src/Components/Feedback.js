import { React, useState } from 'react';

//styles
import '../Styles/Feedback.scss';

//components
import FeedbackPopup from './FeedbackPopup';

function Feeback() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="feedback" onClick={OpenPopUp}>
      <p>Feedback</p>
      {popupOpen && (
        <FeedbackPopup
          openpop={popupOpen}
          closePopup={(value) => OpenPopUp(value)}
        />
      )}
    </section>
  );

  function OpenPopUp() {
    setPopupOpen(!popupOpen);
  }
}

export default Feeback;
