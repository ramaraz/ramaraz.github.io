import React from 'react'

import Home from './Home'
import AboutMe from './AboutMe'
import MySkills from "./MySkills"
import MyWork  from './MyWork'

import './HeaderNav.scss'

export default function HeaderNav({selectReport, setSelectReport}) {
    return (
        <div className={"navHeader"}>
            <ul className="nav nav-tabs">
                <li className={selectReport === 'Home' &&  'active'} onClick={() => setSelectReport('Home')}>Home</li>
                <li className={selectReport === 'AboutMe' &&  'active'} onClick={() => setSelectReport('AboutMe')}>AboutMe</li>
                <li className={selectReport === 'MySkills' &&  'active'} onClick={() => setSelectReport('MySkills')}>MySkills</li>
                <li className={selectReport === 'MyWork' &&  'active'} onClick={() => setSelectReport('MyWork')}>MyWork</li>
            </ul>
        </div>
    )
}