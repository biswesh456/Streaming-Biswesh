var React = require('react');
var createReactClass = require('create-react-class');

var CategoryNames = createReactClass({
    render: function(){
        return(
            <li>
              <span className="category-name" onClick={this.handleSelect}>{this.props.categoryName}</span>
            </li>
        );
    },
    handleSelect: function(){
        this.props.onSelect(this.props.categoryName);
    }
});

module.exports = CategoryNames;
