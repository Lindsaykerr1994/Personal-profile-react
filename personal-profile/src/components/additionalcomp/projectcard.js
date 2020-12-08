import React, { Component } from 'react';

class ProjectCard extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }
    render() {
        return(
            <div className="project-card inline-block">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={this.props.img} alt={(this.props.title) + " Title Photo"}/>
                        <div className="card-title">
                            {this.props.title}
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-title">
                            {this.props.title}
                        </div>
                        <div className="card-desc">
                            <p>{this.props.desc}</p>
                        </div>
                        <div className="card-tags">
                            {this.props.languages.map((language, i) => {
                                return(
                                    <span className="lang-tag inline-block" key={i}>
                                        <p>{language}</p>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;