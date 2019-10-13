import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadlineWithFocus from '../components/HeadlineWithFocus';

const Index = props => {
  return (
    <div className="c-content-box">
      <h2>Hi, my name is Aaron</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        I'm a Software Developer
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline 
          c-content-box__subheadline--with-button
        `}
      >
        and I love coding.
      </h2>
    </div>
  );
};

export default Index;
