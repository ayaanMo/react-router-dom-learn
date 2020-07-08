import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { uid: 123, title: "Index1" }, { uid: 456, title: "Index2" }, { uid: 789, title: "Index3" }
            ]
        }
        // 编程时重定向
        this.props.history.push('/home')
    }
    render() {
        return (
            <Fragment>
                {/* <Redirect to="/home" /> */}
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}><Link to={`/list/${item.uid}`}>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Index;
