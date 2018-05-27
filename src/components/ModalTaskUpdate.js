import React from 'react';
import { reduxForm, Field } from 'redux-form';

class ModalTaskUpdate extends React.Component {

  closeModal = e => {
    e.preventDefault();
    this.props.toggleModalTaskUpdate({ modalState: { state: 'close' } });
    this.props.reset();
  };

  saveUpdatedTask = id => (values) => {
    this.props.updateTask({ task: {id: id, ...values} });
    this.props.toggleModalTaskUpdate({ modalState: { state: 'close' } });
    this.props.reset();
  };

  render() {
    if (this.props.modalTaskUpdate.state === 'close') {
      return null;
    }
    const { taskId } = this.props.modalTaskUpdate;
    const task = this.props.tasks.filter(({ id }) => id === taskId)[0];
    this.props.loadTask({ task, });
    return(
      <div className="modal" style={{display: 'block'}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button onClick={this.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.props.handleSubmit(this.saveUpdatedTask(taskId))}>
              <div className="modal-body">
                <p>{ task.text }</p>
                <Field
                  type="text" 
                  required
                  component="input"
                  name="text"
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Save changes</button>
                <button onClick={this.closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>        
    );
  }
}

export default reduxForm({
  form: 'updateTask',
})(ModalTaskUpdate);
