var React = require('react');
var createReactClass = require('create-react-class');

var searchBar = createReactClass({
    render: function(){
        return(
                <div className="Search-bar" >
                    <form id = "search-form" onSubmit={this.handleSearch} >
                      <input type="text" required ref={(i) => this.newSearch = i} size="60" />
                      <input type="submit" value="Search" />
                    </form>
                </div>
        );
    },
    handleSearch: function(e){
        this.props.onSearch(this.newSearch.value);
    }

});

module.exports = searchBar;
