import { React, useState } from 'react';

import '../Styles/Button.scss';

function Button(props) {
  const [displayNone, setDisplayNone] = useState(false);
  return (
    <button
      className={`button-form  ${props.bg ? 'buttonBg' : 'buttonOutline'} ${
        displayNone ? 'd-n' : ''
      }`}
      onClick={openFilterBtn}
    >
      {props.name}
    </button>
  );

  function openFilterBtn() {
    if (props.formOnClick) {
      props.openFilter();
      setDisplayNone(true);
    } else if (props.filterOnclick) {
      props.openInc();
    } else if (props.cancleOnClick) {
      props.cancelFilter();
    }
  }
}

export default Button;
