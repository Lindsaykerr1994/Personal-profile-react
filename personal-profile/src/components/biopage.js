import React, { Component } from 'react';

class BioPage extends Component {
    render() {
        return(
            <div
                id="biopage"
                className={"main-component " +(this.props.displayPage==="Bio" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Bio" ? (this.props.hideAnimation) : "")}>
                    <div className="component-header">
                        <h1 className="font-lovelo text-uppercase">Biography</h1>
                    </div>
                    <div className="component-content">

                    </div>
            </div>
        )
    }
}

export default BioPage;