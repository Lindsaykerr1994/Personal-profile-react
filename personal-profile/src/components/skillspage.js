import React, { Component } from 'react';
import SkillsIcons from './additionalcomp/skillsicons';
import '../assets/css/skills.css';
import data from '../data/skills.json';


class SkillsPage extends Component {
    constructor(){
            super();
            this.state = {
                
            };
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
                            {data.Skills.map((details, i) => {
                                return(
                                    <SkillsIcons 
                                        key = {i}
                                        name = {details.name}
                                        logo = {details.logo}
                                        color = {details.color}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillsPage;