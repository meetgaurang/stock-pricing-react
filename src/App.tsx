import React from 'react';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { Summary } from './features/summary/components/Summary';
import Log from './features/log/components/Log';

function App() {
  return (
      <Container style={{marginTop: '20px'}}>
        <Row>
          <Col><Log /></Col>
          <Col><Summary /></Col>
        </Row>
      </Container>
  );
}

export default App;

