import React from 'react';
import { reduxForm, Field } from 'redux-form';
import ModalInformer from '../components/ModalInformer';

class NewTaskForm extends React.Component {

  addTask = (values) => {
    this.props.addTask(values);
    this.props.reset();
  };
 

  render() {
		if (this.props.tasksFetchingState === 'failed') {
			return(
				<ModalInformer title="Warning">
					<div className="alert alert-danger" role="alert">
						Server not available
					</div>
				</ModalInformer>
			);
		}
		
		if (this.props.tasksFetchingState === 'requested') {
			return(
				<ModalInformer title="Loading">
					<div className="loader"></div>
				</ModalInformer>
			);
		}

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
            <button type="submit" className="btn btn-primary btn-sm" disabled={this.props.tasksFetchingState === 'requested'}>Add</button>
          </div>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'newTask',
})(NewTaskForm);
