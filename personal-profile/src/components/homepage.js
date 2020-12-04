import React, { Component } from 'react';
import $ from 'jquery';

import NavBar from './additionalcomp/navbar.js';

import '../assets/css/homepage.css';

$(document).ready(function() {
    var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function(e) {
        $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
});

class HomePage extends Component {
    
    
    render() {
        return(
            <div 
                id="homepage"
                className={"main-component " + (this.props.displayPage==="Home" ? "" : "homepage-hide")}>
                    <div className="scene">
                        <div className="scene-background"></div>
                        <div className="magic"></div>
                    </div>
                    <div className="portal"
                        onClick={this.props.enterSite}>
                        <div className="home-logo-container">
                        </div>
                        <div className="home-title-container text-center">
                            <h1>
                                <span className="showonhover-header font-200">&lt;h1&gt;</span>
                                <span className="font-lovelo">Lindsay Kerr</span>
                                <span className="showonhover-header font-200">&lt;&#x0002F;h1&gt;</span>
                            </h1>
                            <h2>
                                <span className="showonhover-header font-200">&lt;h2&gt;</span>
                                <span className="font-lovelo">Web Developer</span>
                                <span className="showonhover-header font-200">&lt;&#x0002F;h2&gt;</span>
                            </h2>
                        </div>
                    </div>
                    <NavBar 
                        goToBio={this.props.goToBio}
                        goToPortfolio={this.props.goToPortfolio}
                        goToSkills={this.props.goToSkills}
                        goToContact={this.props.goToContact}
                    />
            </div>
        )
    }
}

export default HomePage;