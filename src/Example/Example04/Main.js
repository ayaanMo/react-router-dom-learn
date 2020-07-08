import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import { Route, Redirect } from 'react-router-dom';
class Main extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Main;
