import { React, useState } from 'react';

//styles
import '../Styles/Sidebar.scss';

//Svg
import { ReactComponent as Cross } from '../Assets/x-sidebar.svg';
import { ReactComponent as Down } from '../Assets/caretDown.svg';

function Sidebar(props) {
  let Empolyers_array = [
    'Empolyers Sign In',
    'Empolyers',
    'Search Resumes',
    'Post Jobs',
  ];
  const [openSideMini, setOpenSideMini] = useState(false);
  return (
    <section className="sidebar ">
      <div>
        <h1>Hello.</h1>
        <Cross
          width="12px"
          height="12px"
          style={{ fill: 'var( --Secondary-color)' }}
          onClick={() => props.openFn()}
        />
      </div>
      <ul>
        <li className="active list-1">
          <a href="#">Find Jobs</a>
        </li>
        <li className="list-2">
          <a href="#">Create your Profile</a>
        </li>
        <li className="list-3">
          <a href="#">Recommendations</a>
        </li>
        <li className="list-4">
          <a href="#">Resources</a>
        </li>
        <li className="list-5">
          <a href="#">Sign In</a>
        </li>
        <li className="list-6">
          <a href="#">
            Employers <Down width="8px" height="8px" onClick={miniSide} />
            {openSideMini && (
              <ul className="sidemini">
                {Empolyers_array.map((Empolyer) => (
                  <li>
                    <a href="#">{Empolyer}</a>
                  </li>
                ))}
              </ul>
            )}
          </a>
        </li>
      </ul>
    </section>
  );

  function miniSide() {
    setOpenSideMini(!openSideMini);
  }
}

export default Sidebar;
