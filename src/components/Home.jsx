import React from 'react'
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyWork from "./MyWork";

export default function Home () {
    return (
        <div>
            <AboutMe/>
            <MySkills/>
            <MyWork/>
        </div>
    );
}