import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Navbar from './Navbar.jsx';

const AppLayout = ({ children }) => (
  <Container fluid className="app-container">
    <Row><Navbar /></Row>
    <Row className="app-content">{children}</Row>
    <Button className="app-button" />
  </Container>
);

export default AppLayout;
