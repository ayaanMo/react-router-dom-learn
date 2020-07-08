import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Index from './Pages/Index';
// import List from './Pages/List';
// import Home from './Pages/Home';
import "./index.css";
import Index from './Components/index'
import Video from './Components/Video'
import WorkPlace from './Components/WorkPlace'
function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftContainer">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">博客首页</Link></li>
                        <li><Link to="/video">视频教程</Link></li>
                        <li><Link to="/workplace">职场技能</Link></li>
                    </ul>
                </div>
                <div className="rightContainer">
                    <Route path="/" exact component={Index} />
                    <Route path="/video" component={Video} />
                    <Route path="/workplace" component={WorkPlace} />
                </div>
            </div>
            {/*   <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home" component={Home} /> */}
        </Router>
    )
}
export default AppRouter;
