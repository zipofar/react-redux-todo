import React from 'react';

export default class TasksList extends React.Component {

  renderList() {
    const { tasks } = this.props;

    return(
      <ul className="list-group">
        { tasks.map(task => {
          return(
            <li key={task.id} className="list-group-item d-flex justify-content-end">
              <button className="btn border-0 p-0 app-toggle-state mr-3">-</button>
              <div className="mr-auto">{task.text}</div>
              <button className="btn border-0 p-0 app-remove-task">x</button>
            </li>
          );                    
        }) }
      </ul>   
    ); 
  }

  renderFilter() {
    return(
      <div class="col-8 mt-3 d-flex justify-content-around">
        all
        <button class="btn btn-link border-0 p-0 app-filter-active">active</button>
        <button class="btn btn-link border-0 p-0 app-filter-finished">finished</button>
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
