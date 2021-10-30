import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import './App.css';
import Summary from './features/summary/components/Summary';
import Log from './features/log/components/Log';

function App() {
  return (
      <Container style={{marginTop: '20px'}}>
        <Row>
          <Col md={5} lg={5} xl={5} xxl={5}><Log /></Col>
          <Col md={7} lg={7} xl={7} xxl={7}><Summary /></Col>
        </Row>
      </Container>
  );
}

export default App;

