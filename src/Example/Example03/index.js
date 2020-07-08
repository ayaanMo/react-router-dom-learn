import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class Example03 extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <a href="/page2">a标签</a>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/page1">page1</Link></li>
                        <li><Link to="/page2">page2</Link></li>
                    </ul>
                </div>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/page1" render={(props) => {
                        return <Page1 {...props} />
                    }} />
                    <Route path="/page2" children={(props) => {
                        return <Page2 {...props} />
                    }} />
                </div>
            </Router>
        );
    }
}
class Home extends React.Component {
    render() {
        console.log(this.props)
        return <h1>Home</h1>
    }
}
function Page1(props) {
    console.log(props)
    return <h1>Page1</h1>
}
function Page2() {
    return <h1>Page2</h1>
}
