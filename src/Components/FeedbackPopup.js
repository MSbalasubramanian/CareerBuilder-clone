import { React, useState } from 'react';

//styles
import '../Styles/FeedbackPopup.scss';

//image
import Logo from '../Assets/logo.png';

//Svg
import { ReactComponent as Link } from '../Assets/external.svg';

import { ReactComponent as Ex } from '../Assets/x-popup.svg';

function FeedbackPopup(props) {
  const [clickClassList, setClickClassList] = useState(false);
  const [closePop, setClosePop] = useState(false);

  let dropDownLanguage = [
    'English',
    'Deutsch',
    'Espanol',
    'Espanol (American Latina)',
    'Francais',
    'Nederlands',
    'Svenska',
  ];
  let questions = [
    {
      question: 'What is your Favorite Language ?',
      answer: ['Python', 'Java', 'JavaScript', 'C', 'C++'],
    },
  ];

  return (
    <>
      (
      <section className="feedbackpopup">
        <div>
          <img src={Logo} alt="logo" width="225px" />
          <form>
            <select>
              {dropDownLanguage.map((lang, index) => (
                <option value={index}>{lang}</option>
              ))}
            </select>
          </form>
          <div></div>
        </div>
        <div>
          {questions.map((question, index) => (
            <>
              <h4>{question.question}</h4>
              <ul>
                {question.answer.map((answer, index) => (
                  <li key={index} onClick={ClickAdded}>
                    <a href="#">{answer}</a>
                  </li>
                ))}
              </ul>
            </>
          ))}
          <button>>></button>
        </div>
        <div>
          <a href="#">
            Powered by Qualtrics
            <span>
              <Link width="12px" height="12px" />
            </span>
          </a>
        </div>
        <div onClick={ClosePopupFN}>
          <Ex width="10px" height="10px" />
        </div>
      </section>
      )
    </>
  );

  function ClickAdded(e) {
    setClickClassList(true);
    e.currentTarget.className = 'bgPopup';
  }

  function ClosePopupFN() {
    props.closePopup(closePop);
  }
}

export default FeedbackPopup;
