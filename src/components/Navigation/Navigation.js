import React from "react";
import './Navigation.sass';
import {NavLink} from 'react-router-dom';


export default class Navigation extends React.Component{

    render() {
        return (
            <ul className="navbar-nav navigation" >
                <li className="nav-item navigation__item">
                    <NavLink
                        to='/'
                        exact
                        className="nav-link navigation__link"
                        activeClassName="myactive"
                    >Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to='/about'
                        className="nav-link navigation__link"
                        activeClassName="myactive"
                    >About</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to='/contacts'
                        className="nav-link navigation__link"
                        activeClassName="myactive"
                    >Contacts</NavLink>
                </li>
            </ul>
        );
    }
}
