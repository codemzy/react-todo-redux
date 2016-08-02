var expect = require('expect');

var actions = require('../../actions/actions.js');

describe('Actions', () => {
    it('should exist', () => {
        expect(actions).toExist();
    });
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
});