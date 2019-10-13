import React from 'react';
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Obfuscate from 'react-obfuscate';
import { FaEnvelopeO, FaTwitter, FaGithub } from 'react-icons/lib/fa/';
import Helmet from 'react-helmet';
import artisticink from '../images/pmu-artisticink.com.2ad8bf9b.jpg';

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Portfolio" />

      <HeadlineWithFocus>
        Some of my <span>Projects</span>
      </HeadlineWithFocus>
      <ul>
        <li>
          <img src={require(artisticink)} />
        </li>
      </ul>
    </div>
  );
};
