import React, { Component } from 'react';
import Home from './Home';
import Index from './Index';
import About from './About';
/**
 * 原始写法 不用react-router
 */
class Example01 extends Component {
    constructor(props) {
        super(props)
        this.state = { route: window.location.hash.substr(1) };
    }
    setRoute = () => {
        this.setState({ route: window.location.hash.substr(1) })
    }
    componentDidMount() {
        window.addEventListener('hashchange', this.setRoute)
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.setRoute)
    }
    render() {
        let Child;
        switch (this.state.route) {
            case '/about':
                Child = About;
                break;
            case '/index':
                Child = Index;
                break;
            default:
                Child = Home;
                break;
        }
        return (
            <div>
                <h1>不使用 React Router</h1>
                <ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/index">Index</a></li>
                </ul>
                <Child />
            </div>
        );
    }
}

export default Example01;
