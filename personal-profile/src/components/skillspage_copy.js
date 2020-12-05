import React, { Component } from 'react';
import '../assets/css/skills.css';

class SkillsPage extends Component {
    constructor(){
            super();
            this.state = {
                data: null
            };
        }
    componentDidMount() {
        fetch('./data/skills.json').then(response => response.json()).then(data => this.setState({ data }));
    }
    render() {
        
        return(
            <div
                id="skillspage"
                className={"main-component " +(this.props.displayPage==="Skills" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Skills" ? (this.props.hideAnimation) : "")}>
                    <div className="component-content">
                    <div className="component-header">
                        <h1 className="font-lovelo text-uppercase text-center">Skills</h1>
                    </div>
                    <div className="component-body">
                        <div id="skills-container">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillsPage;