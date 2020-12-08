import React, { Component } from 'react';
import ProjectCard from './additionalcomp/projectcard';
import '../assets/css/portfolio.css';
import  projectdata from '../assets/data/portfolio.json';

class PortfolioPage extends Component {
    constructor(){
            super();
            this.state = {
                data: []
            };
        }
    componentDidMount() {
        var dataJSON = projectdata.Projects;
        this.setState({
            data: dataJSON
        });
    }
    render() {
        return(
            <div
                id="portfoliopage"
                className={"main-component " +(this.props.displayPage==="Portfolio" ? (this.props.pageAnimation) : "") + (this.props.hidePage==="Portfolio" ? (this.props.hideAnimation) : "") + (this.props.displayPage==="Portfolio"||this.props.hidePage==="Potrfolio" ? "" : " display-none")}>
                <div className="component-header">
                    <h1 className="font-lovelo text-uppercase text-center">Portfolio</h1>
                </div>
                <div
                    id="portfolio-body" 
                    className="component-body">
                    <div className="portfolio-card">
                        {(this.state.data).map((details, i) => {
                            return(
                                <ProjectCard 
                                    key = {i}
                                    title = {details.title}
                                    img = {details.img}
                                    link = {details.link}
                                    desc = {details.description}
                                    languages = {details.languages}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioPage;