import React from 'react';
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Obfuscate from 'react-obfuscate';
import { FaEnvelopeO, FaTwitter, FaGithub } from 'react-icons/lib/fa/';
import Helmet from 'react-helmet';

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Portfolio" />

      <HeadlineWithFocus>
        Some of my <span>Projects</span>
      </HeadlineWithFocus>
      <ul>
        <li>
          <img src="./images/pmu-artisticink.com.jpg" alt="Artistic Ink" />
        </li>
      </ul>
    </div>
  );
};
