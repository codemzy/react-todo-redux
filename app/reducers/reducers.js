export var searchTextReducer = (state = '', action) => {
    if (action.type === 'SET_SEARCH_TEXT') {
        return action.searchText;
    }
    return state;
};

export var showCompletedReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_SHOW_COMPLETED') {
        return !state; // returns true if was false and visa versa
    }
    return state;
};