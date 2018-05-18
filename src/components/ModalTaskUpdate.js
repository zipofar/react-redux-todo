import React from 'react';

export default class ModalTaskUpdate extends React.Component {
  render() {
    console.log(this.props)
    if (this.props.modalTaskUpdate.state === 'close') {
      return null;
    }
    const { taskId } = this.props.modalTaskUpdate;
    const task = this.props.tasks.filter(({ id }) => id === taskId)[0];
    console.log(task)
    return(
      <div className="modal" style={{display: 'block'}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{ task.text }</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>        
    );
  }
}
