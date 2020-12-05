import React, { Component } from 'react';
import $ from 'jquery';

import HomePage from './components/homepage.js';
import BioPage from './components/biopage.js';
import PortfolioPage from './components/portfoliopage.js';
import SkillsPage from './components/skillspage.js';
import ContactPage from './components/contactpage.js';

import './assets/css/App.css';
import './assets/css/fonts.css';
import './assets/css/animations.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            displayPage: "Home",
            pageAnimation: "",
            hidePage: "",
            hideAnimation: ""
        }
        this.enterSite = this.enterSite.bind(this);
        this.goToBio = this.goToBio.bind(this);
        this.goToPortfolio = this.goToPortfolio.bind(this);
        this.goToSkills = this.goToSkills.bind(this);
        this.goToContact = this.goToContact.bind(this);
    }
    enterSite() {
        this.setState({
            displayPage: "Portfolio",
            pageAnimation: "moveTop",
            hidePage: "Home"
        });
    }
    goToPortfolio() {
        if(this.state.displayPage === "Portfolio"){

        } else {
            if(this.state.displayPage === "Home"){
                this.setState({
                    displayPage: "Portfolio",
                    pageAnimation: "moveTop",
                    hidePage: "Home"
                });
            } else {
                var hidePage = this.state.displayPage;
                this.setState({
                    displayPage: "Portfolio",
                    pageAnimation: "moveFromLeft",
                    hidePage: hidePage,
                    hideAnimation: "moveToRight"
                });
            }
        }
    }
    goToBio() {
        if(this.state.displayPage === "Bio"){

        } else {
            if(this.state.displayPage === "Portfolio"){
                this.setState({
                    pageAnimation: "moveFromRight",
                    hidePage: "Portfolio",
                    hideAnimation: "moveToLeft"
                });
            } else if (this.state.displayPage === "Home") {
                this.setState({
                    pageAnimation: "moveTop",
                    hidePage: "Home",
                    hideAnimation: "moveToLeft"
                });
            } else {
                var hidePage = this.state.displayPage;
                this.setState({
                    pageAnimation: "moveFromLeft",
                    hidePage: hidePage,
                    hideAnimation: "moveToRight"
                })
            }
            this.setState({
                displayPage: "Bio"
            });
        }
    }
    goToSkills() {
        if(this.state.displayPage === "Skills"){

        } else {
            if(this.state.displayPage === "Contact"){
                var hidePage = this.state.displayPage;
                this.setState({
                    pageAnimation: "moveFromLeft",
                    hidePage: hidePage,
                    hideAnimation: "moveToRight"
                });
            } else if (this.state.displayPage === "Home") {
                this.setState({
                    pageAnimation: "moveTop",
                    hidePage: "Home"
                });
            } else {
                hidePage = this.state.displayPage;
                this.setState({
                    pageAnimation: "moveFromRight",
                    hidePage: hidePage,
                    hideAnimation: "moveToLeft"

                })
            }
            this.setState({
                displayPage: "Skills"
            });
        }
    }
    goToContact() {
        if(this.state.displayPage === "Contact"){

        } else {
            if(this.state.displayPage === "Home"){
                this.setState({
                    displayPage: "Contact",
                    pageAnimation: "moveTop",
                    hidePage: "Home"
                });
            } else {
                var hidePage = this.state.displayPage; 
                this.setState({
                    displayPage: "Contact",
                    pageAnimation: "moveFromRight",
                    hidePage: hidePage,
                    hideAnimation: "moveToLeft"
                });
            }
        }
    }
    render() {
        return (
            <div className="App">
                <HomePage 
                    enterSite={this.enterSite}
                    displayPage={this.state.displayPage}
                    goToBio={this.goToBio}
                    goToPortfolio={this.goToPortfolio}
                    goToSkills={this.goToSkills}
                    goToContact={this.goToContact}
                    />
                <BioPage 
                    displayPage={this.state.displayPage}
                    pageAnimation={this.state.pageAnimation}
                    hidePage={this.state.hidePage}
                    hideAnimation={this.state.hideAnimation}/>
                <PortfolioPage
                    displayPage={this.state.displayPage}
                    pageAnimation={this.state.pageAnimation}
                    hidePage={this.state.hidePage}
                    hideAnimation={this.state.hideAnimation}/>
                <SkillsPage 
                    displayPage={this.state.displayPage}
                    pageAnimation={this.state.pageAnimation}
                    hidePage={this.state.hidePage}
                    hideAnimation={this.state.hideAnimation}/>
                <ContactPage 
                    displayPage={this.state.displayPage}
                    pageAnimation={this.state.pageAnimation}
                    hidePage={this.state.hidePage}
                    hideAnimation={this.state.hideAnimation}/>
            </div>
        )
    }
}

export default App;
