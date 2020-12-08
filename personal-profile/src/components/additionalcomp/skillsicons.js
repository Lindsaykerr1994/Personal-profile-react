import React, { Component } from 'react'; 
import * as Si from 'react-icons/si';
import * as Gr from 'react-icons/gr';


class SkillsIcons extends Component {
    constructor(){
        super();
        this.state = {
            toggle: false
        };
        this.toggleHover = this.toggleHover.bind(this);
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
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }
    render() {
        var linkStyle;
        if (this.state.hover) {
            linkStyle = {color: this.props.color}
        } else {
            linkStyle = {color: '#888'}
        }
        return (
            <div className="skills-item inline-block">
                <div className="skills-icon"
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                    style={linkStyle}>
                    {this.createIcon((this.props.lib),(this.props.logo))}
                </div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}

export default SkillsIcons;