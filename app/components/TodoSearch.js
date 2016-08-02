var React = require('react');

class TodoSearch extends React.Component {
    
    _handleSearch() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    }
    
    render() {
        return (
            <div className="todowrap__header">
                <div className="row">
                    <div className="small-9 columns">
                        <input type="search" className="todo-search-input" placeholder="Search..." ref="searchText" onChange={this._handleSearch.bind(this)} />
                    </div>
                    <div className="small-3 columns text-right">
                        <label className="my-switch">
                          <input type="checkbox" ref="showCompleted" onChange={this._handleSearch.bind(this)} />
                          <div className="my-slider"></div>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = TodoSearch;