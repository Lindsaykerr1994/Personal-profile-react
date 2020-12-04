import React, { Component } from 'react';

class PortfolioPage extends Component {
    render() {
        return(
            <div
                id="portfoliopage"
                className={"main-component " +(this.props.displayPage==="Portfolio" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Portfolio" ? (this.props.hideAnimation) : "")}>
                <div className="component-header">
                    <h1 className="font-lovelo text-uppercase">Portfolio</h1>
                </div>
                <div className="component-content">

                </div>
            </div>
        )
    }
}

export default PortfolioPage;