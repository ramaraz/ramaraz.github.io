import React from 'react';
import NavHeader from './components/NavHeader'
import Header from "./components/Header";
import './App.css';
import './Uitilities.scss'

function App() {
  return (
    <div className="container">
       <main>
           <Header />
            <NavHeader/>
       </main>
    </div>
   );
}

export default App;
