import React, { Component } from 'react';

class ContactPage extends Component {
    render() {
        return(
            <div
                id="contactpage" 
                className={"main-component " +(this.props.displayPage==="Contact" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Contact" ? (this.props.hideAnimation) : "") + (this.props.displayPage==="Contact"||this.props.hidePage==="Contact" ? "" : " display-none")}>
                    <div className="component-header">
                        <h1 className="font-lovelo text-center text-uppercase">Contact</h1>
                    </div>
                    <div className="component-body">

                    </div>
            </div>
        )
    }
}

export default ContactPage;