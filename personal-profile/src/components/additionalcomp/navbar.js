import React, { Component } from 'react';

import '../../assets/css/navbar.css';


class NavBar extends Component {
    
    render() {
        return(
            <div className="navbar">
                <div className="nav-items text-center text-white text-uppercase font-lovelo">
                    <div className="inline-block hvr-shutter-out-horizontal"
                        onClick={this.props.goToPortfolio}>
                        Portfolio
                    </div>
                    <div className="inline-block hvr-shutter-out-horizontal"
                        onClick={this.props.goToBio}>
                        Bio
                    </div>
                    <div className="inline-block hvr-shutter-out-horizontal"
                        onClick={this.props.goToSkills}>
                        Skills
                    </div>
                    <div className="inline-block hvr-shutter-out-horizontal"
                        onClick={this.props.goToContact}>
                        Contact
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;