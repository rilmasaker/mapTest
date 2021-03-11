import React from 'react';
import { Meteor } from 'meteor/meteor';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            {' '}
            <h1>Welcome Jakub</h1>
          </Col>

        </Row>
        <Row>
          <Col sm={12}>
            {' '}
            <Button
              variant="secondary"
              shape="round"
              onClick={() => {
           
              }}
            >
              Logout
            </Button>

          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Home;
