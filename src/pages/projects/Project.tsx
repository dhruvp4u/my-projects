import React from 'react';
import './Project.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const projects = require('./projects.json');
const createProjectTypes = (projects:any) => {
    let project_types:any = [];

    projects["project-types"].map( (each_type:any) => {
        let type_heading = each_type["type-name"];
        let sub_heading = each_type["sub-heading"];
        let description = each_type["description"];
        let url = each_type["url"];
        project_types.push(
            <Col xs={12} md={4}>
                <Card bg="primary" text="white">
                    <Card.Header>{type_heading}</Card.Header>
                    <Card.Body>
                        <Card.Title>{sub_heading}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={url}>
                            <Button className={"main-button"} variant="outline-light">view projects</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    });

    return project_types;
}

function Project() {
    return (
        <div className="Project">
            <Container fluid>
                <Row>
                    { createProjectTypes(projects) }
                </Row>
            </Container>
        </div>
    );
}

export default Project;