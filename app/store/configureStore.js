var redux = require('redux');
// reducers
var {searchTextReducer, showCompletedReducer, todosReducer} = require('./../reducers/reducers.js');

export var configure = () => {
    // combine the reducers
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });
    
    // set up the store
    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    
    // return the store
    return store;
};
