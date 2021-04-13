import React from "react";
import './About.sass';

class About extends React.Component{

    goHomePage = () => {
        this.props.history.push('/');
    }

    render(){

        return (
            <div className="jumbotron bg-light">
                <div className="container">
                    <h1 className="main-title">About Page</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet, assumenda commodi ducimus,
                        earum est eum fugiat fugit in ipsum laborum magnam quidem vel?</p>
                    <hr/>
                    <button className="btn btn-primary" onClick={this.goHomePage}>Go Home Page</button>
                </div>
            </div>
        );

    }

}

export default About;
