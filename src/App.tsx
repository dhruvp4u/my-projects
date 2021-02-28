import React from 'react';
import './App.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FaArrowRight, FaBriefcase, FaCoffee, FaGraduationCap, FaRProject, FaTrophy} from "react-icons/all";
import { Link } from 'react-router-dom';

function Counters(){
    return (
        <Container fluid className={"counter"}>
            <Row>
                <Col>
                    <Card>
                        <Card.Body className={"counter-body"}>
                            <FaTrophy/>
                            <p className={"counter-title"}>Projects</p>
                            <p className={"counter-number"}>5</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body className={"counter-body"}>
                            <FaCoffee/>
                            <p className={"counter-title"}>Coffee</p>
                            <p className={"counter-number"}>&infin;</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body className={"counter-body"}>
                            <FaGraduationCap/>
                            <p className={"counter-title"}>Courses</p>
                            <p className={"counter-number"}>8</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body className={"counter-body"}>
                            <FaBriefcase/>
                            <p className={"counter-title"}>Experience</p>
                            <p className={"counter-number"}>2</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

function App() {
  return (
            <div>
                <div className="App">
                    <Container className={"home-textarea"}>
                        <Row>
                            <Col sm>
                                <h1 className={"main-heading"}>
                                    Hi, my name is DHRUV PADALIA
                                </h1>
                                <hr className={"horizontal-line"} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <p className={"sub-heading"}>
                                    I am a Master's student graduating in 2021 and looking for a SDE role.<br/>
                                    Please go through my projects to know more about me.
                                </p>
                            </Col>
                            <Col sm={4}>
                                <Link to={"/my-projects/project"}>
                                    <Button className={"main-button"} variant="outline-light">Projects</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Counters/>
          </div>

  );
}

export default App;
