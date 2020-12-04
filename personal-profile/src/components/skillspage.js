import React, { Component } from 'react';

class SkillsPage extends Component {
    render() {
        return(
            <div
                id="skillspage"
                className={"main-component " +(this.props.displayPage==="Skills" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Skills" ? (this.props.hideAnimation) : "")}>
                    <div className="component-header">
                        <h1 className="font-lovelo text-uppercase">Skills</h1>
                    </div>
                    <div className="component-content">

                    </div>
            </div>
        )
    }
}

export default SkillsPage;