import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
    return <h1>我是Index</h1>
}
function About() {
    return <h1>我是About</h1>
}
function Home() {
    return <h1>我是Home</h1>
}
class Example02 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/index">Index</Link></li>
                        <li><Link to="/about">Home</Link></li>
                    </ul>
                    <Route exact path="/" exact component={Home} />
                    <Route path="/index" component={Index} />
                    <Route path="/about" component={About} />
                </Router>
            </div>
        );
    }
}

export default Example02;
