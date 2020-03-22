import React from 'react';
import Navbar from "./Components/nav";
import { Container, Col, Row } from "./Components/Grid";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid>
        <Row>
          <div className="quarter-col">
            <div id="large-logo-section">
              <div className="large-logo">
                H
              </div>
            </div>
          </div>
          <div className="three-quarters-col">
            <div className="main-image-section">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="nature" className="main-image"/>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
