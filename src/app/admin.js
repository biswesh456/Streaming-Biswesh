// onSubmitAdmin function required for work with given input
var React = require('react');
var ReactDOM = require('react-dom');

class AdminComponent extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        changeCategoryDropDown : true,
      };
    }

    render(){
      return(
              <div className="admin-page">
                <div id='addNewCategory'>
                  <label type="text" value="addCategory">Add Category </label>
                  <input type="text" className="newCategoryInput" required ref={(i) => this.newCategory = i} size="60" placeholder="Add Category" />
                  <button value="Add" onClick={this.addNewCategory.bind(this)}>Add</button>
                </div>
                <form id = "admin-form" onClick={this.showCategory.bind(this)} onSubmit={this.handleAdmin.bind(this)} >
                  <label type="text" value="URL-label">URL: </label>
                  <input type="text" className="adminInput" required ref={(i) => this.URL = i} size="60" placeholder="URL" />
                  <br />
                  <label type="text" value="videoFormat-label">Video Format: </label>
                  <input type="text" className="adminInput" required ref={(i) => this.videoFormat = i} size="60" placeholder="Video Format" />
                  <br />
                  <label type="text" value="professor-label">Professor: </label>
                  <input type="text" className="adminInput" ref={(i) => this.professor = i} size="60" placeholder="Professor Name" />
                  <br />
                  <label type="text" value="category-label">Category: </label>
                  <select id='categoryDropDown' required ref={(i) => this.Category = i}></select>
                  <br />
                  <label type="text" value="description">Description: </label>
                  <input type="text" className="adminInput" ref={(i) => this.description = i} size="60" placeholder="Professor Name" />
                  <br />
                  <input type="submit" value="submit" />
                </form>

              </div>
      );
    }

    addNewCategory(){

      this.props.categoryList.push(this.newCategory.value);
      this.setState({changeCategoryDropDown : true});
    }
    showCategory(){
      var select = document.getElementById('categoryDropDown');
      if(this.state.changeCategoryDropDown){
        for (var i = 0; i<this.props.categoryList.length; i++){
          var option = this.props.categoryList[i];
          select.options[i] = new Option(option,option);
        }
        this.setState({changeCategoryDropDown : false});
      }
    }

    handleAdmin(){

      var returnList = {
        category: this.Category.value,
        URL: this.URL.value,
        videoFormat: this.videoFormat.value,
        professor: this.professor.value,
        description: this.description.value
      };
      return(
              this.props.onSubmitAdmin(returnList)
      )
    }
};

// ReactDOM.render(<AdminComponent />, document.getElementById('admin-wrapper'));
module.exports = AdminComponent;
