import React, { Component } from 'react';
import '../assets/css/biography.css';

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
                        <div className="portrait-container inline-block">
                        </div>
                        <div className="bio-text inline-block">
                            My Name Is Lindsay, and I'm a cool guy! :)
                        </div>
                    </div>
            </div>
        )
    }
}

export default BioPage;