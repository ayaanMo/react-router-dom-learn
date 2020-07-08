import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Money from './workplace/Money';
import GetUp from './workplace/GetUp';

class WorkPlace extends Component {
    render() {
        return (
            <div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/workplace/money">Money</Link></li>
                        <li><Link to="/workplace/getup">GetUp</Link></li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div><h3>程序员工作空间</h3></div>
                    <Route path="/workplace/money" component={Money} />
                    <Route path="/workplace/getup" component={GetUp} />
                </div>
            </div>
        );
    }
}

export default WorkPlace;
