import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vadim Isakov</h2>
        <p><a href="mailto:dev@iaotle.dev">dev@iaotle.dev</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Vadim.
        I am a <a href="https://vu.nl/">VU Amsterdam</a> graduate currently working for <a href="https://orangemason.com">OrangeMason</a> and doing my Masters&apos; Degree in Software Engineering.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Vadim Isakov <Link to="/">iaotle.dev</Link>.</p>
    </section>
  </section>
);

export default SideBar;
