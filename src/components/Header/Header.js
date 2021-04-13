import React from "react";
import './Header.sass'
import Navigation from "../Navigation/Navigation";


export default class Header extends React.Component{

    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            React Currency Convertor
                        </a>

                        {/*Navigation*/}
                        <Navigation/>
                    </div>
                </nav>
            </header>
        );
    }
}
