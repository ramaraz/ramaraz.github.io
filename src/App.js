import React, { useState } from 'react';

import NavHeader from './components/NavHeader'
import HeaderNav from './components/HeaderNav'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyWork from './components/MyWork'

import './App.css';
import './Uitilities.scss'

export default function App() {
    const [selectReport, setSelectReport]  = useState('');
    let ReportComponent;
    switch(selectReport) {
        case 'Home': ReportComponent = Home; break;
        case 'AboutMe' : ReportComponent = AboutMe; break;
        case 'MyWork': ReportComponent = MyWork; break;
        case 'MySkills' : ReportComponent = MySkills; break;
        default: ReportComponent = Home;
    }
  return (
    <div className="container">
       <Header />
        <HeaderNav selectReport={selectReport} setSelectReport={setSelectReport}/>
        <ReportComponent/>
    </div>
   );
}

