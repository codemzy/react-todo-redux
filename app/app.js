var React = require('react');
var ReactDOM = require('react-dom');

// Load foundation
require('foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load own css
require('./styles/styles.scss');

// REDUX
// Load actions
var actions = require('./actions/actions');
// Load store
var store = require('./store/configureStore').configure();
// Subscribe to changes
store.subscribe(() => {
    console.log('New state', store.getState());
});

// test actions
store.dispatch(actions.addTodo('New todo test from app.js'));
store.dispatch(actions.setSearchText('test'));
store.dispatch(actions.toggleShowCompleted());

// routes
var routes = require('./config/router');

ReactDOM.render(routes, document.getElementById('app'));