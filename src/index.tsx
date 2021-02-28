import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import About from "./pages/about/About";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Footer from "./pages/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./pages/projects/Project";
import Web from "./pages/projects/web/Web";
import Mobile from "./pages/projects/mobile/Mobile";
import Desktop from "./pages/projects/desktop/Desktop";
import Software from "./pages/projects/software/Software";

const projects = require('./pages/projects/projects.json');
const createSubMenu = ( (projects:any) => {
    let submenu:any = [];

    projects["project-types"].map( (each_type:any) => {
        let type_heading = each_type["type-name"];
        let url = each_type["url"];

        submenu.push(
            <NavDropdown.Item><Link to={url}>{type_heading}</Link></NavDropdown.Item>
        );

    });

    return submenu;
});

ReactDOM.render(
  <BrowserRouter>
      <div>
          <Navbar className={"navigation-bar"}>
              <Navbar.Brand><Link to={"/my-projects"}>Dhruv Padalia</Link></Navbar.Brand>
              <Nav className="mr-auto">
                  <Nav.Link className={"nav-title"}><Link to={"/my-projects/"}>Home</Link></Nav.Link>
                  <Nav.Link><Link to={"/my-projects/about"}>About</Link></Nav.Link>
                  <NavDropdown title="Projects" id="basic-nav-dropdown">
                      {createSubMenu(projects)}
                  </NavDropdown>
              </Nav>
          </Navbar>

          <Switch>
              <Route exact path="/my-projects/">
                  <App />
              </Route>
              <Route path="/my-projects/about">
                  <About />
              </Route>
              <Route path="/my-projects/project">
                  <Project />
              </Route>
              <Route path="/my-projects/web-projects">
                  <Web />
              </Route>
              <Route path="/my-projects/mobile-projects">
                  <Mobile />
              </Route>
              <Route path="/my-projects/desktop-projects">
                  <Desktop />
              </Route>
              <Route path="/my-projects/software-projects">
                  <Software />
              </Route>
          </Switch>

          <Footer/>
      </div>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
