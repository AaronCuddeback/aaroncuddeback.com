import React from 'react';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
require('typeface-exo');
require('typeface-roboto');

import ActionButtonContainer from '../containers/ActionButtonContainer';
import RemarkScreenContainer from '../containers/RemarkScreenContainer';

import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';

Sentry.init({
  dsn: 'https://f934348251e7423d8f91a55ed05dd7be@sentry.io/1779649'
});

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="l-page-wrapper">
        <Helmet
          title="Aaron Cuddeback"
          meta={[
            {
              name: 'description',
              content: `I build web interfaces using: JavaScript, ES6, VueJS, HTML/CSS, Bootstrap,  React, Gatsby, Webpack ...`
            }
          ]}
        />

        <div
          className={`l-page-container ${this.props.remarkScreenisActive &&
            'is-blurred'}`}
        >
          <MainHeader />
          <main className="l-main">{this.props.children()}</main>
          <MainFooter />
        </div>
        {(this.props.location.pathname === '/' ||
          this.props.location.pathname === '/contact/') && (
          <ActionButtonContainer
            locationPathName={this.props.location.pathname}
          />
        )}
        <RemarkScreenContainer
          locationPathName={this.props.location.pathname}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { remarkScreenisActive: state.remarkScreen.isActive };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
