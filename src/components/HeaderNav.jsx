import React from 'react'
import './HeaderNav.scss'

export default function HeaderNav({selectReport, setSelectReport}) {
    return (
        <div className={"navHeader"}>
            <ul className="nav nav-tabs">
                <li className={selectReport === 'Home' &&  'active'} onClick={() => setSelectReport('Home')}>Home</li>
                <li className={selectReport === 'AboutMe' &&  'active'} onClick={() => setSelectReport('AboutMe')}>About</li>
                <li className={selectReport === 'MySkills' &&  'active'} onClick={() => setSelectReport('MySkills')}>Skill Set</li>
                <li className={selectReport === 'MyWork' &&  'active'} onClick={() => setSelectReport('MyWork')}>Portfolio</li>
            </ul>
        </div>
    )
}