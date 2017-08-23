var React = require('react');
var createReactClass = require('create-react-class');
var CategoryNames = require('./category.js');

var CategoryCol = createReactClass({

    render: function(){

        var cat = this.props.CategoryList;
        cat = cat.map(function(item, index){
        return(
              <CategoryNames key={index} categoryName={item} onSelect={this.props.onSelect}/>
            );
        }.bind(this));

        return(
          <div id="category-list">
            <h1>Category List</h1>
              <ul>
                  {cat}
              </ul>
          </div>
        );
    },


});
module.exports = CategoryCol;
