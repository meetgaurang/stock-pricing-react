import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { Summary } from './features/summary/Summary';
import { Log } from './features/log/Log';

function App() {
  return (
    <Container>
      <Row>
        <Col><Log /></Col>
        <Col><Summary /></Col>
      </Row>
    </Container>
  );
}

export default App;

