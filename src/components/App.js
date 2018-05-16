import React from 'react';
import NewTaskForm from '../containers/NewTaskForm';
import TasksList from '../containers/TasksList';

class App extends React.Component {

  render() {
    return(
      <div className="col-5">
        <NewTaskForm />
        <TasksList />
      </div>
    );
  }

}

export default App;
