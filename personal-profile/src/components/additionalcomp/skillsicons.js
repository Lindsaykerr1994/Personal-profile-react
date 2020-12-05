import React, { Component } from 'react'; 
import * as Fa from 'react-icons/si';
import $ from 'jquery';

class SkillsIcons extends Component {
    constructor(){
        super();
        this.state = {
            classify: "Fa"
        };
        this.hoverIconColour = this.hoverIconColour.bind(this);
    }
    hoverIconColour(e) {
        var color = this.props.color;
        var icon = e.target;
        icon.style.color = color;
    }
    returnIconColour(e) {
        var icon = e.target;
        icon.style.color = "#a9a9a9";
    }
    render() {
        return (
            <div className="skills-item inline-block">
                <div className="skills-icon"
                    onMouseEnter={this.hoverIconColour}
                    onMouseLeave={this.returnIconColour}>
                    {React.createElement(Fa[this.props.logo])}
                </div>
                <div>{this.props.name}</div>
                <div>{this.props.color}</div>
            </div>
        )
    }
}

export default SkillsIcons;