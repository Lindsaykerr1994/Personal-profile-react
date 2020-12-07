import React, { Component } from 'react'; 
import * as Si from 'react-icons/si';
import * as Gr from 'react-icons/gr';
import $ from 'jquery';


class SkillsIcons extends Component {
    constructor(){
        super();
        this.state = {
            
        };
        this.hoverIconColour = this.hoverIconColour.bind(this);
    }
    createIcon(libName, iconName) {
        let icon;
        if(libName==="Si"){
            icon = React.createElement(Si[iconName]);
        }
        if(libName==="Gr"){
            icon = React.createElement(Gr[iconName]);
        }
        return icon;
    }
    componentDidMount() {
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
                    {this.createIcon((this.props.lib),(this.props.logo))}
                </div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}

export default SkillsIcons;