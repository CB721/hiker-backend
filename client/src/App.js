import React, { useState } from 'react';
import Navbar from "./Components/nav";
import { Container, Col, Row } from "./Components/Grid";
import Input from "./Components/input";
import Button from "./Components/button";
import Result from "./Components/result";
import Fade from 'react-reveal/Fade';
import './App.scss';

function App() {
  const [location, setLocation] = useState("");
  const [miles, setMiles] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [results, setResults] = useState([]);

  function handleInputChange(event) {
    switch (event.target.name) {
      case "your location":
        setLocation(event.target.value);
        break;
      case "maximum miles":
        setMiles(event.target.value);
        break;
      case "difficulty selection":
        setDifficulty(event.target.value);
        break;
      default:
        return;
    }
  }
  function handleFormSubmit() {
    console.log(location, miles, difficulty);
  }
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col size="3">
            <div id="large-logo-section">
              <div className="large-logo">
                H
              </div>
            </div>
          </Col>
          <Col size="9">
            <div className="main-image-section">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="nature" className="main-image" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <div className="search-section">
              <Row>
                <Col size="10">
                  <Row>
                    <Input
                      name="your location"
                      type="text"
                      value={location}
                      disable={false}
                      handleInputChange={handleInputChange}
                    />
                    <Input
                      name="maximum miles"
                      type="number"
                      value={miles}
                      disable={false}
                      handleInputChange={handleInputChange}
                    />
                    <Col size="md-3">
                      <div className="difficulty-section">
                        <p className="cust-input-name">
                          Difficulty Level
                        </p>
                        <select
                          className="difficulty-selection"
                          id="difficulty"
                          defaultValue="select-one"
                          onChange={handleInputChange}
                          name="difficulty selection"
                        >
                          <option value="select-one" disabled={true}>Select A Level</option>
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="Hard">Hard</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col size="2">
                  <div className="search-button">
                    <Button
                      text="Find Hike"
                      disable={false}
                      action={handleFormSubmit}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            {results.length ? (
              <Fade left cascade>
                <div className="results">

                </div>
              </Fade>
            ) : (<div />)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
