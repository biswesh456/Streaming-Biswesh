// onSearch Function required(to search ..... look at searchBar.js)
// categoryList required
// onSelect Function required to move to different pages(look at category.js)
// vidsrc,vidtype
// require jquery
var React = require('react');
var ReactDOM = require('react-dom');

var CategoryCol = require('./categoryCol.js');
var SearchBar = require('./searchBar.js');
var Video = require('./Video.js')

class UserComponent extends React.Component {

    render() {
      return(
        <div className='User-body' id='User-body'>
          <div>
            <SearchBar onSearch={this.props.onSearch}/>
          </div>
          <div>
            <div className='category-tab'>
              <CategoryCol onSelect={this.props.onSelect} CategoryList={this.props.categoryList} />
            </div>
            <div>
              <Video width="600" height="400" vidsrc={this.props.vidsrc} vidtype={this.props.vidtype} vidID="main-vid" />
            </div>
            <div id="description">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      );
    }

};

// ReactDOM.render(<UserComponent />, document.getElementById('user-wrapper'));
module.exports = UserComponent;
