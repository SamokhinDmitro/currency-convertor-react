import React from "react";
import './Contacts.sass';

const Contacts = props => {
    return (
        <div className="jumbotron bg-light">
            <div className="container">
                <h1 className="main-title">{props.title}</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet, assumenda commodi ducimus,
                    earum est eum fugiat fugit in ipsum laborum magnam quidem vel?</p>
            </div>
        </div>
    );


}

export default Contacts;
