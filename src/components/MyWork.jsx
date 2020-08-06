import React from 'react'
import { Card} from 'react-bootstrap';
import './MyWork.scss'

export default function MyWork () {
    // noinspection LossyEncoding
    return (
            <div className="bg-color mtb plr">
                <h1 className="text-center">Recent Projects</h1>
                <Card className={'mbl'}>
                    <Card.Header as="h3" style={{color: 'salmon'}}>CLIENT: USAA(United Services Automobile Association) <br/>
                        <span className="text"><b>Location:</b> San Antonio, TX</span><br/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title as="h4" style={{color: 'salmon'}}>Job Role:UI Developer With React Js</Card.Title>
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
                        <span className={"text"}><b>Technologies Used:</b> HTML5, CSS3, SCSS, Javascript, React Js, Bootstrap, React Bootstrap, React Strap</span>
                    </Card.Body>
                    <Card.Footer>
                            <span className={'text'}> To visit website
                                <a target ='_blank' rel="noopener noreferrer" href={"https://www.usaa.com/"}>
                                    <button className={"button"}>Click Here</button>
                                </a>
                            </span>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h3" style={{color: 'salmon'}}>CLIENT: TD Ameritrade <br/>
                        <span className="text"><b>Location:</b> Columbia, MD</span><br/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title as="h4" style={{color: 'salmon'}}>Job Role: Front End /UI Developer With React Js</Card.Title>
                        <span className="span-text">Responsibilities: </span><br/>
                        <Card.Text>
                            <ul className='text'>
                                <li>Implemented Portfolio Section dropdown with various menu items like Dashboard, Positions, Cost Basis, Balances, Account Activity.</li>
                                <li>Implemented Responsive web design and used Media queries for the design to be compatible in all devices and to deal with CSS related issues on different devices like Mobile, Tablet, Desktop.</li>
                                <li>Implemented Single Sign On (SS0) feature into TDAX investor app.</li>
                                <li>Developed global header and footer in various pages like Dashboard, positions and account activity page by using JavaScript functionsRedesign go/fasgdna dashboard page</li>
                                <li>Implemented clickstream analysis to track the customer actions on the application to evaluate the areas of improvements.</li>
                                <li>To assist blind or low vision users by audibly speaking or displaying in Braille used JAWS (Job Access with Speech) as a screen reader</li>
                                <li>Used Jenkins pipelines and Maven automation builds for Continuous Integration/Continuous Delivery (CI/CD).</li>
                            </ul>
                        </Card.Text>
                        <span className={"text"}><b>Technologies Used:</b> HTML5, CSS3, SCSS, Javascript, React Js, Bootstrap, React Bootstrap, React Strap, Unit test, Enzyme, Jest, Webpack, Babel</span>
                    </Card.Body>
                    <Card.Footer>
                        <span className={'text'}> To visit website
                            <a target ='_blank'  rel="noopener noreferrer" href={"https://www.tdameritrade.com/home.page"}>
                                <button className={"button"}>Click Here</button>
                            </a>
                        </span>
                    </Card.Footer>
                </Card>

            </div>
            );
        }