// Router set up
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('../components/Main');
var About = require('../components/About');
var TodoApp = require('../components/TodoApp');

// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>
            <IndexRoute component={TodoApp} />
            <Route path='/about' header='About' component={About} />
        </Route>
    </Router>
);

module.exports = routes;