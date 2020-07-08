import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import UserInfo from './UserInfo';
import Home from './Home';
import UserList from './UserList';

class Index extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        let userToken = localStorage.getItem("userInfo") || "";
        if (!userToken) {
            props.history.push("/login")
        }
    }
    renderChildren = () => {
        let pathName = this.props.match.path || "";
        let child = null;
        switch (pathName) {
            case "/":
                child = <Home {...this.props} />
                break;
            case "/user":
                child = <UserList {...this.props} />
                break;
            case "/user/:id":
                child = <UserInfo {...this.props} />
                break;
            default:
                child = <Home {...this.props} />
                break;
        }
        return child
    }
    render() {
        return (
            <div>
                <Header />
                <Main>
                    {this.renderChildren()}
                </Main>
            </div>
        );
    }
}

export default Index;
