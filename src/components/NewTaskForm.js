import React from 'react';

export default class NewTaskForm extends React.Component {

  updateText = (e) => {
      this.props.updateNewTaskText({ text: e.target.value });
  };

  addTask = (e) => {
      e.preventDefault();
      this.props.addTask({ text: this.props.newTaskText });
  };
 

  render() {
    return(
      <div className="col-5">
        <form onSubmit={this.addTask} className="form-inline">
          <div className="form-group mx-sm-3">
            <input
              onChange={this.updateText} 
              type="text" 
              required 
              value={this.props.newTaskText}
            />
            <button type="submit" className="btn btn-primary btn-sm">Add</button>
          </div>
        </form>
      </div>
    );
  }

}
