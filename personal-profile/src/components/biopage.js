import React, { Component } from 'react';
import '../assets/css/biography.css';
import portrait from '../assets/media/bioport.png'; 

class BioPage extends Component {
    render() {
        return(
            <div
                id="biopage"
                className={"main-component " +(this.props.displayPage==="Bio" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Bio" ? (this.props.hideAnimation) : "") + (this.props.displayPage==="Bio"||this.props.hidePage==="Bio" ? "" : " display-none")}>
                    <div className="component-header">
                        <h1 className="font-lovelo text-uppercase text-center">Biography</h1>
                    </div>
                    <div
                        id="biography-body" 
                        className="component-body">
                        <img 
                            src={portrait}
                            alt="Portrait of Lindsay Kerr"
                            className="portrait-container" />
                            <div id="about-text"
                                className="bio-text">
                                <h2 className="text-header">About Me</h2>
                                <p>Super Cool Guy</p>
                            </div>
                            <div id="employment-text"
                                className="bio-text">
                                <h2 className="text-header">Employment</h2>
                                <p>Lots of Employment</p>
                            </div>
                            <div id="education-text"
                                className="bio-text">
                                <h2 className="text-header">Education</h2>
                                <p>Best Education</p>
                            </div>
                    </div>
            </div>
        )
    }
}

export default BioPage;