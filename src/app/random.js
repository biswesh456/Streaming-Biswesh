var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var U = require('./user.js');
var A = require('./admin.js');
var Us = createReactClass({

    render: function(){
      return(
        <div id='qwe'>

          <U  onSelect={this.onSelect} onSearch={this.onSearch} categoryList = {['b', 'Networking', 'Cryptography', 'Data Structures']} vidsrc="../app/oneDir.mp4" vidtype="video/mp4" description="Kiss you by One direction"/>
        </div>
      );
    },

    onSearch: function(item){

      console.log(item);
    },
    onSelect: function(item){

        console.log(item);

    },
    onSubmitAdmin: function(list){
        console.log(list);
    }

});

ReactDOM.render(<Us />, document.getElementById('user-wrapper'));

// <U  onSelect={this.onSelect} onSearch={this.onSearch} categoryList = {['b', 'Networking', 'Cryptography', 'Data Structures']} vidsrc="../app/oneDir.mp4" vidtype="video/mp4" />
// <A onSubmitAdmin = {this.onSubmitAdmin} categoryList={['Data Science', 'Networking', 'Cryptography', 'Data Structures']}/>
