import React from 'react';
import './About.css';
import {Button, Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import Profile_Pic from "../../images/about-profile.jpeg"
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="About">
            <Card>
                <Card.Body>
                    <Card.Title className={"about-title"}>About Me</Card.Title>
                    <hr className={"horizontal-line"} />
                    <Card.Text>
                        <Row>
                            <Col xs={12} md={4}>
                                <Image src={Profile_Pic} fluid></Image>
                            </Col>
                            <Col xs={12} md={8}>
                                <h3 className={"about-name"}>Software Engineer</h3>
                                <h5 className={"about-heading"}>Strong in design and integration problem-solving
                                    skills. Expert in Web, Mobile, Desktop, Software, Machine Learning, Big Data
                                    and Distributed Systems Developer.</h5>
                                <Row>
                                    <Col>
                                        <ul className={"about-moreinfo"}>
                                            <li>
                                                <p>Age: <span>{new Date().getFullYear() - 1995}</span></p>
                                            </li>
                                            <li>
                                                <p>University: <span>Colorado State University</span></p>
                                            </li>
                                            <li>
                                                <p>Email Address: <span>dhruv.padalia@colostate.edu</span></p>
                                            </li>
                                            <li>
                                                <p>Hobbies: <span>Travel, Manga and Anime</span></p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul className={"about-moreinfo"}>
                                            <li>
                                                <p>City: <span>Fort Collins, Co</span></p>
                                            </li>
                                            <li>
                                                <p>Degree: <span>Master's</span></p>
                                            </li>
                                            <li>
                                                <p>Job Status: <span>Open for new opportunities</span></p>
                                            </li>
                                            <li>
                                                <p>Recently Into: <span>DevOps</span></p>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Text>
                    <hr className={"horizontal-line"} />
                    <Link to={"/my-projects/project"}><Button className={"about-button"} variant="outline-light">Projects</Button></Link>
                    <Button href={"http://dhruvpadalia.com/"} target={"_blank"} className={"about-button"} variant="outline-light">My Portfolio</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;