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
          <Col xs="12" sm="5">
            <h1>Artistic Ink</h1>
            {
              <img
                src={require('../images/artisticbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Artistic Ink is a permanent cosmetics company which provides all
              types of permanent cosmetic services.
              <br />
              <br />
              <a href="https://pmu-artisticink.com/" target="_blank">
                <center>View Site</center>
              </a>
            </p>
          </Col>
          <Col xs="12" sm="5">
            <h1>Rear Light Bar</h1>
            {
              <img
                src={require('../images/rlbbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Rear Light Bar is an offroad lightbar company which distributes
              custom lighting for your 4x4 vehicle.
              <br />
              <br />
              <a href="https://rlbstore.com/" target="_blank">
                <center>View Site</center>
              </a>
            </p>
            
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="5">
            <br />
            <h1>CannaCura</h1>
            {
              <img
                src={require('../images/cannacurabanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
            <br />
              An Ecommerce website dedicated to CBD products, it is a custom
              Wordpress design.
              <br />
              <br />
              <a href="https://cannacura.net/" target="_blank">
                <center>View Site</center>
              </a>
            </p>
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>Flavolution</h1>
            {
              <img
                src={require('../images/flavolutionbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              A wonderful health company who sells healthy spices for the
              fitness community.
              <br />
              <br />
              <a href="https://theflavolution.com/" target="_blank">
                <center>View Site</center>
              </a>
            </p>
            
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="5">
            <br />
            <h1>Hangtown Range</h1>
            {
              <img
                src={require('../images/hangtownbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              An website designed for a Shooting and Archery Range.
              <br />
              <br />
              <a href="https://hangtownrange.com/" target="_blank">
                <center>View Site</center>
              </a>
            </p>

           
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>Norcal Drone Solutions</h1>
            {
              <img
                src={require('../images/dronebanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              A website built and designed for a Northern California Drone
              company.
              <br />
              <br />
              <a href="https://hirenorcaldrones.com/" target="_blank">
                <center>View Site</center>
              </a>
            </p>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};
