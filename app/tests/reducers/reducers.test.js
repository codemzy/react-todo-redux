var expect = require('expect');

var reducers = require('../../reducers/reducers.js');

describe('Reducers', () => {
    it('should exist', () => {
        expect(reducers).toExist();
    });
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer('', action);
            expect(res).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(false, action);
            expect(res).toEqual(true);
        });
    });
});