import React from 'react'
import './NavHeader.scss'
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyWork from './MyWork'
import Home from "./Home";
import { Tabs,Tab} from 'react-bootstrap';

export default function NavHeader () {
    return (
        <Tabs defaultActiveKey="home" className="nav-container-fluid navHeader" >
            <Tab eventKey="home" title="Home">
                <Home/>
            </Tab>
                <Tab eventKey="about" title="About">
                <AboutMe/>
            </Tab>
            <Tab eventKey="myskill" title="Skill Set">
                <MySkills />
            </Tab>
            <Tab eventKey="mywork" title="Portfolio">
                <MyWork />
            </Tab>
        </Tabs>
    )
}