import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.user = React.createRef();
        this.password = React.createRef();
    }
    onSubmitForm = () => {
        let userName = this.refs.user.value || "";
        let password = this.refs.password.value || "";
        if (userName === "admin") {
            if (password === "123456") {
                localStorage.setItem("userInfo", `${userName}-${password}`)
                this.props.history.push("/home")
            }
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref="user" /><br />
                <input type="password" ref="password" /><br />
                <button type="button" onClick={this.onSubmitForm}>提交</button>
            </div>
        );
    }
}

export default Login;
