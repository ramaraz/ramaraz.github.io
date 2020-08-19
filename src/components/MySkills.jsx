import React from 'react'
import './MySkills.scss'
export default function MySkills() {
    return (
            <div className={ "row mtb"}>
                <div className={"col-md-6"}>
                    <h1>My Skills</h1>
                    <p className='p-description'><strong>Front End Technologies and Frameworks:</strong> HTML5, CSS3, SASS ,Javascript, JQuery, React JS, Redux, React Bootstrap, ReactStrap, Angular JS, Vue JS, Bootstrap, Semantic UI and Material UI </p>
                    <p className='p-description'><strong>Developer Tools:</strong>Chrome Dev Tools, GitLab CI/CD, GitHub, Jenkins, Webpack, NPM, JAWS(Job Access With Speech)</p>
                    <p className='p-description'><strong>Web Services:</strong>RESTful Web services, SOAP</p>
                    <p className='p-description'><strong>API's testing tools:</strong>Postman tool, Swagger UI</p>
                    <p className='p-description'><strong>IDE Tools/Text Editors:</strong>WebStorm, Atom, Visual Studio Code, Notepad++, Brackets, Sublime Text, Vim.</p>

                </div>
                <div className={"col-md-6"}>
                    <img src={"Front-end-technology.jpg"} alt="html" className={'image'} />
                </div>
            </div>
    );
}