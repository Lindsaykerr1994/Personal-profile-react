import React, { Component } from 'react';

import HomePage from './components/homepage.js';
import BioPage from './components/biopage.js';
import SkillsPage from './components/skillspage.js';
import ContactPage from './components/contactpage.js';

import './assets/css/App.css';
import './assets/css/fonts.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            displayPage: "Home"
        }
    }
    enterSite() {
        console.log("entering site");
    }
    render() {
        return (
            <div className="App">
                <HomePage 
                    enterSite={this.enterSite}/>
                <BioPage />
                <SkillsPage />
                <ContactPage />
            </div>
        )
    }
}

export default App;
