import React, { Component } from 'react';
import $ from 'jquery';

import '../assets/css/homepage.css';
import '../assets/css/navbar.css';

$(document).ready(function() {
    var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function(e) {
        $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
});

class HomePage extends Component {
    
    goToBio() {
        console.log("show Bio");
    }
    goToPortfolio() {
        console.log("show Portfolio");
    }
    goToSkills() {
        console.log("show Skills");
    }
    goToContact() {
        console.log("show Contact");
    }
    render() {
        return(
            <div 
                id="homepage"
                className="main-component">
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
                    <div className="navbar">
                        <div className="nav-items text-center text-white text-uppercase font-lovelo">
                            <div className="inline-block hvr-shutter-out-horizontal"
                                onClick={this.goToBio}>
                                Bio
                            </div>
                            <div className="inline-block hvr-shutter-out-horizontal"
                                onClick={this.goToPortfolio}>
                                Portfolio
                            </div>
                            <div className="inline-block hvr-shutter-out-horizontal"
                                onClick={this.goToSkills}>
                                Skills
                            </div>
                            <div className="inline-block hvr-shutter-out-horizontal"
                                onClick={this.goToContact}>
                                Contact
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default HomePage;