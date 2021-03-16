import React from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import About from './About'
import Top from './Top'

class Home extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/top">TOP</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/about" component={About}/>
              <Route path="/top" component={Top}/>
            </Switch>
          </>
        </HashRouter>
      </>
    );
  }
}

export default Home;