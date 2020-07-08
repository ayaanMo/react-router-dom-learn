import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Index from './Index';
import Login from './Login';
class Approuter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router basename="/test">
                <Switch>
                    <Route path="/home" exact component={Index} />
                    {/* <Route path={["/users/:id", "/user"]} component={Index} /> */}
                    <Route path="/user" component={Index} exact />
                    <Route path="/user/:id" component={Index} exact />
                    <Route path="/login" component={Login} exact />
                    {/*  <Redirect exact to={{ pathname: "/home", search: "aa=dsdsd", state: { referrer: "currentLocation" } }} /> */}
                    <Redirect exact from='/' to="home" />
                </Switch>
            </Router>
        );
    }
}

export default Approuter;
