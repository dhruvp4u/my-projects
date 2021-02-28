import React from 'react';
import './Web.css';
import {Button, Card, Col, Container, ProgressBar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const web_projects = require('./web-projects.json');

const createProjects = (web_projects:any) => {
    let projects:any = [];

    web_projects["projects"].map( (each_project:any) => {
        let project_name = each_project["project-name"];
        let project_description = each_project["description"];
        let project_type = each_project["project-type"];
        let project_technologies = each_project["technologies"];
        let lines_of_code = each_project["lines-of-code"];
        let project_shared = each_project["shared-on-github"];
        let project_url = "";
        if(project_shared){
            project_url = each_project["github-url"];
        }
        let project_live = each_project["has-live-link"];
        let project_live_link = "";
        if(project_live){
            project_live_link = each_project["live-link"];
        }

        projects.push(
            <Col xs={12} md={6} lg={4}>
                <Card bg="primary" text="white">
                    <Card.Header>{project_name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {project_description}
                            <br/><br/>
                            <h6>Project Type: <span style={{fontWeight: "normal"}}>{project_type}</span></h6>
                            <h6>Technologies Used: <span style={{fontWeight: "normal"}}>{project_technologies}</span></h6>
                            <h6>Lines of Code: <span style={{fontWeight: "normal"}}>{lines_of_code}</span></h6>
                        </Card.Text>
                        <Row>
                            <Col xs={12} md={12} lg={6}>
                                {(project_shared) ?
                                    (
                                        <Button href={project_url} target={"_blank"} className={"main-button"} variant="outline-light">view on github</Button>
                                    ):
                                    ("")
                                }
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                {(project_live) ?
                                    (
                                        <Button href={project_live_link} target={"_blank"} className={"main-button"} variant="outline-light">view project</Button>
                                    ):
                                    ("")
                                }
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        );
    })

    return projects;
}

const createSkills = (web_projects:any) => {
    let skills:any = [];

    web_projects["skills"].map( (each_skill:any) => {
        let skill_name = each_skill["skill-name"];
        let skill_expertise = each_skill["expertise"];
        skills.push(
            <Col xs={12} md={4}>
                <ul className={"web-skills-moreinfo"}>
                    <li>
                        <p>{skill_name}
                            <span>
                                <ProgressBar now={skill_expertise} />
                            </span>
                        </p>
                    </li>
                </ul>
            </Col>
        )
    })

    return skills;
}

function WebSkills() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card bg="primary" text="white">
                        <Card.Header>MY SKILLS</Card.Header>
                        <Card.Body>
                            <Card.Title style={{textTransform: "uppercase"}}>
                                I am a qualified web developer adept with
                                back-end, front-end skills. I have completed 4 web
                                projects.
                            </Card.Title>
                            <Card.Text>
                                <Row>

                                    {createSkills(web_projects)}

                                </Row>
                            </Card.Text>
                            <Link to={"/web-projects"}>
                                <Button className={"main-button"} variant="outline-light">Get My Web Resume</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

function Web() {

    return (
        <div className="Web">
           <WebSkills />

           <Container fluid>
               <Row>
                   {createProjects(web_projects)}
               </Row>
           </Container>
        </div>
    );
}

export default Web;