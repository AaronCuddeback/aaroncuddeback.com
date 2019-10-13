import React from 'react';
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Obfuscate from 'react-obfuscate';
import { FaEnvelopeO, FaTwitter, FaGithub } from 'react-icons/lib/fa/';
import Helmet from 'react-helmet';
import pmu-artisticink from '../images/pmu-artisticink.com.jpg';

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Portfolio" />

      <HeadlineWithFocus>
        Some of my <span>Projects</span>
      </HeadlineWithFocus>
      <ul>
        <li>
          <img src={require('../images/pmu-artisticink.com.jpg') } />
        </li>
      </ul>
    </div>
  );
};
