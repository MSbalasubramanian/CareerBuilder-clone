import React from 'react';

import '../Styles/Footer.scss';

//svg
import { ReactComponent as Fb } from '../Assets/facebook.svg';
import { ReactComponent as Lin } from '../Assets/linkedin.svg';
import { ReactComponent as Tw } from '../Assets/twitter.svg';

function Footer() {
  let EasyLink = [
    'Browse All Jobs',
    'Search By Location',
    'Job Categories',
    'Jobs by Company',
    'Add your Resume',
  ];

  let EasyLinkLarge = [
    {
      heading: 'Job seekers',
      links: EasyLink,
    },
    {
      heading: 'Employers',
      links: ['Search Resumes', 'Post jobs', 'Blog Link > Blog for hr'],
    },
    {
      heading: 'Legal',
      links: ['Terms & conditions', 'Privacy Policy'],
    },
    {
      heading: 'CareerBuilder',
      links: [
        'About us',
        'Express Trade Towers 2 unit no 3401, 4th floor noida, Up 201301 India',
      ],
    },
  ];
  return (
    <footer className="footer">
      <div>
        <p>Need Help?</p>
        <a href="#">Contact Us</a>
      </div>
      {window.innerWidth < 1000 ? (
        <>
          <ul>
            {EasyLink.map((list, index) => (
              <li>
                <a href="#" key={index}>
                  {list}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </>
      ) : (
        <section className="footer-links">
          {EasyLinkLarge.map((link) => (
            <div>
              <h1>{link.heading.toUpperCase()}</h1>
              <ul>
                {link.links.map((li, ind) => (
                  <li>
                    <a key={ind} href="#">
                      {li}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h1>SOCIAL</h1>
            <ul>
              <li>
                <a href="#">
                  <Fb width="30px" height="30px" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Tw width="30px" height="30px" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Lin width="30px" height="30px" />
                </a>
              </li>
            </ul>
          </div>

          <h1>2020CareerBuilder,LIC.All rights reserved</h1>
        </section>
      )}
    </footer>
  );
}

export default Footer;
