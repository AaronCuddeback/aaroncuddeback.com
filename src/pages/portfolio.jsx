import React from 'react';
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Obfuscate from 'react-obfuscate';
import { FaEnvelopeO, FaTwitter, FaGithub } from 'react-icons/lib/fa/';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Portfolio" />
      <HeadlineWithFocus>
        Some of my recent <span>Projects</span>
      </HeadlineWithFocus>
      <br />
      <Container>
        <Row>
          <Col xs="6" sm="5">
            <h1>Artistic Ink</h1>
            <p>
              Artistic Ink is a permanent cosmetics company which provides all
              types of permanent cosmetic services.
              <br />
              <a href="https://pmu-artisticink.com/" target="_blank">
                View Site
              </a>
            </p>
            {
              <img
                src={require('../images/pmu-artisticink.jpg')}
                width={320}
                height={900}
                mode="fit"
              />
            }
          </Col>
          <Col xs="6" sm="5">
            <h1>Rear Light Bar</h1>
            <p>
              Rear Light Bar is an offroad lightbar company which distributes
              custom lighting for your 4x4 vehicle.
              <br />
              <a href="https://rlbstore.com/" target="_blank">
                View Site
              </a>
            </p>
            {
              <img
                src={require('../images/rlbstore-min.jpg')}
                width={320}
                height={900}
                mode="fit"
              />
            }
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="5">
            <br />
            <h1>CannaCura</h1>
            <p>
              An Ecommerce website dedicated to CBD products, it is a custom
              Wordpress design.
              <br />
              <a href="https://cannacura.net/" target="_blank">
                View Site
              </a>
            </p>
            {
              <img
                src={require('../images/CannaCura.jpg')}
                width={320}
                height={900}
                mode="fit"
              />
            }
          </Col>
          <Col xs="6" sm="5">
            <br />
            <h1>Flavolution</h1>
            <p>
              A wonderful health company who sells healthy spices for the
              fitness community.
              <br />
              <a href="https://theflavolution.com/" target="_blank">
                View Site
              </a>
            </p>
            {
              <img
                src={require('../images/Flavolution.gif')}
                width={320}
                height={900}
                mode="fit"
              />
            }
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="5">
            <br />
            <h1>Hangtown Range</h1>
            <p>
              An website designed for a Shooting and Archery Range.
              <br />
              <a href="https://hangtownrange.com/" target="_blank">
                View Site
              </a>
            </p>

            {
              <img
                src={require('../images/hangtownRange.jpg')}
                width={320}
                height={1000}
                mode="fit"
              />
            }
          </Col>
          <Col xs="6" sm="5">
            <br />
            <h1>Norcal Drone Solutions</h1>
            <p>
              A website built and designed for a Northern California Drone
              company.
              <br />
              <a href="https://hirenorcaldrones.com/" target="_blank">
                View Site
              </a>
            </p>
            {
              <img
                src={require('../images/hirenorcaldrones.gif')}
                width={320}
                height={900}
                mode="fit"
              />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};
