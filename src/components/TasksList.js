import React from 'react';

const filters = [['all','all'], ['active','active'], ['finished','finished']];

export default class TasksList extends React.Component {

  state = { activeFilter: 'all' };

  changeFilter = state => (e) => {
    e.preventDefault();
    this.setState({ activeFilter: state });
  }

  toggleTaskState = id => (e) => {
    this.props.toggleTaskState({ id });
  }

  removeTask = id => (e) => {
    this.props.removeTask({ id, });
  }

  showUpdateTaskModal = id => (e) => {
  
  }

  renderList() {
    const { tasks } = this.props;

    return(
      <ul className="list-group">
        { tasks
          .filter(task => {
            return this.state.activeFilter === 'all' ? true : task.state === this.state.activeFilter
          })
          .map(task => {
          return(
            <li key={task.id} className="list-group-item d-flex justify-content-end">
              <button 
                onClick={this.toggleTaskState(task.id)}
                className="btn border-0 p-0 app-toggle-state mr-3"
              >
                -
              </button>
              <div className="mr-auto">
                {task.state === 'active' ? task.text : <s>{task.text}</s>}
              </div>
              <button
                onClick={this.removeTask(task.id)}
                className="btn btn-danger app-remove-task"
              >
              	del  
              </button>
			  <button onClick={this.showUpdateTaskModal(id)} className="btn btn-warning">edit</button>
            </li>
          );                    
        }) }
      </ul>   
    ); 
  }

  renderFilter() {
    return(
      <div className="col-8 mt-3 d-flex justify-content-around">
        { filters.map(([name, state]) => {
          if (state === this.state.activeFilter) {
            return name;
          }
          return(
            <button
              onClick={this.changeFilter(state)}
              key={state}
              className={'btn btn-link border-0 p-0 app-filter-'+name}
            >
              {name}
            </button>  
          );
        }) }
      </div>    
    );
  }

  render() {
    if (this.props.tasks.length === 0) {
      return null;
    }

    return(
      <div className="mt-3">
        { this.renderList() }
        { this.renderFilter() }
      </div>
    );
  }

}
