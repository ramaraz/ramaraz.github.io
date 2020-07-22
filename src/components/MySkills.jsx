import React from 'react'
import './MySkills.scss'
export default function MySkills() {
    return (
            <div className={ "row mtb"}>
                <div className={"col-md-6"}>
                    <h1>My Skills</h1>
                    <p className='p-description'><strong>Front End Technologies:</strong> HTML 5, CSS 3, SASS ,Javascript, JQuery, React JS, Redux, React Bootstrap, ReactStrap, Angular JS, Vue JS, Bootstrap </p>
                    <p className='p-description'><strong>Dev Tools:</strong>Chrome developer tools, GitLab CI/CD, GitHub, Jenkins, Webpack, NPM</p>
                    <p className='p-description'><strong>IDE Tools/Text Editors:</strong>WebStorm, Atom, Visual Studio Code, Notepad++, Brackets, Sublime Text, Vim.</p>

                </div>
                <div className={"col-md-6"}>
                    <img src={"Front-end-technology.jpg"} alt="html" className={'image'} />
                </div>
            </div>
    );
}