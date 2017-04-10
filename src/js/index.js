'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';
import { Router, Route, browserHistory } from 'react-router'

require("../css/index.scss");

class Index extends Component {
  componentDidMount() {
    let node = ReactDOM.findDOMNode(this);
    TweenMax.from(node, 1, {y: 20, opacity: 0})
  }

  render() {
    return (
      <div>
        <h1 className="title">Hello World</h1>
      </div>
    );
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
    </Route>
  </Router>
, document.getElementById('root'));
