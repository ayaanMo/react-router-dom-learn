import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
    }
    logout = () => {
        console.log(this.props)
        localStorage.clear();
        this.props.history.push("/login")
    }
    render() {
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className='navbar-heading'>
                            <div className='navbar-brand'>React-Router</div>
                        </div>
                        <div className='nav navbar-nav'>
                            <li style={{ cursor: 'pointer' }}><Link to='/'>首页</Link></li>
                            <li style={{ cursor: 'pointer' }}><Link to='/user'>个人中心</Link></li>
                        </div>
                        <span onClick={this.logout} style={{ float: "right", textAlign: "center", lineHeight: "3.3", color: "#9d9d9d", cursor: "pointer" }}>登出</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
