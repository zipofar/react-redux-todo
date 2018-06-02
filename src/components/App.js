import React from 'react';
import NewTaskForm from '../containers/NewTaskForm';
import TasksList from '../containers/TasksList';
import ModalInformer from './ModalInformer';

class App extends React.Component {

  render() {
		if (
				this.props.tasksFetchingState === 'failed'
				||
				this.props.taskAddingState === 'failed'
				||
				this.props.taskRemovingState === 'failed'
				||
				this.props.taskUpdatingState === 'failed'
				) {
			return(
				<ModalInformer title="Warning">
					<div className="alert alert-danger" role="alert">
						Server not available
					</div>
				</ModalInformer>
			);
		}
		
		if (
				this.props.tasksFetchingState === 'requested'
				||
				this.props.taskAddingState === 'requested'
				||
				this.props.taskRemovingState === 'requested'
				||
				this.props.taskUpdatingState === 'requested'
				) {
			return(
				<ModalInformer title="Loading">
					<div className="loader"></div>
				</ModalInformer>
			);
		}

    return(
      <div className="col-5">
        <NewTaskForm />
        <TasksList />
      </div>
    );
  }

}

export default App;
