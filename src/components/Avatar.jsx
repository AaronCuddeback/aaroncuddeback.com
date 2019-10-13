import React from 'react';
import logo40 from './../images/logo40.jpg';
import logo24 from './../images/logo24.jpg';

const Avatar = props => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img
      src={props.modifierClasses === 'c-avatar--as-author' ? logo40 : logo40}
      alt="aaroncuddeback.com"
    />
  </div>
);

export default Avatar;
