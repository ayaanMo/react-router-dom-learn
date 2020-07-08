import React, { Component } from 'react';
import UserAPI from './api';
import { Link, Prompt } from 'react-router-dom';
class UserInfo extends Component {
    render() {
        console.log(this.props);

        const id = this.props.match.params.id;
        const user = UserAPI.get(
            id
        )
        if (!user) {
            return <div>对不起，没有找到对应的User</div>
        }
        return (
            <div>
                <h1>{user.name} (#{user.id})</h1>
                <h2>Position: {user.position}</h2>
                <Prompt message="您确定要离开该页面吗?" when={false} />
                <Prompt message={(location, action) => {
                    console.log(location)
                    return location.pathname.startsWith("/user") ? true : "您确定要离开该页面吗?"
                }} when={true} />
                <Link to='/user'>Back</Link>
            </div>
        );
    }
}

export default UserInfo;
