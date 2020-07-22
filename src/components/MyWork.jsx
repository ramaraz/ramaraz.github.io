import React from 'react'
import { Card} from 'react-bootstrap';
import './MyWork.scss'

export default function MyWork () {
    // noinspection LossyEncoding
    return (
            <div className="bg-color mtb plr">
                <h1 className="text-center">Recent Projects</h1>
                <Card>
                    <Card.Header as="h3" style={{color: 'salmon'}}>CLIENT: USAA(United Services Automobile Association) <br/>
                        <span className="text"><b>Location:</b> San Antonio, TX</span><br/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title as="h4" style={{color: 'salmon'}}>Job Role: Front End /UI Developer With React Js</Card.Title>
                        <span className="span-text">Responsibilities: </span><br/>
                        <Card.Text>
                            <ul className='text'>
                                <li>Created various Asana applications and Implement CI/CD in Gitlab</li>
                                <li>Individually contributed in creating various Front door forms in Asana Dashboard</li>
                                <li>Created Custom fields in Asana Dashboard</li>
                                <li>Consumed RESTFul services from Asana API's(https://developers.asana.com/docs)</li>
                                <li>Redesign go/fasgdna dashboard page</li>
                                <li>Converted static pages to dynamic web pages</li>
                                <li>Translated design from Tableau reports to interactive web application for effective data visualization.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={"text"}><b>Technologies Used:</b> HTML5, CSS3, SCSS, Javascript, React Js, Bootstrap, React Bootstrap, React Strap</Card.Footer>
                </Card>

                {/*<div>*/}
                {/*    <h4>CLIENT:TD AMERITRADE </h4>*/}
                {/*    <span className="span-text">Location: Columbia ,MD</span>*/}
                {/*    <h5>Job Role:Front End /UI Developer With React Js</h5>*/}
                {/*    <p className="p-description">Responsibilities:*/}
                {/*        <ul>*/}
                {/*            <li>Developed Responsive Web Application</li>*/}
                {/*            <li></li>*/}
                {/*        </ul>*/}
                {/*    </p>*/}
                {/*    <h5>Technologies Used</h5>*/}
                {/*</div>*/}

            </div>
            );
        }