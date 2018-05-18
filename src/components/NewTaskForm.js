import React from 'react';
import { reduxForm, Field } from 'redux-form';

class NewTaskForm extends React.Component {

  addTask = (values) => {
    this.props.addTask(values);
    this.props.reset();
  };
 

  render() {
    return(
      <div className="col-5">
        <form onSubmit={this.props.handleSubmit(this.addTask)} className="form-inline">
          <div className="form-group mx-sm-3">
            <Field
              type="text" 
              required
              component="input"
              name="text"
            />
            <button type="submit" className="btn btn-primary btn-sm">Add</button>
          </div>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'newTask',
})(NewTaskForm);
