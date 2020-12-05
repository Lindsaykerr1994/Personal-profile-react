import React, { Component } from 'react';

class PortfolioPage extends Component {
    render() {
        return(
            <div
                id="portfoliopage"
                className={"main-component " +(this.props.displayPage==="Portfolio" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Portfolio" ? (this.props.hideAnimation) : "")}>
                <div className="component-content">
                    <div className="component-header">
                        <h1 className="font-lovelo text-uppercase text-center">Portfolio</h1>
                    </div>
                    <div className="component-body">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioPage;