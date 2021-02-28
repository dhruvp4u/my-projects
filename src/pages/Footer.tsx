import React from 'react';
import './Footer.css';
import {
    FaGithub,
    FaLinkedinIn,
    FaHackerrank,
    FaCode,
    FaRegUser
} from 'react-icons/fa'
import {Navbar} from "react-bootstrap";

function Footer() {
    return (
        <div className="Footer">
            <Navbar className={"footer-nav"}>
                <ul>
                    <li>
                        <a target={"_blank"} href={"https://github.com/dhruvp4u"}>
                            <FaGithub/>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href={"https://github.com/dhruvp4u"}>
                            <FaLinkedinIn/>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href={"http://dhruvpadalia.com/"}>
                            <FaRegUser/>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href={"https://www.hackerrank.com/padaliadhruv"}>
                            <FaHackerrank/>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href={"https://leetcode.com/padaliadhruv/"}>
                            <FaCode/>
                        </a>
                    </li>
                </ul>
            </Navbar>

            <div className={"footer-copyrights"}>
                <h5>Made with &hearts; by Dhruv Padalia</h5>
            </div>
        </div>
    );
}

export default Footer;