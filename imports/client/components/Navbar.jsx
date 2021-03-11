import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// TODO: move it to one file
import {
  HouseFill,
  MapFill,
  PersonLinesFill,
  UpcScan,
  MenuUp,
} from 'react-bootstrap-icons';

const sandColor = 'rgb(194,178,128)';
const Navbar = () => (
  <Container fluid className="header-container">
    <Row className="header-row">
      <Col variant="secondary" className="centered icon">
        <HouseFill color={sandColor} size={30} />
      </Col>
      <Col className="centered icon">
        <Link to="/map">
          <MapFill color={sandColor} size={30} />
        </Link>
      </Col>
      <Col className="centered icon">
        <PersonLinesFill color={sandColor} size={30} />
      </Col>
      <Col className="centered icon">
        <UpcScan color={sandColor} size={30} />
      </Col>
      <Col className="centered icon">
        <MenuUp color={sandColor} size={30} />
      </Col>
    </Row>
  </Container>
);

export default Navbar;
