import React from 'react';
import Layout from "./components/hoc/Layout/Layout";
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

export default class App extends React.Component{

    render(){
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contacts' render={() => <Contacts title={'Contacts Page'}/>}/>
                    <Redirect to='/'/>
                </Switch>
            </Layout>
        );
    }

}

